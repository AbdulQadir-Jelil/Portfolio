import PageHeader from "@/components/PageHeader";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description:
    "Live web and mobile projects by Jelili Abdulqadir Alagunfon: Eduflex, the Gigs Tech Solutions portal, Blue Africa, Budgetflex, MailCraft, and earlier frontend practice work.",
  alternates: { canonical: "/projects" },
};

const liveCount = projects.filter((project) => project.link).length;

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Work I have built and shipped"
        description={`${projects.length} projects, ${liveCount} of them live and clickable. Each card links straight to the running site so you can judge the work rather than a description of it.`}
      />

      <div className="mt-10">
        <ProjectsExplorer />
      </div>

      <p className="mt-10 max-w-prose text-[0.92rem] leading-[1.7] text-muted">
        Projects marked <span className="font-semibold text-ink">Ongoing</span>{" "}
        are still being developed, so a link may not exist yet. The earlier
        projects are practice builds from the beginning of my frontend work —
        they are included on purpose, because that is where the fundamentals
        were learned.
      </p>
    </>
  );
}
