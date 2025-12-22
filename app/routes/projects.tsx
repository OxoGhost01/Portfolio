import { useEffect } from "react";
    
    export default function Projects() {
        useEffect(() => {
                document.title = "Projects - OxoGhost";
            })
    return (
        <div className="h-full flex flex-col min-h-0">
        <div className="flex-shrink-0 mb-4">
            <h2 className="text-3xl font-bold mb-2">Projects</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
            Here are some of the projects I'm working on — from AI experiments to backend
            tools and personal tech challenges.
            </p>
        </div>
        
        <div className="flex-1 min-h-0 overflow-y-auto pr-2 -mr-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">

                {/* TEMPLATE for all cards */}
                {/* Project 1 */}
                <a
                    href="https://github.com/OxoGhost01/TrackmanAI"
                    target="_blank"
                    className="group bg-white/10 backdrop-blur rounded-xl border border-white/20 hover:bg-white/20 transition cursor-pointer flex overflow-hidden"
                >
                    {/* LEFT SQUARE */}
                    <div className="relative w-32 h-32 sm:w-36 sm:h-36 border-r border-white/10 flex-shrink-0 overflow-hidden rounded-xl">
                        <img
                            src="/projects/trackmanai.png"
                            alt="TrackmanAI"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="p-4 flex flex-col justify-center items-start">
                        <h3 className="font-semibold text-xl mb-1">TrackmanAI</h3>
                        <p className="text-gray-300 text-sm mb-3">
                            A DRL agent that learns to drive in TMNF.
                        </p>

                        {/* TAG */}
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-white/10 shadow-[0_0_10px_rgba(255,0,255,0.25)]">
                                Python
                            </span>
                            <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-white/10 shadow-[0_0_10px_rgba(255,0,255,0.25)]">
                                AngelScript
                            </span>
                        </div>
                    </div>
                </a>


                {/* Project 2 */}
                <a
                    href="https://github.com/OxoGhost01/Hokito_python"
                    target="_blank"
                    className="group bg-white/10 backdrop-blur rounded-xl border border-white/20 hover:bg-white/20 transition cursor-pointer flex overflow-hidden"
                >
                    <div className="relative w-32 h-32 sm:w-36 sm:h-36 border-r border-white/10 flex-shrink-0 overflow-hidden rounded-xl">
                        <img
                            src="/projects/hokito.png"
                            alt="Hokito"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-4 flex flex-col justify-center">
                        <h3 className="font-semibold text-xl mb-1">Hokito game in Python</h3>
                        <p className="text-gray-300 text-sm mb-3">
                            A Hokito game made with pygame — solo or local multiplayer.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-white/10 shadow-[0_0_10px_rgba(255,0,255,0.25)]">
                                Python
                            </span>
                        </div>
                    </div>
                </a>


                {/* Project 3 */}
                <a
                    href="https://github.com/OxoGhost01/Clone_YTS_But_Strange"
                    target="_blank"
                    className="group bg-white/10 backdrop-blur rounded-xl border border-white/20 hover:bg-white/20 transition cursor-pointer flex overflow-hidden"
                >
                    <div className="w-32 h-32 sm:w-36 sm:h-36 bg-gradient-to-br from-purple-600/40 to-pink-600/40 border-r border-white/10 flex-shrink-0"></div>

                    <div className="p-4 flex flex-col justify-center">
                        <h3 className="font-semibold text-xl mb-1">Little streaming website</h3>
                        <p className="text-gray-300 text-sm mb-3">
                            My first full stack website with both backend and frontend.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-white/10 shadow-[0_0_10px_rgba(255,0,255,0.25)]">
                                JavaScript
                            </span>
                            <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-white/10 shadow-[0_0_10px_rgba(255,0,255,0.25)]">
                                TypeScript
                            </span>
                        </div>
                    </div>
                </a>

                {/* Project 4 */}
                <a
                    href="https://github.com/OxoGhost01/Echoes-of-the-Cretan-Labyrinth"
                    target="_blank"
                    className="group bg-white/10 backdrop-blur rounded-xl border border-white/20 hover:bg-white/20 transition cursor-pointer flex overflow-hidden"
                >
                    <div className="relative w-32 h-32 sm:w-36 sm:h-36 border-r border-white/10 flex-shrink-0 overflow-hidden rounded-xl">
                        <img
                            src="/projects/maze.png"
                            alt="Maze"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-4 flex flex-col justify-center">
                        <h3 className="font-semibold text-xl mb-1">Echoes of the Cretan Labyrinth</h3>
                        <p className="text-gray-300 text-sm mb-3">
                            A very hard maze game made with pygame.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-white/10 shadow-[0_0_10px_rgba(255,0,255,0.25)]">
                                Python
                            </span>
                        </div>
                    </div>
                </a>

                {/* Project 5 */}
                <a
                    href="https://github.com/OxoGhost01/Checkers-Game-in-Python"
                    target="_blank"
                    className="group bg-white/10 backdrop-blur rounded-xl border border-white/20 hover:bg-white/20 transition cursor-pointer flex overflow-hidden"
                >
                    <div className="relative w-32 h-32 sm:w-36 sm:h-36 border-r border-white/10 flex-shrink-0 overflow-hidden rounded-xl">
                        <img
                            src="/projects/dames.png"
                            alt="Dames"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-4 flex flex-col justify-center">
                        <h3 className="font-semibold text-xl mb-1">Checkers game in Python</h3>
                        <p className="text-gray-300 text-sm mb-3">
                            A full checkers game with pygame. All rules included.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-white/10 shadow-[0_0_10px_rgba(255,0,255,0.25)]">
                                Python
                            </span>
                        </div>
                    </div>
                </a>


                {/* Project 6 */}
                <a
                    href="https://github.com/OxoGhost01/Tic-Tac-Toe-in-C"
                    target="_blank"
                    className="group bg-white/10 backdrop-blur rounded-xl border border-white/20 hover:bg-white/20 transition cursor-pointer flex overflow-hidden"
                >
                    <div className="relative w-32 h-32 sm:w-36 sm:h-36 border-r border-white/10 flex-shrink-0 overflow-hidden rounded-xl">
                        <img
                            src="/projects/tictactoe_c.png"
                            alt="Tic Tac Toe in C"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-4 flex flex-col justify-center">
                        <h3 className="font-semibold text-xl mb-1">Tic Tac Toe in C</h3>
                        <p className="text-gray-300 text-sm mb-3">
                            Simple terminal tic tac toe game written in C.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-white/10 shadow-[0_0_10px_rgba(255,0,255,0.25)]">
                                C
                            </span>
                        </div>
                    </div>
                </a>


                {/* Project 67 */}
                <a
                    href="https://github.com/OxoGhost01/double_chained_lists"
                    target="_blank"
                    className="group bg-white/10 backdrop-blur rounded-xl border border-white/20 hover:bg-white/20 transition cursor-pointer flex overflow-hidden"
                >
                    <div className="relative w-32 h-32 sm:w-36 sm:h-36 border-r border-white/10 flex-shrink-0 overflow-hidden rounded-xl">
                        <img
                            src="/projects/chained_lists.png"
                            alt="Chained_lists code"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-4 flex flex-col justify-center">
                        <h3 className="font-semibold text-xl mb-1">Double Chained Lists in C</h3>
                        <p className="text-gray-300 text-sm mb-3">
                            Simple doubly linked list implementation in C.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-white/10 shadow-[0_0_10px_rgba(255,0,255,0.25)]">
                                C
                            </span>
                        </div>
                    </div>
                </a>


                {/* Project 8 */}
                <a
                    href="https://github.com/OxoGhost01/Chess_in_python"
                    target="_blank"
                    className="group bg-white/10 backdrop-blur rounded-xl border border-white/20 hover:bg-white/20 transition cursor-pointer flex overflow-hidden"
                >
                    <div className="relative w-32 h-32 sm:w-36 sm:h-36 border-r border-white/10 flex-shrink-0 overflow-hidden rounded-xl">
                        <img
                            src="/projects/chess.png"
                            alt="Chess"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-4 flex flex-col justify-center">
                        <h3 className="font-semibold text-xl mb-1">Chess in Python</h3>
                        <p className="text-gray-300 text-sm mb-3">
                            Unfinished chess game in pygame — too lazy to implement check logic 😄
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-white/10 shadow-[0_0_10px_rgba(255,0,255,0.25)]">
                                Python
                            </span>
                        </div>
                    </div>
                </a>

                {/* Project 9 */}
                <a
                    href="https://github.com/OxoGhost01/SpotiShit"
                    target="_blank"
                    className="group bg-white/10 backdrop-blur rounded-xl border border-white/20 hover:bg-white/20 transition cursor-pointer flex overflow-hidden"
                >
                    <div className="relative w-32 h-32 sm:w-36 sm:h-36 border-r border-white/10 flex-shrink-0 overflow-hidden rounded-xl">
                        <img
                            src="/projects/spotishit.png"
                            alt="Spotishit"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-4 flex flex-col justify-center">
                        <h3 className="font-semibold text-xl mb-1">Spotishit</h3>
                        <p className="text-gray-300 text-sm mb-3">
                            See the currently playing song on Spotify
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-white/10 shadow-[0_0_10px_rgba(255,0,255,0.25)]">
                                Python
                            </span>
                            <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-white/10 shadow-[0_0_10px_rgba(255,0,255,0.25)]">
                                HTML
                            </span>
                        </div>
                    </div>
                </a>

            </div>

        </div>
    </div>
    );
}
