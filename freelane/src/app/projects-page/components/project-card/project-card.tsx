import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Star, ArrowRightCircle } from 'lucide-react';
import './project-card.css';

export function ProjectCard() {
    return(
        <Card>
            <CardHeader className="flex flex-row justify-between">
                <span className="card-header-text flex flex-row text-gray-600"><Star className="w-5 h-5 mr-2 text-yellow-400" /> 11 Oct, 14:45</span>
                <ArrowRightCircle className="w-8 h-8 cursor-pointer" style={{ marginTop: -5 }} />
            </CardHeader>

            <CardContent>
                <h1 className="text-3xl font-extrabold tracking-tight">Pet Shop E-commerce</h1>
            </CardContent>

            <CardFooter>
                <span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-1 rounded">68% completed</span>
                    <span className="text-gray-600 text-sm ml-2">Last update: 20 Dec, 18:00</span></span>
            </CardFooter>
        </Card>
    )
}