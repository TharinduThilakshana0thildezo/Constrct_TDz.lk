import React, { useMemo, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer';
import AnimatedHeroBackground from '../components/AnimatedHeroBackground';

const SAMPLE_PROJECTS = [
  {
    id: 1,
    name: 'Residential Complex',
    location: 'Colombo, Sri Lanka',
    client: 'Acme Homes',
    type: 'Residential',
    startDate: '2023-02-01',
    endDate: '2024-10-31',
    status: 'Ongoing',
    budget: 500000,
    images: [
      'https://via.placeholder.com/1200x800?text=Residential+1',
      'https://via.placeholder.com/1200x800?text=Residential+2',
      'https://via.placeholder.com/1200x800?text=Residential+3',
    ],
    beforeAfter: [
      { before: 'https://via.placeholder.com/800x500?text=Before', after: 'https://via.placeholder.com/800x500?text=After' }
    ],
    video: '',
    scope: 'Multi-unit residential development with community amenities',
    materials: 'Concrete, Reinforced steel, Glass facade',
    technologies: 'Prefabrication, BIM',
    challenges: 'Tight site footprint — implemented just-in-time deliveries',
    safety: 'OSHA-compliant site practices, daily toolbox talks',
    manager: 'Saman Perera',
    team: ['Arch: Niroshan Silva', 'Engineer: Amal Jayasekara', 'Contractor: BuildCo'],
    progress: 62,
    milestones: [
      { title: 'Foundation complete', date: '2023-05-15' },
      { title: 'Structure topping', date: '2024-01-10' },
    ],
    testimonial: { text: 'Great delivery and communication.', rating: 4.5, clientLogo: '' },
    downloads: [{ name: 'Brochure', url: '#' }, { name: 'Drawings', url: '#' }],
  },
  // repeat minimal entries for remaining sample projects
  ...[2,3,4,5,6].map((n) => ({
    id: n,
    name: ['Commercial Office','Renovation Project','Engineering Design','Material Supply','Infrastructure Work'][n-2] || `Project ${n}`,
    location: ['Galle, Sri Lanka','Kandy, Sri Lanka','Negombo, Sri Lanka','Matara, Sri Lanka','Trincomalee, Sri Lanka'][n-2] || 'Sri Lanka',
    client: `Client ${n}`,
    type: ['Commercial','Renovation','Engineering','Materials','Infrastructure'][n-2] || 'Other',
    startDate: '2022-01-01',
    endDate: '2023-12-31',
    status: n % 3 === 0 ? 'Completed' : 'Ongoing',
    budget: 500000 * n,
    images: [
      `https://via.placeholder.com/1200x800?text=Project+${n}+A`,
      `https://via.placeholder.com/1200x800?text=Project+${n}+B`,
    ],
    beforeAfter: [],
    video: '',
    scope: 'Scope description',
    materials: 'Materials list',
    technologies: 'Technologies used',
    challenges: 'Key challenges',
    safety: 'Safety measures',
    manager: `Manager ${n}`,
    team: [`Lead ${n}`, `Partner ${n}`],
    progress: n * 10,
    milestones: [{ title: 'Milestone 1', date: '2022-03-01' }],
    testimonial: { text: 'Client feedback', rating: 4.0, clientLogo: '' },
    downloads: [],
  }))
];

const FindProjects = ({ onNavigate }) => {
  const { theme } = useTheme();
  const [projects] = useState(SAMPLE_PROJECTS);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      const el = document.getElementById('project-details');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedProject]);

  const filtered = useMemo(() => projects.filter((p) => {
    const matchesSearch = search.trim() === '' || p.name.toLowerCase().includes(search.toLowerCase()) || p.location.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !category || p.type.toLowerCase() === category.toLowerCase();
    return matchesSearch && matchesCategory;
  }), [projects, search, category]);

  const handleViewDetails = (proj) => setSelectedProject(proj);

  const handleRequestQuote = (proj) => {
    if (onNavigate) onNavigate('contact');
    else window.location.href = `mailto:info@example.com?subject=Quote%20Request%20for%20${encodeURIComponent(proj.name)}`;
  };

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-background-light dark:bg-background text-textPrimary-light dark:text-textPrimary">
        <Navbar onNavigate={onNavigate} hideNavItems={true} logoScrollToTop={true} />
        
        {/* Hero Section */}
        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40 relative overflow-hidden">
          <AnimatedHeroBackground isDark={theme === 'dark'} />
          <div className="container max-w-7xl py-12 md:py-20 relative z-10">
            <div className="mx-auto max-w-3xl">
              <div className="mb-6 flex items-center justify-between">
                <button
                  onClick={() => onNavigate && onNavigate('home')}
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary-gold to-primary-goldSecondary px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-black shadow-card"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-black">←</span>
                  <span className="hidden sm:inline">Back to Home</span>
                </button>

                <nav className="hidden sm:block text-sm text-textSecondary">
                  <ol className="inline-flex items-center gap-2">
                    <li>
                      <button
                        className="text-textSecondary-light dark:text-textSecondary hover:underline"
                        onClick={() => onNavigate && onNavigate('home')}
                      >
                        Home
                      </button>
                    </li>
                    <li className="text-textSecondary-light dark:text-textSecondary">/</li>
                    <li className="font-medium">Projects</li>
                  </ol>
                </nav>
              </div>

              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-gold">Projects</p>
                <h1 className="mt-4 text-3xl md:text-4xl font-heading font-semibold tracking-tight text-textPrimary">
                  Find Projects & Opportunities
                </h1>
                <p className="mt-3 text-sm text-textSecondary">
                  Explore available projects and opportunities on the ConsTrct TDz platform. Connect with the right projects for your expertise.
                </p>
                <div className="mt-4 h-1 w-28 mx-auto rounded-full bg-gradient-to-r from-primary-gold to-silver" />
              </div>

              <nav className="mt-4 text-sm text-textSecondary sm:hidden">
                <ol className="inline-flex items-center gap-2">
                  <li>
                    <button
                      className="text-textSecondary-light dark:text-textSecondary hover:underline"
                      onClick={() => onNavigate && onNavigate('home')}
                    >
                      Home
                    </button>
                  </li>
                  <li className="text-textSecondary-light dark:text-textSecondary">/</li>
                  <li className="font-medium">Projects</li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="container max-w-7xl mx-auto px-4 py-16">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-borderColor-light dark:border-borderColor-dark/60 bg-white dark:bg-card/80 text-textPrimary-light dark:text-textPrimary placeholder-textSecondary-light dark:placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all"
              />
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="px-4 py-3 rounded-lg border border-borderColor-light dark:border-borderColor-dark/60 bg-white dark:bg-card/80 text-textPrimary-light dark:text-textPrimary focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all">
                <option value="">All Categories</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Renovation">Renovation</option>
                <option value="Engineering">Engineering</option>
                <option value="Materials">Materials</option>
                <option value="Infrastructure">Infrastructure</option>
              </select>
              <button onClick={() => { setSearch(''); setCategory(''); }} className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary-gold to-primary-goldSecondary text-black font-semibold text-sm uppercase tracking-[0.16em] hover:from-primary-goldSecondary hover:to-primary-gold transition-all shadow-card">
                Reset
              </button>
            </div>
          </div>
        </section>

        {/* Project Details (visible when a project is selected) */}
        {selectedProject && (
          <section id="project-details" className="container max-w-6xl mx-auto px-4 py-16 bg-card-light dark:bg-card/80 rounded-2xl">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <h3 className="font-heading text-2xl font-semibold">{selectedProject.name}</h3>
                <p className="text-sm text-textSecondary-light dark:text-textSecondary mt-2">{selectedProject.location} • {selectedProject.client}</p>

                <div className="mt-4">
                  <strong>Project Type:</strong> {selectedProject.type} • <strong>Status:</strong> {selectedProject.status}
                </div>

                {/* Gallery */}
                <div className="mt-6 grid gap-3 grid-cols-1 md:grid-cols-3">
                  {selectedProject.images?.map((img, i) => (
                    <img key={i} src={img} alt={`${selectedProject.name} ${i+1}`} className="w-full h-40 object-cover rounded" />
                  ))}
                </div>

                {/* Before / After (if available) */}
                {selectedProject.beforeAfter?.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-medium">Before / After</h4>
                    <div className="mt-3 flex gap-3">
                      {selectedProject.beforeAfter.map((ba, idx) => (
                        <div key={idx} className="flex-1">
                          <img src={ba.before} alt="before" className="w-full h-40 object-cover rounded" />
                          <p className="mt-2 text-xs text-textSecondary-light dark:text-textSecondary">Before</p>
                          <img src={ba.after} alt="after" className="w-full h-40 object-cover rounded mt-2" />
                          <p className="mt-2 text-xs text-textSecondary-light dark:text-textSecondary">After</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Details */}
                <div className="mt-6 space-y-3">
                  <div>
                    <h4 className="font-medium">Scope of Work</h4>
                    <p className="text-sm text-textSecondary-light dark:text-textSecondary">{selectedProject.scope}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Materials Used</h4>
                    <p className="text-sm text-textSecondary-light dark:text-textSecondary">{selectedProject.materials}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Technologies / Methods</h4>
                    <p className="text-sm text-textSecondary-light dark:text-textSecondary">{selectedProject.technologies}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Challenges & Solutions</h4>
                    <p className="text-sm text-textSecondary-light dark:text-textSecondary">{selectedProject.challenges}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Safety Standards</h4>
                    <p className="text-sm text-textSecondary-light dark:text-textSecondary">{selectedProject.safety}</p>
                  </div>
                </div>
              </div>

              <aside className="md:col-span-1 space-y-4">
                <div className="p-4 bg-background rounded">
                  <p className="text-xs text-textSecondary-light dark:text-textSecondary">Project Manager</p>
                  <p className="font-medium mt-1">{selectedProject.manager}</p>
                  <p className="text-xs text-textSecondary-light dark:text-textSecondary mt-2">Team</p>
                  <ul className="mt-1 text-sm">
                    {selectedProject.team.map((t, i) => <li key={i}>{t}</li>)}
                  </ul>
                </div>

                <div className="p-4 bg-background rounded">
                  <p className="text-xs text-textSecondary-light dark:text-textSecondary">Progress</p>
                  <div className="w-full h-3 bg-borderColor-light rounded mt-2">
                    <div className="h-3 bg-primary-gold rounded" style={{ width: `${selectedProject.progress}%` }} />
                  </div>
                  <p className="text-sm mt-2">{selectedProject.progress}% complete</p>
                  <div className="mt-3">
                    <h5 className="font-medium">Milestones</h5>
                    <ul className="text-sm mt-2 space-y-1">
                      {selectedProject.milestones.map((m, idx) => (
                        <li key={idx}>{m.date} — {m.title}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-background rounded">
                  <h5 className="font-medium">Map Location</h5>
                  <div className="mt-2 w-full h-40 overflow-hidden rounded">
                    <iframe title="map" width="100%" height="100%" frameBorder="0" src={`https://www.google.com/maps?q=${encodeURIComponent(selectedProject.location)}&output=embed`} />
                  </div>
                </div>

                <div className="p-4 bg-background rounded">
                  <h5 className="font-medium">Client Testimonial</h5>
                  <p className="text-sm mt-2">"{selectedProject.testimonial.text}"</p>
                  <p className="text-xs mt-2">Rating: {selectedProject.testimonial.rating} / 5</p>
                </div>

                <div className="p-4 bg-background rounded space-y-2">
                  <h5 className="font-medium">Downloads</h5>
                  {selectedProject.downloads.length ? selectedProject.downloads.map((d, i) => (
                    <a key={i} href={d.url} className="block text-sm text-primary-gold">{d.name}</a>
                  )) : <p className="text-sm text-textSecondary-light">No downloads available</p>}
                </div>

                <div className="p-4 bg-background rounded flex flex-col gap-2">
                  <button onClick={() => handleRequestQuote(selectedProject)} className="w-full px-3 py-2 bg-gradient-to-r from-primary-gold to-primary-goldSecondary text-black font-semibold rounded">Request Similar Quote</button>
                  <a href={`mailto:info@example.com?subject=Inquiry%20about%20${encodeURIComponent(selectedProject.name)}`} className="w-full text-center px-3 py-2 rounded border border-borderColor-light">Contact</a>
                </div>
              </aside>
            </div>
          </section>
        )}

        {/* Featured Projects Section */}
        <section className="container max-w-7xl mx-auto px-4 py-16">
          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-gold">
                Active Opportunities
              </p>
              <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-textPrimary-light dark:text-textPrimary">
                Featured Projects
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => (
                <article
                  key={project.id}
                  className="group rounded-2xl border border-borderColor-light dark:border-borderColor-dark/60 bg-card-light dark:bg-card/80 overflow-hidden hover:border-primary-gold transition-all duration-200 hover:shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
                >
                  {/* Project Image */}
                  <div className="w-full h-48 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${project.images?.[0]})` }}>
                    <div className="text-center bg-black/30 px-3 py-1 rounded">
                      <div className="text-2xl font-bold text-primary-gold/90">{project.name}</div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-semibold text-textPrimary-light dark:text-textPrimary">{project.name}</h3>
                    <p className="mt-2 text-sm text-textSecondary-light dark:text-textSecondary">{project.scope}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-primary-gold/10 text-primary-gold">{project.type}</span>
                      <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500">{project.status}</span>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm font-semibold text-textSecondary-light dark:text-textSecondary">Budget: LKR {project.budget.toLocaleString()}</span>
                    </div>

                    <button onClick={() => handleViewDetails(project)} className="mt-4 w-full px-4 py-2 rounded-lg border border-primary-gold text-primary-gold font-medium text-sm uppercase tracking-[0.16em] hover:bg-primary-gold hover:text-black transition-all">View Details</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default FindProjects;