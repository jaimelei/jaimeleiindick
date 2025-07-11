import { Briefcase } from 'lucide-react';

function WorkingExperience() {
  return (
    <div className="bg-experience min-h-screen py-12 text-white flex justify-center px-4 sm:px-6 md:px-12">
      <div className="relative max-w-6xl w-full md:grid md:grid-cols-2 md:gap-12 flex flex-col gap-12">

        {/* Vertical Timeline */}
        <div className="hidden md:block absolute left-1/2 transform h-[88%] w-1 mt-28 bg-white/40"></div>

        {/* Section Heading */}
        <div className="col-span-2 text-center">
          <h3 className="text-[#9E6D0C] font-squada text-4xl md:text-6xl">
            Working Experience
          </h3>
        </div>

        {/* ENTRY 1 */}
        <div className="flex flex-col md:block text-center md:text-right md:pr-8 items-center md:items-end">
          <h3 className="text-lg md:text-xl lg:text-2xl font-montserrat_medium font-semibold">
            Frontend Developer
          </h3>
          <p className="font-montserrat text-gray-300 text-sm md:text-base">
            September 2024 – November 2024 (150 hours)
          </p>
        </div>
        <div className="flex flex-col md:block relative items-center md:items-start md:pl-8">
          <div className="hidden md:block absolute -left-[43px] top-1 bg-black p-2 rounded-full border-2 border-white">
            <Briefcase size={20} className="text-white" />
          </div>
          <h4 className="text-base md:text-lg lg:text-xl font-montserrat font-semibold mt-[-45px] md:mt-0 text-center md:text-left">
            Hooll Software (Internship)
          </h4>
          <div className="h-1 w-8 bg-white my-2" />
          <p className="font-montserrat text-gray-200 text-sm md:text-base text-center md:text-left">
            Contributed to my team's project by resolving bug tickets using ReactJS, such as creating tutorials and implementing toaster notifications. This experience enhanced my skills in navigating large codebases with hundreds of folders and thousands of functions.
          </p>
        </div>

        {/* ENTRY 2 */}
        <div className="flex flex-col md:block text-center md:text-right md:pr-8 items-center md:items-end">
          <h3 className="text-lg md:text-xl lg:text-2xl font-montserrat_medium font-semibold">
            Backend Documentation
          </h3>
          <p className="font-montserrat text-gray-300 text-sm md:text-base">
            August 2024 – September 2024 (100 hours)
          </p>
        </div>
        <div className="flex flex-col md:block relative items-center md:items-start md:pl-8">
          <div className="hidden md:block absolute -left-[43px] top-1 bg-black p-2 rounded-full border-2 border-white">
            <Briefcase size={20} className="text-white" />
          </div>
          <h4 className="text-base md:text-lg lg:text-xl font-montserrat font-semibold mt-[-45px] md:mt-0 text-center md:text-left">
            Hooll Software (Internship)
          </h4>
          <div className="h-1 w-8 bg-white my-2" />
          <p className="font-montserrat text-gray-200 text-sm md:text-base text-center md:text-left">
            Created detailed API documentation using Swagger for both my own APIs and numerous pre-existing ones within the project. This role improved my ability to document complex backend systems effectively.
          </p>
        </div>

        {/* ENTRY 3 */}
        <div className="flex flex-col md:block text-center md:text-right md:pr-8 items-center md:items-end">
          <h3 className="text-lg md:text-xl lg:text-2xl font-montserrat_medium font-semibold">
            Backend Developer
          </h3>
          <p className="font-montserrat text-gray-300 text-sm md:text-base">
            June 2024 – August 2024 (250 hours)
          </p>
        </div>
        <div className="flex flex-col md:block relative items-center md:items-start md:pl-8">
          <div className="hidden md:block absolute -left-[43px] top-1 bg-black p-2 rounded-full border-2 border-white">
            <Briefcase size={20} className="text-white" />
          </div>
          <h4 className="text-base md:text-lg lg:text-xl font-montserrat font-semibold mt-[-45px] md:mt-0 text-center md:text-left">
            Hooll Software (On-the-job Training)
          </h4>
          <div className="h-1 w-8 bg-white my-2" />
          <p className="font-montserrat text-gray-200 text-sm md:text-base text-center md:text-left">
            Developed CRUD operations for the administrator system in the team's project using Golang and DynamoDB. Focused on delivering robust backend functionalities to support the project's upcoming features.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkingExperience;
