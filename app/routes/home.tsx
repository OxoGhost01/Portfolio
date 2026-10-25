import { Link } from "react-router";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Home() {
    useEffect(() => {
        document.title = "Home - OxoGhost";
    }, []);
    const [showCVMenu, setShowCVMenu] = useState(false);

    return (
        <section className="flex flex-col items-center text-center gap-[clamp(1rem,4dvh,2.5rem)] animate-fadeIn min-h-full justify-center py-2">

            {/* Bigger Profile Picture */}
            <img
                src="/profile.png"
                alt="Profile"
                className="size-[min(20rem,30dvh,65vw)] min-w-32 min-h-32 rounded-full object-cover shadow-2xl border border-white/30"
            />

            {/* Name + Title */}
            <div className="flex flex-col space-y-1">
                <h2 className="text-4xl sm:text-5xl font-bold">Arlen Ghost</h2>
                <p className="text-xl sm:text-2xl text-gray-300">CS Student & Low-Level Enjoyer</p>
            </div>

            {/* Wider Buttons (single-line text + glow) */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full max-w-2xl">
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
                        w-full
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
                    {showCVMenu && createPortal(
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div
                        className="absolute inset-0 backdrop-blur-sm"
                        onClick={() => setShowCVMenu(false)}
                        />

                        <div
                        className="
                            relative z-10 w-[min(20rem,calc(100vw-2rem))]
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
                            href="/CV-ArlenGhost-en.pdf"
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
                            href="/CV-ArlenGhost-fr.pdf"
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
                    </div>,
                    document.body
                    )}
                </div>
            </div>
        </section>
    );
}
