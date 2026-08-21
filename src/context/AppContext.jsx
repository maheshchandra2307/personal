import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { en } from '../i18n/en';
import { te } from '../i18n/te';

const AppContext = createContext(null);

const dictionaries = { en, te };
const LANG_STORAGE_KEY = 'ap-bill-lang';

function getByPath(obj, path) {
  return path.split('.').reduce((acc, part) => acc?.[part], obj);
}

function interpolate(str, vars) {
  if (!vars) return str;
  return String(str).replace(/\{\{(\w+)\}\}/g, (_, key) =>
    vars[key] == null ? '' : String(vars[key])
  );
}

function readStoredLang() {
  if (typeof window === 'undefined') return 'en';
  try {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    return stored === 'te' || stored === 'en' ? stored : 'en';
  } catch {
    return 'en';
  }
}

export function AppProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [lang, setLangState] = useState(readStoredLang);

  useEffect(() => {
    document.documentElement.lang = lang === 'te' ? 'te' : 'en';
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      /* ignore quota / private mode */
    }
  }, [lang]);

  const setLang = useCallback((next) => {
    setLangState(next === 'te' ? 'te' : 'en');
  }, []);

  const messages = dictionaries[lang] || en;

  const t = useCallback(
    (path, vars) => {
      const raw = getByPath(messages, path) ?? getByPath(en, path);
      if (typeof raw !== 'string') return path;
      return interpolate(raw, vars);
    },
    [messages]
  );

  const tList = useCallback(
    (path) => {
      const raw = getByPath(messages, path) ?? getByPath(en, path);
      return Array.isArray(raw) ? raw : [];
    },
    [messages]
  );

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () =>
        setTheme((current) => (current === 'light' ? 'dark' : 'light')),
      lang,
      setLang,
      t,
      tList,
      locale: lang === 'te' ? 'te-IN' : 'en-IN',
    }),
    [theme, lang, setLang, t, tList]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n() {
  const { lang, setLang, t, tList, locale } = useAppContext();
  return { lang, setLang, t, tList, locale };
}

export default AppContext;
