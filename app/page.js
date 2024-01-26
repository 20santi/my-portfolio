"use client"
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";
import ProjectsSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <div className="container mx-auto py-4 px-12 mt-24">
        <RecoilRoot>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </RecoilRoot>
      </div>
    </main>
  );
}
