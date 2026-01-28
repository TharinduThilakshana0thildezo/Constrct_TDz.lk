import React, { useState } from 'react';

const LoginCard = ({ isRegister, setIsRegister, onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    accountType: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (isRegister) {
      if (!formData.fullName) {
        newErrors.fullName = 'Full name is required';
      }
      if (!formData.accountType) {
        newErrors.accountType = 'Please select an account type';
      }
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      console.log('Form submitted:', formData);
      setTimeout(() => {
        setSubmitted(false);
        // Trigger login navigation after success message with user data
        if (onLogin) {
          const userData = {
            name: formData.fullName || 'User',
            email: formData.email,
            avatar: formData.fullName ? formData.fullName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : 'U',
            role: formData.accountType ? formData.accountType.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'User',
          };
          onLogin(userData);
        }
        setFormData({
          email: '',
          password: '',
          confirmPassword: '',
          fullName: '',
          accountType: '',
        });
      }, 2000);
    } else {
      setErrors(newErrors);
    }
  };

  const toggleMode = () => {
    setIsRegister(!isRegister);
    setErrors({});
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      accountType: '',
      fullName: '',
    });
  };

  return (
    <div className="relative group">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-gold/20 to-primary-goldSecondary/20 dark:from-primary-gold/10 dark:to-primary-goldSecondary/10 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>

      {/* Premium Card */}
      <div className="relative backdrop-blur-3xl bg-white/10 dark:bg-black/40 border border-white/20 dark:border-primary-gold/30 rounded-2xl shadow-2xl overflow-hidden">
        {/* Top decorative line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-gold/50 to-transparent dark:via-primary-gold/40"></div>

        {/* Content */}
        <div className="relative p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-gold to-primary-goldSecondary rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative h-12 w-12 bg-background-light dark:bg-black rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-gold">LK</span>
                </div>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-gold via-primary-goldSecondary to-primary-gold dark:from-primary-gold dark:via-primary-goldSecondary dark:to-primary-gold mb-2">
              {isRegister ? 'Join ConsTrct TDz' : 'Welcome Back'}
            </h2>
            <p className="text-sm text-textSecondary-light dark:text-textSecondary">
              {isRegister
                ? 'Create an account to get started'
                : 'Sign in to your account to continue'}
            </p>
          </div>

          {/* Success message */}
          {submitted && (
            <div className="mb-6 p-4 rounded-lg bg-emerald-500/20 border border-emerald-500/50 text-emerald-700 dark:text-emerald-400 text-sm text-center">
              {isRegister
                ? 'Account created successfully!'
                : 'Login successful!'}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name - Register only */}
            {isRegister && (
              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="block text-xs font-semibold uppercase tracking-[0.16em] text-textSecondary-light dark:text-textSecondary"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter the full name"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-white/5 border border-white/30 dark:border-primary-gold/20 text-textPrimary-light dark:text-textPrimary placeholder-textSecondary-light dark:placeholder-textSecondary/50 focus:outline-none focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/30 dark:focus:border-primary-gold dark:focus:ring-primary-gold/20 transition-all duration-300"
                />
                {errors.fullName && (
                  <p className="text-xs text-red-500 dark:text-red-400">
                    {errors.fullName}
                  </p>
                )}
              </div>
            )}

            {/* Account Type - Register only */}
            {isRegister && (
              <div className="space-y-2">
                <label
                  htmlFor="accountType"
                  className="block text-xs font-semibold uppercase tracking-[0.16em] text-textSecondary-light dark:text-textSecondary"
                >
                  Account Type
                </label>
                <select
                  id="accountType"
                  name="accountType"
                  value={formData.accountType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-white/5 border border-white/30 dark:border-primary-gold/20 text-textPrimary-light dark:text-textPrimary focus:outline-none focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/30 dark:focus:border-primary-gold dark:focus:ring-primary-gold/20 transition-all duration-300 cursor-pointer"
                >
                  <option value="" className="bg-white dark:bg-slate-900">Select your account type</option>
                  <option value="contractor" className="bg-white dark:bg-slate-900">🔨 Contractor</option>
                  <option value="client" className="bg-white dark:bg-slate-900">👤 Property Owner / Client</option>
                  <option value="supplier" className="bg-white dark:bg-slate-900">🏗️ Supplier / Material Seller</option>
                  <option value="architect" className="bg-white dark:bg-slate-900">📐 Architect / Designer</option>
                  <option value="engineer" className="bg-white dark:bg-slate-900">⚙️ Engineer</option>
                  <option value="project-manager" className="bg-white dark:bg-slate-900">📋 Project Manager</option>
                  <option value="subcontractor" className="bg-white dark:bg-slate-900">🛠️ Sub-contractor</option>
                  <option value="inspector" className="bg-white dark:bg-slate-900">🔍 Inspector / Consultant</option>
                </select>
                {errors.accountType && (
                  <p className="text-xs text-red-500 dark:text-red-400">
                    {errors.accountType}
                  </p>
                )}
              </div>
            )}

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-[0.16em] text-textSecondary-light dark:text-textSecondary"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-white/5 border border-white/30 dark:border-primary-gold/20 text-textPrimary-light dark:text-textPrimary placeholder-textSecondary-light dark:placeholder-textSecondary/50 focus:outline-none focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/30 dark:focus:border-primary-gold dark:focus:ring-primary-gold/20 transition-all duration-300"
              />
              {errors.email && (
                <p className="text-xs text-red-500 dark:text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-xs font-semibold uppercase tracking-[0.16em] text-textSecondary-light dark:text-textSecondary"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-white/5 border border-white/30 dark:border-primary-gold/20 text-textPrimary-light dark:text-textPrimary placeholder-textSecondary-light dark:placeholder-textSecondary/50 focus:outline-none focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/30 dark:focus:border-primary-gold dark:focus:ring-primary-gold/20 transition-all duration-300"
              />
              {errors.password && (
                <p className="text-xs text-red-500 dark:text-red-400">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password - Register only */}
            {isRegister && (
              <div className="space-y-2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-xs font-semibold uppercase tracking-[0.16em] text-textSecondary-light dark:text-textSecondary"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Enter your password again"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-white/5 border border-white/30 dark:border-primary-gold/20 text-textPrimary-light dark:text-textPrimary placeholder-textSecondary-light dark:placeholder-textSecondary/50 focus:outline-none focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/30 dark:focus:border-primary-gold dark:focus:ring-primary-gold/20 transition-all duration-300"
                />
                {errors.confirmPassword && (
                  <p className="text-xs text-red-500 dark:text-red-400">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            )}

            {/* Remember me - Login only */}
            {!isRegister && (
              <div className="flex items-center justify-between pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-white/30 dark:border-primary-gold/20 bg-white/50 dark:bg-white/5 text-primary-gold focus:ring-2 focus:ring-primary-gold/30 dark:focus:ring-primary-gold/20 cursor-pointer"
                  />
                  <span className="text-xs text-textSecondary-light dark:text-textSecondary">
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="text-xs text-primary-gold hover:text-primary-goldSecondary transition-colors duration-200"
                >
                  Forgot password?
                </a>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-6 py-3 px-4 rounded-lg bg-gradient-to-r from-primary-gold to-primary-goldSecondary hover:from-primary-goldSecondary hover:to-primary-gold text-black font-semibold uppercase tracking-[0.16em] shadow-lg hover:shadow-primary-gold/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-gold focus:ring-offset-2 focus:ring-offset-background dark:focus:ring-offset-black"
            >
              {isRegister ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20 dark:border-primary-gold/20"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 text-textSecondary-light dark:text-textSecondary bg-white/10 dark:bg-black/40">
                OR
              </span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            {/* Google */}
            <button
              type="button"
              className="group py-3 px-4 rounded-lg border border-white/30 dark:border-primary-gold/20 bg-white/5 dark:bg-white/5 hover:bg-white/10 dark:hover:bg-white/10 hover:border-primary-gold/40 transition-all duration-300 flex items-center justify-center"
              title="Sign in with Google"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </button>

            {/* GitHub */}
            <button
              type="button"
              className="group py-3 px-4 rounded-lg border border-white/30 dark:border-primary-gold/20 bg-white/5 dark:bg-white/5 hover:bg-white/10 dark:hover:bg-white/10 hover:border-primary-gold/40 transition-all duration-300 flex items-center justify-center"
              title="Sign in with GitHub"
            >
              <svg className="w-5 h-5 fill-gray-700 dark:fill-white group-hover:fill-primary-gold dark:group-hover:fill-primary-gold transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </button>

            {/* Facebook */}
            <button
              type="button"
              className="group py-3 px-4 rounded-lg border border-white/30 dark:border-primary-gold/20 bg-white/5 dark:bg-white/5 hover:bg-white/10 dark:hover:bg-white/10 hover:border-primary-gold/40 transition-all duration-300 flex items-center justify-center"
              title="Sign in with Facebook"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
              </svg>
            </button>

            {/* Twitter/X */}
            <button
              type="button"
              className="group py-3 px-4 rounded-lg border border-white/30 dark:border-primary-gold/20 bg-white/5 dark:bg-white/5 hover:bg-white/10 dark:hover:bg-white/10 hover:border-primary-gold/40 transition-all duration-300 flex items-center justify-center"
              title="Sign in with Twitter"
            >
              <svg className="w-5 h-5 fill-gray-700 dark:fill-white group-hover:fill-primary-gold dark:group-hover:fill-primary-gold transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>
          </div>

          {/* Toggle Mode */}
          <div className="text-center text-sm">
            <span className="text-textSecondary-light dark:text-textSecondary">
              {isRegister
                ? 'Already have an account? '
                : "Don't have an account? "}
            </span>
            <button
              type="button"
              onClick={toggleMode}
              className="text-primary-gold hover:text-primary-goldSecondary font-semibold transition-colors duration-200"
            >
              {isRegister ? 'Sign In' : 'Register'}
            </button>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-gold/30 to-transparent dark:via-primary-gold/20"></div>
      </div>
    </div>
  );
};

export default LoginCard;
