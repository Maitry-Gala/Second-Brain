import { BrainIcon } from "../icons/BrainIcon";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 px-8 py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-primary flex items-center justify-center">
            <BrainIcon />
          </div>
          <span className="text-xs text-gray-700">Second Brain</span>
        </div>
        <p className="text-xs text-gray-700">Built with ♥ for curious minds</p>
      </div>
    </footer>
  );
}