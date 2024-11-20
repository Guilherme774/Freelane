import { InfoCard } from "./components/info-card/info-card";
import { ProjectCard } from "./components/project-card/project-card";

export default function ProjectsPage() {
    return(
        <div className="p-6">
            {/* Here should be cards with projects info */}
            <div className="grid grid-cols-3 gap-6 mb-6">
                <div></div>
                <InfoCard title="Doing Tasks" />
                <InfoCard title="Other card here" />
            </div>

            {/* Here should have project card list */}

            <div className="grid grid-cols-3 gap-6">
                {Array.from({ length: 5 }).map((_, i) => {
                    return(
                        <ProjectCard key={i} />
                    )
                })}
            </div>
        </div>
    );
}