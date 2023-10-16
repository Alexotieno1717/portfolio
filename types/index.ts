export interface ISectionBanner {
  id: number;
  title: string;
  keyword: string;
  Keyword1: string;
  description: string;
  buttonLable: string;
  buttonLink: string;
  img: string;
}

export interface IHomePage {
  landingHero: ISectionBanner;
  Projects: {
    title: string;
    items: Array<projectItem>;
  };
  aboutMe: {
    title: string;
    descrption: string;
    buttonLable: string;
    buttonLink: string;
    img: string;
  };
  skills: {
    title: string;
    skill: Array<skillsItem>;
  };
  contacts: {
    title: string;
    description: string;
    contacts: {
      title: string;
      contact: Array<contactsItem>;
    };
  };
}

export interface IProjectPage {
  header: string;
  descrption: string;
  Projects: IHomePage['Projects'];
  smallProject: {
    title: string;
    items: Array<smallProjectItem>;
  };
}

export interface IAboutPage {
  title: string;
  description: string;
  img: string;
  skills: IHomePage['skills'];
}

export interface IContactPage {
  title: string;
  subTitle: string;
  description1: string;
  description2: string;
  contacts: {
    title: string;
    contact: Array<contactsItem>;
  };
}

export type contactsItem = {
  id: string;
  img: string;
  description: string | number;
};

export type smallProjectItem = {
  id: number;
  language: string;
  title: string;
  description: string;
  buttonLable: string;
  buttonLink: string;
};

export type projectItem = {
  id: number;
  img: string;
  languages: string;
  title: string;
  description: string;
  buttonLable: string;
  buttonLink: string;
};

export type skillsItem = {
  title: string;
  languages: string;
};
