import React, { useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAppState, selectWizardProgress } from '../context/AppStateContext';
import { makeId } from '../utils/id';

const steps = [
  { key: 'details', label: 'Project details', description: 'Scope, category, intent' },
  { key: 'budget', label: 'Budget', description: 'Range & payment preference' },
  { key: 'timeline', label: 'Timeline', description: 'Dates & urgency' },
  { key: 'location', label: 'Location', description: 'Site access & address' },
  { key: 'files', label: 'Files', description: 'Upload drawings & refs' },
  { key: 'review', label: 'Review', description: 'Confirm brief' },
];

const PostProjectWizard = ({ onNavigate }) => {
  const { state, updateWizard, resetWizard, pushToast } = useAppState();
  const [stepIndex, setStepIndex] = useState(0);
  const wizard = state.wizardDraft;
  const progress = selectWizardProgress(state);

  const currentStep = steps[stepIndex];

  const canGoNext = useMemo(() => {
    switch (currentStep.key) {
      case 'details':
        return wizard.details.title && wizard.details.category;
      case 'budget':
        return wizard.budget.estimate && wizard.budget.paymentPreference;
      case 'timeline':
        return wizard.timeline.startDate;
      case 'location':
        return wizard.location.city;
      case 'files':
        return true;
      case 'review':
        return true;
      default:
        return false;
    }
  }, [wizard, currentStep.key]);

  const goNext = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      pushToast({ id: makeId(), type: 'wizard', message: 'Project submitted for review' });
      resetWizard();
      onNavigate('dashboard');
    }
  };

  const goPrev = () => setStepIndex(Math.max(0, stepIndex - 1));

  const handleChange = (section, field, value) => {
    updateWizard({ [section]: { ...wizard[section], [field]: value } });
  };

  const handleFiles = (event) => {
    const files = Array.from(event.target.files || []);
    updateWizard({ files: [...(wizard.files || []), ...files.map((file) => ({ id: makeId(), name: file.name, size: file.size }))] });
  };

  return (
    <div className="min-h-screen bg-background text-textPrimary">
      <Navbar onNavigate={onNavigate} hideNavItems logoScrollToTop />
      <main id="main-content" className="container max-w-6xl pt-32 pb-16">
        <header className="mb-10 rounded-3xl border border-borderColor-dark/30 bg-black/60 p-6 text-white shadow-2xl">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-primary-gold/70">Post a Project</p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <div>
              <h1 className="text-3xl font-heading font-semibold">Guided project brief</h1>
              <p className="text-sm text-white/70">Autosaves in your browser · Progress {progress.completed}/{progress.total}</p>
            </div>
            <div className="ml-auto flex gap-2">
              <button type="button" className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em]" onClick={resetWizard}>
                Reset draft
              </button>
              <button type="button" className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em]" onClick={() => onNavigate('home')}>
                Exit
              </button>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4 text-xs">
            {steps.map((step, index) => (
              <button
                key={step.key}
                type="button"
                onClick={() => setStepIndex(index)}
                className={`rounded-2xl border px-3 py-2 text-left transition-all ${
                  index === stepIndex
                    ? 'border-primary-gold bg-primary-gold/10 text-primary-gold'
                    : index < stepIndex
                      ? 'border-primary-gold/40 bg-primary-gold/5 text-white'
                      : 'border-white/20 text-white/60'
                }`}
              >
                <p className="text-[0.6rem] uppercase tracking-[0.25em]">Step {index + 1}</p>
                <p className="font-semibold">{step.label}</p>
              </button>
            ))}
          </div>
        </header>

        <section className="rounded-3xl border border-borderColor-dark/20 bg-white/80 p-8 shadow-lg dark:bg-white/5">
          <h2 className="text-2xl font-heading font-semibold">{currentStep.label}</h2>
          <p className="text-sm text-textSecondary">{currentStep.description}</p>

          {currentStep.key === 'details' && (
            <div className="mt-6 grid gap-4">
              <label className="text-sm">
                Project title
                <input
                  required
                  value={wizard.details.title}
                  onChange={(event) => handleChange('details', 'title', event.target.value)}
                  className="mt-1 w-full rounded-2xl border border-borderColor-dark/30 px-3 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary-gold"
                  placeholder="e.g. Luxury penthouse retrofit"
                />
              </label>
              <label className="text-sm">
                Category
                <select
                  value={wizard.details.category}
                  onChange={(event) => handleChange('details', 'category', event.target.value)}
                  className="mt-1 w-full rounded-2xl border border-borderColor-dark/30 px-3 py-3"
                >
                  <option value="">Select scope</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="infrastructure">Infrastructure</option>
                </select>
              </label>
              <label className="text-sm">
                Description
                <textarea
                  rows={4}
                  value={wizard.details.description}
                  onChange={(event) => handleChange('details', 'description', event.target.value)}
                  className="mt-1 w-full rounded-2xl border border-borderColor-dark/30 px-3 py-3"
                  placeholder="Short summary, key goals, constraints..."
                />
              </label>
            </div>
          )}

          {currentStep.key === 'budget' && (
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="text-sm">
                Target budget (MYR)
                <input
                  type="number"
                  value={wizard.budget.estimate}
                  onChange={(event) => handleChange('budget', 'estimate', event.target.value)}
                  className="mt-1 w-full rounded-2xl border border-borderColor-dark/30 px-3 py-3"
                />
              </label>
              <label className="text-sm">
                Payment preference
                <select
                  value={wizard.budget.paymentPreference}
                  onChange={(event) => handleChange('budget', 'paymentPreference', event.target.value)}
                  className="mt-1 w-full rounded-2xl border border-borderColor-dark/30 px-3 py-3"
                >
                  <option value="fixed">Fixed price</option>
                  <option value="milestone">Milestone</option>
                  <option value="cost-plus">Cost plus</option>
                </select>
              </label>
              <label className="text-sm">
                Minimum
                <input
                  type="number"
                  value={wizard.budget.min}
                  onChange={(event) => handleChange('budget', 'min', event.target.value)}
                  className="mt-1 w-full rounded-2xl border border-borderColor-dark/30 px-3 py-3"
                />
              </label>
              <label className="text-sm">
                Maximum
                <input
                  type="number"
                  value={wizard.budget.max}
                  onChange={(event) => handleChange('budget', 'max', event.target.value)}
                  className="mt-1 w-full rounded-2xl border border-borderColor-dark/30 px-3 py-3"
                />
              </label>
            </div>
          )}

          {currentStep.key === 'timeline' && (
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="text-sm">
                Preferred start date
                <input
                  type="date"
                  value={wizard.timeline.startDate}
                  onChange={(event) => handleChange('timeline', 'startDate', event.target.value)}
                  className="mt-1 w-full rounded-2xl border border-borderColor-dark/30 px-3 py-3"
                />
              </label>
              <label className="text-sm">
                Duration (weeks)
                <input
                  type="number"
                  value={wizard.timeline.durationWeeks}
                  onChange={(event) => handleChange('timeline', 'durationWeeks', event.target.value)}
                  className="mt-1 w-full rounded-2xl border border-borderColor-dark/30 px-3 py-3"
                />
              </label>
              <label className="text-sm">
                Urgency
                <select
                  value={wizard.timeline.urgency}
                  onChange={(event) => handleChange('timeline', 'urgency', event.target.value)}
                  className="mt-1 w-full rounded-2xl border border-borderColor-dark/30 px-3 py-3"
                >
                  <option value="flexible">Flexible</option>
                  <option value="standard">Standard</option>
                  <option value="rush">Rush (premium)</option>
                </select>
              </label>
            </div>
          )}

          {currentStep.key === 'location' && (
            <div className="mt-6 grid gap-4">
              <label className="text-sm">
                City
                <input
                  value={wizard.location.city}
                  onChange={(event) => handleChange('location', 'city', event.target.value)}
                  className="mt-1 w-full rounded-2xl border border-borderColor-dark/30 px-3 py-3"
                />
              </label>
              <label className="text-sm">
                Address / site access notes
                <textarea
                  rows={3}
                  value={wizard.location.address}
                  onChange={(event) => handleChange('location', 'address', event.target.value)}
                  className="mt-1 w-full rounded-2xl border border-borderColor-dark/30 px-3 py-3"
                />
              </label>
              <label className="text-sm">
                Site access level
                <select
                  value={wizard.location.siteAccess}
                  onChange={(event) => handleChange('location', 'siteAccess', event.target.value)}
                  className="mt-1 w-full rounded-2xl border border-borderColor-dark/30 px-3 py-3"
                >
                  <option value="standard">Standard</option>
                  <option value="restricted">Restricted</option>
                  <option value="remote">Remote logistics</option>
                </select>
              </label>
            </div>
          )}

          {currentStep.key === 'files' && (
            <div className="mt-6 rounded-2xl border border-dashed border-borderColor-dark/40 p-6 text-center">
              <p className="text-sm text-textSecondary">Upload drawings, photos, or references</p>
              <label className="mt-4 inline-flex cursor-pointer items-center justify-center rounded-full border border-primary-gold/40 px-5 py-2 text-sm font-semibold text-primary-gold">
                <input type="file" multiple className="sr-only" onChange={handleFiles} />
                Select files
              </label>
              <ul className="mt-6 space-y-2 text-left text-sm">
                {(wizard.files || []).map((file) => (
                  <li key={file.id} className="flex items-center justify-between rounded-2xl border border-borderColor-dark/30 px-3 py-2">
                    <span>{file.name}</span>
                    <span className="text-xs text-textSecondary">{Math.round((file.size || 0) / 1024)} KB</span>
                  </li>
                ))}
                {wizard.files?.length === 0 && <li className="text-xs text-textSecondary">No files yet.</li>}
              </ul>
            </div>
          )}

          {currentStep.key === 'review' && (
            <div className="mt-6 space-y-4 text-sm">
              <p className="text-textSecondary">
                Review your brief. You can still edit after posting, and AI can suggest optimisations.
              </p>
              <div className="rounded-2xl border border-borderColor-dark/30 p-4">
                <h3 className="font-semibold">Overview</h3>
                <p className="text-textSecondary">{wizard.details.description || 'No description yet.'}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-borderColor-dark/30 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">Budget</p>
                  <p className="text-xl font-semibold">{wizard.budget.estimate || 'TBD'} MYR</p>
                </div>
                <div className="rounded-2xl border border-borderColor-dark/30 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">Timeline</p>
                  <p className="text-xl font-semibold">{wizard.timeline.durationWeeks} weeks</p>
                </div>
              </div>
              <button type="button" className="w-full rounded-2xl border border-borderColor-dark/40 px-4 py-3 text-xs uppercase tracking-[0.3em] text-textSecondary">
                CAPTCHA placeholder · human check
              </button>
            </div>
          )}

          <div className="mt-8 flex flex-wrap justify-between gap-3">
            <button
              type="button"
              onClick={goPrev}
              disabled={stepIndex === 0}
              className="rounded-full border border-borderColor-dark/40 px-5 py-3 text-sm font-semibold disabled:opacity-40"
            >
              Back
            </button>
            <div className="flex items-center gap-3">
              <p className="text-xs uppercase tracking-[0.25em] text-textSecondary">
                Step {stepIndex + 1} of {steps.length}
              </p>
              <button
                type="button"
                disabled={!canGoNext}
                onClick={goNext}
                className="rounded-full bg-gradient-to-r from-primary-gold to-primary-goldSecondary px-6 py-3 text-sm font-semibold text-black disabled:opacity-50"
              >
                {stepIndex === steps.length - 1 ? 'Submit project' : 'Continue'}
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default PostProjectWizard;
