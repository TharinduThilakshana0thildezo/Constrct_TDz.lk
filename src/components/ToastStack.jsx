import React, { useEffect } from 'react';
import { useAppState } from '../context/AppStateContext';

const ToastStack = () => {
  const { state, dismissToast } = useAppState();
  const { toasts } = state;

  useEffect(() => {
    if (toasts.length === 0) return;
    const timers = toasts.map((toast) => setTimeout(() => dismissToast(toast.id), 4000));
    return () => timers.forEach(clearTimeout);
  }, [toasts, dismissToast]);

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50 space-y-3">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto min-w-[220px] rounded-2xl border border-borderColor-dark/30 bg-background/90 px-4 py-3 text-sm shadow-xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary-gold">{toast.type}</p>
          <p className="font-semibold text-textPrimary">{toast.message}</p>
        </div>
      ))}
    </div>
  );
};

export default ToastStack;
