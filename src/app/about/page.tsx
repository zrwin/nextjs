"use client";

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="p-10 bg-white rounded-3xl shadow-2xl max-w-2xl text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4 animate-fade-in">
          About Me
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Hello! I am a passionate developer who loves creating modern, user-friendly web applications. My goal is to build seamless digital experiences using cutting-edge technologies.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="https://github.com/zrwin"
            className="px-6 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-800 transition-all duration-300"
          >
            Projects
          </a>
          <a
            href="https://www.linkedin.com/in/zrwin/"
            className="px-6 py-2 text-white bg-pink-600 rounded-lg hover:bg-pink-800 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
