"use client"

import { useState, useEffect } from "react"
import myimage from "../images/my_image_new.png"
import { ButtonPrimary, ButtonOutline } from "./Button.jsx"

const Hero = () => {
  const [animate, setAnimate] = useState(true)
  const [textAnimate, setTextAnimate] = useState(false)

  useEffect(() => {
    const textTimer = setTimeout(() => setTextAnimate(true), 500)
    const imageTimer = setTimeout(() => setAnimate(false), 3000)

    return () => {
      clearTimeout(textTimer)
      clearTimeout(imageTimer)
    }
  }, [])

  return (
    <section id="home" className="pt-28 lg:pt-36 relative overflow-hidden">
      {/* Background Pulse Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10 relative z-10">
        {/* Left Side */}
        <div className={`${textAnimate ? "animate-slideInLeft" : "opacity-0"}`}>
          <div className="flex items-center gap-3 mb-6">
            <figure className="w-12 h-12 rounded-2xl overflow-hidden ring-2 ring-blue-400/30 hover:ring-blue-400/50 transition-all shadow-lg shadow-blue-400/10">
              <img src={myimage} alt="Raghavendra Timmanagoudar" width={48} height={48} className="hover:scale-110 transition-transform duration-300" />
            </figure>
            <div className="flex items-center gap-3 text-zinc-400 text-sm tracking-wider bg-zinc-800/50 backdrop-blur-sm px-5 py-2.5 rounded-full border border-zinc-700/50 hover:border-blue-400/30 transition-all duration-300">
              <span className="relative w-3 h-3 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
              <span className="font-medium text-zinc-300">Available for Work</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-[15ch] mt-5 mb-8 lg:mb-10 leading-tight">
            <span className="bg-gradient-to-r from-zinc-50 via-blue-400 to-indigo-400 bg-clip-text text-transparent animate-gradient-x">
              Building Scalable
            </span>
            <br />
            <span className="text-zinc-50">Modern Websites</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              for the Future
            </span>
          </h1>

          <p className="text-lg text-zinc-400 mb-8 max-w-[45ch] leading-relaxed">
            Full Stack Developer & DevOps Engineer passionate about creating
            <span className="text-blue-400 font-medium"> scalable solutions</span> and
            <span className="text-cyan-400 font-medium"> modern experiences</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <ButtonPrimary href="/vite-project/public/RE.pdf" label="Download CV" icon="download" />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <ButtonOutline href="#about" label="Scroll down" icon="arrow_downward" />
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <div className="px-4 py-2 bg-zinc-800/50 backdrop-blur-sm rounded-full border border-zinc-700/50 text-sm text-zinc-400 hover:text-blue-400 hover:border-blue-400/30 transition-all duration-300">
              React & Node.js
            </div>
            <div className="px-4 py-2 bg-zinc-800/50 backdrop-blur-sm rounded-full border border-zinc-700/50 text-sm text-zinc-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300">
              AWS & DevOps
            </div>
            <div className="px-4 py-2 bg-zinc-800/50 backdrop-blur-sm rounded-full border border-zinc-700/50 text-sm text-zinc-400 hover:text-indigo-400 hover:border-indigo-400/30 transition-all duration-300">
              Kubernetes & Docker
            </div>
          </div>
        </div>

        {/* Mobile Image */}
        <div className="lg:hidden flex justify-center mt-12">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-400/20 via-indigo-400/10 to-cyan-400/5 rounded-[40px] blur-2xl scale-110" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/15 via-transparent to-indigo-400/15 rounded-[40px] blur-xl scale-105" />

            <figure
              className={`relative w-full max-w-[300px] bg-gradient-to-t from-blue-400/80 via-indigo-400/60 to-cyan-400/40 rounded-[40px] overflow-hidden border-2 border-white/20 shadow-2xl shadow-blue-400/20 ${
                animate ? "animate-slideInUp" : ""
              }`}
            >
              <img src={myimage} alt="Raghavendra Timmanagoudar" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent" />

              {/* Developer Badge */}
              {/* <div className="absolute top-4 left-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full border border-white/30 text-zinc-800 text-xs font-semibold shadow-lg">
                Full Stack Developer
              </div> */}

              {/* DevOps Badge (MOBILE - slightly left) */}
              {/* <div className="absolute top-14 left-2 px-3 py-1.5 bg-blue-400/90 backdrop-blur-sm rounded-full border border-blue-300/50 text-white text-xs font-semibold shadow-lg">
                DevOps Engineer
              </div> */}

              {/* JS Icon */}
              <div
                className="absolute top-6 right-6 w-10 h-10 bg-blue-400/20 backdrop-blur-sm rounded-full border border-blue-400/40 flex items-center justify-center animate-bounce shadow-lg"
                style={{ animationDelay: "1s" }}
              >
                <span className="text-blue-300 text-xs font-bold">JS</span>
              </div>

              {/* ⚛️ React Icon */}
              <div
                className="absolute bottom-20 left-6 w-8 h-8 bg-cyan-400/20 backdrop-blur-sm rounded-full border border-cyan-400/40 flex items-center justify-center animate-bounce shadow-lg"
                style={{ animationDelay: "2s" }}
              >
                <span className="text-cyan-300 text-xs font-bold">⚛</span>
              </div>
            </figure>
          </div>
        </div>

        {/* Desktop Image */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-400/25 via-indigo-400/15 to-cyan-400/10 rounded-[50px] blur-3xl scale-115" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-indigo-400/20 rounded-[50px] blur-2xl scale-110" />
            <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/15 via-transparent to-blue-400/15 rounded-[50px] blur-xl scale-105" />

            <figure
              className={`relative w-full max-w-[480px] ml-auto bg-gradient-to-t from-blue-400/90 via-indigo-400/70 to-cyan-400/50 rounded-[50px] overflow-hidden border-3 border-white/20 shadow-2xl shadow-blue-400/25 hover:shadow-blue-400/30 transition-all duration-700 ${
                animate ? "animate-float" : ""
              }`}
            >
              <img src={myimage} alt="Hero" width={656} height={800} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent" />

              {/* Badges moved left */}
              {/* <div className="absolute top-8 left-6 px-5 py-2.5 bg-white/95 backdrop-blur-sm rounded-full border border-white/40 text-zinc-800 text-sm font-bold shadow-xl">
                Full Stack Developer
              </div>
              <div className="absolute top-20 left-6 px-4 py-2 bg-blue-400/90 backdrop-blur-sm rounded-full border border-blue-300/50 text-white text-xs font-semibold shadow-lg">
                DevOps Engineer
              </div> */}

              {/* Tech Icons */}
              <div className="absolute top-12 right-12 w-14 h-14 bg-blue-400/25 backdrop-blur-sm rounded-full border border-blue-400/40 flex items-center justify-center animate-bounce shadow-xl" style={{ animationDelay: "1s" }}>
                <span className="text-blue-200 text-sm font-bold">JS</span>
              </div>
              <div className="absolute top-32 right-8 w-12 h-12 bg-cyan-400/25 backdrop-blur-sm rounded-full border border-cyan-400/40 flex items-center justify-center animate-bounce shadow-xl" style={{ animationDelay: "2s" }}>
                <span className="text-cyan-200 text-sm font-bold">⚛</span>
              </div>
             
              <div className="absolute bottom-24 left-12 w-10 h-10 bg-indigo-400/25 backdrop-blur-sm rounded-full border border-indigo-400/40 flex items-center justify-center animate-bounce shadow-xl" style={{ animationDelay: "3s" }}>
                <span className="text-indigo-200 text-xs font-bold">☁</span>
              </div>
              <div className="absolute bottom-40 right-16 w-8 h-8 bg-purple-400/25 backdrop-blur-sm rounded-full border border-purple-400/40 flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: "4s" }}>
                <span className="text-purple-200 text-xs font-bold">K8s</span>
              </div>
            </figure>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-8px) rotate(0.5deg);
          }
          50% {
            transform: translateY(-4px) rotate(0deg);
          }
          75% {
            transform: translateY(-12px) rotate(-0.5deg);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out;
        }

        .animate-slideInUp {
          animation: slideInUp 1s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero
