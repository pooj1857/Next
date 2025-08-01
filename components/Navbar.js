import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.body.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo"> 🎀 </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li className={router.pathname === '/' ? 'active' : ''}>
          <Link href="/">Home</Link>
        </li>
        <li className={router.pathname === '/about' ? 'active' : ''}>
          <Link href="/about">About</Link>
        </li>
        <li className={router.pathname === '/contact' ? 'active' : ''}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <button className="toggle-btn" onClick={toggleDarkMode}>
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>

      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 30px;
          background-color: var(--bg);
          color: var(--text);
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          position: relative;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .menu-toggle {
          display: none;
          font-size: 1.8rem;
          cursor: pointer;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 30px;
          margin: 0;
        }

        .nav-links li {
          transition: 0.3s;
        }

        .nav-links li a {
          text-decoration: none;
          color: var(--text);
          font-weight: 500;
          font-size: 1rem;
        }

        .nav-links li:hover a {
          color: #0070f3;
        }

        .nav-links li.active a {
          border-bottom: 2px solid #0070f3;
        }

        .toggle-btn {
          padding: 6px 12px;
          background: transparent;
          border: 1px solid var(--text);
          border-radius: 4px;
          color: var(--text);
          cursor: pointer;
          font-size: 0.9rem;
        }

        :global(body) {
          --bg: white;
          --text: black;
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background-color: var(--bg);
          color: var(--text);
        }

        :global(body.dark) {
          --bg: #121212;
          --text: #f0f0f0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
          }

          .nav-links {
            flex-direction: column;
            position: absolute;
            top: 60px;
            right: 0;
            background: var(--bg);
            width: 100%;
            display: none;
            padding: 20px;
            gap: 15px;
            box-shadow: 0 8px 15px rgba(0,0,0,0.1);
          }

          .nav-links.active {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
