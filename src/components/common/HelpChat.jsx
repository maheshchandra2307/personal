//use the command when next update the excel file npm run convert:tariff
import { useEffect, useRef, useState } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import {
  CHAT_QUICK_CANONICAL,
  CHAT_QUICK_REPLY_IDS,
  getChatReply,
} from '../../constants/chatFaq';
import { useI18n } from '../../context/AppContext';
import { cn } from '../../utils';

function BotIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <rect x="11" y="3" width="2" height="3" rx="1" />
      <circle cx="12" cy="2.6" r="1.4" />
      <rect x="5" y="8" width="14" height="11" rx="3" />
      <rect x="2.2" y="11.5" width="2.2" height="4" rx="1.1" />
      <rect x="19.6" y="11.5" width="2.2" height="4" rx="1.1" />
      <circle cx="9.5" cy="13.2" r="1.3" fill="#0a3d62" />
      <circle cx="14.5" cy="13.2" r="1.3" fill="#0a3d62" />
      <path
        d="M9 16.7c.9.7 1.9 1 3 1s2.1-.3 3-1"
        stroke="#0a3d62"
        strokeWidth="1.3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function HelpChat() {
  const { t, lang } = useI18n();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [chatLang, setChatLang] = useState(lang);
  const [messages, setMessages] = useState(() => [
    { id: 'welcome', role: 'bot', text: t('chat.welcome') },
  ]);
  const bodyRef = useRef(null);
  const messageIdRef = useRef(0);

  if (chatLang !== lang) {
    setChatLang(lang);
    setMessages([{ id: 'welcome', role: 'bot', text: t('chat.welcome') }]);
  }

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, open]);

  function toggleOpen() {
    setOpen((prev) => !prev);
  }

  function sendMessage(displayText, matchText = displayText) {
    const text = displayText.trim();
    if (!text) return;

    messageIdRef.current += 1;
    const userMessage = {
      id: `u-${messageIdRef.current}`,
      role: 'user',
      text,
    };
    messageIdRef.current += 1;
    const botMessage = {
      id: `b-${messageIdRef.current}`,
      role: 'bot',
      text: getChatReply(matchText, t),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  }

  function sendQuickReply(id) {
    sendMessage(t(`chat.quick.${id}`), CHAT_QUICK_CANONICAL[id]);
  }

  return (
    <>
      <button
        type="button"
        aria-label={open ? t('chat.close') : t('chat.open')}
        onClick={toggleOpen}
        className={cn(
          'fixed bottom-[22px] right-[22px] z-[100] flex items-center gap-2.5 rounded-full bg-gradient-to-br from-[#0a3d62] to-[#2980b9] text-white shadow-[0_6px_20px_rgba(10,61,98,0.35)] transition hover:scale-[1.03] active:scale-[0.98]',
          open ? 'h-[58px] w-[58px] justify-center' : 'h-[58px] pl-3.5 pr-5'
        )}
      >
        {open ? (
          <HiOutlineX size={24} />
        ) : (
          <>
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
              <BotIcon className="h-[22px] w-[22px]" />
            </span>
            <span className="text-left leading-tight">
              <span className="block text-[13px] font-bold tracking-wide">
                {t('chat.needHelp')}
              </span>
              <span className="block text-[10px] font-medium text-blue-100">
                {t('chat.askHint')}
              </span>
            </span>
          </>
        )}
      </button>

      {open ? (
        <div className="fixed bottom-[92px] right-[22px] z-[100] flex h-[460px] max-h-[calc(100vh-140px)] w-[340px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-2xl border border-[#e0eaf5] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.22)]">
          <div className="flex items-center gap-2.5 bg-gradient-to-br from-[#0a3d62] to-[#2980b9] px-4 py-3.5 text-white">
            <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-white/20">
              <BotIcon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[14px] font-bold">{t('chat.title')}</div>
              <div className="flex items-center gap-1 text-[11px] text-blue-100">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {t('chat.status')}
              </div>
            </div>
          </div>

          <div
            ref={bodyRef}
            className="flex flex-1 flex-col gap-2.5 overflow-y-auto bg-[#f6f9fc] p-3.5"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  'max-w-[82%] whitespace-pre-line rounded-[14px] px-3 py-2 text-[13px] leading-relaxed',
                  msg.role === 'bot'
                    ? 'self-start rounded-bl-sm border border-[#e5edf5] bg-white text-slate-800'
                    : 'self-end rounded-br-sm bg-gradient-to-br from-[#2980b9] to-[#1e5f99] text-white'
                )}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 bg-[#f6f9fc] px-3.5 pb-2.5">
            {CHAT_QUICK_REPLY_IDS.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => sendQuickReply(id)}
                className="rounded-full border border-[#cfe1f0] bg-white px-2.5 py-1.5 text-[11px] font-semibold text-[#1a5f94] transition hover:bg-[#e8f3fc]"
              >
                {t(`chat.quick.${id}`)}
              </button>
            ))}
          </div>

          <form
            className="flex items-center gap-2 border-t border-[#e5edf5] bg-white p-2.5"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t('chat.placeholder')}
              className="flex-1 rounded-full border border-[#dde6ee] px-3.5 py-2 text-[13px] outline-none focus:border-[#2980b9]"
            />
            <button
              type="submit"
              aria-label={t('chat.send')}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0a3d62] to-[#2980b9] text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
                <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
              </svg>
            </button>
          </form>
          <div className="bg-white px-2.5 pb-2 text-center text-[10px] text-slate-400">
            {t('chat.footer')}
          </div>
        </div>
      ) : null}
    </>
  );
}
