import Footer from "@/components/navigation/Footer";
import Header from "@/components/navigation/Header";
import BannerSection from "@/components/section/BannerSection";
import HomeAbout from "@/components/section/HomeAbout";
import HomeContact from "@/components/section/HomeContact";
import HomeSkills from "@/components/section/HomeSkills";
import ProjectSection from "@/components/section/ProjectSection";
import { HomePageData } from "@/mock";
import Head from "next/head";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <title>Alex Otieno | Portfolio</title>
      </Head>
      <Header />
      <BannerSection data={HomePageData} />
      <ProjectSection data={HomePageData} />
      <HomeAbout data={HomePageData} />
      <HomeSkills data={HomePageData} />
      <HomeContact data={HomePageData} />
      <Footer />
    </main>
  );
}
