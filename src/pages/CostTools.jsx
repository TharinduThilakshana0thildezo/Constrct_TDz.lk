import React, { useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { estimatorTemplates, regionalMultipliers, materialCatalog, vendorQuotes } from '../data/mockData';
import { useAppState } from '../context/AppStateContext';

const CostEstimator = () => {
  const [template, setTemplate] = useState(estimatorTemplates[0]);
  const [area, setArea] = useState(2500);
  const [contingency, setContingency] = useState(10);
  const [multiplier, setMultiplier] = useState(regionalMultipliers[0]);

  const estimate = useMemo(() => {
    const base = area * template.baseCostPerSqft * template.multiplier;
    const adjusted = base * multiplier.value;
    return Math.round(adjusted * (1 + contingency / 100));
  }, [template, area, multiplier, contingency]);

  return (
    <section className="rounded-3xl border border-borderColor-dark/20 bg-white/80 p-8 shadow-lg dark:bg-white/5">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">Cost estimator</p>
          <h2 className="text-2xl font-heading font-semibold">AI-assisted budgeting</h2>
        </div>
        <button type="button" className="rounded-full border border-borderColor-dark/40 px-4 py-2 text-xs font-semibold">
          Export PDF
        </button>
      </header>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <label className="text-sm">
            Template
            <select
              value={template.id}
              onChange={(event) => setTemplate(estimatorTemplates.find((tpl) => tpl.id === event.target.value))}
              className="mt-1 w-full rounded-2xl border border-borderColor-dark/30 px-3 py-3"
            >
              {estimatorTemplates.map((tpl) => (
                <option key={tpl.id} value={tpl.id}>
                  {tpl.label}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            Area (sqft)
            <input type="number" value={area} onChange={(event) => setArea(Number(event.target.value))} className="mt-1 w-full rounded-2xl border border-borderColor-dark/30 px-3 py-3" />
          </label>
          <label className="text-sm">
            Regional multiplier
            <select
              value={multiplier.id}
              onChange={(event) => setMultiplier(regionalMultipliers.find((mul) => mul.id === event.target.value))}
              className="mt-1 w-full rounded-2xl border border-borderColor-dark/30 px-3 py-3"
            >
              {regionalMultipliers.map((mul) => (
                <option key={mul.id} value={mul.id}>
                  {mul.label} · {mul.value}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            Contingency ({contingency}%)
            <input
              type="range"
              min="0"
              max="30"
              value={contingency}
              onChange={(event) => setContingency(Number(event.target.value))}
              className="mt-1 w-full"
            />
          </label>
        </div>
        <div className="rounded-3xl border border-borderColor-dark/20 bg-black/80 p-6 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-primary-gold/70">Projected total</p>
          <h3 className="mt-3 text-4xl font-semibold text-primary-gold">MYR {estimate.toLocaleString()}</h3>
          <p className="mt-2 text-sm text-white/70">Includes contingencies & location multiplier</p>
          <div className="mt-4 space-y-2 text-sm">
            <p>Area: {area.toLocaleString()} sqft</p>
            <p>Template multiplier: {template.multiplier.toFixed(2)}</p>
            <p>Regional multiplier: {multiplier.value.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const MaterialCalculator = () => {
  const [selection, setSelection] = useState(materialCatalog[0]);
  const [quantity, setQuantity] = useState(12);
  const [wastage, setWastage] = useState(8);
  const [unit, setUnit] = useState(selection.unit);

  const converted = useMemo(() => {
    const base = quantity * (1 + wastage / 100);
    if (unit === selection.unit) return base;
    if (selection.unit === 'm³' && unit === 'm²') {
      return base * selection.density;
    }
    if (selection.unit === 'm²' && unit === 'm³') {
      return base / selection.density;
    }
    return base;
  }, [quantity, wastage, selection, unit]);

  const total = useMemo(() => converted * selection.price, [converted, selection]);

  return (
    <section className="rounded-3xl border border-borderColor-dark/20 bg-white/80 p-8 shadow-lg dark:bg-white/5">
      <header>
        <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">Material calculator</p>
        <h2 className="text-2xl font-heading font-semibold">Bill of materials</h2>
      </header>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <label className="text-sm">
            Material
            <select
              value={selection.id}
              onChange={(event) => {
                const mat = materialCatalog.find((item) => item.id === event.target.value);
                setSelection(mat);
                setUnit(mat.unit);
              }}
              className="mt-1 w-full rounded-2xl border border-borderColor-dark/30 px-3 py-3"
            >
              {materialCatalog.map((mat) => (
                <option key={mat.id} value={mat.id}>
                  {mat.name} · {mat.unit}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            Quantity ({selection.unit})
            <input type="number" value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} className="mt-1 w-full rounded-2xl border border-borderColor-dark/30 px-3 py-3" />
          </label>
          <label className="text-sm">
            Wastage ({wastage}%)
            <input type="range" min="0" max="20" value={wastage} onChange={(event) => setWastage(Number(event.target.value))} className="mt-1 w-full" />
          </label>
          <label className="text-sm">
            Convert to unit
            <select value={unit} onChange={(event) => setUnit(event.target.value)} className="mt-1 w-full rounded-2xl border border-borderColor-dark/30 px-3 py-3">
              <option value="m³">m³</option>
              <option value="m²">m²</option>
            </select>
          </label>
        </div>
        <div className="space-y-4">
          <div className="rounded-3xl border border-borderColor-dark/20 bg-black/80 p-6 text-white">
            <p className="text-xs uppercase tracking-[0.3em] text-primary-gold/70">Total quantity</p>
            <h3 className="mt-3 text-3xl font-semibold">{converted.toFixed(2)} {unit}</h3>
            <p className="mt-2 text-4xl font-bold text-primary-gold">MYR {total.toLocaleString()}</p>
          </div>
          <div className="rounded-3xl border border-borderColor-dark/30 p-4 text-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">Vendors</p>
            <ul className="mt-3 space-y-2">
              {vendorQuotes.map((vendor) => (
                <li key={vendor.id} className="flex items-center justify-between rounded-2xl border border-borderColor-dark/20 px-3 py-2">
                  <div>
                    <p className="font-semibold">{vendor.vendor}</p>
                    <p className="text-xs text-textSecondary">Lead time {vendor.leadTime}</p>
                  </div>
                  <span className="text-xs text-primary-gold">{vendor.variance}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const CostTools = ({ onNavigate }) => {
  const { state } = useAppState();
  return (
    <div className="min-h-screen bg-background-light text-textPrimary-light dark:bg-background dark:text-textPrimary">
      <Navbar onNavigate={onNavigate} />
      <main id="main-content" className="container max-w-6xl space-y-10 pt-28 pb-16">
        <header className="rounded-3xl border border-borderColor-dark/20 bg-black/80 p-6 text-white shadow-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary-gold/70">Intelligence tools</p>
          <h1 className="mt-2 text-3xl font-heading font-semibold">Estimate & plan with confidence</h1>
          <p className="mt-2 text-sm text-white/70">Signed in as {state.role}. Data resets between sessions.</p>
        </header>
        <CostEstimator />
        <MaterialCalculator />
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default CostTools;
