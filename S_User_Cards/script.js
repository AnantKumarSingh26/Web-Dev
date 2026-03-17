const users = [
  {
    name: "Alex Johnson",
    tags: ["developer", "javascript", "react"],
    pic: "https://randomuser.me/api/portraits/men/32.jpg",
    profession: "Frontend Developer",
    about: "Passionate frontend developer with 5+ years of experience building responsive web apps using React."
  },
  {
    name: "Sophia Williams",
    tags: ["designer", "ui", "ux"],
    pic: "https://randomuser.me/api/portraits/women/44.jpg",
    profession: "UI/UX Designer",
    about: "Creative designer focused on crafting intuitive user experiences and clean interfaces."
  },
  {
    name: "Daniel Martinez",
    tags: ["backend", "nodejs", "api"],
    pic: "https://randomuser.me/api/portraits/men/56.jpg",
    profession: "Backend Developer",
    about: "Backend specialist experienced in building scalable APIs with Node.js and Express."
  },
  {
    name: "Emma Brown",
    tags: ["marketing", "seo", "content"],
    pic: "https://randomuser.me/api/portraits/women/65.jpg",
    profession: "Digital Marketer",
    about: "SEO expert helping brands grow their online presence through data-driven strategies."
  },
  {
    name: "Liam Anderson",
    tags: ["mobile", "flutter", "dart"],
    pic: "https://randomuser.me/api/portraits/men/77.jpg",
    profession: "Mobile App Developer",
    about: "Flutter developer building high-performance cross-platform mobile applications."
  },
  {
    name: "Olivia Taylor",
    tags: ["data", "python", "ml"],
    pic: "https://randomuser.me/api/portraits/women/68.jpg",
    profession: "Data Scientist",
    about: "Data enthusiast skilled in machine learning, data analysis, and predictive modeling."
  },

  // New Users
  {
    name: "Noah Wilson",
    tags: ["devops", "aws", "docker"],
    pic: "https://randomuser.me/api/portraits/men/12.jpg",
    profession: "DevOps Engineer",
    about: "Automates deployment pipelines and manages cloud infrastructure using AWS and Docker."
  },
  {
    name: "Ava Thomas",
    tags: ["hr", "recruitment", "people"],
    pic: "https://randomuser.me/api/portraits/women/22.jpg",
    profession: "HR Manager",
    about: "Experienced HR professional focused on talent acquisition and employee engagement."
  },
  {
    name: "James White",
    tags: ["security", "cybersecurity", "network"],
    pic: "https://randomuser.me/api/portraits/men/41.jpg",
    profession: "Cybersecurity Analyst",
    about: "Protects systems and networks by identifying vulnerabilities and implementing security measures."
  },
  {
    name: "Isabella Harris",
    tags: ["content", "writing", "blogging"],
    pic: "https://randomuser.me/api/portraits/women/33.jpg",
    profession: "Content Writer",
    about: "Writes engaging blogs and web content with a focus on SEO and storytelling."
  },
  {
    name: "William Clark",
    tags: ["ai", "ml", "python"],
    pic: "https://randomuser.me/api/portraits/men/29.jpg",
    profession: "AI Engineer",
    about: "Builds intelligent systems using machine learning and deep learning techniques."
  },
  {
    name: "Mia Lewis",
    tags: ["product", "management", "agile"],
    pic: "https://randomuser.me/api/portraits/women/50.jpg",
    profession: "Product Manager",
    about: "Leads product development cycles using agile methodologies and user-focused design."
  }
];



let main = document.querySelector('main');
users.forEach(user=>{
  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src= user.pic;
  img.alt =  user.name;

  const h1 = document.createElement('h1');
  h1.textContent= user.name

  const p = document.createElement('p');
  p.textContent= user.profession

  const innerTag =  document.createElement('div');
  innerTag.classList.add('tags');

  user.tags.forEach(tag=>{
    const span = document.createElement('span');
    span.textContent =  tag;
    innerTag.appendChild(span);
  });

  const about= document.createElement('p');
  about.id= 'about'
  about.textContent = user.about;


  card.appendChild(img);
  card.appendChild(h1);
  card.appendChild(p);
  card.appendChild(innerTag);
  card.appendChild(about);

  main.appendChild(card);
});