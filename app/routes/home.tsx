import { Link } from "react-router";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        document.title = "Home - OxoGhost";
    }, []);

    return (
        <section className="flex flex-col items-center text-center space-y-10 animate-fadeIn h-full justify-center">

            {/* Bigger Profile Picture */}
            <img
                src="/profile.png"
                alt="Profile"
                className="w-80 h-80 rounded-full object-cover shadow-2xl border border-white/30"
            />

            {/* Name + Title */}
            <div className="flex flex-col space-y-1">
                <h2 className="text-5xl font-bold">Arlen Ghost</h2>
                <p className="text-2xl text-gray-300">CS Student & ML Enthusiast</p>
            </div>

            {/* Wider Buttons (single-line text + glow) */}
            <div className="flex flex-col sm:flex-row gap-6 mt-6 w-full max-w-2xl"> 
                <Link
                    to="/projects"
                    className="flex-1 
                        bg-gradient-to-br from-purple-600/30 to-pink-600/30 
                        backdrop-blur-xl 
                        border border-white/20 
                        py-3 px-6 rounded-xl text-xl font-medium text-nowrap
                        hover:from-purple-500/50 hover:to-pink-500/50 
                        transition shadow-[0_0_20px_rgba(255,0,255,0.2)] hover:shadow-[0_0_25px_rgba(255,0,255,0.4)]"
                >
                    🚀 My Projects
                </Link>

                <Link
                    to="/about"
                    className="flex-1 
                        bg-gradient-to-br from-purple-600/30 to-pink-600/30 
                        backdrop-blur-xl 
                        border border-white/20 
                        py-3 px-6 rounded-xl text-xl font-medium text-nowrap
                        hover:from-purple-500/50 hover:to-pink-500/50 
                        transition shadow-[0_0_20px_rgba(255,0,255,0.2)] hover:shadow-[0_0_25px_rgba(255,0,255,0.4)]"
                >
                    👤 More About Me
                </Link>

                <a
                    href="/ArlenGhost_CV.pdf"
                    download
                    className="flex-1 
                        bg-gradient-to-br from-purple-600/30 to-pink-600/30 
                        backdrop-blur-xl 
                        border border-white/20 
                        py-3 px-6 rounded-xl text-xl font-medium text-nowrap
                        hover:from-purple-500/50 hover:to-pink-500/50 
                        transition shadow-[0_0_20px_rgba(255,0,255,0.2)] hover:shadow-[0_0_25px_rgba(255,0,255,0.4)]"
                >
                    📄 Download CV
                </a>
            </div>
        </section>
    );
}
