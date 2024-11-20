import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export function ProjectCard() {
    return(
        <Card>
            <CardHeader>
                <span>11 Oct, 14:45</span>
            </CardHeader>

            <CardContent>
                <h1>Pet Shop E-commerce</h1>
            </CardContent>

            <CardFooter>
                <span>14 hours | 20 Dec, 18:00</span>
            </CardFooter>
        </Card>
    )
}