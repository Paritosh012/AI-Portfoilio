import { ArrowDown, FileText } from "lucide-react";
import { site } from "@/data/site";

// Photo ki jagah ek code card: dikhne mein developer-wala, aur info bhi deta hai.
// Lines data ki tarah likhi hain taaki JSX whitespace ka jhanjhat na ho.
type Tone = "keyword" | "string" | "name";
type Token = [text: string, tone?: Tone];

const toneClass: Record<Tone, string> = {
  keyword: "text-accent",
  string: "text-accent-light",
  name: "text-title",
};

const codeLines: Token[][] = [
  [["const", "keyword"], [" "], ["paritosh", "name"], [" = {"]],
  [["  role: "], ['"Full Stack Developer"', "string"], [","]],
  [["  stack: "], ['"MERN + Next.js"', "string"], [","]],
  [["  based: "], [`"${site.location}"`, "string"], [","]],
  [["  caresAbout: ["]],
  [["    "], ['"auth"', "string"], [","]],
  [["    "], ['"payments"', "string"], [","]],
  [["    "], ['"data integrity"', "string"], [","]],
  [["  ],"]],
  [["  openToWork: "], ["true", "keyword"], [","]],
  [["};"]],
];

function ProfileCard() {
  return (
    <figure className="relative rounded-[2rem] border border-white/10 bg-surface/80 p-6 shadow-2xl backdrop-blur-sm lg:rounded-[3rem] lg:p-10">
      <div aria-hidden="true" className="mb-6 flex gap-2">
        <span className="size-3 rounded-full bg-white/15" />
        <span className="size-3 rounded-full bg-white/15" />
        <span className="size-3 rounded-full bg-accent/70" />
      </div>
      <pre className="overflow-x-auto font-mono text-[0.813rem] leading-relaxed sm:text-sm lg:text-base">
        <code>
          {codeLines.map((line, i) => (
            <span key={i} className="block">
              {line.map(([text, tone], j) => (
                <span key={j} className={tone ? toneClass[tone] : undefined}>
                  {text}
                </span>
              ))}
            </span>
          ))}
        </code>
      </pre>
    </figure>
  );
}

export default function About() {
  return (
    <section id="about" className="relative px-6 pt-16 pb-4 lg:pt-28 lg:pb-8">
      <div className="mx-auto grid max-w-[460px] items-center gap-12 lg:max-w-[1120px] lg:grid-cols-2 lg:gap-20">
        <div className="reveal text-center lg:order-2 lg:text-left">
          <h2 className="mb-6 section-title">
            <span>The Hidden Parts</span>
            <br />
            Matter Most
          </h2>
          {/* TODO(Paritosh): ye paragraph apne shabdon mein likho */}
          <p className="mb-8 text-xl leading-relaxed lg:mb-12 lg:text-2xl lg:leading-relaxed">
            I&apos;m a{" "}
            <b className="font-semibold text-accent">Full Stack Developer</b>{" "}
            who builds web apps with React, Node.js and MongoDB, and I care
            about the parts users never see:{" "}
            <b className="font-semibold text-accent">
              auth, payments and data that stays correct.
            </b>
          </p>
          <p className="mb-10 text-sm lg:mb-12 lg:text-base">
            2026 B.Tech CSE graduate from Bhopal · Full stack intern at Cybrom
            Technology
          </p>

          {site.resume ? (
            <a href={site.resume} download target="_blank" className="btn-glow">
              Resume <FileText className="size-4" aria-hidden="true" />
            </a>
          ) : (
            <a href="#contact" className="btn-glow">
              Let&apos;s talk{" "}
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          )}
        </div>

        <div className="relative reveal lg:order-1">
          <div
            aria-hidden="true"
            className="blob-spin top-6 left-4 size-[100px] blur-[35px] lg:top-0 lg:left-8 lg:size-[200px] lg:blur-[50px]"
          />
          <div
            aria-hidden="true"
            className="blob-spin -right-2 bottom-2 size-[100px] blur-[35px] lg:-right-4 lg:-bottom-6 lg:size-[200px] lg:blur-[50px]"
          />
          <ProfileCard />
        </div>
      </div>
    </section>
  );
}
