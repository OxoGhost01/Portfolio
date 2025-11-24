export default function Hobbies() {
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
                    I spend way too much time tuning setups, practicing drift lines, and trying to master
                    technical tracks. The Mazda RX-7 will forever be my dream machine.
                </p>
            </div>


            <div className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20">
                <h3 className="font-semibold text-xl mb-2">Rubik's Cubes</h3>
                <p className="text-gray-300">
                    I enjoy speedsolving, optimizing my algorithms, and collecting unique cube models.
                </p>
            </div>


            <div className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20">
                <h3 className="font-semibold text-xl mb-2">Linux & System Tweaks</h3>
                <p className="text-gray-300">
                    I customize workflows, automate everything I can, and experiment with different distros
                    and window managers.
                </p>
            </div>


            <div className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20">
                <h3 className="font-semibold text-xl mb-2">Factory Games</h3>
                <p className="text-gray-300">
                    Nothing beats designing absurdly efficient production chains and optimizing systems
                    until they break.
                </p>
            </div>
        </div>
        </div>
    </div>
</section>
);
}