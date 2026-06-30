export function Features() {
  const features = [
    {
      tag: "01",
      title: "Save anything, instantly",
      desc: "Paste a YouTube link, tweet, article, or image. Second Brain auto-previews and organizes it for you.",
      visual: (
        <div className="mt-4 space-y-2">
          {[
            { icon: "🎥", label: "youtube.com/watch?v=...", type: "video" },
            { icon: "🐦", label: "x.com/user/status/...", type: "tweet" },
            { icon: "📄", label: "medium.com/article...", type: "article" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 bg-gray-50 rounded-lg px-3 py-2">
              <span className="text-sm">{item.icon}</span>
              <span className="text-xs text-gray-400 flex-1 truncate font-mono">{item.label}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-50 text-primary font-medium">{item.type}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      tag: "02",
      title: "Ask your brain anything",
      desc: "Type a question and AI searches everything you've saved — like having a personal research assistant.",
      visual: (
        <div className="mt-4 space-y-2">
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs text-gray-400 mb-1">You asked</p>
            <p className="text-sm text-gray-700 font-medium">"What did I save about productivity?"</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-3 border border-primary/10">
            <p className="text-xs text-primary mb-1">Second Brain found</p>
            <p className="text-xs text-gray-600">3 articles, 1 video, and 2 tweets about productivity and deep work...</p>
          </div>
        </div>
      ),
    },
    {
      tag: "03",
      title: "Share your knowledge",
      desc: "Generate a public link to your brain. Share your curated knowledge with your team or the world.",
      visual: (
        <div className="mt-4">
          <div className="bg-gray-50 rounded-lg p-3 flex items-center gap-3">
            <div className="flex-1">
              <p className="text-[10px] text-gray-400 mb-1">Share link</p>
              <p className="text-xs font-mono text-primary truncate">second-brain.app/brain/y9q3pl...</p>
            </div>
            <button className="shrink-0 text-xs px-3 py-1.5 rounded-lg bg-primary text-white font-medium">Copy</button>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">Anyone with the link can view your saved content</p>
        </div>
      ),
    },
  ];
 
  return (
    <section id="features" className="py-14 px-8 max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-3">— What's inside</p>
        <h2 className="text-3xl font-semibold text-gray-900">
          A workspace that{" "}
          <span className="italic font-serif text-primary">thinks with you</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.tag} className="bg-white rounded-2xl border border-gray-100 p-6">
            <p className="text-[11px] font-semibold text-gray-300 mb-3">— {f.tag}</p>
            <h3 className="text-base font-semibold text-gray-900 mb-2">{f.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            {f.visual}
          </div>
        ))}
      </div>
    </section>
  );
}