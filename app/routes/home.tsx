import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeMatcher" },
    { name: "description", content: "Smarter resume feedback. Better job matches." },
  ];
}

export default function Home() {
  return <main className= "bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />

    <section className= "main-section">
      <div className= "page-heading py-16">
        <h1>Monitor Applications & Resume Scores</h1>
        <h2>View your applications with instant AI feedback.</h2>
      </div>
      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map( (resume) =>(
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}
    </section>


    
    
    
  </main>;
}
