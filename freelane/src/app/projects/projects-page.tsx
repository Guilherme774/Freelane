import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { InfoCard } from "./components/info-card/info-card";
import { ProjectCard } from "./components/project-card/project-card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

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

            <Card>
                <CardHeader className="flex flex-row justify-between">
                    <span className="font-extrabold text-xl capitalize">Projects</span>
                    
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>
                                <Plus className="w-4 h-4" />
                                Add project
                            </Button>
                        </DialogTrigger>

                        <DialogContent className="p-6 bg-white rounded shadow-lg">
                            <DialogHeader>
                                <DialogTitle className="text-lg text-bold mb-4">Add New Project</DialogTitle>
                            </DialogHeader>
                            <span>Hello World</span>

                            <form action="">
                                <DialogFooter>
                                    <Button type="button" variant="outline">Cancel</Button>
                                    <Button type="submit">Save</Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                </CardHeader>

                <CardContent>
                    <div className="grid grid-cols-3 gap-6">
                        {Array.from({ length: 5 }).map((_, i) => {
                            return(
                                <ProjectCard key={i} />
                            )
                        })}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}