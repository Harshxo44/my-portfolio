import { useEffect, useState } from "react";

interface PortfolioSplashProps {
  onFinish: () => void;
}

export default function PortfolioSplash({ onFinish }: PortfolioSplashProps) {
  const [exit, setExit] = useState(false);
  const [phase, setPhase] = useState<"stroke" | "red">("stroke");

  useEffect(() => {
    // Stroke animation ends
    const redPhaseTimer = setTimeout(() => {
      setPhase("red");
    }, 3400); // after stroke animation

    // Start fade out
    const exitTimer = setTimeout(() => {
      setExit(true);
    }, 5200);

    // Fully remove splash
    const finishTimer = setTimeout(() => {
      onFinish();
    }, 6000);

    return () => {
      clearTimeout(redPhaseTimer);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  const text = "Code with Aesthetic";

  return (
    <>
      {/* INLINE CSS */}
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");

        .splash-wrapper {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(600px circle at center, #1a1a1a, #0b0b0b 70%);
        }

        svg {
          font-family: "Russo One", sans-serif;
          width: 520px;
        }

        text {
          font-size: 78px;
          fill: transparent;
          stroke: #bfbfbf;
          stroke-width: 2;
          animation: stroke 2.8s ease-in-out forwards;
        }

        @keyframes stroke {
          0% {
            stroke-dashoffset: 25%;
            stroke-dasharray: 0 50%;
          }
          100% {
            stroke-dashoffset: -25%;
            stroke-dasharray: 50% 0;
            fill: #f2f2f2;
            stroke: transparent;
          }
        }

        /* RED LETTER PHASE */
        .red-phase tspan {
          animation: turnRed 0.4s forwards;
        }

        .red-phase tspan:nth-child(n) {
          animation-delay: calc(var(--i) * 0.08s);
        }

        @keyframes turnRed {
          to {
            fill: #ef4444;
          }
        }

        /* EXIT */
        .splash-exit {
          animation: fadeOut 0.8s ease forwards;
        }

        @keyframes fadeOut {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }

        @media (max-width: 600px) {
          svg {
            width: 360px;
          }
          text {
            font-size: 56px;
          }
        }
      `}</style>

      {/* SPLASH */}
      <div className={`splash-wrapper ${exit ? "splash-exit" : ""}`}>
        <svg viewBox="0 0 900 120" preserveAspectRatio="xMidYMid meet">
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className={phase === "red" ? "red-phase" : ""}
          >
            {text.split("").map((char, i) => (
              <tspan key={i} style={{ "--i": i } as React.CSSProperties}>
                {char === " " ? "\u00A0" : char}
              </tspan>
            ))}
          </text>
        </svg>
      </div>
    </>
  );
}
