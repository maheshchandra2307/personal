import { useEffect, useRef, useState } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { CHAT_QUICK_REPLIES, getChatReply } from '../../constants/chatFaq';
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
  const [open, setOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      role: 'bot',
      text: 'Hi! I can help you find your DISCOM, explain payment steps, and answer common bill questions.\n\nThis is an unofficial FAQ helper — payments happen only on official sites.',
    },
  ]);
  const bodyRef = useRef(null);
  const messageIdRef = useRef(0);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, open]);

  function toggleOpen() {
    setOpen((prev) => {
      const next = !prev;
      if (next) setShowBadge(false);
      return next;
    });
  }

  function sendMessage(raw) {
    const text = raw.trim();
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
      text: getChatReply(text),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  }

  return (
    <>
      <button
        type="button"
        aria-label={open ? 'Close help chat' : 'Open help chat'}
        onClick={toggleOpen}
        className={cn(
          'fixed bottom-[22px] right-[22px] z-[100] flex h-[58px] w-[58px] items-center justify-center rounded-full bg-gradient-to-br from-[#0a3d62] to-[#2980b9] text-white shadow-[0_6px_20px_rgba(10,61,98,0.35)] transition hover:scale-105',
          open && 'scale-100'
        )}
      >
        {open ? (
          <HiOutlineX size={24} />
        ) : (
          <BotIcon className="h-[26px] w-[26px]" />
        )}
        {showBadge && !open ? (
          <span className="absolute -right-0.5 -top-0.5 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-white bg-red-500 text-[10px] font-bold">
            1
          </span>
        ) : null}
      </button>

      <div
        className={cn(
          'fixed bottom-[92px] right-[22px] z-[100] hidden h-[460px] max-h-[calc(100vh-140px)] w-[340px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-2xl border border-[#e0eaf5] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.22)]',
          open && 'flex'
        )}
      >
        <div className="flex items-center gap-2.5 bg-gradient-to-br from-[#0a3d62] to-[#2980b9] px-4 py-3.5 text-white">
          <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-white/20 text-lg">
            🤖
          </div>
          <div>
            <div className="text-[14px] font-bold">Bill Help Assistant</div>
            <div className="flex items-center gap-1 text-[11px] text-blue-100">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              AI-style auto-replies · Not affiliated with DISCOMs
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
          {CHAT_QUICK_REPLIES.map((reply) => (
            <button
              key={reply}
              type="button"
              onClick={() => sendMessage(reply)}
              className="rounded-full border border-[#cfe1f0] bg-white px-2.5 py-1.5 text-[11px] font-semibold text-[#1a5f94] transition hover:bg-[#e8f3fc]"
            >
              {reply}
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
            placeholder="Ask about your bill, DISCOM, payment..."
            className="flex-1 rounded-full border border-[#dde6ee] px-3.5 py-2 text-[13px] outline-none focus:border-[#2980b9]"
          />
          <button
            type="submit"
            aria-label="Send"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0a3d62] to-[#2980b9] text-white"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
              <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
            </svg>
          </button>
        </form>
        <div className="bg-white px-2.5 pb-2 text-center text-[10px] text-slate-400">
          Automated FAQ bot · Redirects to official DISCOM sites for payment
        </div>
      </div>
    </>
  );
}
