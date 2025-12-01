import { useEffect } from "react";

export default function About() {
useEffect(() => {
    document.title = "About - OxoGhost";
}, []);

return (
    <section className="h-full flex flex-col gap-8 animate-fadeIn">
    {/* Header */}
    <div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
        About me
        </h2>
        <p className="text-gray-300 text-base md:text-lg max-w-2xl">
        I&apos;m a computer science student who enjoys understanding how things work
        under the hood — from operating systems and memory to machine learning
        models and game engines.
        </p>
    </div>

    {/* Main content: two columns */}
    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 min-h-0 overflow-y-auto pr-1 md:pr-3">
        {/* Left: story / background */}
        <div className="md:col-span-2 flex flex-col gap-6 pr-1 md:pr-3 -mr-1">
        <div className="bg-white/5 backdrop-blur rounded-2xl border border-white/15 p-4 md:p-5 space-y-3">
            <h3 className="font-semibold text-lg md:text-xl">Background</h3>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
            I started by customizing and jailbreaking iPhones, then moved to Linux,
            scripting and low-level programming. That habit of taking things apart
            to see how they work naturally led me to computer science.
            </p>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
            At the moment, I&apos;m studying CS in Paris and exploring the space
            between <span className="font-medium">machine learning</span> and{" "}
            <span className="font-medium">systems programming</span>. I like projects
            where performance, correctness and experimentation all matter.
            </p>
        </div>

        <div className="bg-white/5 backdrop-blur rounded-2xl border border-white/15 p-4 md:p-5 space-y-3">
            <h3 className="font-semibold text-lg md:text-xl">What I enjoy working on</h3>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
            I&apos;m particularly interested in:
            </p>
            <ul className="text-sm md:text-base text-gray-200 space-y-1.5 list-disc list-inside">
            <li>Designing small ML agents for control, driving or game environments</li>
            <li>Writing clear, efficient code in Python or C</li>
            <li>Understanding how systems behave under stress or constraints</li>
            <li>Automating repetitive tasks and building small tools that solve real problems</li>
            </ul>
        </div>

        <div className="bg-white/5 backdrop-blur rounded-2xl border border-white/15 p-4 md:p-5 space-y-3">
            <h3 className="font-semibold text-lg md:text-xl">What I&apos;m looking for</h3>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
            I&apos;m looking for opportunities where I can:
            </p>
            <ul className="text-sm md:text-base text-gray-200 space-y-1.5 list-disc list-inside">
            <li>Contribute to real projects in software engineering or ML</li>
            <li>Learn from more experienced engineers and improve my foundations</li>
            <li>Work on problems that involve performance, data or complex systems</li>
            </ul>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
            If you think my profile could match your team or project, feel free to
            reach out — I&apos;m always open to learning and collaborating.
            </p>
        </div>
        </div>

        {/* Right: skills / stack / how I work */}
        <div className="flex flex-col gap-4 md:gap-5">
        <div className="bg-white/5 backdrop-blur rounded-2xl border border-white/15 p-4 md:p-5">
            <h3 className="font-semibold text-lg mb-2">Skills & tools</h3>
            <div className="flex flex-wrap gap-2 text-xs text-gray-100">
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                Python
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                C
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                Linux & CLI
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                Git & GitHub
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                Basic web (HTML/CSS/JS)
            </span>
            {/* adjust / add more as needed */}
            </div>
        </div>

        <div className="bg-white/5 backdrop-blur rounded-2xl border border-white/15 p-4 md:p-5">
            <h3 className="font-semibold text-lg mb-2">How I work</h3>
            <ul className="text-sm text-gray-200 space-y-1.5 list-disc list-inside">
            <li>Curious and willing to dig into documentation and source code</li>
            <li>Comfortable iterating: start simple, measure, improve</li>
            <li>Value clear code and small, understandable steps</li>
            </ul>
        </div>

        <div className="bg-white/5 backdrop-blur rounded-2xl border border-white/15 p-4 md:p-5">
            <h3 className="font-semibold text-lg mb-2">Outside of code</h3>
            <p className="text-sm text-gray-200 leading-relaxed">
            I enjoy simracing and drifting (especially the Mazda RX-7), solving
            Rubik&apos;s cubes and playing factory-style games. These hobbies often
            influence the kind of projects I build and the systems I want to model.
            </p>
        </div>
        </div>
    </div>
    </section>
);
}
