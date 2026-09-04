import { SocialIcon } from "./SocialIcon";

export function ContactCard() {
  return (
    <div className="contact-card flex">
      <div className="card w-[160px] h-[160px] sm:w-[200px] sm:h-[200px]">
        <div className="background" />
        <div className="logo">
          <span className="logo-text">socials</span>
        </div>

        <a
          className="box box1"
          href="https://linkedin.com/company/codrithmdev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Codrithm on LinkedIn"
        >
          <span className="icon">
            <SocialIcon name="linkedin" className="svg" />
          </span>
        </a>

        <a
          className="box box2"
          href="https://www.instagram.com/codrithm"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Codrithm on Instagram"
        >
          <span className="icon">
            <SocialIcon name="instagram" className="svg" />
          </span>
        </a>

        <a
          className="box box3"
          href="https://chat.whatsapp.com/DiJkqIDK0yi7eQRuaHZ22g"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join Codrithm on WhatsApp"
        >
          <span className="icon">
            <SocialIcon name="whatsapp" className="svg" />
          </span>
        </a>

        <div className="box box4" />
      </div>
    </div>
  );
}
