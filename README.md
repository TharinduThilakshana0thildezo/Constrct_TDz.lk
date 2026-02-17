# 🏗️ ConsTrct TDz Frontend

Enterprise-grade frontend for a construction marketplace where homeowners, contractors, and admins collaborate on complex builds. This repo delivers premium UX, accessibility, AI-assisted tooling, and mock-data driven flows ready for API integration.

## ✨ Highlights
- Guided homeowner onboarding + multi-step "Post a Project" wizard with autosave & validation
- Role-based views (*homeowner dashboard, contractor workspace, admin cockpit*) switchable in-app
- Global search, sticky nav with scroll-aware highlights, persistent "Post a Project" CTA
- Cost estimator, material calculator, AI studio (cost prediction, design tips, chatbot), photo timeline, milestone approvals
- Simulated notifications, toast stack, real-time chat drawer, skeleton-friendly loading patterns
- Accessibility guardrails: skip links, focus management, ARIA-first controls
- Testing readiness via Vitest + Testing Library, Happy DOM environment, and shared setup

## 🧭 Product Flows
| Persona | Frontend Journey |
| --- | --- |
| **Homeowner** | Onboarding tour → Global nav CTA → Post Project wizard (details → budget → timeline → location → files → review) → Dashboard with timeline, bids, approvals, AI insights, chat → Track milestones/photo logs |
| **Contractor** | Role switch → Contractor Workspace (curated projects, applications table, job progress, calendar) → Draft bids, submit invoices, manage site tasks |
| **Admin** | Role switch → Admin Console (flagged bids moderation, system health, escalation controls) |

Empty states, helper copy, and progressive disclosure are included across flows.

## 📁 Folder Map
```
src/
├── App.jsx                     # Role-based view router + overlays
├── components/
│   ├── AIStudio.jsx
│   ├── GlobalSearchBar.jsx
│   ├── NotificationCenter.jsx
│   ├── OnboardingTour.jsx
│   ├── ProjectChatDock.jsx
│   ├── SkipLink.jsx
│   ├── ToastStack.jsx
│   └── …legacy marketing components
├── context/
│   ├── AppStateContext.jsx     # Global reducer (navigation, wizard drafts, modals, ui prefs)
│   └── ThemeContext.jsx
├── data/
│   └── mockData.js             # Projects, bids, AI signals, calendars, vendors
├── pages/
│   ├── Dashboard.jsx           # Homeowner control center
│   ├── ContractorWorkspace.jsx
│   ├── AdminConsole.jsx
│   ├── PostProjectWizard.jsx
│   ├── CostTools.jsx
│   └── …marketing pages
├── __tests__/
│   └── app-a11y.test.jsx
└── index.css                   # Tailwind + reduced motion helper
```

## 🔧 Tech Stack
- React 18 with Vite + SWC
- Tailwind CSS utility system
- Context-based state orchestration (`ThemeContext`, `AppStateContext`)
- Mock services via `data/mockData.js`
- Vitest + Testing Library + Happy DOM for fast component tests

## 🧰 Scripts
| Command | Purpose |
| --- | --- |
| `npm run dev` | Vite dev server (port 5173) |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint w/ React hooks + Refresh rules |
| `npm run test` | Vitest (Happy DOM + RTL) |

## 🔐 Environment Variables
No external env vars required yet. Future backend wiring should reserve:
```
VITE_API_BASE_URL=
VITE_AUTH_ISSUER=
VITE_ANALYTICS_KEY=
```

## 🧪 Quality Engineering
- **Testing**: Vitest configured with globals + Happy DOM, sample accessibility test provided
- **Accessibility**: Skip links, focus-visible styles, nav ARIA current states
- **Performance**: Lazy-friendly components, image optimization via remote URLs, code-splittable architecture
- **Security placeholders**: Input validation, safe file upload UI, CAPTCHA placeholder button, admin escalation controls

## 🌐 Internationalization & Theming
- Font + color tokens wired via Tailwind config
- RTL-friendly layout primitives (flex/grid)
- Theme toggles already present; `AppStateContext` exposes UI prefs for future i18n/locale storage

## 📡 Simulated Real-time Features
- Notification center + toast queue managed in context
- Project chat dock with typing indicator + read state
- Live bid updates triggered via mock toasts

## 🧠 AI Surfaces
- Cost prediction card with drivers + confidence
- Design suggestions list with impact + cost deltas
- Before/after preview container
- Chatbot textarea + placeholder response cycle

## 🗺️ Delivery Roadmap
1. **API integration**: replace mock data with REST/GraphQL client, add SWR/react-query caching
2. **Auth & roles**: drop-in Auth0/Cognito, gate routes via context
3. **File services**: connect uploader to S3/Supabase, include progress + validation
4. **Payments**: milestone escrow UI with Stripe Connect placeholders
5. **Advanced testing**: extend Vitest coverage + add Playwright smoke suite
6. **Observability**: wire analytics + error tracking hooks

## 🤝 Contributing
1. Fork & clone
2. `npm install`
3. `npm run dev`
4. Ensure `npm run lint && npm run test` pass
5. Submit PR with a short summary + screenshots/gifs of UI work

## 📄 License
Proprietary — contact the maintainers before reuse.

---
Built with ❤️ to bring construction intelligence to life. Switch roles inside the running app to explore every journey.
