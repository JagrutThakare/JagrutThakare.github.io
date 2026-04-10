import React, { useEffect, useState, Suspense, lazy } from 'react';
import Header from './components/Header';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
import { FaMoon, FaSun } from 'react-icons/fa';

function App() {
    const [theme, setTheme] = useState(() => {
        if (typeof window === 'undefined') {
            return 'light';
        }

        return window.localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        window.localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className="App">
            <ScrollProgress />
            <button
                type="button"
                className="theme-toggle"
                onClick={() => setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')}
                aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
                title={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
            >
                {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
            <Header />
            <main>
                <Hero />
                <Suspense fallback={null}>
                    <About />
                    <Skills />
                    <Experience />
                    <Projects />
                    <Education />
                    <Certifications />
                    <Contact />
                </Suspense>
            </main>
            <Suspense fallback={null}>
                <Footer />
            </Suspense>
        </div>
    );
}

export default App;
