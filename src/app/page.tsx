import AboutSection from "@/components/AboutSection/AboutSection";
import EmailSection from "@/components/EmailSection/EmailSection";
import Footer from "@/components/Footer/Footer";
import IntoSection from "@/components/IntoSection/IntoSection";
import Navbar from "@/components/Navbar/Navbar";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mt-24 mx-auto px-14 py-5">
        <IntoSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection/>
      </div>
      <Footer/>
    </main>
  );
}
