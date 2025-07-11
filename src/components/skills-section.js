import {
  SiReact, SiTailwindcss, SiGo, SiPostgresql, SiMysql,
  SiGithub, SiJira, SiVercel, SiRender, SiSupabase
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { icon: SiReact, label: 'ReactJS' },
    { icon: SiTailwindcss, label: 'TailwindCSS' },
    { icon: SiGo, label: 'Golang' },
    { icon: SiPostgresql, label: 'PostgreSQL' },
    { icon: SiMysql, label: 'MySQL' },
  ];

  const tools = [
    { icon: SiGithub, label: 'GitHub' },
    { icon: SiJira, label: 'Jira' },
    { icon: SiVercel, label: 'Vercel' },
    { icon: SiRender, label: 'Render' },
    { icon: SiSupabase, label: 'Supabase' },
  ];

  const Hexagon = ({ Icon, label }) => (
    <div className="relative w-20 h-24 md:w-24 md:h-28 group flex flex-col items-center">
      <div className="relative w-full h-full">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full fill-transparent stroke-white stroke-[3] group-hover:fill-white transition-all duration-300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="text-white text-3xl md:text-5xl group-hover:text-black transition-colors duration-300" />
        </div>
      </div>
      <span className="mt-2 text-white text-xs sm:text-lg font-montserrat text-center hidden group-hover:block">
        {label}
      </span>
    </div>
  );

  return (
    <section className="bg-skills bg-cover bg-center py-12 h-auto md:h-[500px]">
      {/* Section Heading */}
      <h3 className="text-[#9E6D0C] font-squada text-4xl md:text-6xl text-center">
        Technical Skills
      </h3>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-52 mt-10 px-4">
        {/* Tech Stack */}
        <div className="flex flex-col items-center">
          <h4 className="text-white font-montserrat_medium text-xl md:text-2xl mb-4 uppercase tracking-wide">
            Tech Stack
          </h4>

          {/* First row */}
          <div className="flex justify-center gap-3 sm:gap-4">
            {skills.slice(0, 3).map(({ icon, label }, i) => (
              <Hexagon key={i} Icon={icon} label={label} />
            ))}
          </div>

          {/* Second row */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-4">
            {skills.slice(3).map(({ icon, label }, i) => (
              <Hexagon key={i} Icon={icon} label={label} />
            ))}
          </div>
        </div>

        {/* Development Tools */}
        <div className="flex flex-col items-center mt-8 md:mt-0">
          <h4 className="text-white font-montserrat_medium text-xl md:text-2xl mb-4 uppercase tracking-wide">
            Development Tools
          </h4>
          {/* First row */}
          <div className="flex justify-center gap-3 sm:gap-4">
            {tools.slice(0, 3).map(({ icon, label }, i) => (
              <Hexagon key={i} Icon={icon} label={label} />
            ))}
          </div>

          {/* Second row */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-4">
            {tools.slice(3).map(({ icon, label }, i) => (
              <Hexagon key={i} Icon={icon} label={label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
