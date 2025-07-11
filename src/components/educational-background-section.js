function EducationalBackground() {
  return (
    <div className="bg-[#1D1D1D] py-12">

      {/* Section Heading */}
      <h3 className="text-[#9E6D0C] font-squada text-center text-4xl md:text-6xl">
        Educational Background
      </h3>

      <div className="flex flex-col items-center h-full px-6">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start text-white mt-12 xl:space-x-40 lg:space-x-20 space-y-1 lg:space-y-0">
          
          {/* Bachelor's Degree */}
          <div className="flex flex-col items-center justify-start pb-10">
            <div className="text-center space-y-1 mb-3">
              <h4 className="font-montserrat_medium text-xl md:text-2xl xl:text-4xl">
                Bachelor's Degree | 2021-2025
              </h4>
              <h5 className="font-montserrat text-lg md:text-xl xl:text-2xl">
                Bachelor of Science in Computer Engineering
              </h5>
              <h6 className="font-montserrat text-lg md:text-xl xl:text-2xl">
                Bulacan State University
              </h6>
            </div>
            <div className="font-montserrat text-center italic space-y-1 text-sm md:text-base xl:text-xl">
              <p>2025 Dean's Lister Awardee</p>
              <p>2024 Dean's Lister Awardee</p>
              <p>2023 SRW Month Essay Writing Participant</p>
              <p>2022 Dean's Lister Awardee</p>
            </div>
          </div>

          {/* Senior High School */}
          <div className="flex flex-col items-center justify-start">
            <div className="text-center space-y-1 mb-3">
              <h4 className="font-montserrat_medium text-xl md:text-2xl xl:text-4xl">
                Senior High School | 2019-2021
              </h4>
              <h5 className="font-montserrat text-lg md:text-xl xl:text-2xl">
                Science, Technology, Engineering, and Mathematics
              </h5>
              <h6 className="font-montserrat text-lg md:text-xl xl:text-2xl">
                Baliuag University
              </h6>
            </div>
            <div className="font-montserrat text-center italic space-y-1 text-sm md:text-base xl:text-xl">
              <p>With High Honors</p>
              <p>Best in Mathematics</p>
              <p>Best in Specialization Subjects</p>
              <p>EDDIS II Secondary Schools Press Conference Participant</p>
              <p>District III Bulacan Private Schools Association Mathematics Participant</p>
              <p>Metrobank-MTAP-DepEd Math Challenge Participant</p>
              <p>Campus Journalist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationalBackground;
