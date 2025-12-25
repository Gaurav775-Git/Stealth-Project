import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Home,
  Notebook,
  FileText,
  ClipboardList,
  BookOpen,
  Mail,
  Menu,
  X,
  LogIn,
} from "lucide-react";

const navItems = [
  { name: "Home", icon: Home, path: "/" },
  { name: "Notes", icon: Notebook, path: "/notes" },
  { name: "PYQ", icon: FileText, path: "/pyq" },
  { name: "CT Paper", icon: ClipboardList },
  { name: "Syllabus", icon: BookOpen },
  { name: "Contact", icon: Mail },
  { name: "Sign Up", icon: LogIn, path: "/signup" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full bg-[#222831] text-[#EEEEEE] shadow-md px-6 py-4 flex justify-between items-center relative"
    >
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide">
        <span className="text-[#00ADB5]">Notes</span> Resolver
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        {navItems.map(({ name, icon: Icon, path }) => (
          <motion.span
            key={name}
            whileHover={{ scale: 1.08 }}
            className="flex items-center gap-1.5 cursor-pointer hover:text-[#00ADB5] transition-colors"
            onClick={() => path && navigate(path)}
          >
            <Icon size={16} />
            <span>{name}</span>
          </motion.span>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-full w-64 bg-[#222831] shadow-lg z-50 flex flex-col p-6 gap-6 md:hidden"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-wide">
            <span className="text-[#00ADB5]">Notes</span> Resolver
          </h1>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {navItems.map(({ name, icon: Icon, path }) => (
          <motion.span
            key={name}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer hover:text-[#00ADB5] text-lg"
            onClick={() => {
              setIsOpen(false);
              path && navigate(path);
            }}
          >
            <Icon size={20} />
            {name}
          </motion.span>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
