export const SoftwareTitle = () => {
  const titleText = `Welcome!`;

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-900 p-4">
        <div className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 p-2 flex justify-between items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs text-blue-100">system.exe</span>
          </div>
          <div className="p-4">
            <h1
              className="text-6xl font-bold text-center text-blue-300"
              style={{
                fontFamily: "'Courier New', monospace",
                textShadow: '0 0 10px rgba(59,130,246,0.5), 0 0 20px rgba(59,130,246,0.3)',
              }}
            >
              {titleText.split('').map((char, index) => (
                <span
                  key={index}
                  className={`inline-block transition-colors duration-300 ${char === ' ' ? 'mr-4' : 'hover:text-blue-500'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h1>


          </div>
          <div className="bg-gray-700 p-2 text-blue-300 font-mono text-sm">
            <span className="text-green-400">{'>'}</span> Loading system components...
          </div>
          <div className="bg-gray-700 p-2 text-blue-300 font-mono text-sm">
            <span className="text-green-400">{'>'}</span> Scroll to continue
          </div>
        </div>
      </div>
    </div>
  );
};
