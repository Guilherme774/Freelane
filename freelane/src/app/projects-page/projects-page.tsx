import { ProjectCard } from "./components/project-card";

export default function ProjectsPage() {
    return(
        <div className="p-6">
            {/* Here should be cards with projects info */}


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