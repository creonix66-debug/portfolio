"use client";
import { useEffect, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    title: "CRM Automation",
    description: "Built a complete GHL automation system with custom workflows.",
    thumbnail: "/static/demo.png",
    demoUrl: "https://englishtaxis.com/",
  
  },
  {
    title: "Portfolio Website",
    description: "Next.js + Tailwind responsive portfolio website.",
    thumbnail: "/static/demo.png",
    demoUrl: "https://iamhassan.vercel.app/",

  },
  {
    title: "CRM Automation",
    description: "Built a complete GHL automation system with custom workflows.",
    thumbnail: "/static/demo.png",
    demoUrl: "https://englishtaxis.com/",
  
  },
];



const VIEWPORT = {
  mobile:  { w: 390,  h: 844,  label: "Mobile"  }, // iPhone 14-ish
  tablet:  { w: 834,  h: 1112, label: "Tablet"  }, // iPad Air-ish
  desktop: { w: 1280, h: 800,  label: "Desktop" },
};

export default function WorkSection() {
  const [openDemo, setOpenDemo] = useState(null);
  const [device, setDevice] = useState("desktop");

  // close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpenDemo(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="work" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">My Work</h2>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition overflow-hidden flex flex-col"
            >
              {/* Thumb with hover overlay */}
              <button
                onClick={() => { setOpenDemo(p.demoUrl); setDevice("desktop"); }}
                className="relative h-48 w-full overflow-hidden text-left"
                aria-label={`Open ${p.title} preview`}
              >
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="w-full h-full object-fit transition-transform duration-300 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-2 rounded-lg bg-[#057CFB] text-white px-3 py-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition">
                  <ExternalLink size={14} /> Preview
                </div>
              </button>

              {/* Info */}
              <div className="p-6 flex-1 flex flex-col">
                <h3
                  onClick={() => { setOpenDemo(p.demoUrl); setDevice("desktop"); }}
                  className="text-lg font-semibold text-gray-900 mb-1 cursor-pointer underline decoration-transparent hover:decoration-[#057CFB] decoration-2 underline-offset-4 transition"
                  title="Open live preview"
                >
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">{p.description}</p>

                {/* Buttons */}
                <div className="flex items-center justify-center gap-3 mt-auto">
                  <button
                    onClick={() => { setOpenDemo(p.demoUrl); setDevice("desktop"); }}
                    className="flex items-center gap-2 bg-[#057CFB] text-white px-4 py-2 rounded-lg text-sm font-medium hover:brightness-95 transition"
                  >
                    <ExternalLink size={16} /> Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {openDemo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={(e) => {
            // close when clicking backdrop (but not when clicking inside the frame)
            if (e.target === e.currentTarget) setOpenDemo(null);
          }}
        >
          <div className="relative w-full h-full max-w-[95vw] max-h-[95vh] mx-auto flex flex-col rounded-2xl bg-white shadow-xl overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center justify-between gap-4 p-3 border-b">
              <div className="flex items-center gap-1">
                {(["mobile","tablet","desktop"]).map((d) => (
                  <button
                    key={d}
                    onClick={() => setDevice(d)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition
                      ${device === d
                        ? "bg-[#057CFB] text-white border-[#057CFB]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"}`}
                  >
                    {VIEWPORT[d].label}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setOpenDemo(null)}
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-gray-900 text-white text-sm hover:bg-black transition"
                aria-label="Close preview"
              >
                <X size={16} /> Close
              </button>
            </div>

            {/* Frame wrapper — centers the device viewport */}
            <div className="flex-1 overflow-auto">
              <div className="w-full h-full flex items-center justify-center p-4">
                <div
                  className="bg-white border rounded-[22px] shadow-2xl overflow-hidden"
                  style={{
                    width: VIEWPORT[device].w,
                    height: VIEWPORT[device].h,
                  }}
                >
                  {/* optional browser header mimic */}
                  <div className="h-8 bg-gray-100 border-b flex items-center gap-2 px-3">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="ml-3 text-xs text-gray-500 truncate">{openDemo}</span>
                  </div>
                  <iframe
                    src={openDemo}
                    className="w-full h-[calc(100%-2rem)] border-0"
                    allow="accelerometer; encrypted-media; gyroscope; fullscreen; clipboard-read; clipboard-write"
                    title="Live preview"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
