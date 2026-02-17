import React, { useState } from 'react';
import { aiInsights } from '../data/mockData';
import { useAppState } from '../context/AppStateContext';
import { makeId } from '../utils/id';

const AIStudio = () => {
  const { pushToast } = useAppState();
  const [prompt, setPrompt] = useState('How can I reduce facade cost but keep premium look?');
  const [response, setResponse] = useState('Use modular fins + local stone cladding. Saves 6% while keeping depth.');

  const runPrediction = () => {
    pushToast({ id: makeId(), type: 'ai', message: 'Generated refreshed AI insight' });
    setResponse('Switch to adaptive lighting tracks with integrated acoustic baffles to reduce change orders.');
  };

  return (
    <section className="rounded-3xl border border-borderColor-dark/20 bg-white/80 p-6 shadow-lg dark:bg-white/5">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">AI studio</p>
          <h2 className="text-2xl font-heading font-semibold">Predict · Design · Advise</h2>
        </div>
        <button
          type="button"
          className="rounded-full border border-borderColor-dark/40 px-4 py-2 text-xs font-semibold"
          onClick={runPrediction}
        >
          Refresh insight
        </button>
      </header>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <article className="rounded-2xl border border-borderColor-dark/20 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">AI cost prediction</p>
            <p className="text-4xl font-semibold text-primary-gold">MYR {aiInsights.costPrediction.baseline.toLocaleString()}</p>
            <p className="text-sm text-textSecondary">Confidence {(aiInsights.costPrediction.confidence * 100).toFixed(0)}%</p>
            <ul className="mt-3 space-y-2 text-sm">
              {aiInsights.costPrediction.drivers.map((driver) => (
                <li key={driver.label} className="flex items-center justify-between">
                  <span>{driver.label}</span>
                  <span className="text-primary-gold">{driver.impact}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-borderColor-dark/20 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">Before / after preview</p>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              <div className="h-32 rounded-2xl bg-[url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=60')] bg-cover bg-center" aria-label="Before photo"></div>
              <div className="h-32 rounded-2xl bg-[url('https://images.unsplash.com/photo-1484151709479-3996843263cf?auto=format&fit=crop&w=400&q=60')] bg-cover bg-center" aria-label="After render"></div>
            </div>
          </article>
        </div>

        <div className="space-y-4">
          <article className="rounded-2xl border border-borderColor-dark/20 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">Design suggestions</p>
            <ul className="mt-3 space-y-3 text-sm">
              {aiInsights.designSuggestions.map((suggestion) => (
                <li key={suggestion.id} className="rounded-2xl border border-borderColor-dark/20 p-3">
                  <p className="font-semibold">{suggestion.title}</p>
                  <p className="text-xs text-textSecondary">{suggestion.description}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-primary-gold">
                    Impact {suggestion.impact} · Cost {suggestion.costDelta}
                  </p>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-borderColor-dark/20 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">AI concierge</p>
            <label htmlFor="ai-prompt" className="sr-only">
              Ask AI chatbot
            </label>
            <textarea
              id="ai-prompt"
              rows={3}
              className="mt-2 w-full rounded-2xl border border-borderColor-dark/30 px-3 py-3 text-sm"
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
            />
            <div className="mt-3 rounded-2xl border border-borderColor-dark/20 bg-black/80 p-3 text-sm text-white">
              {response}
            </div>
            <button
              type="button"
              className="mt-3 w-full rounded-full bg-gradient-to-r from-primary-gold to-primary-goldSecondary px-4 py-2 text-sm font-semibold text-black"
              onClick={runPrediction}
            >
              Ask AI
            </button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AIStudio;
