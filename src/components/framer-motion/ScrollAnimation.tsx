import { useInView } from "framer-motion";
import { useRef } from "react";

export function Section({ children }: any ) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.2s ease-out 0.2s"
        }}
      >
        {children}
      </div>
    </section>
  );
}