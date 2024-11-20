import { Inter } from "next/font/google";
import ProjectsPage from "./projects-page/projects-page";
import Head from "next/head";
import { Html } from "next/document";

const inter = Inter({
  subsets: ['latin'], // Inclua os caracteres necessários
  variable: '--font-inter', // Variável CSS para a fonte
});

export default function Home() {
  return (
    <div className="">
      <ProjectsPage />
    </div>
  );
}
