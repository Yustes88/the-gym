import { useInView } from "framer-motion";
import { useRef } from "react";

export function Section({ children }: any ) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 'some' });

  return (
    <section ref={ref}>
      <div className=""
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.5s ease-out 0.2s"
        }}
      >
        {children}
      </div>
    </section>
  );
}