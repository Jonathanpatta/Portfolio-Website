import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { SoftwareTitle } from './SoftwareTitle';
import { ProjectCard } from './ProjectCard';
import { IntroductionSection } from './IntroductionSection';
import { ChatSection } from './ChatSection';
import { SocialCard } from './SocialCard';
import { EducationSection } from './EducationSection';

const PortfolioCard = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [projects] = useState([
    { 
      name: 'RagaaS', 
      description: `RagaaS is a framework to support any dataset of documents to be queried. Tech stack consists of Groq(llama3-70B) for llm, Qdrant for vector store and Alibaba-NLP/gte-large-en-v1.5 model for document embeddings. Uses Langchain with a latency of 1 second and <2GB memory.`, 
      link: 'https://github.com/Jonathanpatta/RAGaaS',
      tags: ['Machine Learning','python', 'RAG']
    },
    { 
      name: 'Apartment Services Website', 
      description: `A fully featured website to advertise community services. Hosted with AWS and uses, lambda, API Gateway, AWS Cognito and DynamoDB for storage. Written in Golang and next js for frontend`, 
      link: 'https://github.com/Jonathanpatta/ApartmentServices',
      tags: ['Golang', 'React js', 'Web Dev', 'django']
    },
    { 
      name: 'Online Mart', 
      description: `Features:Full text search based on item name and description,Order History,Item View,Cart system written from scratch in javascript,Email Verification for Users,Tech Stack: Django, Bootstrap, Animate.css, PostgreSQL`, 
      link: 'https://github.com/Jonathanpatta/Online-Mart',
      tags: ['python', 'Web Dev', 'django']
    },
    { 
      name: 'Djan-go', 
      description: 'A mini django like framework for converting golang structs to rest apis with an admin dashboard for data storage for rapid development', 
      link: 'https://github.com/Jonathanpatta/djan-go',
      tags: ['golang', 'React js', 'Web Dev', 'django']
    },
    { 
      name: 'Copypasta scraper', 
      description: 'This project consists of scripts to scrape over 300,000 datapoints of copypastas from copypastadb.com using python', 
      link: 'https://github.com/Jonathanpatta/copypastadb-scraper',
      tags: ['python','data processing']
    },
    { 
      name: 'E2E Encryption Chat App', 
      description: `This project uses AES-GCM for encryption,The Diffie Hellman Key Exchange protocol and The
Elliptic Curve Diffie Hellman algorithm using the P-256 Curve for generation.
The frontend is from web dev simplified's whatsapp clone tutorial, built in React`, 
      link: 'https://github.com/Jonathanpatta/E2E-Encryption-Chat-App',
      tags: ['Encryption', 'Security','React js']
    },
    { 
      name: 'Semantic Book Recommendation Engine', 
      description: 'Used Googles Word2Vec model to semantically encode a large dataset of books for semantically relevant search and recommendation results', 
      link: 'https://github.com/Jonathanpatta/Good-Read-Book-Recommender',
      tags: ['python', 'Machine Learning','data processing']
    },
    { 
      name: 'r/place clone', 
      description: 'A clone of the popular pixel placing event on reddit', 
      link: 'https://github.com/Jonathanpatta/rplace',
      tags: ['python','data processing']
    },
    { 
      name: 'ASL Classifier', 
      description: 'American Sign Language Translation done using recogntion with Convolutional Neural Networks', 
      link: 'https://github.com/Jonathanpatta/asl_image_classifier',
      tags: ['python', 'Machine Learning','data processing']
    },
    { 
      name: 'Game of Amazon', 
      description: 'An implementation of the popular Game of Amazons in golang.', 
      link: 'https://github.com/Jonathanpatta/game-of-amazons',
      tags: ['golang']
    },
    { 
      name: 'Twitch VOD sync', 
      description: 'A chrome extension tool to sync the times of clips with the timestamp where it occured on the livestream. This is useful for a users trying to watch the entire context of clips', 
      link: 'https://github.com/Jonathanpatta/twitch-clip-vod-sync',
      tags: ['javascript']
    },
  ]);

  useEffect(() => {
    const filtered = projects.filter(project => 
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredProjects(filtered);
  }, [searchTerm, projects]);

  const workExperience = [
    { 
      title: 'Software Engineer at Appointy', 
      description: `I led the refactoring of all microservices from HTTP to gRPC and GraphQL, achieving a development cycle four times faster. I spearheaded the design and development of Saastack, a code generation tool that creates gRPC, GraphQL, or HTTP services with any SQL-based database, deployable via Docker to Kubernetes in seconds. Additionally, I developed 'Acurl,' a tool for converting curl commands into local requests for custom debugging. I optimized database queries and refined PostgreSQL indexes, reducing query latency by 50%, with all queries under 200ms. Furthermore, I implemented CI/CD pipelines using GitHub Actions, enabling instantaneous deployments.`,
      duration: 'Jul 2022 - Jul 2023',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7pzqZe0Stt3G5sez4bv6kNuMuFYSkP73M9w&s'
    },
    { 
      title: 'Intern at Appointy', 
      description: `I integrated the BigCommerce API to synchronize local user data with clients' customer databases. I also redesigned Appointy's payment system, increasing processing speed by 500% and reducing latency to sub-second levels for 100,000 customers worldwide.`,
      duration: 'Dec 2021 - Jul 2022',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7pzqZe0Stt3G5sez4bv6kNuMuFYSkP73M9w&s'
    },
    { 
      title: 'Intern At Dhiway', 
      description: 'I developed a barcode scanning feature for secure use in the SEQR React-Native app and integrated a custom MLKit API, improving scanning accuracy by 50%. Additionally, I explored Rust development for blockchain networks, with a focus on the Solana ecosystem.',
      duration: 'Sep 2021 - Nov 2021',
      image: 'https://avatars.githubusercontent.com/u/54303169?s=280&v=4'
    },
  ];

  const education = [
    { 
      title: 'Msc in Computer Science at Arizona State University,Tempe', 
      description: `I completed courses focusing on cutting-edge technologies, such as Generative AI, as well as low-level programming and software security, providing a comprehensive understanding of both advanced machine learning techniques and the foundational aspects of operating systems and algorithm design.`,
      duration: 'Aug 2023 - May 2025',
      image: 'https://yt3.googleusercontent.com/ytc/AIdro_lA9SK0_ZKQ1R68hmTQn2PqkgdcLl_7ZLq-pyZikm2xeCQ=s900-c-k-c0x00ffffff-no-rj'
    },
    { 
      title: 'Btech in Computer Science at Vellore Institute of Technology, Vellore', 
      description: `At VIT, I learned Python, Go, and JavaScript, gaining a solid understanding of various types of databases and applying this knowledge to numerous projects. I was also an active member of the Google Developer Student Club, which enriched my experience and provided opportunities for collaboration and learning.`,
      duration: 'Jul 2018 - May 2022',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8fctn2jq8guRd3Sfgxmv9p-ftsSu0YXulGQ&s'
    },
  ];

  const socialLinks = {
    github: 'https://github.com/Jonathanpatta',
    linkedin: 'https://www.linkedin.com/in/jonathan-patta/',
    email: 'jonathan.patta@gmail.com',
    phone: '+16025661234'
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">

      <SoftwareTitle/>
      
      <IntroductionSection />
      
      <ChatSection />
      
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      
      <div className={`relative max-w-md mx-auto mb-12 transition-all duration-300 ${searchFocused ? 'scale-110' : ''}`}>
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          className="w-full bg-gray-800 text-white border-2 border-indigo-500 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
        />
        <Search className="absolute left-3 top-2.5 text-indigo-500" size={20} />
      </div>

      <div className="flex flex-wrap justify-center gap-12 mb-16">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <EducationSection workExperience={workExperience} education={education} />

      <SocialCard links={socialLinks} />
    </div>
  );
};

export default PortfolioCard;


