"use client";

import { useEffect, useRef } from "react";

// Mouse ke peeche chalne wala glowing circle. Sirf decoration:
// touch screens aur "reduce motion" wale users ke liye CSS se hidden, system cursor waisa hi rehta hai.
export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let x = 0;
    let y = 0;
    let scale = 1;
    let frame = 0;

    // Har mousemove par style mat likho; ek frame mein ek baar (requestAnimationFrame)
    const render = () => {
      frame = 0;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x = e.clientX;
      y = e.clientY;
      el.style.opacity = "1";
      schedule();
    };
    // Link/button par cursor chhupa do, taaki text na dhake
    const onOver = (e: PointerEvent) => {
      const target = e.target as Element | null;
      scale = target?.closest("a, button, summary, [role='tab']") ? 0 : 1;
      schedule();
    };
    const onLeave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver);
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden size-[50px] rounded-full bg-accent-light opacity-0 mix-blend-difference shadow-[0_0_30px_var(--color-accent)] transition-[transform,opacity] duration-200 ease-out motion-reduce:hidden pointer-fine:block"
    />
  );
}
