import Footer from '@/components/navigation/Footer';
import Header from '@/components/navigation/Header';
import AboutSkills from '@/components/section/about/AboutSkills';
import AboutTopSection from '@/components/section/about/AboutTopSection';
import FanFacts from '@/components/section/about/FanFacts';
import { AboutPageData } from '@/mock';
import Head from 'next/head';

export default function About() {
  return (
    <main className="overflow-x-hidden">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <title>Alex Otieno | About Me </title>
      </Head>
      <Header />
      <AboutTopSection data={AboutPageData} />
      <AboutSkills data={AboutPageData} />
      <FanFacts />
      <Footer />
    </main>
  );
}
