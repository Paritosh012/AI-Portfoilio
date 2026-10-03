// Site-wide info ek jagah. Email/links badalne ho to sirf yahan.
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
  // TODO(Paritosh): LinkedIn URL daalo, phir Hero aur Contact mein icon/link dikh jaayega.
  linkedin: "",
  // TODO(Paritosh): resume PDF ko public/resume.pdf mein rakho aur yahan "/resume.pdf" likho.
  // Khaali ho to Hero aur About mein "Let's talk" button dikhta hai.
  resume: "",
  // TODO(Paritosh): transparent background wali photo (PNG, ~1000px lambi) public/profile.png
  // mein rakho aur yahan "/profile.png" likho. Khaali ho to initials wala orb dikhta hai.
  photo: "",
};
