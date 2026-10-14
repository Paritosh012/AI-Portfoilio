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
  // https:// zaroori hai, warna browser ise apni hi site ka path samajhta hai
  linkedin: "https://www.linkedin.com/in/paritosh-jaiswal-ji",
  // public/Paritosh_Jaiswal_Resume.pdf. File ke naam mein tera naam hai, taaki recruiter ke
  // Downloads mein "resume.pdf" ki bheed mein tera resume pehchaan mein aaye.
  resume: "/Paritosh_Jaiswal_Resume.pdf",
  // public/ folder ki file website ke root par milti hai:
  // public/profile.jpg  ->  "/profile.jpg"  (import ki zaroorat nahi)
  photo: "/profile.jpg",
};
