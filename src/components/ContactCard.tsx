import { SocialIcon } from "./SocialIcon";

const socialLinks = {
  linkedin: "https://linkedin.com/company/codrithmdev",
  instagram: "https://www.instagram.com/codrithm",
  facebook: "https://www.facebook.com/profile.php?id=61588306509274",
  youtube: "https://www.youtube.com/@codrithm",
  whatsapp: "https://chat.whatsapp.com/DiJkqIDK0yi7eQRuaHZ22g",
};

function SocialLink({ name }: { name: keyof typeof socialLinks }) {
  const label = name === "whatsapp" ? "Join Codrithm on WhatsApp" : `Codrithm on ${name}`;

  return (
    <a
      href={socialLinks[name]}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="icon"
    >
      <SocialIcon name={name} className="svg" />
    </a>
  );
}

export function ContactCard() {
  return (
    <div className="contact-card flex">
      <div className="card w-[160px] h-[160px] sm:w-[200px] sm:h-[200px]">
        <div className="background" />
        <div className="logo">
          <span className="logo-text">socials</span>
        </div>

        <div className="box box1">
          <SocialLink name="linkedin" />
          <SocialLink name="instagram" />
        </div>
        <div className="box box2">
          <SocialLink name="facebook" />
          <SocialLink name="youtube" />
        </div>
        <div className="box box3">
          <SocialLink name="whatsapp" />
        </div>
      </div>
    </div>
  );
}
