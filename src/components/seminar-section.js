import { useState } from 'react';

function Seminar() {
  const certificates = [
    {
      title: 'Cybersecurity Awareness Orientation',
      image: '/assets/images/seminars/seminar1.jpg',
    },
    {
      title: 'Visual Programming and APK Development: Bridging Creativity and Engineer Innovation',
      image: '/assets/images/seminars/seminar2.jpg',
    },
    {
      title: 'Visual Programming and Android Package Kit Development',
      image: '/assets/images/seminars/seminar3.jpg',
    },
    {
      title: 'InnoVision IT Insights for Tomorrow - Cybersecurity',
      image: '/assets/images/seminars/seminar4.png',
    },
    {
      title: 'InnoVision IT Insights for Tomorrow - Machine Learning',
      image: '/assets/images/seminars/seminar5.png',
    },
    {
      title: 'InnoVision IT Insights for Tomorrow - Software Test Automation',
      image: '/assets/images/seminars/seminar6.png',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeCert = certificates[activeIndex];

  return (
    <div className="bg-[#1D1D1D] text-white flex flex-col items-center py-12 px-6">
      {/* Section Heading */}
      <h3 className="text-[#9E6D0C] font-squada text-4xl md:text-6xl pb-12">
        Seminars Attended
      </h3>

      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">
        {/* Left Column */}
        <div className="md:w-1/2 flex items-center justify-center md:justify-start text-center md:text-left px-2">
          <h3 className="texl-lg md:text-3xl font-montserrat_medium leading-snug max-w-[90%] break-words">
            {activeCert.title}
          </h3>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 flex flex-col items-center">

          {/* Counter */}
          <p className="text-sm text-white/60 mb-2">
            Certificate {activeIndex + 1} of {certificates.length}
          </p>

          {/* Preview */}
          <div className="h-[320px] w-full flex items-center justify-center border-2 border-white rounded-xl overflow-hidden mb-4 bg-white">
            <img
              src={activeCert.image}
              alt={activeCert.title}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 w-full">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className={`cursor-pointer border-2 rounded-md overflow-hidden transition-all duration-200
                  ${index === activeIndex ? 'border-[#9E6D0C] scale-105 shadow-md' : 'border-white/10'}
                  hover:scale-105 hover:opacity-90`}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-20 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-t border-white/30 w-[90%] mt-12" />
    </div>
  );
}

export default Seminar;
