import React, { useMemo } from 'react';
import { useAppState } from '../context/AppStateContext';

const tourSteps = [
  { id: 'tour-1', label: 'Create your project brief' },
  { id: 'tour-2', label: 'Review AI cost forecast' },
  { id: 'tour-3', label: 'Invite contractors & compare bids' },
  { id: 'tour-4', label: 'Track milestones & approvals' },
];

const OnboardingTour = () => {
  const { state, trackOnboarding } = useAppState();
  const { onboarding } = state;

  const progress = useMemo(() => (onboarding.completed ? tourSteps.length : onboarding.step), [onboarding]);

  if (onboarding.completed) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed bottom-6 left-6 z-40 hidden max-w-xs rounded-2xl border border-borderColor-dark/40 bg-black/80 p-5 text-white shadow-2xl backdrop-blur-lg md:block">
      <p className="text-xs uppercase tracking-[0.24em] text-primary-gold/70">Guided setup</p>
      <h2 className="mt-2 text-lg font-semibold">Finish onboarding ({progress}/{tourSteps.length})</h2>
      <ul className="mt-3 space-y-2 text-sm text-white/80">
        {tourSteps.map((step, index) => (
          <li key={step.id} className="flex items-center gap-2">
            <span
              className={`h-5 w-5 rounded-full border text-[0.7rem] font-semibold flex items-center justify-center ${
                index < progress ? 'border-primary-gold text-primary-gold' : 'border-white/40 text-white/40'
              }`}
            >
              {index + 1}
            </span>
            <span>{step.label}</span>
          </li>
        ))}
      </ul>
      <div className="pointer-events-auto mt-4 flex gap-2">
        <button
          type="button"
          className="flex-1 rounded-full bg-primary-gold px-3 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          onClick={() => trackOnboarding({ step: Math.min(progress + 1, tourSteps.length) })}
        >
          Next tip
        </button>
        <button
          type="button"
          className="rounded-full border border-white/30 px-3 py-2 text-sm text-white/70"
          onClick={() => trackOnboarding({ completed: true })}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default OnboardingTour;
