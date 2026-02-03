import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  Home,
  Notebook,
  FileText,
  ClipboardList,
  BookOpen,
  User,
  Settings,
  FolderOpen,
  ArrowLeftToLine,
  ArrowRightToLine,
} from "lucide-react";

const sidebarVariants = {
  open: {
    width: "16rem", // w-64
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  closed: {
    width: "4rem", // w-16
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

const linkVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
  closed: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.3 },
  },
};

const navSections = [
  {
    title: "Main Navigation",
    links: [
      { name: "Dashboard", icon: Home, path: "/" },
      { name: "My Notes", icon: Notebook, path: "/notes" },
      { name: "Syllabus", icon: BookOpen, path: "/syllabus" },
      { name: "PYQ Papers", icon: FileText, path: "/pyq" },
      { name: "CT Papers", icon: ClipboardList, path: "/ctpaper" },
    ],
  },
  {
    title: "Account",
    links: [
      { name: "Profile", icon: User, path: "/profile" },
      { name: "Settings", icon: Settings, path: "/settings" },
    ],
  },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/744be8ba-30a1-41a2-96b6-a73c19d25452',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'frontend/src/reuasblecomponents/sidebar/Sidebar.jsx:70',message:'Sidebar component render start',data:{isOpen, hasToggleSidebarProp: !!toggleSidebar},timestamp:Date.now(),sessionId:'debug-session',runId:'run2',hypothesisId:'L'})}).catch(()=>{});
  // #endregion
  return (
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className="bg-neutral-900 text-neutral-200 flex flex-col h-screen fixed top-0 left-0 shadow-xl z-30 overflow-hidden lg:flex"
      >
        <div className="flex items-center justify-between h-16 px-4 bg-neutral-800 shadow-md">
          <motion.h1
            variants={linkVariants}
            className="text-2xl font-bold whitespace-nowrap overflow-hidden text-white"
          >
            <span className="text-primary-light">Notes</span>App
          </motion.h1>
          <button
            onClick={toggleSidebar}
            className="text-neutral-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-dark rounded-md p-1 transition-colors duration-200 lg:p-2"
          >
            {isOpen ? (
              <ArrowLeftToLine size={20} />
            ) : (
              <ArrowRightToLine size={20} />
            )}
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navSections.map((section, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <motion.h3
                variants={linkVariants}
                className="text-neutral-500 text-xs font-semibold uppercase mb-2 ml-3 overflow-hidden whitespace-nowrap tracking-wider"
              >
                {section.title}
              </motion.h3>
              <ul className="space-y-1">
                {section.links.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center gap-3 p-3 rounded-lg transition-all duration-200
                        ${isActive
                          ? "bg-primary-dark text-white shadow-md"
                          : "text-neutral-300 hover:bg-neutral-700 hover:text-white"}
                        `
                      }
                    >
                      <item.icon size={20} />
                      <motion.span variants={linkVariants} className="overflow-hidden whitespace-nowrap text-base">
                        {item.name}
                      </motion.span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-neutral-700">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-colors duration-200
              ${isActive
                ? "bg-primary-dark text-white shadow-md"
                : "text-neutral-300 hover:bg-neutral-700 hover:text-white"}
              `
            }
          >
            <Settings size={20} />
            <motion.span variants={linkVariants} className="overflow-hidden whitespace-nowrap text-base">
              Settings
            </motion.span>
          </NavLink>
        </div>
      </motion.div>
  );
};

export default Sidebar;
