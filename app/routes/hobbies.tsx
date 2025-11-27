import { useEffect } from "react";

export default function Hobbies() {
    useEffect(() => {
        document.title = "Hobbies - OxoGhost";
    })
return (
<section className="flex flex-col h-full animate-fadeIn">
    <h2 className="text-3xl font-bold">My Hobbies</h2>

    <div className="mt-2 flex-1 min-h-0">
    <div className="h-full overflow-y-auto pr-3">

        <p className="text-lg text-gray-200 leading-relaxed">
            Outside of coding and Machine Learning, I love diving into hobbies that push my focus,
            precision, and creativity. Here's what keeps me energized.
        </p>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20">
                <h3 className="font-semibold text-xl mb-2">Simracing & Drift</h3>
                <p className="text-gray-300">
                    I spend way too much time on Assetto Corsa Competizione trying to get a better time, or on Carx Street, practicing drift with the Rx-7,
                    my beloved car.
                </p>
            </div>


            <div className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20">
                <h3 className="font-semibold text-xl mb-2">Rubik's Cubes</h3>
                <p className="text-gray-300">
                    I enjoy speedsolving, learning new ways to solves cubes, and collecting unique cube models.
                </p>
            </div>


            <div className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20">
                <h3 className="font-semibold text-xl mb-2">Coding</h3>
                <p className="text-gray-300">
                    I love coding, trying to code new things, and learning new languages, new tools, new ways to do something.
                </p>
            </div>


            <div className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20">
                <h3 className="font-semibold text-xl mb-2">Factory Games</h3>
                <p className="text-gray-300">
                    Nothing beats designing absurdly efficient production chains and optimizing systems
                    until they break.
                </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20">
                <h3 className="font-semibold text-xl mb-2">Cycling</h3>
                <p className="text-gray-300">
                    I do like to bike with my friend, go fullspeed in the downhill, and have a lot of fun.
                </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20">
                <h3 className="font-semibold text-xl mb-2">Music</h3>
                <p className="text-gray-300">
                    I live in music, listening to it all day long. I'm also a musician, i've been playing percussions for 13 years.
                </p>
            </div>
        </div>
        </div>
    </div>
</section>
);
}