import React, { useState } from 'react';
import { chatThreads } from '../data/mockData';
import { useAppState } from '../context/AppStateContext';
import { makeId } from '../utils/id';

const ProjectChatDock = () => {
  const { state, toggleModal, pushToast } = useAppState();
  const [message, setMessage] = useState('');
  const thread = chatThreads[0];

  if (!state.modals.showChat) {
    return null;
  }

  const handleSend = () => {
    if (!message.trim()) return;
    pushToast({ id: makeId(), type: 'chat', message: 'Message queued for Skyline Builders' });
    setMessage('');
  };

  return (
    <div className="fixed bottom-0 right-4 z-40 w-full max-w-md rounded-3xl border border-borderColor-dark/40 bg-background/95 shadow-2xl backdrop-blur-lg">
      <div className="flex items-center justify-between border-b border-borderColor-dark/40 px-4 py-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">Project chat</p>
          <p className="font-semibold">{thread.participants.join(' · ')}</p>
        </div>
        <button type="button" className="text-sm text-textSecondary" onClick={() => toggleModal('showChat')}>
          Close
        </button>
      </div>
      <div className="max-h-72 space-y-3 overflow-y-auto px-4 py-4">
        {thread.messages.map((msg) => (
          <div key={msg.id} className={`flex flex-col ${msg.author === 'You' ? 'items-end' : 'items-start'}`}>
            <div
              className={`rounded-2xl px-3 py-2 text-sm ${
                msg.author === 'You'
                  ? 'bg-primary-gold text-black'
                  : 'bg-borderColor-dark/30 text-textPrimary'
              }`}
            >
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/60">
                {msg.author}
              </p>
              <p>{msg.body}</p>
            </div>
            <span className="mt-1 text-[0.65rem] text-textSecondary">
              {msg.timestamp} · {msg.read ? 'Read' : 'Delivered'}
            </span>
          </div>
        ))}
        <div className="flex items-center gap-2 text-xs text-textSecondary">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary-gold"></span>
          Skyline Builders is typing…
        </div>
      </div>
      <form
        className="flex items-center gap-2 border-t border-borderColor-dark/40 px-4 py-3"
        onSubmit={(event) => {
          event.preventDefault();
          handleSend();
        }}
      >
        <label htmlFor="chat-input" className="sr-only">
          Message contractor
        </label>
        <input
          id="chat-input"
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Share updates…"
          className="flex-1 rounded-full border border-borderColor-dark/40 bg-black/20 px-3 py-2 text-sm text-textPrimary focus:outline-none focus:ring-2 focus:ring-primary-gold"
        />
        <button
          type="submit"
          className="rounded-full bg-gradient-to-r from-primary-gold to-primary-goldSecondary px-4 py-2 text-sm font-semibold text-black"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ProjectChatDock;
