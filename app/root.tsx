import {
Link,
Links,
Meta,
Outlet,
Scripts,
ScrollRestoration,
} from "react-router";
import "./app.css";

export function Layout() {
const Starfield = () => {
    const stars = Array.from({ length: 800 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 2,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2
    }));

    return (
        <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
        <div className="absolute w-[200%] h-[200%] animate-rotate-slow">
            {stars.map(star => (
            <div
                key={star.id}
                className="absolute rounded-full bg-white animate-pulse"
                style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDuration: `${star.duration}s`,
                animationDelay: `${star.delay}s`,
                opacity: 0.8
                }}
            />
            ))}
        </div>
        <style>{`
            @keyframes rotate-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
            }
            .animate-rotate-slow {
            animation: rotate-slow 200s linear infinite;
            }
        `}</style>
        </div>
    );
};

const Nebula = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-pink-900/30 animate-pulse" 
            style={{ animationDuration: '8s' }} />
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-pink-500/20 rounded-full blur-3xl animate-pulse" 
            style={{ animationDuration: '6s' }} />
        <style>{`
            @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(50px, -50px) scale(1.1); }
            }
            @keyframes float-delayed {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-50px, 50px) scale(1.1); }
            }
            .animate-float {
            animation: float 15s ease-in-out infinite;
            }
            .animate-float-delayed {
            animation: float-delayed 20s ease-in-out infinite;
            }
        `}</style>
        </div>
    );
};

const ShootingStars = () => {
    const stars = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        top: Math.random() * 30,
        left: Math.random() * 100,
        delay: Math.random() * 8,         // spaced out
        duration: 6 + Math.random() * 4,  // 4–8s slow movement
        length: 50 + Math.random() * 70,  // tail length
    }));

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {stars.map(s => (
                <div
                    key={s.id}
                    className="shooting-star"
                    style={{
                        top: `${s.top}%`,
                        left: `${s.left}%`,
                        width: `${s.length}px`,
                        animationDelay: `${s.delay}s`,
                        ["--dur" as any]: `${s.duration}s`,
                    }}
                />
            ))}

            <style>{`
                .shooting-star {
                    position: absolute;
                    height: 2px;
                    background: linear-gradient(
                    90deg,
                    rgba(255,255,255,0),
                    rgba(255,255,255,0.95)
                    );
                    transform-origin: left center;
                    transform: rotate(45deg);
                    opacity: 0;
                    animation: shoot-star var(--dur, 6s) ease-in-out infinite;

                    /* GLOW STUFF */
                    filter: drop-shadow(0 0 6px white) drop-shadow(0 0 10px rgba(255,255,255,0.6));
                    /* optional: make the head brighter */
                    box-shadow: 0 0 8px white;
                }

                @keyframes shoot-star {
                    0% {
                    transform: translate(0, 0) rotate(45deg);
                    opacity: 0;
                    }
                    10% {
                    opacity: 1;
                    }
                    100% {
                    transform: translate(600px, 600px) rotate(45deg);
                    opacity: 0;
                    }
                }
                `}</style>
        </div>
    );
};

return (
    <html lang="en" className="h-full">
    <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/tab_icon.png" />
        <Meta />
        <Links />
    </head>
    <body className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6">

        <Starfield />
        <Nebula />
        <ShootingStars />

        <div
        className="glass-card w-full max-w-4xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-6 flex flex-col h-[750px] max-h-[850px]"
        >
        {/* Header */}
        <header className="flex items-center justify-between mb-6 flex-shrink-0">
            <Link to="/" className="flex items-center gap-3">
            <img
                src="/profile.png"
                alt="Profile"
                className="w-16 h-16 rounded-full bg-white/20 object-cover"
            />
            <h1 className="text-3xl font-semibold">Arlen Ghost</h1>
            </Link>
            <nav className="flex gap-6 text-lg">
            <Link to="/" className="hover:text-gray-300 transition">Home</Link>
            <Link to="/projects" className="hover:text-gray-300 transition">Projects</Link>
            <Link to="/about" className="hover:text-gray-300 transition">About</Link>
            <Link to="/contact" className="hover:text-gray-300 transition">Contact</Link>
            </nav>
        </header>

        {/* Main content area */}
        <main className="flex-1 min-h-0 flex flex-col">
            <Outlet />
        </main>
        </div>
        <ScrollRestoration />
        <Scripts />
    </body>
    <footer className="w-full text-center absolute bottom-2">
            <p className="text-sm text-gray-400">
            &copy; 2025-{new Date().getFullYear()} <Link to="/">OxoGhost</Link>. All rights reserved.
            </p>
    </footer>
    </html>
);
}

export default function Root() {
return <Layout />;
}