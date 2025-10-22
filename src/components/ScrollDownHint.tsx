"use client";

import React, { useEffect, useState } from "react";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import { AnimatePresence, motion } from "framer-motion";

export default function ScrollDownHint() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setIsAtTop(window.scrollY <= 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const show = isAtTop && ready;

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className={"w-14"}>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.35 }}
            className="absolute bottom-0 mb-6"
          >
            <motion.button
              onClick={handleScrollDown}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowDownIcon
                className={"h-14 w-14 animate-bounce text-accent"}
              />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
