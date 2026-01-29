import React from 'react';

const featured = [
  {
    title: 'How Much Does It Cost to Build a House in Sri Lanka?',
    excerpt: 'A practical breakdown of costs, common allowances and guidance for realistic budgeting across regions.',
    readTime: '6 min',
  },
  {
    title: 'Understanding CIDA Contractor Grades',
    excerpt: 'What contractor grades mean, how to verify credentials, and why grades matter for different project types.',
    readTime: '4 min',
  },
  {
    title: 'Residential Construction Timeline Explained',
    excerpt: 'Typical milestones from foundation to handover with tips to keep projects on schedule.',
    readTime: '5 min',
  },
];

const FeaturedGuides = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-textPrimary mb-6">Featured Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featured.map((f) => (
          <article key={f.title} className="rounded-2xl border border-borderColor-light dark:border-borderColor-dark/40 bg-card-light dark:bg-card/80 p-6 shadow-subtle hover:-translate-y-1 transition-transform duration-200">
            <h3 className="text-lg font-semibold text-textPrimary">{f.title}</h3>
            <p className="mt-3 text-sm text-textSecondary">{f.excerpt}</p>
            <div className="mt-4 flex items-center justify-between text-xs text-textSecondary">
              <span>{f.readTime} read</span>
              <button className="text-primary-gold font-medium">Read More →</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FeaturedGuides;
