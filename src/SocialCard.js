
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const SocialCard = ({ links }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6 max-w-md mx-auto mt-16">
      <h2 className="text-2xl font-bold mb-4 text-center">Connect with me</h2>
      <div className="flex justify-center space-x-6">
        {links.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors duration-200">
            <Github size={24} />
          </a>
        )}
        {links.linkedin && (
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors duration-200">
            <Linkedin size={24} />
          </a>
        )}
        {links.email && (
          <a href={`mailto:${links.email}`} className="text-white hover:text-indigo-400 transition-colors duration-200">
            <Mail size={24} />
          </a>
        )}
        {links.phone && (
          <a href={`tel:${links.phone}`} className="text-white hover:text-indigo-400 transition-colors duration-200">
            <Phone size={24} />
          </a>
        )}
      </div>
    </div>
  );
};