import { BrainIcon } from "../icons/BrainIcon";
import { XIcon } from "../icons/XIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import { SidebarItem } from "./Slidebaritem";
import { useContent, type ContentType } from "../../context/ContentContext";
import { useNavigate } from "react-router";

import { useDarkMode } from "../../hooks/useDarkMode";

const NAV_ITEMS: {
  id: ContentType | "all";
  label: string;
  icon: React.ReactElement;
}[] = [
  { id: "all", label: "All", icon: <BrainIcon /> },
  { id: "article", label: "Twitter / X", icon: <XIcon /> },
  { id: "video", label: "YouTube", icon: <YoutubeIcon /> },
  { id: "image", label: "Images", icon: <DocumentIcon /> },
  { id: "audio", label: "Audio", icon: <DocumentIcon /> },
];

export function Sidebar() {
  const { filter, setFilter, user } = useContent();
  const { dark, toggle } = useDarkMode();
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <aside className="h-screen w-62 bg-white border-r border-gray-100 fixed left-0 top-0 flex flex-col dark:bg-gray-900 border-gray-100 dark:border-gray-800">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 py-5 border-b border-gray-100 dark:border-gray-800">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shrink-0 dark:border-gray-800">
          <BrainIcon />
        </div>
        <span className="text-base font-semibold text-gray-900 tracking-tight dark:text-gray-100">
          Second Brain
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 px-3 mb-2 dark:text-gray-600">
          Library
        </p>
        {NAV_ITEMS.map(({ id, label, icon }) => (
          <SidebarItem
            key={id}
            text={label}
            icon={icon}
            active={filter === id}
            onClick={() => setFilter(id)}
          />
        ))}
      </nav>

      {/* Footer */}
      <div className="px-3 py-3 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-1">
        {/* User */}
        <div className="flex items-center gap-2.5 px-3 py-2">
          <div className="w-7 h-7 rounded-full bg-purple-100 dark:bg-purple-950 flex items-center justify-center text-primary text-xs font-semibold shrink-0">
            {user ? user.firstName.charAt(0).toUpperCase() : "U"}
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
              {user ? `${user.firstName} ${user.lastName}` : "User"}
            </span>
          </div>
        </div>

        {/* Dark mode toggle */}
        <button
          onClick={toggle}
          className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <span>{dark ? "Dark mode" : "Light mode"}</span>
          {/* Toggle pill */}
          <div
            className={`relative w-9 h-5 rounded-full transition-colors duration-200 ${dark ? "bg-primary" : "bg-gray-200"}`}
          >
            <div
              className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${dark ? "translate-x-4" : "translate-x-0.5"}`}
            />
          </div>
        </button>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="w-full text-left px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-950 rounded-lg transition-colors"
        >
          Log out
        </button>
      </div>
    </aside>
  );
}
