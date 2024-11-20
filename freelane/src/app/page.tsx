import { Inter } from "next/font/google";
import ProjectsPage from "./projects/projects-page";
import { Sidebar } from "./shared/sidebar";

const inter = Inter({
  subsets: ['latin'], // Inclua os caracteres necessários
  variable: '--font-inter', // Variável CSS para a fonte
});

export default function Home() {
  return (
    <div className="grid grid-cols-[15rem_1fr] h-screen">
      <Sidebar />

      <ProjectsPage />
    </div>
  );
}