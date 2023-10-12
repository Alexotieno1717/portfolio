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
    subTitle: string;
    img: string;
    imgText: string;
  };
}

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
