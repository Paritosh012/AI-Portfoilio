import { ArrowUpRight } from "lucide-react";
import CopyEmailButton from "@/components/CopyEmailButton";
import { site } from "@/data/site";

const columnTitle =
  "mb-2 font-display text-base font-semibold text-accent lg:mb-3 lg:text-xl";

export default function Contact() {
  const socials = [
    { label: "GitHub", href: site.github },
    ...(site.linkedin ? [{ label: "LinkedIn", href: site.linkedin }] : []),
  ];

  return (
    <section id="contact" className="px-6 pt-16 pb-8 lg:pt-36 lg:pb-12">
      <div className="mx-auto grid max-w-[1120px] reveal gap-16 lg:gap-28">
        <div className="text-center">
          <h2 className="mb-4 section-title">Contact Me</h2>
          <p className="mb-8 font-display lg:text-2xl">
            Have a role or a project in mind? Let&apos;s talk.
          </p>
          <CopyEmailButton email={site.email} />
        </div>

        <div className="grid gap-12 text-center lg:grid-cols-3">
          <div className="grid gap-6 lg:justify-self-start">
            <div>
              <h3 className={columnTitle}>Email</h3>
              <a
                href={`mailto:${site.email}`}
                className="text-title transition-colors duration-400 hover:text-accent"
              >
                {site.email}
              </a>
            </div>
            <div>
              <h3 className={columnTitle}>Location</h3>
              <p className="text-title">{site.location}</p>
            </div>
          </div>

          <div>
            <h3 className={columnTitle}>Social</h3>
            <ul className="grid justify-center gap-1 lg:gap-2">
              {socials.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-medium text-title transition-[translate,color] duration-400 hover:translate-x-1.5 hover:text-body lg:text-xl"
                  >
                    {label}{" "}
                    <ArrowUpRight className="size-5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:justify-self-end">
            <h3 className={columnTitle}>Open To</h3>
            <ul className="grid gap-1 text-title lg:gap-2 lg:text-xl">
              <li>Full stack roles</li>
              <li>MERN stack roles</li>
              <li>Remote or relocation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
