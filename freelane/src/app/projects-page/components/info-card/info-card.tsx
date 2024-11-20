import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ArrowRight, ChevronRightIcon } from "lucide-react";

type InfoCardProps = {
    title: string
}

export function InfoCard({ title }: InfoCardProps) {
    return(
        <>
            <Card>
                <CardHeader>
                    <div className="flex flex-row justify-between">
                        <span className="font-extrabold text-lg capitalize">
                            { title }
                            <span className="bg-slate-200 p-1 rounded ml-4 text-sm font-bold">05</span>
                        </span>
                        <span className="font-medium text-blue-800 flex flex-row gap-2 cursor-pointer">
                            Manage
                            <ArrowRight className="w-6 h-6" />
                        </span>
                    </div>
                </CardHeader>

                <CardContent>
                    {Array.from({ length: 3 }).map((_, i) => {
                        return(
                            <Card className="p-4 mb-4 flex justify-between" key={i}>
                                <div className="flex flex-col">
                                    <span className="font-bold">Developing Site Sidebar</span>
                                    <span className="text-sm text-gray-600">Pet Shop E-commerce</span>
                                </div>
                                <ChevronRightIcon className="h-7 w-7 mt-1 cursor-pointer"/>
                            </Card>
                        );
                    })}
                </CardContent>
            </Card>
        </>
    );
}