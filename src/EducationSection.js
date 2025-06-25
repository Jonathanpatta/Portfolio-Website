
import {  Briefcase, GraduationCap} from 'lucide-react';

const TimelineItem = ({ item, type, side }) => {
  const Icon = type === 'work' ? Briefcase : GraduationCap;
  return (
    <div className={`mb-8 flex justify-between items-center w-full ${side}-timeline`}>
      {side === 'left' ? (
        <>
          <div className="order-1 w-5/12">
            <div className="bg-gray-800 rounded-lg shadow-xl px-6 py-4">
              <div className="flex items-center mb-2">
                <img src={item.image} alt={item.title} className="w-10 h-10 rounded-full mr-3" />
                <h3 className="font-bold text-white text-xl">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-300 italic mb-2">{item.description}</p>
              <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">{item.duration}</p>
            </div>
          </div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white"><Icon size={16} /></h1>
          </div>
          <div className="order-1 w-5/12"></div>
        </>
      ) : (
        <>
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white"><Icon size={16} /></h1>
          </div>
          <div className="order-1 w-5/12">
            <div className="bg-gray-800 rounded-lg shadow-xl px-6 py-4">
              <div className="flex items-center mb-2">
                <img src={item.image} alt={item.title} className="w-10 h-10 rounded-full mr-3" />
                <h3 className="font-bold text-white text-xl">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-300 italic mb-2">{item.description}</p>
              <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">{item.duration}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export const EducationSection = ({workExperience, education}) => {
  return <div className="container mx-auto w-full h-full">
    <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
    <div className="relative wrap overflow-hidden p-10 h-full">
      <div className="border-2-2 absolute border-opacity-50 border-indigo-500 h-full border left-1/2"></div>
      {workExperience.map((item, index) => (
        <TimelineItem key={index} item={item} type="work" side={index % 2 === 0 ? 'left' : 'right'} />
      ))}
    </div>

    <h2 className="text-3xl font-bold mb-8 mt-16 text-center">Education</h2>
    <div className="relative wrap overflow-hidden p-10 h-full">
      <div className="border-2-2 absolute border-opacity-50 border-indigo-500 h-full border left-1/2"></div>
      {education.map((item, index) => (
        <TimelineItem key={index} item={item} type="education" side={index % 2 === 0 ? 'left' : 'right'} />
      ))}
    </div>
  </div>;
}