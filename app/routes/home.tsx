import { Link } from "react-router";
import { useEffect, useState } from "react";

export default function Home() {
    useEffect(() => {
        document.title = "Home - OxoGhost";
    }, []);
    const [showCVMenu, setShowCVMenu] = useState(false);

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

                <div className="relative flex-1">
                    <button
                        onClick={() => setShowCVMenu((v) => !v)}
                        className="
                        flex-1 
                        bg-gradient-to-br from-purple-600/30 to-pink-600/30 
                        backdrop-blur-xl 
                        border border-white/20 
                        py-3 px-6 rounded-xl text-xl font-medium text-nowrap
                        hover:from-purple-500/50 hover:to-pink-500/50 
                        transition shadow-[0_0_20px_rgba(255,0,255,0.2)] hover:shadow-[0_0_25px_rgba(255,0,255,0.4)]
                        "
                    >
                        📄 Download CV
                    </button>
                    {showCVMenu && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div
                        className="absolute inset-0 backdrop-blur-sm"
                        onClick={() => setShowCVMenu(false)}
                        />

                        <div
                        className="
                            relative z-10 w-80
                            bg-black/70 backdrop-blur-xl
                            border border-white/20
                            rounded-2xl
                            p-6
                            shadow-2xl
                            text-center
                        "
                        >
                        <h3 className="text-xl font-semibold mb-2">
                            Choose CV language
                        </h3>

                        <p className="text-sm text-gray-300 mb-6">
                            Select the version you want to download
                        </p>

                        <div className="flex gap-4">
                            <a
                            href="/ArlenGhost_CV_EN.pdf"
                            download
                            className="
                                flex-1
                                py-3 rounded-xl
                                bg-gradient-to-br from-purple-600/30 to-pink-600/30
                                border border-white/20
                                hover:from-purple-500/40 hover:to-pink-500/40
                                transition
                            "
                            >
                            🇬🇧 English
                            </a>

                            <a
                            href="/ArlenGhost_CV_FR.pdf"
                            download
                            className="
                                flex-1
                                py-3 rounded-xl
                                bg-gradient-to-br from-purple-600/30 to-pink-600/30
                                border border-white/20
                                hover:from-purple-500/40 hover:to-pink-500/40
                                transition
                            "
                            >
                            🇫🇷 Français
                            </a>
                        </div>

                        <button
                            onClick={() => setShowCVMenu(false)}
                            className="mt-6 text-sm text-gray-400 hover:text-white transition"
                        >
                            Cancel
                        </button>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </section>
    );
}
