import React, { useMemo, useState } from 'react';
import { makeId } from '../utils/id';

export const FAQ_KNOWLEDGE_BASE = [
  {
    id: 'payments',
    question: 'How are milestone payments handled on ConsTrct TDz?',
    answer:
      'Projects are split into clearly defined milestones. Funds are only released after the homeowner approves each milestone. You can attach photos, QA notes, and inspection reports so both parties have a verifiable audit trail.',
    tags: ['payments', 'milestones', 'escrow'],
    sentiment: 'reassuring',
  },
  {
    id: 'verification',
    question: 'What proof do contractors submit for verification?',
    answer:
      'We require CIDB/CIDA credentials, trade licenses, safety certifications, and at least two recent project references. Documents are validated by an operations reviewer before the profile is published.',
    tags: ['trust', 'compliance', 'documents'],
    sentiment: 'confident',
  },
  {
    id: 'disputes',
    question: 'How are disputes resolved between clients and contractors?',
    answer:
      'Our platform escalates disputed milestones to a neutral construction specialist. They review contracts, chat logs, and site evidence before recommending part or full releases. The panel typically resolves issues in 3-5 business days.',
    tags: ['support', 'disputes', 'governance'],
    sentiment: 'neutral',
  },
  {
    id: 'timelines',
    question: 'Can I adjust project timelines after publishing?',
    answer:
      'Yes. Owners can request revised durations or buffers directly from the dashboard. Contractors receive a structured change-order summary so costs, crew allocations, and availability stay aligned.',
    tags: ['timeline', 'change order'],
    sentiment: 'supportive',
  },
  {
    id: 'data-security',
    question: 'How is my project data secured?',
    answer:
      'All artifacts live in an encrypted document vault with hourly backups across two Sri Lankan regions. Access is scoped via role-based permissions so sensitive BOQs and drawings are only visible to stakeholders you approve.',
    tags: ['security', 'data'],
    sentiment: 'assuring',
  },
  {
    id: 'onboarding',
    question: 'What onboarding support do enterprise teams get?',
    answer:
      'Our customer success pod runs a two-week enablement program covering contract templates, analytics exports, and API integrations. You also get a dedicated Slack channel for real-time triage.',
    tags: ['enterprise', 'onboarding'],
    sentiment: 'energetic',
  },
];

const QUICK_PROMPTS = [
  'Show me trust safeguards',
  'Explain payment protection',
  'How do I contact support?',
  'What reports are available?',
];

const sentimentAccent = {
  reassuring: 'text-emerald-300',
  confident: 'text-primary-gold',
  neutral: 'text-slate-200',
  supportive: 'text-sky-300',
  assuring: 'text-slate-100',
  energetic: 'text-amber-300',
};

const tokenize = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(/\s+/)
    .filter(Boolean);

const matchFaq = (prompt) => {
  const promptTokens = tokenize(prompt);
  if (!promptTokens.length) return FAQ_KNOWLEDGE_BASE[0];

  let bestScore = -1;
  let bestEntry = FAQ_KNOWLEDGE_BASE[0];

  FAQ_KNOWLEDGE_BASE.forEach((entry) => {
    const haystack = tokenize(`${entry.question} ${entry.answer} ${entry.tags.join(' ')}`);
    const score = promptTokens.reduce((acc, token) => acc + (haystack.includes(token) ? 1 : 0), 0);
    if (score > bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  });

  return bestEntry;
};

const MessageBubble = ({ sender, text, meta }) => (
  <div
    className={`rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-lg shadow-black/40 ${
      sender === 'bot'
        ? 'bg-gradient-to-br from-slate-900 via-slate-900/80 to-black text-slate-100 border border-white/5'
        : 'bg-primary-gold text-black ml-auto'
    }`}
  >
    {text}
    {meta && (
      <div className={`mt-2 text-[0.65rem] uppercase tracking-[0.25em] ${sentimentAccent[meta.sentiment] || 'text-slate-300'}`}>
        {meta.label}
      </div>
    )}
  </div>
);

const FAQChatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: makeId(),
      sender: 'bot',
      text: 'Hi, I\'m Ava — your ConsTrct TDz support copilot. Ask me about trust, pricing, onboarding or anything else.',
    },
    {
      id: makeId(),
      sender: 'bot',
      text: 'You can type a question, pick a quick prompt, or say “connect me to support”.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeTopic, setActiveTopic] = useState(null);

  const handlePrompt = (prompt) => {
    setInput('');
    setActiveTopic(prompt);
    handleSend(prompt);
  };

  const handleSend = (text) => {
    const trimmed = (text || input).trim();
    if (!trimmed) return;
    const userMessage = { id: makeId(), sender: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const answer = matchFaq(trimmed);
      const response = {
        id: makeId(),
        sender: 'bot',
        text: answer.answer,
        meta: { label: answer.question, sentiment: answer.sentiment },
      };
      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
      setActiveTopic(answer.id);
    }, 600);
  };

  const suggestions = useMemo(() => FAQ_KNOWLEDGE_BASE.slice(0, 3), []);

  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#04060a] via-[#0b111f] to-[#05070c] p-6 shadow-[0_35px_120px_rgba(3,6,12,0.65)]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-primary-gold/80">Conversational Support</p>
          <h2 className="mt-2 text-2xl font-heading text-white">Ava, your FAQ Copilot</h2>
          <p className="mt-2 text-sm text-slate-300">
            Ask natural-language questions about workflows, policies, or pricing. Responses reference the same knowledge base that powers the help center.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {QUICK_PROMPTS.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => handlePrompt(prompt)}
              className={`rounded-full border border-primary-gold/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-gold transition hover:border-primary-gold hover:bg-primary-gold/10 ${
                activeTopic === prompt ? 'bg-primary-gold/20' : ''
              }`}
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <div className="max-h-96 overflow-y-auto rounded-2xl border border-white/5 bg-black/30 p-4 space-y-3">
          {messages.map((message) => (
            <MessageBubble key={message.id} sender={message.sender} text={message.text} meta={message.meta} />
          ))}
          {isTyping && (
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
              <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-primary-gold" />
              Ava is typing…
            </div>
          )}
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {suggestions.map((topic) => (
            <button
              key={topic.id}
              type="button"
              onClick={() => handlePrompt(topic.question)}
              className={`rounded-2xl border px-4 py-3 text-left transition-all duration-200 ${
                activeTopic === topic.id
                  ? 'border-primary-gold bg-primary-gold/10 text-primary-gold'
                  : 'border-white/10 text-white/80 hover:border-primary-gold/40 hover:text-primary-gold'
              }`}
            >
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/60">Top question</p>
              <p className="mt-2 text-sm font-semibold">{topic.question}</p>
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-white/80 focus-within:border-primary-gold/60 focus-within:text-white">
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              rows={2}
              placeholder="Type your question about policies, pricing or support"
              className="w-full resize-none bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
            />
          </div>
          <button
            type="button"
            onClick={() => handleSend()}
            className="rounded-2xl bg-gradient-to-r from-primary-gold to-primary-goldSecondary px-8 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-black shadow-[0_10px_35px_rgba(201,162,77,0.35)] transition hover:translate-y-[-1px]"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQChatbot;
