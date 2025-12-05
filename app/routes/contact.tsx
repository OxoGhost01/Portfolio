import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaDiscord } from "react-icons/fa";

export default function Contact() {
    useEffect(() => {
        document.title = "Contact - OxoGhost";
    }, []);

    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setStatus("idle");

        const formData = new FormData(e.target);
        formData.append("access_key", "1bf1f1ce-5238-4194-8077-a462e31a21cc");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        if (res.ok) {
            setStatus("success");
            e.target.reset();
        } else {
            setStatus("error");
        }
    };

    return (
        <section className="h-full flex flex-col animate-fadeIn">
            <h2 className="text-3xl font-bold mb-6">Contact</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">

                {/* LEFT — CONTACT FORM */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-6 flex flex-col justify-center">

                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Name */}
                        <div className="flex flex-col">
                            <label className="text-sm mb-1">Your name</label>
                            <input
                                name="name"
                                required
                                className="bg-white/10 border border-white/20 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                                placeholder="John Doe"
                            />
                        </div>

                        {/* Object */}
                        <div className="flex flex-col">
                            <label className="text-sm mb-1">Subject</label>
                            <input
                                name="subject"
                                required
                                className="bg-white/10 border border-white/20 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                                placeholder="Collaboration, question, etc."
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <label className="text-sm mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="bg-white/10 border border-white/20 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                                placeholder="example@mail.com"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col">
                            <label className="text-sm mb-1">Message</label>
                            <textarea
                                name="message"
                                required
                                rows={4}
                                className="bg-white/10 border border-white/20 rounded-lg p-2 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                                placeholder="Write your message..."
                            ></textarea>
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            className="w-full mt-4 py-3 rounded-xl font-semibold text-lg bg-gradient-to-br from-purple-600/40 to-pink-600/40 border border-white/20 shadow-[0_0_20px_rgba(255,0,255,0.2)] hover:from-purple-500/60 hover:to-pink-500/60 transition"
                        >
                            Send message
                        </button>

                        {/* Status message */}
                        {status === "success" && (
                            <p className="text-green-400 mt-2 text-center">
                                ✔ Message sent successfully!
                            </p>
                        )}
                        {status === "error" && (
                            <p className="text-red-400 mt-2 text-center">
                                ✖ Something went wrong. Please try again.
                            </p>
                        )}
                    </form>
                </div>

                {/* RIGHT — INFO CARD */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-6 flex flex-col justify-center text-center items-center">
                    <h3 className="text-2xl font-semibold mb-4">Contact info</h3>

                    <p className="text-gray-200">
                        <span className="font-semibold">Real name:</span>  
                        <br /> Timothée Gauchez
                    </p>

                    <div className="mt-4">
                        <p className="font-semibold mb-2">Socials</p>

                        <div className="flex gap-4 text-3xl">
                            <a
                                href="https://www.linkedin.com/in/timoth%C3%A9e-gauchez-ba6990335/"
                                target="_blank"
                                className="hover:text-purple-300 transition"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://github.com/OxoGhost01"
                                target="_blank"
                                className="hover:text-purple-300 transition"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://youtube.com/@OxoGhost01"
                                target="_blank"
                                className="hover:text-purple-300 transition"
                            >
                                <FaYoutube />
                            </a>
                            <a
                                href="#"
                                onClick={() => navigator.clipboard.writeText("arlen_ghost")}
                                className="hover:text-purple-300 transition cursor-pointer"
                                title="Copy Discord username"
                            >
                                <FaDiscord />
                            </a>
                        </div>

                        <p className="text-sm text-gray-400 mt-3">
                            (click the Discord icon to copy)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
