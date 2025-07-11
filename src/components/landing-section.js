import { Github } from 'lucide-react';

function LandingPage() {
  return (
    <div className="bg-landing bg-cover bg-center h-screen flex items-center justify-center px-6 lg:px-12">
      <div className="w-full max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="text-white text-center lg:text-left">
            <div className="space-y-4 pt-20 md:pt-0 md:space-y-6">
              <p className="font-montserrat text-base md:text-xl xl:text-5xl">
                Hello, my name is
              </p>
              <h1 className="font-kalayaan text-lg md:text-3xl xl:text-5xl">
                Jaime Lei Indick
              </h1>
              <p className="font-montserrat italic text-base md:text-lg xl:text-xl text-gray-300 mb-10 md:mb-16 lg:mb-20">
                a recent graduate aspiring to be a software engineer
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mt-4 md:mt-12 font-montserrat">
              <a
                href="https://github.com/jaimelei"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
              >
                <Github size={18} /> GitHub
              </a>

              <a
                href="/assets/documents/resume.pdf"
                download
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-transparent border border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Column */}
          <img
            src="/assets/images/misc/photo.jpg"
            alt="Graduation Photo"
            className="mx-auto h-[300px] md:h-[500px] xl:h-[700px] border-2 border-white object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
