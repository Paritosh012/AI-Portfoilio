import WorkTabs from "@/components/WorkTabs";
import { education, experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="px-6 pt-16 pb-4 lg:pt-28 lg:pb-8">
      <h2 className="mb-12 reveal text-center section-title lg:mb-16">
        <span>Experience</span>
        <br />
        &amp; Education
      </h2>
      <WorkTabs experience={experience} education={education} />
    </section>
  );
}
