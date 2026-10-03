import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowDown, FileText, Mail } from "lucide-react";
import GitHubIcon from "@/components/GitHubIcon";
import LinkedInIcon from "@/components/LinkedInIcon";
import { site } from "@/data/site";

// Har letter alag span: CSS animation (globals.css `.letter`) unhe ek-ek karke upar laata hai.
// Screen reader ke liye poora text sr-only mein hai, letters aria-hidden.
function AnimatedLine({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span aria-hidden="true" className={`block overflow-hidden ${className}`}>
      {Array.from(text).map((char, i) => (
        <span key={i} className="letter" style={{ "--i": i } as CSSProperties}>
          {char}
        </span>
      ))}
    </span>
  );
}

// Photo na ho to initials wala orb. Opaque hai, taaki peeche ka glow photo ki tarah
// kinaaron se "halo" bankar dikhe.
function Monogram({ initials }: { initials: string }) {
  return (
    <div className="relative grid size-[240px] place-items-center rounded-full border border-accent/40 bg-bg bg-[radial-gradient(circle_at_50%_0%,hsl(255_60%_64%/0.22),transparent_70%)] shadow-[inset_0_0_60px_hsl(255_60%_64%/0.2)] sm:size-[280px] lg:size-[380px]">
      <div className="absolute inset-4 rounded-full border border-dashed border-accent/25 lg:inset-7" />
      <span className="bg-linear-to-b from-title to-accent-light bg-clip-text font-display text-7xl font-semibold text-transparent lg:text-9xl">
        {initials}
      </span>
    </div>
  );
}

export default function Hero() {
  const [firstName, ...rest] = site.name.split(" ");
  const lastName = rest.join(" ");
  const initials = site.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  const roleWords = site.role.split(" ");
  const roleLast = roleWords.pop() ?? "";
  const roleFirst = roleWords.join(" ");
  const city = site.location.split(",")[0];

  const socials = [
    { label: "GitHub", href: site.github, Icon: GitHubIcon },
    ...(site.linkedin
      ? [{ label: "LinkedIn", href: site.linkedin, Icon: LinkedInIcon }]
      : []),
  ];

  return (
    <section id="home" className="relative px-6 pt-32 lg:pt-28">
      <div className="relative mx-auto grid max-w-[1120px] gap-4">
        <div className="rise [animation-delay:500ms] lg:absolute lg:top-40 lg:left-12 lg:z-10">
          <p className="text-xl text-accent lg:text-2xl">Hello, I&apos;m</p>
          <h1 className="font-display text-[2rem] leading-tight font-semibold text-title lg:text-5xl lg:leading-tight">
            {firstName}
            <br />
            {lastName}
          </h1>
        </div>

        {/* clip-path sirf neeche se kaatta hai (upar/side khule), taaki glow fade ke neeche dobara na dikhe */}
        <div className="relative grid justify-items-center pt-8 pb-12 [clip-path:inset(-20rem_-20rem_0_-20rem)] lg:pt-10 lg:pb-20">
          {/* Glow: photo ho to neeche se (photo use dhak leti hai), orb ho to beech mein halo */}
          <div
            aria-hidden="true"
            className={`blob-spin ${
              site.photo
                ? "bottom-6 size-[250px] blur-[35px] lg:bottom-12 lg:size-[450px] lg:blur-[50px]"
                : "top-1/2 left-1/2 size-[300px] -translate-x-1/2 -translate-y-1/2 blur-[40px] sm:size-[340px] lg:size-[470px] lg:blur-[60px]"
            }`}
          />
          <div className="relative rise">
            {site.photo ? (
              <Image
                src={site.photo}
                alt={site.name}
                width={600}
                height={800}
                preload
                className="h-auto w-[320px] lg:w-[600px]"
              />
            ) : (
              <Monogram initials={initials} />
            )}
          </div>
          {/* Neeche ka fade: image background mein ghul jaaye */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-bg/0 to-bg lg:h-48"
          />

          <ul className="absolute top-1/2 left-0 z-10 flex -translate-y-1/2 rise flex-col gap-4 [animation-delay:1100ms] lg:top-auto lg:bottom-16 lg:translate-y-0 lg:gap-6">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="block text-title transition-[translate,color] duration-400 hover:translate-x-1 hover:text-accent"
                >
                  <Icon className="size-5 lg:size-6" />
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="block text-title transition-[translate,color] duration-400 hover:translate-x-1 hover:text-accent"
              >
                <Mail className="size-5 lg:size-6" aria-hidden="true" />
              </a>
            </li>
          </ul>

          <a
            href={site.resume || "#contact"}
            {...(site.resume ? { download: true, target: "_blank" } : {})}
            className="absolute -right-9 bottom-24 z-10 flex -rotate-90 rise items-center gap-2 font-display text-[0.813rem] text-muted transition-colors duration-400 [animation-delay:1100ms] hover:text-accent lg:right-0 lg:bottom-16 lg:rotate-0 lg:text-base"
          >
            {site.resume ? "Resume" : "Let's talk"}
            {site.resume ? (
              <FileText className="size-4" aria-hidden="true" />
            ) : (
              <ArrowDown className="size-4" aria-hidden="true" />
            )}
          </a>
        </div>

        <div className="-mt-12 rise text-center [animation-delay:800ms] lg:absolute lg:top-40 lg:right-4 lg:z-10 lg:mt-0 lg:text-left">
          <p className="text-base text-accent lg:text-2xl">Based in {city}</p>
          <p className="font-display text-[1.75rem] leading-tight font-semibold lg:text-5xl lg:leading-tight">
            <span className="sr-only">{site.role}</span>
            <AnimatedLine
              text={roleFirst}
              className="relative text-accent after:absolute after:inset-0 after:bg-linear-to-t after:from-bg after:from-10% after:to-bg/0 after:to-60%"
            />
            <AnimatedLine
              text={roleLast}
              className="-translate-y-3 text-title lg:-translate-y-5"
            />
          </p>
        </div>
      </div>
    </section>
  );
}
