import { useNavigate } from "react-router";
import { BrainIcon } from "../icons/BrainIcon";

export function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white/80 backdrop=blur-sm border-b border-gray-100">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
          <BrainIcon />
        </div>
        <span className="text-md font-semibold text-gray-900 tracking-tight">
          Second Brain
        </span>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate("/auth")}
          className="text-sm text-gray-800 hover:text-gray-900 transition-colors"
        >
          Sign in
        </button>
        <button
          onClick={() => navigate("/auth")}
          className="text-sm font-medium px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all active:scale-[0.98]"
        >
          Get started 
        </button>
      </div>
    </nav>
  );
}
