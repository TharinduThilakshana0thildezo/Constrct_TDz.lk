export const homeownerProjects = [
  {
    id: 'proj-001',
    title: 'Skyline Penthouse Renovation',
    status: 'In Progress',
    budget: 185000,
    location: 'Kuala Lumpur, MY',
    milestones: [
      { id: 'm1', label: 'Design Sign-off', due: '2026-02-20', completed: true },
      { id: 'm2', label: 'Structural Work', due: '2026-03-05', completed: false },
      { id: 'm3', label: 'MEP Rough-in', due: '2026-03-25', completed: false },
      { id: 'm4', label: 'Finishes & Handover', due: '2026-04-20', completed: false },
    ],
    bids: [
      { id: 'bid-101', contractor: 'Apex BuildCo', amount: 178000, etaWeeks: 12, rating: 4.9, status: 'shortlisted' },
      { id: 'bid-102', contractor: 'Skyline Builders', amount: 189500, etaWeeks: 10, rating: 4.7, status: 'new' },
      { id: 'bid-103', contractor: 'UrbanCraft Studios', amount: 210000, etaWeeks: 14, rating: 4.5, status: 'declined' },
    ],
    approvals: [
      { id: 'appr-1', label: 'Change order #12', amount: 6500, status: 'pending' },
      { id: 'appr-2', label: 'Milestone payout', amount: 32000, status: 'scheduled' },
    ],
    timeline: [
      { id: 'tl1', type: 'update', title: 'Site survey completed', timestamp: '2026-02-12T09:00:00Z' },
      { id: 'tl2', type: 'photo', title: 'Demo day highlights', timestamp: '2026-02-10T14:00:00Z', assets: 6 },
      { id: 'tl3', type: 'change', title: 'Added concealed lighting package', timestamp: '2026-02-09T16:30:00Z' },
    ],
    photos: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1484151709479-3996843263cf?auto=format&fit=crop&w=600&q=80',
    ],
  },
];

export const contractorApplications = [
  {
    id: 'app-2201',
    project: 'Eco Villa Extension',
    client: 'Nguyen Family',
    value: 92000,
    submitted: '2026-02-14',
    status: 'under-review',
  },
  {
    id: 'app-2202',
    project: 'Boutique Hotel Lobby Revamp',
    client: 'Halo Hospitality',
    value: 145000,
    submitted: '2026-02-11',
    status: 'shortlisted',
  },
];

export const contractorJobs = [
  {
    id: 'job-11',
    title: 'Coastal Retreat Modernisation',
    status: 'Active',
    progress: 52,
    deadline: '2026-03-30',
  },
  {
    id: 'job-12',
    title: 'CBD Office Lobby Upgrade',
    status: 'Pending Approvals',
    progress: 25,
    deadline: '2026-04-12',
  },
];

export const calendarEvents = [
  { id: 'ev1', title: 'Client design review', date: '2026-02-18', type: 'meeting' },
  { id: 'ev2', title: 'Site inspection - Lot 88', date: '2026-02-20', type: 'site' },
  { id: 'ev3', title: 'Invoice submission', date: '2026-02-22', type: 'finance' },
];

export const estimatorTemplates = [
  { id: 'temp1', label: 'Luxury Condo Fit-out', baseCostPerSqft: 185, multiplier: 1.12 },
  { id: 'temp2', label: 'Commercial Office Retrofit', baseCostPerSqft: 135, multiplier: 1.05 },
  { id: 'temp3', label: 'Landed Property Extension', baseCostPerSqft: 95, multiplier: 0.92 },
];

export const regionalMultipliers = [
  { id: 'kl', label: 'Kuala Lumpur', value: 1.15 },
  { id: 'pg', label: 'Penang', value: 1.08 },
  { id: 'jb', label: 'Johor Bahru', value: 1.05 },
  { id: 'bn', label: 'Borneo', value: 1.18 },
];

export const materialCatalog = [
  { id: 'mat1', name: 'Cross Laminated Timber', unit: 'm³', price: 420, density: 480 },
  { id: 'mat2', name: 'High performance glazing', unit: 'm²', price: 295, density: 15 },
  { id: 'mat3', name: 'Acoustic panel system', unit: 'm²', price: 115, density: 8 },
];

export const vendorQuotes = [
  { id: 'vendor1', vendor: 'Aurora Materials', leadTime: '12 days', rating: 4.8, variance: '+2.5%' },
  { id: 'vendor2', vendor: 'Nordic Supply Co.', leadTime: '9 days', rating: 4.6, variance: '-1.2%' },
  { id: 'vendor3', vendor: 'Vantage BuildMart', leadTime: '15 days', rating: 4.4, variance: '+0.8%' },
];

export const aiInsights = {
  costPrediction: {
    baseline: 182000,
    confidence: 0.82,
    drivers: [
      { label: 'Imported materials', impact: '+12%' },
      { label: 'Compressed timeline', impact: '+6%' },
      { label: 'Volume discount', impact: '-4%' },
    ],
  },
  designSuggestions: [
    {
      id: 'design-1',
      title: 'Biophilic atrium concept',
      impact: 'Improves daylight 22%',
      costDelta: '+4.5%',
      description: 'Add a perforated fins system with climbing planters to soften the lobby volume.',
    },
    {
      id: 'design-2',
      title: 'Modular services spine',
      impact: 'Cuts maintenance 18%',
      costDelta: '-2.3%',
      description: 'Prefabricated MEP spine allows faster installation and future-proof upgrades.',
    },
  ],
};

export const chatThreads = [
  {
    id: 'thread-01',
    projectId: 'proj-001',
    participants: ['You', 'Skyline Builders'],
    messages: [
      { id: 'msg-1', author: 'Skyline Builders', body: 'Uploading site photos shortly.', timestamp: '09:12', read: true },
      { id: 'msg-2', author: 'You', body: 'Great, please highlight the core drilling area.', timestamp: '09:14', read: true },
      { id: 'msg-3', author: 'Skyline Builders', body: 'Noted, also change order #12 ready for sign-off.', timestamp: '09:18', read: false },
    ],
  },
];
