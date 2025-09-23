"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API / assets load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); // 3.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }} // slide down
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="preloader-sec fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
        >
          <video
            autoPlay
            muted
        >
            <source src="src/assets/images/preloader.mp4" type="video/mp4" />
        </video>
        </motion.div>
      )}
    </AnimatePresence>
  );
}