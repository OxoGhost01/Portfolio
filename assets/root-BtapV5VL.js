import{w as i,p as e,M as d,L as m,q as t,O as x,S as h,t as c}from"./chunk-4WY6JWTD-DYuOlmbv.js";function f(){const r=()=>{const s=Array.from({length:800},(a,o)=>({id:o,x:Math.random()*100,y:Math.random()*100,size:Math.random()*2.5+2,duration:Math.random()*3+2,delay:Math.random()*2}));return e.jsxs("div",{className:"absolute inset-0 overflow-hidden flex items-center justify-center",children:[e.jsx("div",{className:"absolute w-[200%] h-[200%] animate-rotate-slow",children:s.map(a=>e.jsx("div",{className:"absolute rounded-full bg-white animate-pulse",style:{left:`${a.x}%`,top:`${a.y}%`,width:`${a.size}px`,height:`${a.size}px`,animationDuration:`${a.duration}s`,animationDelay:`${a.delay}s`,opacity:.8}},a.id))}),e.jsx("style",{children:`
            @keyframes rotate-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
            }
            .animate-rotate-slow {
            animation: rotate-slow 200s linear infinite;
            }
        `})]})},n=()=>e.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-pink-900/30 animate-pulse",style:{animationDuration:"8s"}}),e.jsx("div",{className:"absolute top-0 -left-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl animate-float"}),e.jsx("div",{className:"absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed"}),e.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-pink-500/20 rounded-full blur-3xl animate-pulse",style:{animationDuration:"6s"}}),e.jsx("style",{children:`
            @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(50px, -50px) scale(1.1); }
            }
            @keyframes float-delayed {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-50px, 50px) scale(1.1); }
            }
            .animate-float {
            animation: float 15s ease-in-out infinite;
            }
            .animate-float-delayed {
            animation: float-delayed 20s ease-in-out infinite;
            }
        `})]}),l=()=>{const s=Array.from({length:8},(a,o)=>({id:o,top:Math.random()*30,left:Math.random()*100,delay:Math.random()*8,duration:6+Math.random()*4,length:50+Math.random()*70}));return e.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden",children:[s.map(a=>e.jsx("div",{className:"shooting-star",style:{top:`${a.top}%`,left:`${a.left}%`,width:`${a.length}px`,animationDelay:`${a.delay}s`,"--dur":`${a.duration}s`}},a.id)),e.jsx("style",{children:`
                .shooting-star {
                    position: absolute;
                    height: 2px;
                    background: linear-gradient(
                    90deg,
                    rgba(255,255,255,0),
                    rgba(255,255,255,0.95)
                    );
                    transform-origin: left center;
                    transform: rotate(45deg);
                    opacity: 0;
                    animation: shoot-star var(--dur, 6s) ease-in-out infinite;

                    /* GLOW STUFF */
                    filter: drop-shadow(0 0 6px white) drop-shadow(0 0 10px rgba(255,255,255,0.6));
                    /* optional: make the head brighter */
                    box-shadow: 0 0 8px white;
                }

                @keyframes shoot-star {
                    0% {
                    transform: translate(0, 0) rotate(45deg);
                    opacity: 0;
                    }
                    10% {
                    opacity: 1;
                    }
                    100% {
                    transform: translate(600px, 600px) rotate(45deg);
                    opacity: 0;
                    }
                }
                `})]})};return e.jsxs("html",{lang:"en",className:"h-full",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("link",{rel:"icon",href:"/flavicon.ico"}),e.jsx(d,{}),e.jsx(m,{})]}),e.jsxs("body",{className:"min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-6",children:[e.jsx(r,{}),e.jsx(n,{}),e.jsx(l,{}),e.jsxs("div",{className:"glass-card w-full max-w-4xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-6 flex flex-col h-[750px] max-h-[850px]",children:[e.jsxs("header",{className:"flex items-center justify-between mb-6 flex-shrink-0",children:[e.jsxs(t,{to:"/",className:"flex items-center gap-3",children:[e.jsx("img",{src:"/app/assets/profile_icon.jpg",alt:"Profile",className:"w-16 h-16 rounded-full bg-white/20 object-cover"}),e.jsx("h1",{className:"text-3xl font-semibold",children:"Arlen Ghost"})]}),e.jsxs("nav",{className:"flex gap-6 text-lg",children:[e.jsx(t,{to:"/",className:"hover:text-gray-300 transition",children:"Home"}),e.jsx(t,{to:"/projects",className:"hover:text-gray-300 transition",children:"Projects"}),e.jsx(t,{to:"/about",className:"hover:text-gray-300 transition",children:"About"})]})]}),e.jsx("main",{className:"flex-1 min-h-0 flex flex-col",children:e.jsx(x,{})})]}),e.jsx(h,{}),e.jsx(c,{})]})]})}const p=i(function(){return e.jsx(f,{})});export{f as Layout,p as default};
