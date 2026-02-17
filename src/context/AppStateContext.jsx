import React, { createContext, useContext, useReducer, useMemo, useEffect } from 'react';
import { makeId } from '../utils/id';

const STORAGE_KEYS = {
  wizard: 'ctdz_wizard_draft_v1',
  onboarding: 'ctdz_onboarding_progress_v1',
};

const safeWindow = typeof window !== 'undefined';

const persist = (key, value) => {
  if (!safeWindow) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn('Persist error', error);
  }
};

const load = (key, fallback) => {
  if (!safeWindow) return fallback;
  try {
    const stored = window.localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch (error) {
    console.warn('Load error', error);
    return fallback;
  }
};

const defaultWizardDraft = {
  details: {
    title: '',
    category: '',
    description: '',
    scope: '',
  },
  budget: {
    estimate: '',
    min: '',
    max: '',
    paymentPreference: 'fixed',
  },
  timeline: {
    startDate: '',
    durationWeeks: 8,
    urgency: 'standard',
  },
  location: {
    city: '',
    address: '',
    siteAccess: 'standard',
  },
  files: [],
  review: {},
};

const initialState = {
  currentPage: 'home',
  role: 'homeowner',
  onboarding: load(STORAGE_KEYS.onboarding, { completed: false, step: 0 }),
  wizardDraft: load(STORAGE_KEYS.wizard, defaultWizardDraft),
  notifications: [],
  toasts: [],
  chats: {},
  realtime: {
    typingIndicator: null,
    lastUpdated: null,
  },
  modals: {
    showSearch: false,
    showNotifications: false,
    showChat: false,
  },
  ui: {
    reduceMotion: false,
  },
};

const AppStateContext = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
    case 'NAVIGATE':
      return { ...state, currentPage: action.payload };
    case 'SET_ROLE':
      return { ...state, role: action.payload };
    case 'UPDATE_WIZARD': {
      const wizardDraft = { ...state.wizardDraft, ...action.payload };
      persist(STORAGE_KEYS.wizard, wizardDraft);
      return { ...state, wizardDraft };
    }
    case 'RESET_WIZARD':
      persist(STORAGE_KEYS.wizard, defaultWizardDraft);
      return { ...state, wizardDraft: defaultWizardDraft };
    case 'ONBOARDING_PROGRESS': {
      const onboarding = { ...state.onboarding, ...action.payload };
      persist(STORAGE_KEYS.onboarding, onboarding);
      return { ...state, onboarding };
    }
    case 'PUSH_NOTIFICATION':
      return { ...state, notifications: [action.payload, ...state.notifications] };
    case 'DISMISS_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter((item) => item.id !== action.payload),
      };
    case 'PUSH_TOAST':
      return { ...state, toasts: [...state.toasts, action.payload] };
    case 'DISMISS_TOAST':
      return { ...state, toasts: state.toasts.filter((toast) => toast.id !== action.payload) };
    case 'TOGGLE_MODAL':
      return {
        ...state,
        modals: { ...state.modals, [action.payload]: !state.modals[action.payload] },
      };
    case 'SET_CHAT_THREAD':
      return {
        ...state,
        chats: { ...state.chats, [action.payload.threadId]: action.payload.thread },
      };
    case 'SET_REALTIME_STATUS':
      return { ...state, realtime: { ...state.realtime, ...action.payload } };
    case 'SET_UI_FLAG':
      return { ...state, ui: { ...state.ui, ...action.payload } };
    default:
      return state;
  }
};

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Seed demo notifications on first mount
  useEffect(() => {
    if (state.notifications.length === 0) {
      dispatch({
        type: 'PUSH_NOTIFICATION',
        payload: {
          id: makeId(),
          type: 'bid',
          title: 'New bid received',
          message: 'Skyline Builders submitted a bid for "Rooftop Terrace Upgrade".',
          timestamp: new Date().toISOString(),
          unread: true,
        },
      });
    }
  }, []);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within AppStateProvider');
  }
  const { state, dispatch } = context;

  const navigate = (page) => dispatch({ type: 'NAVIGATE', payload: page });
  const setRole = (role) => dispatch({ type: 'SET_ROLE', payload: role });
  const updateWizard = (payload) => dispatch({ type: 'UPDATE_WIZARD', payload });
  const resetWizard = () => dispatch({ type: 'RESET_WIZARD' });
  const trackOnboarding = (payload) => dispatch({ type: 'ONBOARDING_PROGRESS', payload });
  const pushToast = (toast) => dispatch({ type: 'PUSH_TOAST', payload: toast });
  const dismissToast = (id) => dispatch({ type: 'DISMISS_TOAST', payload: id });
  const toggleModal = (modalKey) => dispatch({ type: 'TOGGLE_MODAL', payload: modalKey });
  const pushNotification = (notification) => dispatch({ type: 'PUSH_NOTIFICATION', payload: notification });
  const dismissNotification = (id) => dispatch({ type: 'DISMISS_NOTIFICATION', payload: id });
  const setChatThread = (threadId, thread) => dispatch({ type: 'SET_CHAT_THREAD', payload: { threadId, thread } });
  const setRealtimeStatus = (payload) => dispatch({ type: 'SET_REALTIME_STATUS', payload });
  const setUiPreference = (payload) => dispatch({ type: 'SET_UI_FLAG', payload });

  return {
    state,
    navigate,
    setRole,
    updateWizard,
    resetWizard,
    trackOnboarding,
    pushToast,
    dismissToast,
    toggleModal,
    pushNotification,
    dismissNotification,
    setChatThread,
    setRealtimeStatus,
    setUiPreference,
  };
};

export const selectWizardProgress = (state) => {
  const steps = ['details', 'budget', 'timeline', 'location', 'files', 'review'];
  const completed = steps.reduce((count, key) => {
    const block = state.wizardDraft[key];
    if (!block) return count;
    const filled = Object.values(block).some((value) => {
      if (Array.isArray(value)) return value.length > 0;
      return Boolean(value);
    });
    return filled ? count + 1 : count;
  }, 0);
  return { completed, total: steps.length };
};
