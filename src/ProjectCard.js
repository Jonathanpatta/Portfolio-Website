
import {  ExternalLink} from 'lucide-react';
const getTagColor = (tag) => {
  const colors = [
    'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500',
    'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-teal-500'
  ];
  const hash = tag.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
  return colors[hash % colors.length];
};

export const ProjectCard = ({ project }) => {
  return (
    <div className="group perspective">
      <div className="relative w-72 h-80 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(0deg)_scale(1.05)] [transform:rotateY(-20deg)_rotateX(10deg)_scale(0.95)] group-hover:z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-blue-800 text-white p-6 rounded-lg shadow-xl [backface-visibility:hidden] [transform:preserve-3d] before:content-[''] before:absolute before:-inset-1 before:bg-indigo-700 before:rounded-lg before:-z-10 before:transform before:skew-x-6 before:skew-y-3">
          <h3 className="text-2xl font-bold mb-2 transform translate-z-10">{project.name}</h3>
          <p className="text-sm transform translate-z-5 mb-4">{project.description}</p>
          <a 
            href={project.link} 
            className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors duration-200 transform translate-z-10"
          >
            View Project
            <ExternalLink className="ml-1" size={16} />
          </a>
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span 
                key={index} 
                className={`${getTagColor(tag)} text-xs px-2 py-1 rounded-full`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
