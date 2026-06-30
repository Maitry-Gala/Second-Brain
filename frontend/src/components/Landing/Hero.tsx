import { useNavigate } from "react-router";

export function Hero() {
  const navigate = useNavigate();
  return (
    <section className="pt-36 pb-24 px-8 max-w-6xl mx-auto">
      <div className="flex items-start justify-between gap-12">
        <div className="flex-1 max-w-lg">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-4">— AI-powered note-taking</p>
          <h1 className="text-5xl font-semibold text-gray-900 leading-tight mb-4">
            Save smarter,{" "}
            <span className="italic font-serif text-primary">remember everything.</span>
          </h1>
          <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-sm">
            Second Brain is your personal knowledge vault — save articles, videos, tweets, and images, then ask AI to surface what matters.
          </p>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate("/auth")} className="px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all active:scale-[0.98]">
              Start for free →
            </button>
            <button onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })} className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              See features
            </button>
          </div>
        </div>
 
        <div className="flex-1 max-w-md hidden md:block">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-100 bg-gray-50">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-gray-400 font-mono">second-brain.app/dashboard</span>
            </div>
            <div className="flex h-64">
              <div className="w-36 border-r border-gray-100 p-3 space-y-1 bg-white">
                <p className="text-[9px] uppercase tracking-widest text-gray-400 px-2 mb-2">Library</p>
                {["All", "Videos", "Articles", "Images", "Audio"].map((item, i) => (
                  <div key={item} className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[11px] ${i === 0 ? "bg-purple-50 text-primary font-medium" : "text-gray-400"}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-primary" : "bg-gray-200"}`} />
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex-1 p-3 space-y-2 bg-gray-50">
                {[
                  { title: "The Feynman Technique", type: "article", color: "bg-blue-100 text-blue-600" },
                  { title: "Build in public — how to start", type: "video", color: "bg-red-100 text-red-500" },
                  { title: "on shipping fast", type: "tweet", color: "bg-sky-100 text-sky-600" },
                ].map((card) => (
                  <div key={card.title} className="bg-white rounded-lg border border-gray-100 px-3 py-2">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] font-medium text-gray-700 truncate">{card.title}</p>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium ml-2 shrink-0 ${card.color}`}>{card.type}</span>
                    </div>
                  </div>
                ))}
                <div className="mt-3 flex items-center gap-2 bg-white border border-primary/30 rounded-lg px-3 py-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                  <span className="text-[10px] text-gray-400">Ask your brain anything…</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}