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

                {/* ---- CARDS ---- */}

                {/* Project 1 */}
                <a
                href="https://github.com/OxoGhost01/TrackmanAI"
                target="_blank"
                className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20 hover:bg-white/20 transition cursor-pointer"
                >
                <h3 className="font-semibold text-xl mb-2">TrackmanAI</h3>
                <p className="text-gray-300">
                    An DRL agent that learns to drive in tmnf.
                </p>
                </a>

                {/* Project 2 */}
                <a
                href="https://github.com/OxoGhost01/Hokito_python"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20 hover:bg-white/20 transition cursor-pointer"
                >
                <h3 className="font-semibold text-xl mb-2">
                    Hokito game in python
                </h3>
                <p className="text-gray-300">
                    A little game of Hokito made in python with pygame. You can play solo against the computer, or with a friend (local).
                </p>
                </a>

                {/* Project 3 */}
                <a
                href="https://github.com/OxoGhost01/Clone_YTS_But_Strange"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20 hover:bg-white/20 transition cursor-pointer"
                >
                <h3 className="font-semibold text-xl mb-2">
                    Little streaming website
                </h3>
                <p className="text-gray-300">
                    First full website with backend and frontend.
                </p>
                </a>

                {/* Project 4 */}
                <a
                href="https://github.com/OxoGhost01/Checkers-Game-in-Python"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20 hover:bg-white/20 transition cursor-pointer"
                >
                <h3 className="font-semibold text-xl mb-2">Checkers game in python</h3>
                <p className="text-gray-300">
                    A little game of checkers made in python with pygame, all rules implemented.
                </p>
                </a>

                {/* Project 5 */}
                <a
                href="https://github.com/OxoGhost01/Tic-Tac-Toe-in-C"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20 hover:bg-white/20 transition cursor-pointer"
                >
                <h3 className="font-semibold text-xl mb-2">Tic Tac Toe game in C</h3>
                <p className="text-gray-300">
                    Simple tic tac toe game in C, in the terminal.
                </p>
                </a>

                {/* Project 6 */}
                <a
                href="https://github.com/OxoGhost01/double_chained_lists"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20 hover:bg-white/20 transition cursor-pointer"
                >
                <h3 className="font-semibold text-xl mb-2">Double Chained Lists in C</h3>
                <p className="text-gray-300">
                    Really simple double chained lists in C.
                </p>
                </a>

                {/* Project 7 */}
                <a
                href="https://github.com/OxoGhost01/Chess_in_python"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20 hover:bg-white/20 transition cursor-pointer"
                >
                <h3 className="font-semibold text-xl mb-2">Chess game in python</h3>
                <p className="text-gray-300">
                    A little game of chess made in python with pygame, i never finished it because i'm too lazy to implement the check feature.
                </p>
                </a>
                {/* Project 6 */}
                <a
                href="https://github.com/OxoGhost01/double_chained_lists"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20 hover:bg-white/20 transition cursor-pointer"
                >
                <h3 className="font-semibold text-xl mb-2">Double Chained Lists in C</h3>
                <p className="text-gray-300">
                    Really simple double chained lists in C.
                </p>
                </a>

                {/* Project 7 */}
                <a
                href="https://github.com/OxoGhost01/Chess_in_python"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20 hover:bg-white/20 transition cursor-pointer"
                >
                <h3 className="font-semibold text-xl mb-2">Chess game in python</h3>
                <p className="text-gray-300">
                    A little game of chess made in python with pygame, i never finished it because i'm too lazy to implement the check feature.
                </p>
                </a>
            </div>
        </div>
    </div>
    );
}
