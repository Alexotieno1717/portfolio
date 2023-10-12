import { IProjectPage, IHomePage } from '../../types';

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
      "I am a Web Developer and Web Designer, and I'm very passionate and dedicated to my work. I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.",
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

const projectPageData: IProjectPage = {
  header: 'Projects',
  descrption: 'List of my Projects',
  Projects: {
    title: '',
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
  smallProject: {
    title: 'small-projects',
    items: [
      {
        id: 1,
        language: 'PHP Laravel Tailwind',
        title: 'Tweety Website',
        description: 'Tweety is an application where user can create account post and react on tweets.',
        buttonLable: 'Github',
        buttonLink: 'https://github.com/Laracast-Project/tweety',
      },
      {
        id: 2,
        language: 'Python Django Bootstrap',
        title: 'Neighbourhood',
        description: 'Allows user to join a hood owned by admin, and can see posts in only that hood.',
        buttonLable: 'Github',
        buttonLink: 'https://github.com/Moringa-School-Access/Neighbourhood',
      },
      {
        id: 3,
        language: 'Figma',
        title: 'Rep Connect',
        description: 'Website that connect sale-reps to pharmaceutical agencies. and also connect doctors to patients.',
        buttonLable: 'Figma',
        buttonLink: 'https://shorturl.at/bhrzQ',
      },
      {
        id: 4,
        language: 'TypeScript Firebase Angular',
        title: 'Elewa',
        description:
          'An open-source chatbot editor and manager which allows to host and use conversational learning projects.',
        buttonLable: 'Github',
        buttonLink: 'https://github.com/Alexotieno1717/elewa',
      },
      {
        id: 4,
        language: 'Figma',
        title: 'mSwali Trivia',
        description:
          'mSwali are on a mission to promote the desire & curiosity to know more within the African adult population.',
        buttonLable: 'Figma',
        buttonLink: 'https://shorturl.at/aGHLX',
      },
    ],
  },
};

export { HomePageData, projectPageData };
