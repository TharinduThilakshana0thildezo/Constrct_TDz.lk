import React from 'react';
import { useAppState } from '../context/AppStateContext';

const NotificationCenter = () => {
  const { state, dismissNotification, toggleModal } = useAppState();
  const { notifications, modals } = state;

  if (!modals.showNotifications) {
    return null;
  }

  return (
    <aside
      className="fixed right-4 top-20 z-40 w-full max-w-sm rounded-3xl border border-borderColor-dark/40 bg-background/95 p-4 shadow-2xl backdrop-blur-lg"
      aria-live="polite"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-textSecondary">Notifications</p>
          <h2 className="text-lg font-semibold">Live updates</h2>
        </div>
        <button
          type="button"
          className="rounded-full border border-borderColor-dark/40 px-3 py-1 text-xs"
          onClick={() => toggleModal('showNotifications')}
        >
          Close
        </button>
      </div>
      <ul className="mt-4 space-y-3">
        {notifications.map((notification) => (
          <li key={notification.id} className="rounded-2xl border border-borderColor-dark/30 bg-black/30 px-3 py-3 text-sm text-white">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs text-primary-gold/80">{notification.type}</p>
                <p className="font-semibold">{notification.title}</p>
                <p className="text-xs text-white/70">{notification.message}</p>
              </div>
              <button
                type="button"
                className="text-[0.7rem] uppercase text-primary-gold"
                onClick={() => dismissNotification(notification.id)}
              >
                Dismiss
              </button>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default NotificationCenter;
