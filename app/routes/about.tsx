import { useEffect } from "react";
import {
    Code2,
    Cpu,
    TerminalSquare,
    FileCode,
    Blocks,
    Globe,
    Braces,
    Boxes
} from "lucide-react";


export default function About() {
    useEffect(() => {
        document.title = "About - OxoGhost";
    }, []);

    function Skill({ icon: Icon, name }: { icon: React.ComponentType<any>; name: string }) {
        return (
            <span className="
                flex items-center gap-2 px-3 py-1 rounded-full text-sm 
                bg-gradient-to-br from-purple-600/30 to-pink-600/30 
                border border-white/10 
                shadow-[0_0_10px_rgba(255,0,255,0.25)]
            ">
                <Icon className="w-4 h-4" />
                {name}
            </span>
        );
        }

    return (
        <section className="h-full flex flex-col gap-4 animate-fadeIn">

            {/* Header */}
            <div>
                <h2 className="text-3xl md:text-3xl font-semibold mb-3">About me</h2>
                <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                    I'm a CS student focused on{" "}
                    <span className="font-semibold bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        systems programming
                    </span>
                    ,{" "}
                    <span className="font-semibold bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        machine learning
                    </span>
                    , and building{" "}
                    <span className="font-semibold bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        small, efficient tools
                    </span>
                    . I like understanding how things work under the hood, writing clean performant code, and experimenting with agents, simulations, and system behavior.
                </p>
            </div>

            {/* Main content: two columns */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 min-h-0 overflow-y-auto pr-1 md:pr-3">

                {/* Left column: story + background */}
                <div className="md:col-span-2 flex flex-col gap-6 pr-1 md:pr-3 -mr-1">

                    {/* Background */}
                    <div className="bg-white/5 backdrop-blur rounded-2xl border border-white/15 p-4 md:p-5 space-y-3">
                        <h3 className="font-semibold text-lg md:text-xl">Background</h3>
                        <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                            I started by customizing and jailbreaking iPhones, then moved to Linux,
                            high and low-level programming. That habit of taking things apart
                            to see how they work naturally led me to computer science.
                        </p>
                        <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                            At the moment, I'm studying CS in Paris and exploring the space
                            between{" "}
                            <span className="font-medium bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                machine learning
                            </span>{" "}
                            and{" "}
                            <span className="font-medium bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                systems programming
                            </span>
                            . I like projects where performance, correctness and experimentation all matter.
                        </p>
                    </div>

                    {/* What I enjoy */}
                    <div className="bg-white/5 backdrop-blur rounded-2xl border border-white/15 p-4 md:p-5 space-y-3">
                        <h3 className="font-semibold text-lg md:text-xl">What I enjoy working on</h3>
                        <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                            I'm particularly interested in:
                        </p>
                        <ul className="text-sm md:text-base text-gray-200 space-y-1.5 list-disc list-inside">
                            <li>Designing{" "}
                            <span className="font-medium bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                RL agents
                            </span>{" "}for control, driving or game environments</li>
                            <li>Learning new ways of doing things, or new tools</li>
                            <li>Understanding how systems behave under stress or constraints</li>
                            <li>Automating repetitive tasks and building tools that solve real problems</li>
                            <li>Learning how things works under the hood</li>
                        </ul>
                    </div>

                    {/* What I'm looking for */}
                    <div className="bg-white/5 backdrop-blur rounded-2xl border border-white/15 p-4 md:p-5 space-y-3">
                        <h3 className="font-semibold text-lg md:text-xl">What I'm looking for</h3>
                        <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                            I'm looking for opportunities where I can:
                        </p>
                        <ul className="text-sm md:text-base text-gray-200 space-y-1.5 list-disc list-inside">
                            <li>Contribute to real projects in{" "}
                            <span className="font-medium bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                software engineering
                            </span>{" "},{" "}
                            <span className="font-medium bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Reinforcement Learning
                            </span>{" "}or{" "}
                            <span className="font-medium bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                video game
                            </span>{" "}development</li>
                            <li>Learn from more experienced engineers and strengthen my foundations</li>
                            <li>Work on problems involving{" "}
                            <span className="font-medium bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                performance
                            </span>{" "}, data or{" "}
                            <span className="font-medium bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                complex systems
                            </span>{" "}</li>
                        </ul>
                        <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                            If you think my profile could match your team or project, feel free to{" "}
                            <span className="font-medium bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                reach out
                            </span>{" "}— I'm always open to learning and collaborating.
                        </p>
                    </div>
                </div>

                {/* Right column: skills + how I work + hobbies */}
                <div className="flex flex-col gap-4 md:gap-5">

                    {/* Skills */}
                    <div className="bg-white/5 backdrop-blur rounded-2xl border border-white/15 p-4 md:p-5">
                        <h3 className="font-semibold text-lg mb-2">Skills & tools</h3>
                        <div className="flex flex-wrap gap-2 text-xs text-gray-100">
                            <div className="flex flex-wrap gap-2 text-xs text-gray-100">
                                <Skill icon={Cpu} name="Python" />
                                <Skill icon={Code2} name="C" />
                                <Skill icon={Code2} name="C++" />
                                <Skill icon={Code2} name="C#" />
                                <Skill icon={Braces} name="AngelScript" />
                                <Skill icon={Blocks} name="GDScript" />
                                <Skill icon={Globe} name="HTML/CSS" />
                                <Skill icon={FileCode} name="JavaScript" />
                                <Skill icon={FileCode} name="TypeScript" />
                            </div>
                        </div>
                    </div>

                    {/* How I work */}
                    <div className="bg-white/5 backdrop-blur rounded-2xl border border-white/15 p-4 md:p-5">
                        <h3 className="font-semibold text-lg mb-2">How I work</h3>
                        <ul className="text-sm text-gray-200 space-y-1.5 list-disc list-inside">
                            <li>Curious and willing to dig into documentation and source code</li>
                            <li>Comfortable iterating: start simple, measure, improve</li>
                            <li>Value clear code and small, understandable steps</li>
                        </ul>
                    </div>

                    {/* Outside of code */}
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
