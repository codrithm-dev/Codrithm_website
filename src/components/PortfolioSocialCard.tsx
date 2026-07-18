import astronautImg from "../assets/astronaut-social.png";

export function PortfolioSocialCard() {
  return (
    <>
      <div className="portfolio-social-card">
        <div className="card">
        <div className="image">
          <img
            src={astronautImg}
            alt="Social media astronaut"
            className="astronaut"
            width={1024}
            height={1024}
            loading="lazy"
          />
        </div>

        <div className="heading">We're on Social Media</div>

        <div className="icons">
          <a
            className="instagram"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          <a
            className="x"
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </a>

          <a
            className="discord"
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 9a5 5 0 0 0-5-5" />
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        .portfolio-social-card {
          display: flex;
          justify-content: flex-end;
        }
        .portfolio-social-card .card {
          position: relative;
          width: 13em;
          height: 17em;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #171717;
          color: #ffffff;
          font-family: var(--font-display, system-ui, sans-serif);
          font-weight: 700;
          padding: 1em 2em 1em 1em;
          border-radius: 20px;
          overflow: hidden;
          z-index: 1;
          row-gap: 1em;
          transition: transform 0.4s ease-in-out;
        }
        .portfolio-social-card .card:hover {
          transform: scale(1.05);
        }
        .portfolio-social-card .astronaut {
          width: 7em;
          margin-right: 1em;
          animation: psc-move 10s ease-in-out infinite;
          z-index: 5;
          pointer-events: none;
          user-select: none;
        }
        .portfolio-social-card .image:hover {
          cursor: -webkit-grab;
          cursor: grab;
        }
        .portfolio-social-card .image:active {
          cursor: -webkit-grabbing;
          cursor: grabbing;
        }
        .portfolio-social-card .icons svg {
          width: 20px;
          height: 20px;
        }
        .portfolio-social-card .card::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          inset: -3px;
          border-radius: 10px;
          background: radial-gradient(circle at 50% 50%, var(--neon-blue), transparent, transparent);
          opacity: 0.4;
          transform: translate(-5px, 250px);
          transition: all 0.4s ease-in-out;
          z-index: -1;
        }
        .portfolio-social-card .card:hover::before {
          width: 150%;
          height: 100%;
          margin-left: -4.25em;
          opacity: 0.85;
        }
        .portfolio-social-card .card::after {
          content: "";
          position: absolute;
          inset: 2px;
          border-radius: 20px;
          background: rgba(23, 23, 23, 0.7);
          transition: all 0.4s ease-in-out;
          z-index: -1;
        }
        .portfolio-social-card .heading {
          z-index: 2;
          font-size: 0.85rem;
          text-align: center;
          transition: 0.4s ease-in-out;
        }
        .portfolio-social-card .card:hover .heading {
          letter-spacing: 0.025em;
        }
        .portfolio-social-card .heading::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          opacity: 1;
          box-shadow: 220px 118px #fff, 280px 176px #fff, 40px 50px #fff,
            60px 180px #fff, 120px 130px #fff, 180px 176px #fff, 220px 290px #fff,
            520px 250px #fff, 400px 220px #fff, 50px 350px #fff, 10px 230px #fff;
          z-index: -1;
          transition: 1s ease;
          animation: 1s psc-glowing-stars linear alternate infinite;
          animation-delay: 0s;
        }
        .portfolio-social-card .icons::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          opacity: 1;
          box-shadow: 140px 20px #fff, 425px 20px #fff, 70px 120px #fff, 20px 130px #fff,
            110px 80px #fff, 280px 80px #fff, 250px 350px #fff, 280px 230px #fff,
            220px 190px #fff, 450px 100px #fff, 380px 80px #fff, 520px 50px #fff;
          z-index: -1;
          transition: 1.5s ease;
          animation: 1s psc-glowing-stars linear alternate infinite;
          animation-delay: 0.4s;
        }
        .portfolio-social-card .icons::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          opacity: 1;
          box-shadow: 490px 330px #fff, 420px 300px #fff, 320px 280px #fff,
            380px 350px #fff, 546px 170px #fff, 420px 180px #fff, 370px 150px #fff,
            200px 250px #fff, 80px 20px #fff, 190px 50px #fff, 270px 20px #fff,
            120px 230px #fff, 350px -1px #fff, 150px 369px #fff;
          z-index: -1;
          transition: 2s ease;
          animation: 1s psc-glowing-stars linear alternate infinite;
          animation-delay: 0.8s;
        }
        .portfolio-social-card .card:hover .heading::before,
        .portfolio-social-card .card:hover .icons::before,
        .portfolio-social-card .card:hover .icons::after {
          filter: blur(3px);
        }
        .portfolio-social-card .image:active + .heading::before {
          box-shadow: 240px 20px var(--neon-green), 240px 25px var(--neon-green), 240px 30px var(--neon-green),
            240px 35px var(--neon-green), 240px 40px var(--neon-green), 242px 45px var(--neon-green),
            246px 48px var(--neon-green), 251px 49px var(--neon-green), 256px 48px var(--neon-green),
            260px 45px var(--neon-green), 262px 40px var(--neon-green);
          animation: none;
          filter: blur(0);
          border-radius: 2px;
          width: 0.45em;
          height: 0.45em;
          scale: 0.65;
          transform: translateX(9em) translateY(1em);
        }
        .portfolio-social-card .image:active ~ .icons::before {
          box-shadow: 262px 35px var(--neon-blue), 262px 30px var(--neon-blue), 262px 25px var(--neon-blue),
            262px 20px var(--neon-blue), 275px 20px var(--neon-blue), 275px 24px var(--neon-blue),
            275px 28px var(--neon-blue), 275px 32px var(--neon-blue), 275px 36px var(--neon-blue),
            275px 40px var(--neon-blue), 275px 44px var(--neon-blue), 275px 48px var(--neon-blue);
          animation: none;
          filter: blur(0);
          border-radius: 2px;
          width: 0.45em;
          height: 0.45em;
          scale: 0.65;
          transform: translateX(9em) translateY(1em);
        }
        .portfolio-social-card .image:active ~ .icons::after {
          box-shadow: 238px 60px var(--neon-green), 242px 60px var(--neon-green), 246px 60px var(--neon-green),
            250px 60px var(--neon-green), 254px 60px var(--neon-green), 258px 60px var(--neon-green),
            262px 60px var(--neon-green), 266px 60px var(--neon-green), 270px 60px var(--neon-green),
            274px 60px var(--neon-green), 278px 60px var(--neon-green), 282px 60px var(--neon-green),
            234px 60px var(--neon-green), 234px 60px var(--neon-green);
          animation: none;
          filter: blur(0);
          border-radius: 2px;
          width: 0.45em;
          height: 0.45em;
          scale: 0.65;
          transform: translateX(9em) translateY(1.25em);
        }
        .portfolio-social-card .heading::after {
          content: "";
          top: -8.5%;
          left: -8.5%;
          position: absolute;
          width: 7.5em;
          height: 7.5em;
          border: none;
          outline: none;
          border-radius: 50%;
          background: #f9f9fb;
          box-shadow: 0px 0px 100px color-mix(in srgb, var(--neon-green) 80%, transparent),
            0px 0px 100px color-mix(in srgb, var(--neon-blue) 80%, transparent),
            inset var(--neon-green) 0px 0px 40px -12px;
          transition: 0.4s ease-in-out;
          z-index: -1;
        }
        .portfolio-social-card .card:hover .heading::after {
          box-shadow: 0px 0px 200px color-mix(in srgb, var(--neon-green) 90%, transparent),
            0px 0px 200px color-mix(in srgb, var(--neon-blue) 90%, transparent),
            inset var(--neon-green) 0px 0px 40px -12px;
        }
        .portfolio-social-card .icons {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: row;
          column-gap: 1em;
          z-index: 1;
        }
        .portfolio-social-card .instagram,
        .portfolio-social-card .x,
        .portfolio-social-card .discord {
          position: relative;
          transition: 0.4s ease-in-out;
        }
        .portfolio-social-card .instagram:after,
        .portfolio-social-card .x:after,
        .portfolio-social-card .discord:after {
          content: "";
          position: absolute;
          width: 0.5em;
          height: 0.5em;
          left: 0;
          background-color: white;
          box-shadow: 0px 0px 10px rgba(233, 233, 233, 0.5),
            0px 0px 10px rgba(192, 192, 192, 0.5);
          border-radius: 50%;
          z-index: -1;
          transition: 0.3s ease-in-out;
        }
        .portfolio-social-card .instagram svg path,
        .portfolio-social-card .x svg path,
        .portfolio-social-card .discord svg path {
          stroke: rgba(255, 255, 255, 0.6);
          transition: 0.4s ease-in-out;
        }
        .portfolio-social-card .instagram:hover svg path {
          stroke: var(--neon-green);
        }
        .portfolio-social-card .x:hover svg path {
          stroke: var(--neon-blue);
        }
        .portfolio-social-card .discord:hover svg path {
          stroke: var(--neon-green);
        }
        .portfolio-social-card .instagram svg,
        .portfolio-social-card .x svg,
        .portfolio-social-card .discord svg {
          transition: 0.3s ease-in-out;
        }
        .portfolio-social-card .instagram:hover svg {
          scale: 1.4;
        }
        .portfolio-social-card .x:hover svg,
        .portfolio-social-card .discord:hover svg {
          scale: 1.25;
        }
        .portfolio-social-card .instagram:hover:after,
        .portfolio-social-card .x:hover:after,
        .portfolio-social-card .discord:hover:after {
          scale: 4;
          transform: translateX(0.09em) translateY(0.09em);
        }
        .portfolio-social-card .instagram::before {
          content: "";
          position: absolute;
          top: -700%;
          left: 1050%;
          rotate: -45deg;
          width: 5em;
          height: 1px;
          background: linear-gradient(90deg, #ffffff, transparent);
          animation: 4s psc-shooting-star ease-in-out infinite;
          transition: 1s ease;
          animation-delay: 1s;
        }
        .portfolio-social-card .x::before {
          content: "";
          position: absolute;
          top: -1300%;
          left: 850%;
          rotate: -45deg;
          width: 5em;
          height: 1px;
          background: linear-gradient(90deg, #ffffff, transparent);
          animation: 4s psc-shooting-star ease-in-out infinite;
          animation-delay: 3s;
        }
        .portfolio-social-card .discord::before {
          content: "";
          position: absolute;
          top: -2100%;
          left: 850%;
          rotate: -45deg;
          width: 5em;
          height: 1px;
          background: linear-gradient(90deg, #ffffff, transparent);
          animation: 4s psc-shooting-star ease-in-out infinite;
          animation-delay: 5s;
        }
        .portfolio-social-card .card:hover .instagram::before,
        .portfolio-social-card .card:hover .x::before,
        .portfolio-social-card .card:hover .discord::before {
          filter: blur(3px);
        }
        .portfolio-social-card .image:active ~ .icons .instagram::before,
        .portfolio-social-card .image:active ~ .icons .x::before,
        .portfolio-social-card .image:active ~ .icons .discord::before {
          animation: none;
          opacity: 0;
        }

        @keyframes psc-shooting-star {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateX(-55em) translateY(0);
            opacity: 1;
          }
          70% {
            transform: translateX(-70em) translateY(0);
            opacity: 0;
          }
          100% {
            transform: translateX(0) translateY(0);
            opacity: 0;
          }
        }
        @keyframes psc-move {
          0% {
            transform: translateX(0em) translateY(0em);
          }
          25% {
            transform: translateY(-1em) translateX(-1em);
            rotate: -10deg;
          }
          50% {
            transform: translateY(1em) translateX(-1em);
          }
          75% {
            transform: translateY(-1.25em) translateX(1em);
            rotate: 10deg;
          }
          100% {
            transform: translateX(0em) translateY(0em);
          }
        }
        @keyframes psc-glowing-stars {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
    </>
  );
}
