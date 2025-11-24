import {
Links,
Meta,
Outlet,
Scripts,
ScrollRestoration,
} from "react-router";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import "./app.css";

export function Layout() {
const glassRef = useRef<HTMLDivElement | null>(null);
const location = useLocation();
const isHome = location.pathname === '/';

useEffect(() => {
    const glass = glassRef.current;
    if (!glass) return;

    if (isHome) {
    // On Home: let it size naturally first, then save that height
    glass.style.height = 'auto';
    
    // Wait for render
    setTimeout(() => {
        const height = glass.offsetHeight;
        const heightPx = `${height}px`;
        localStorage.setItem('glass-card-height', heightPx);
        glass.style.height = heightPx;
    }, 50);
    } else {
    // On other pages: use the saved height
    const savedHeight = localStorage.getItem('glass-card-height');
    if (savedHeight) {
        glass.style.height = savedHeight;
    }
    }
}, [isHome]);

return (
    <html lang="en" className="h-full">
    <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
    </head>
    <body className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-6">
        <div
        ref={glassRef}
        className="glass-card w-full max-w-4xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-6 flex flex-col"
        >
        {/* Header */}
        <header className="flex items-center justify-between mb-6 flex-shrink-0">
            <div className="flex items-center gap-3">
            <img
                src="/app/assets/profile_icon.jpg"
                alt="Profile"
                className="w-16 h-16 rounded-full bg-white/20 object-cover"
            />
            <h1 className="text-3xl font-semibold">Arlen Ghost</h1>
            </div>
            <nav className="flex gap-6 text-lg">
            <a href="/" className="hover:text-gray-300 transition">Home</a>
            <a href="/projects" className="hover:text-gray-300 transition">Projects</a>
            <a href="/hobbies" className="hover:text-gray-300 transition">Hobbies</a>
            </nav>
        </header>

        {/* Main content area */}
        <main className="flex-1 min-h-0">
            <Outlet />
        </main>
        </div>
        <ScrollRestoration />
        <Scripts />
    </body>
    </html>
);
}

export default function Root() {
return <Layout />;
}