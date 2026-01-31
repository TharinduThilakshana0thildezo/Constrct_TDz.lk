import React, { useState, useEffect } from 'react';
import LoginNavbar from '../components/LoginNavbar';
import LoginCard from '../components/LoginCard';

const Login = ({ onNavigate, onLogin }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorGlow, setCursorGlow] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setCursorGlow({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="min-h-screen bg-background-light text-textPrimary-light dark:bg-background dark:text-textPrimary transition-colors duration-300 ease-emphasized relative overflow-hidden cursor-default"
      style={{
        '--cursor-x': `${cursorGlow.x}px`,
        '--cursor-y': `${cursorGlow.y}px`,
      }}
    >
      {/* Premium Background Elements - Light Mode */}
      <div className="absolute inset-0 dark:hidden">
        {/* Gradient mesh background - Silver plated */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-gray-200"></div>

        {/* Deep silver gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-300/40 via-transparent to-slate-200/40"></div>

        {/* Animated silver gradient orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-slate-400/40 to-slate-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tl from-slate-300/35 to-slate-200/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-slate-350/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-tl from-slate-300/25 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Grid pattern overlay - Silver */}
        <div className="absolute inset-0 bg-silver-grid-pattern opacity-8"></div>

        {/* Deep horizontal silver lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-400/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-400/50 to-transparent"></div>
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-350/40 to-transparent"></div>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/45 to-transparent"></div>
          <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-350/35 to-transparent"></div>
        </div>

        {/* Vertical silver accent lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-slate-350/30 to-transparent"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-slate-300/30 to-transparent"></div>
        </div>

        {/* Premium silver corner frames */}
        <div className="absolute top-0 left-0 w-40 h-40">
          <div className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-slate-400/70 to-transparent"></div>
          <div className="absolute top-0 left-0 h-32 w-px bg-gradient-to-b from-slate-400/70 to-transparent"></div>
          <div className="absolute top-3 left-3 w-24 h-24 border border-slate-300/50 rounded-br-3xl"></div>
        </div>

        <div className="absolute top-0 right-0 w-40 h-40">
          <div className="absolute top-0 right-0 w-32 h-px bg-gradient-to-l from-slate-400/70 to-transparent"></div>
          <div className="absolute top-0 right-0 h-32 w-px bg-gradient-to-b from-slate-400/70 to-transparent"></div>
          <div className="absolute top-3 right-3 w-24 h-24 border border-slate-300/50 rounded-bl-3xl"></div>
        </div>

        <div className="absolute bottom-0 left-0 w-40 h-40">
          <div className="absolute bottom-0 left-0 w-32 h-px bg-gradient-to-r from-slate-400/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 h-32 w-px bg-gradient-to-t from-slate-400/60 to-transparent"></div>
          <div className="absolute bottom-3 left-3 w-24 h-24 border border-slate-300/50 rounded-tr-3xl"></div>
        </div>

        <div className="absolute bottom-0 right-0 w-40 h-40">
          <div className="absolute bottom-0 right-0 w-32 h-px bg-gradient-to-l from-slate-400/60 to-transparent"></div>
          <div className="absolute bottom-0 right-0 h-32 w-px bg-gradient-to-t from-slate-400/60 to-transparent"></div>
          <div className="absolute bottom-3 right-3 w-24 h-24 border border-slate-300/50 rounded-tl-3xl"></div>
        </div>

        {/* Cursor-responsive glow in light mode */}
        <div 
          className="absolute pointer-events-none w-96 h-96 rounded-full bg-gradient-to-r from-slate-300/30 to-slate-200/20 blur-3xl opacity-0 transition-opacity duration-300"
          style={{
            left: `${cursorGlow.x - 192}px`,
            top: `${cursorGlow.y - 192}px`,
            opacity: 0.6,
            filter: 'blur(80px)',
          }}
        ></div>
      </div>

      {/* Premium Background Elements - Dark Mode */}
      <div className="absolute inset-0 hidden dark:block">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>

        {/* Animated luxury gradient orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-primary-gold/30 to-primary-goldSecondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tl from-slate-700/20 to-slate-800/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-primary-gold/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-tl from-slate-700/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Noise texture overlay */}
        <div className="absolute inset-0 bg-noise opacity-5"></div>

        {/* Luxury horizontal lines with gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-gold/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-goldSecondary/30 to-transparent"></div>
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-gold/20 to-transparent"></div>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/30 to-transparent"></div>
          <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-gold/15 to-transparent"></div>
        </div>

        {/* Vertical accent lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary-gold/10 to-transparent"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary-goldSecondary/10 to-transparent"></div>
        </div>

        {/* Premium corner frames */}
        <div className="absolute top-0 left-0 w-40 h-40">
          <div className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-primary-gold/50 to-transparent"></div>
          <div className="absolute top-0 left-0 h-32 w-px bg-gradient-to-b from-primary-gold/50 to-transparent"></div>
        </div>

        <div className="absolute top-0 right-0 w-40 h-40">
          <div className="absolute top-0 right-0 w-32 h-px bg-gradient-to-l from-primary-gold/50 to-transparent"></div>
          <div className="absolute top-0 right-0 h-32 w-px bg-gradient-to-b from-primary-gold/50 to-transparent"></div>
        </div>

        <div className="absolute bottom-0 left-0 w-40 h-40">
          <div className="absolute bottom-0 left-0 w-32 h-px bg-gradient-to-r from-primary-gold/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 h-32 w-px bg-gradient-to-t from-primary-gold/40 to-transparent"></div>
        </div>

        <div className="absolute bottom-0 right-0 w-40 h-40">
          <div className="absolute bottom-0 right-0 w-32 h-px bg-gradient-to-l from-primary-gold/40 to-transparent"></div>
          <div className="absolute bottom-0 right-0 h-32 w-px bg-gradient-to-t from-primary-gold/40 to-transparent"></div>
        </div>

        {/* Cursor-responsive glow in dark mode */}
        <div 
          className="absolute pointer-events-none w-96 h-96 rounded-full bg-gradient-to-r from-primary-gold/40 to-primary-goldSecondary/30 blur-3xl opacity-0 transition-opacity duration-300"
          style={{
            left: `${cursorGlow.x - 192}px`,
            top: `${cursorGlow.y - 192}px`,
            opacity: 0.5,
            filter: 'blur(80px)',
          }}
        ></div>
      </div>

      {/* Navbar and Content */}
      <div className="relative z-10">
        <LoginNavbar onNavigate={onNavigate} />
        <main>
          <section className="flex min-h-screen items-center justify-center py-16 md:py-24">
            <div className="w-full max-w-md px-4">
              <LoginCard isRegister={isRegister} setIsRegister={setIsRegister} onLogin={onLogin} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Login;
