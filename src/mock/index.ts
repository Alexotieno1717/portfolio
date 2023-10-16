import { IProjectPage, IHomePage, IAboutPage, IContactPage } from '../../types';

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
      "Crafting digital dreams into reality. Web wizard at your service—building stunning, impactful sites. Let's chat and create web magic! ✨",
    contacts: {
      title: 'Contact me here',
      contact: [
        {
          id: 'email',
          img: '/project/Email.svg',
          description: 'alexotieno900@gmail.com',
        },
        {
          id: 'landmark',
          img: '/project/Landmark.svg',
          description: 'Nairobi, Kenya',
        },
        {
          id: 'linkedin',
          img: '/project/Linkedin.svg',
          description: '@alex-otieno-66a049162',
        },
        {
          id: 'phone',
          img: '/project/phone.svg',
          description: '+254 748815593',
        },
      ],
    },
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

const AboutPageData: IAboutPage = {
  title: 'About-me',
  description:
    "I am a Web Developer and Web Designer, and I'm very passionate and dedicated to my work. I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.",
  img: '/assets/Home_art 1.svg',
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
};

const ContactPageData: IContactPage = {
  title: 'Contact',
  subTitle: 'Who am i?',
  description1:
    "Hey there! If you're on the lookout for a web development wizard, your search ends here. I'm all about turning your digital dreams into reality. Whether you need a mind-blowing web app, want to spice up your online presence, or dive into the latest tech trends, count me in!",
  description2:
    "I thrive on collaboration, and your feedback is my secret sauce for creating stellar solutions. Imagine not just a website but a digital masterpiece that wows users. If you're ready for a tech journey filled with creativity and impact, let's chat! Your ideas, my skills—let's make some web magic together! 🚀",
  contacts: {
    title: 'Contact me here',
    contact: [
      {
        id: 'email',
        img: '/project/Email.svg',
        description: 'alexotieno900@gmail.com',
      },
      {
        id: 'landmark',
        img: '/project/Landmark.svg',
        description: 'Nairobi, Kenya',
      },
      {
        id: 'linkedin',
        img: '/project/Linkedin.svg',
        description: '@alex-otieno-66a049162',
      },
      {
        id: 'phone',
        img: '/project/phone.svg',
        description: '+254 748815593',
      },
    ],
  },
};

export { HomePageData, projectPageData, AboutPageData, ContactPageData };
