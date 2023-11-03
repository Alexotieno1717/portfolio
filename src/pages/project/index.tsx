import Footer from "@/components/navigation/Footer";
import Header from "@/components/navigation/Header";
import CompleteProject from "@/components/section/project/CompleteProject";
import SmallProjects from "@/components/section/project/SmallProjects";
import { projectPageData } from "@/mock";
import Head from "next/head";

export default function Project() {
  return (
    <main className="overflow-x-hidden">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <title>Alex Otieno | Projects</title>
      </Head>
      <Header />
      <CompleteProject data={projectPageData} />
      <SmallProjects data={projectPageData} />
      <Footer />
    </main>
  );
}
