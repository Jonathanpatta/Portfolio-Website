
import { motion } from 'framer-motion';

export const IntroductionSection = () => {
  const fullText = "Hey there 👋, I'm Jonathan. I'm a Software Engineer currently doing my masters at Arizona State University. Chat with my digitial assistant below to get to know more about me!";
  // const [text, setText] = useState(fullText);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold mb-4">About me...</h2>
      <p className="text-xl">{fullText}</p>
    </motion.div>
  );
};
