import { useEffect, useRef } from "react";

export default function Home() {
const sectionRef = useRef<HTMLElement>(null);

useEffect(() => {
    document.title = "Home - OxoGhost"; 
}, []);

return (
    <section ref={sectionRef} className="space-y-8 animate-fadeIn">
    <h2 className="text-2xl font-bold">
        Arlen Ghost — CS Student & Machine Learning Enthusiast
    </h2>
    <p className="text-lg text-gray-200 leading-relaxed">
        📌 I'm a computer science student based in Paris, passionate about
        Machine Learning and systems programming.<br /><br />
        📱 I grew up modding and jailbreaking iPhones, customizing everything I
        touched — naturally leading me toward development.<br /><br />
        🤖 Today, I love building smart tools, experimenting with ML models, and
        working on high-performance backend systems.<br /><br />
        🎯 My current ambition: launching a YouTube channel where I develop an AI
        that plays better than me <br /> ↪ either in simple games, like Trackmania or
        complex factory games.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        <div className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20">
        <h3 className="font-semibold text-xl mb-2">🔥 What I Like</h3>
        <ul className="text-gray-300 space-y-1">
            <li>• Linux tweaking & automation</li>
            <li>• Simracing & drift (Mazda Rx-7 ❤️)</li>
            <li>• Rubik's cubes</li>
            <li>• Factory-style video games</li>
        </ul>
        </div>
        <div className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20">
        <h3 className="font-semibold text-xl mb-2">💻 Currently Working On</h3>
        <p className="text-gray-300">
            Training small ML agents to learn how to drive, drift, and make
            decisions in simulated environments.
        </p>
        </div>
    </div>
    </section>
);
}