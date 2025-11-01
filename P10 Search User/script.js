const users = [
  {
    name: "Ramesh",
    pic: "https://images.pexels.com/photos/29881401/pexels-photo-29881401.jpeg",
    bio: "I am a photographer, specializing in landscape and nature shots. I love traveling and capturing the beauty of the outdoors."
  },
  {
    name: "Aisha",
    pic: "https://images.pexels.com/photos/27897903/pexels-photo-27897903.jpeg",
    bio: "Full-stack web developer with 5 years of experience in React and Node.js. Passionate about building scalable and accessible applications."
  },
  {
    name: "David",
    pic: "https://images.pexels.com/photos/2341350/pexels-photo-2341350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Marketing professional focused on digital strategy and content creation. Experienced in driving engagement and conversions across multiple platforms."
  },
  {
    name: "Priya Sharma",
    pic: "https://images.pexels.com/photos/18041953/pexels-photo-18041953.jpeg",
    bio: "Biomedical researcher working on genetic sequencing. Dedicated to finding new treatments for chronic diseases."
  },
  {
    name: "Nia Khan",
    pic: "https://images.pexels.com/photos/34481615/pexels-photo-34481615.jpeg",
    bio: "Head chef at 'The Spice Route.' My passion is blending traditional Indian and Middle Eastern flavors."
  },
  {
    name: "Sophia Chen",
    pic: "https://images.pexels.com/photos/29637416/pexels-photo-29637416.jpeg",
    bio: "Architect and urban planner. I design sustainable, community-focused residential areas."
  },
  {
    name: "Javier Rodriguez",
    pic: "https://images.pexels.com/photos/16715674/pexels-photo-16715674.jpeg",
    bio: "High school history teacher and debate coach. I strive to make past events relevant for future leaders."
  },
  {
    name: "Emily White",
    pic: "https://images.pexels.com/photos/13995911/pexels-photo-13995911.jpeg",
    bio: "Financial analyst specializing in cryptocurrency and blockchain technology investments."
  },
  {
    name: "Kiran Singh",
    pic: "https://images.pexels.com/photos/10648919/pexels-photo-10648919.jpeg",
    bio: "Professional musician and composer. My genre is a fusion of classical and contemporary electronic music."
  },
  {
    name: "Michael Lee",
    pic: "https://images.pexels.com/photos/34507025/pexels-photo-34507025.jpeg",
    bio: "Certified personal trainer and nutritionist. Helping clients achieve sustainable health and wellness goals."
  },
  {
    name: "Lena Popova",
    pic: "https://images.pexels.com/photos/34440788/pexels-photo-34440788.jpeg",
    bio: "Freelance graphic designer and illustrator. I create modern, minimalist branding for startups."
  },
  {
    name: "Alex Johnson",
    pic: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    bio: "DevOps engineer focusing on cloud infrastructure and automation using Kubernetes and Terraform."
  },
  {
    name: "Fatima Ali",
    pic: "https://images.pexels.com/photos/34511356/pexels-photo-34511356.jpeg",
    bio: "Investigative journalist reporting on social justice and human rights issues in South Asia."
  },
  {
    name: "Chris Evans",
    pic: "https://images.pexels.com/photos/2923156/pexels-photo-2923156.jpeg",
    bio: "Project manager for commercial construction. Overseeing large-scale industrial building projects."
  },
  {
    name: "Jessica Kim",
    pic: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg",
    bio: "Corporate lawyer specializing in intellectual property law and venture capital funding."
  },
  {
    name: "Ben Carter",
    pic: "https://images.pexels.com/photos/3027243/pexels-photo-3027243.jpeg",
    bio: "Commercial airline pilot with over 10,000 flight hours. Loves the view from 35,000 feet."
  },
  {
    name: "Nandini Rao",
    pic: "https://images.pexels.com/photos/15827760/pexels-photo-15827760.jpeg",
    bio: "Data scientist skilled in machine learning models and predictive analytics for e-commerce."
  },
  {
    name: "George Miller",
    pic: "https://images.pexels.com/photos/1585634/pexels-photo-1585634.jpeg",
    bio: "Veterinarian and animal welfare advocate. Runs a small clinic focused on preventative pet care."
  },
  {
    name: "Hannah Zaki",
    pic: "https://images.pexels.com/photos/9502319/pexels-photo-9502319.jpeg",
    bio: "Senior editor at a major publishing house. Passionate about discovering new voices in fiction."
  },
  {
    name: "Victor Wong",
    pic: "https://images.pexels.com/photos/18285687/pexels-photo-18285687/free-photo-of-young-brunette-in-a-white-shirt-and-elegant-earrings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Senior Sales Executive driving B2B growth in the technology sector across the APAC region."
  }
];

const container = document.querySelector('.main');


function showUsers(arr){
  arr.forEach(user => {
    const card = document.createElement('div');
    card.classList.add('user-card');
    card.style.backgroundImage = `url(${user.pic})`;

    // const picElement = document.createElement('img');
    // picElement.src=user.pic;
    // picElement.alt=`Profile Picture of ${user.name}`;
    // // card.setAttribute(background-Image,user.pic)

    const nameElement=document.createElement('h3');
    nameElement.textContent =user.name;

    const bio= document.createElement('p');
    bio.textContent= user.bio;

    


    card.appendChild(nameElement);
    card.appendChild(bio);
    
    container.appendChild(card);
  });
}
 
showUsers(users);

let input=document.querySelector('input');
input.addEventListener("input", function(){
  const searchInput = input.value.toLowerCase();
  let newUsers = users.filter((user)=>{
    const userName =user.name.toLowerCase();
    return userName.startsWith(searchInput);
  });
  container.innerHTML="";
  showUsers(newUsers);
})