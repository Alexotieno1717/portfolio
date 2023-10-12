import { IHomePage, ISectionBanner } from '../../types';

const BannerData: ISectionBanner = {
  id: 1,
  title: 'Alex is a',
  keyword: 'Web Designer',
  Keyword1: 'Full Software Developer',
  description: 'He crafts responsive websites where technologies meet creativity',
  buttonLable: 'Contact Me',
  buttonLink: '/contact',
  img: '/assets/Home_art 1.svg',
};

const HomePageData: IHomePage = {
  landingHero: {
    id: 1,
    title: 'Alex is a',
    keyword: 'Web Designer',
    Keyword1: 'Full Software Developer',
    description: 'He crafts responsive websites where technologies meet creativity',
    buttonLable: 'Contact Me',
    buttonLink: '/contact',
    img: '/assets/Home_art 1.svg',
  },
  Projects: {
    title: 'Projects',
    items: [
      {
        id: 1,
        img: '/project/olive.png',
        languages: 'TypeScript Turbo Next.Js Tailwind',
        title: 'Olive Tree Media',
        description: 'Olive Tree Media is a licensed SMS & Bulk Messaging Solutions and Content Services Provider.',
        buttonLable: 'Live',
        buttonLink: 'https://olivetreehub.com/about',
      },
      {
        id: 2,
        img: '/project/elewa.png',
        languages: 'TypeScript Monorepos Nx Angular',
        title: 'Elewa Education',
        description: 'Elewa website redesign uses Angular Universal to render while integrating webflow CMS blog posts',
        buttonLable: 'Live',
        buttonLink: 'https://elewa.education/home',
      },
      {
        id: 3,
        img: '/project/pharma.png',
        languages: 'React.JS SCSS',
        title: 'Pharmacorp',
        description: 'Website that connect sale-reps to pharmaceutical agencies. and also connect doctors to patients',
        buttonLable: 'Live',
        buttonLink: 'https://pharmacorp001.vercel.app/dashboard',
      },
    ],
  },
  aboutMe: {
    title: 'About-me',
    descrption:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, unde. Error earum, maiores veritatis commodi doloribus placeat architecto eaque aliquam facilis rerum quos, sed expedita rem praesentium, quia maxime voluptatum dolorum vitae fugiat et repellendus? Vero explicabo culpa nihil molestiae quis tempore, mollitia, nostrum ullam iure ipsa omnis exercitationem! Nobis? Lorem ipsum dolor sit amet consectetur',
    buttonLable: 'Read More',
    buttonLink: '/about',
    img: '/assets/Home_art 1.svg',
  },
  skills: {
    title: 'Skills',
    skill: [
      {
        title: 'Language',
        languages: 'TypeScript JavaScript Python PHP',
      },
      {
        title: 'Frameworks',
        languages: 'React Django Laravel React Native',
      },
      {
        title: 'Database',
        languages: 'MySQL SQLite PostgreSQL',
      },
      {
        title: 'Tools',
        languages: 'VSCode vim Linux Figma Git Vercel',
      },
      {
        title: 'Others',
        languages: 'HTML CSS REST SCSS Bootstrap Tailwind',
      },
    ],
  },
  contacts: {
    title: 'contacts',
    description:
      'I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me',
    subTitle: 'Message me here',
    img: '/project/Email.svg',
    imgText: 'alexotieno900@gmail.com',
  },
};

export { BannerData, HomePageData };
