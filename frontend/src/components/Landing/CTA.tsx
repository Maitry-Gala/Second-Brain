import { useNavigate } from "react-router";
export function CTA() {
  const navigate = useNavigate();
  return (
    <section className="py-14 px-8 border-t border-gray-100">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Your second brain,{" "}
          <span className="italic font-serif text-primary">ready when you are.</span>
        </h2>
        <p className="text-sm text-gray-400 mb-8">Start saving what matters. Free forever.</p>
        <button onClick={() => navigate("/auth")} className="px-6 py-3 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all active:scale-[0.98]">
          Start for free →
        </button>
      </div>
    </section>
  );
}