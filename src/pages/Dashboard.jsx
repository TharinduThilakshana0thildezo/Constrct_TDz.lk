import React, { useState } from 'react';
import DashboardNavbar from '../components/DashboardNavbar';

const Dashboard = ({ onNavigate, user: propUser }) => {
  const [user] = useState(propUser || {
    name: 'Guest User',
    email: 'guest@example.com',
    avatar: 'GU',
    role: 'User',
  });

  const stats = [
    { label: 'Active Projects', value: '12', icon: '📋', trend: '+3' },
    { label: 'Completed', value: '48', icon: '✅', trend: '+5' },
    { label: 'Total Revenue', value: '$127K', icon: '💰', trend: '+12%' },
    { label: 'Client Rating', value: '4.9', icon: '⭐', trend: '+0.2' },
  ];

  const recentProjects = [
    {
      id: 1,
      title: 'Modern Office Renovation',
      client: 'TechCorp Inc.',
      status: 'In Progress',
      progress: 65,
      budget: '$45,000',
      deadline: 'Feb 15, 2026',
    },
    {
      id: 2,
      title: 'Residential Kitchen Remodel',
      client: 'Smith Family',
      status: 'In Progress',
      progress: 40,
      budget: '$28,000',
      deadline: 'Mar 1, 2026',
    },
    {
      id: 3,
      title: 'Commercial Flooring Installation',
      client: 'Retail Solutions LLC',
      status: 'Planning',
      progress: 15,
      budget: '$62,000',
      deadline: 'Mar 20, 2026',
    },
  ];

  const quickActions = [
    { label: 'Post New Project', icon: '➕', color: 'from-primary-gold to-primary-goldSecondary' },
    { label: 'Find Contractors', icon: '👷', color: 'from-blue-500 to-blue-600' },
    { label: 'View Messages', icon: '💬', color: 'from-green-500 to-green-600' },
    { label: 'Cost Estimator', icon: '🧮', color: 'from-purple-500 to-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-slate-900 dark:to-black text-textPrimary-light dark:text-textPrimary transition-colors duration-300">
      <DashboardNavbar user={user} onNavigate={onNavigate} />
      
      <main className="pt-20 pb-12">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-gray-200 dark:border-borderColor-dark/40 bg-gradient-to-r from-primary-gold/5 via-transparent to-primary-goldSecondary/5 dark:from-primary-gold/10 dark:via-transparent dark:to-primary-goldSecondary/10">
          <div className="container max-w-7xl py-12 md:py-16">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">
                  Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-gold to-primary-goldSecondary">{user.name.split(' ')[0]}</span>! 👋
                </h1>
                <p className="text-textSecondary-light dark:text-textSecondary text-sm md:text-base">
                  Here's what's happening with your projects today.
                </p>
              </div>
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary-gold to-primary-goldSecondary text-black font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                + New Project
              </button>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="container max-w-7xl py-8 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-primary-gold/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 to-transparent dark:from-primary-gold/10 dark:to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">{stat.icon}</span>
                    <span className="text-xs font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
                      {stat.trend}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-primary-gold to-primary-goldSecondary">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-textSecondary-light dark:text-textSecondary font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="container max-w-7xl py-8">
          <h2 className="text-2xl font-heading font-bold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className={`group p-6 rounded-xl bg-gradient-to-br ${action.color} text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300`}
              >
                <div className="text-4xl mb-3">{action.icon}</div>
                <p className="font-semibold text-sm">{action.label}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Recent Projects */}
        <section className="container max-w-7xl py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-heading font-bold">Recent Projects</h2>
            <button className="text-sm font-semibold text-primary-gold hover:text-primary-goldSecondary transition-colors">
              View All →
            </button>
          </div>
          <div className="space-y-4">
            {recentProjects.map((project) => (
              <div
                key={project.id}
                className="group p-6 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-primary-gold/20 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                        <p className="text-sm text-textSecondary-light dark:text-textSecondary">
                          Client: {project.client}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'In Progress'
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                          : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="text-textSecondary-light dark:text-textSecondary">Progress</span>
                        <span className="font-semibold text-primary-gold">{project.progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary-gold to-primary-goldSecondary transition-all duration-500"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex lg:flex-col items-center lg:items-end gap-4 lg:gap-2 text-sm">
                    <div className="text-center lg:text-right">
                      <p className="text-textSecondary-light dark:text-textSecondary text-xs">Budget</p>
                      <p className="font-bold text-primary-gold">{project.budget}</p>
                    </div>
                    <div className="text-center lg:text-right">
                      <p className="text-textSecondary-light dark:text-textSecondary text-xs">Deadline</p>
                      <p className="font-semibold">{project.deadline}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Activity Feed & Notifications */}
        <section className="container max-w-7xl py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-primary-gold/20 shadow-lg">
              <h3 className="text-xl font-heading font-bold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { action: 'New message from TechCorp Inc.', time: '2 hours ago', icon: '💬' },
                  { action: 'Project milestone completed', time: '5 hours ago', icon: '✅' },
                  { action: 'Invoice #1234 paid', time: '1 day ago', icon: '💰' },
                  { action: 'New bid received', time: '2 days ago', icon: '📨' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                    <span className="text-2xl">{item.icon}</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.action}</p>
                      <p className="text-xs text-textSecondary-light dark:text-textSecondary">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Tasks */}
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-primary-gold/20 shadow-lg">
              <h3 className="text-xl font-heading font-bold mb-4">Upcoming Tasks</h3>
              <div className="space-y-3">
                {[
                  { task: 'Review kitchen design mockups', due: 'Today' },
                  { task: 'Site inspection - Office project', due: 'Tomorrow' },
                  { task: 'Submit permit applications', due: 'Jan 30' },
                  { task: 'Client meeting - Smith Family', due: 'Feb 2' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-borderColor-dark/40">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-gray-300 text-primary-gold focus:ring-primary-gold"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.task}</p>
                      <p className="text-xs text-textSecondary-light dark:text-textSecondary">Due: {item.due}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
