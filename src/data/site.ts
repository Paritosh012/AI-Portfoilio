export type Site = {
  name: string;
  role: string;
  email: string;
  location: string;
  github: string;
  linkedin?: string;
  resume?: string;
  photo?: string;
};

export const site: Site = {
  name: "Paritosh Jaiswal",
  role: "MERN Stack Developer",
  email: "jaiswalparitosh8@gmail.com",
  location: "Bhopal, India",
  github: "https://github.com/Paritosh012",

  linkedin: "https://www.linkedin.com/in/paritosh-jaiswal-ji",

  resume: "/Paritosh_Jaiswal_Resume.pdf",

  photo: "/profile.jpg",
};
