import { useState } from 'react';
import ProjectModal from '../modals/project-modal';

function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPanelIndex, setCurrentPanelIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Thesis Website',
      image: '/assets/images/covers/thesis.png',
      panels: [
        {
          video: '/assets/videos/thesis/thesis1.mp4',
          text: (
            <>
              The prototype we developed is a secure digital voting kiosk designed for school elections,
              equipped with a QR scanner and fingerprint authentication.<br /><br />
              I was solely responsible for the software side, including frontend, backend, and database setup.
              The registration and voting interface were deployed only on the physical kiosk, which is why they’re
              not shown here.<br /><br />
              What I used:<br />
              ReactJS - CSS - Revel (Golang Framework) - MySQL<br /><br />
              Hosted on:<br />
              Vercel (Frontend), Ngrok (Backend & Database Tunneling)
            </>
          ),
        },
        {
          video: '/assets/videos/thesis/thesis2.mp4',
          text: (
            <>
              The "Candidates" tab is public and available to students so they can explore details about
              the candidates and their party affiliations.<br /><br />
              It’s designed responsively for both desktop and mobile, unlike the admin areas.
              This ensures maximum accessibility, as it’s intended to be publicly viewable even before elections start.
            </>
          ),
        },
        {
          video: '/assets/videos/thesis/thesis3.mp4',
          text: (
            <>
              The "Live Votes" tab is another public-facing component meant to provide full transparency
              during the voting period.<br /><br />
              It features three kinds of visual breakdowns:<br />
              • Total votes per candidate<br />
              • Votes by department per candidate (Breakdown)<br />
              • Department vs. Candidate comparison (Candidate A vs. Candidate B per department)<br /><br />
              This structure gives a layered and comparative insight into the vote distribution.
            </>
          ),
        },
        {
          video: '/assets/videos/thesis/thesis4.mp4',
          text: (
            <>
              The Admin Panel is protected using JWT-based private routing. Access attempts without a valid token
              are automatically rejected.<br /><br />
              Login credentials are secured via bcrypt hashing. As there’s only one admin account,
              the "forgot password" flow requires biometric verification from the highest authority,
              serving as an additional security layer. <br /><br />
              The backend was equally secured, with all routes protected by JWT authentication.
            </>
          ),
        },
        {
          video: '/assets/videos/thesis/thesis5.mp4',
          text: (
            <>
              The "Elections" tab includes two key sections:<br /><br />
              1. Voting Timeframe — lets the admin set start/end dates for voting. Outside this period, the site is inaccessible.<br />
              2. Manage Candidacy — allows the admin to add and edit candidates or partylist information.
            </>
          ),
        },
        {
          video: '/assets/videos/thesis/thesis6.mp4',
          text: (
            <>
              The "Backup & Download" tab lets the admin back up the entire election database,
              including candidates, votes, voter records, and election settings.<br /><br />
              Backed-up files are permanently stored in a secure list.<br /><br />
              There's also a PDF generation feature to render vote breakdowns into printable summary tables.
            </>
          ),
        },
        {
          video: '/assets/videos/thesis/thesis7.mp4',
          text: (
            <>
              The "Access Control" tab allows the admin to change the account password freely without needing biometric input.<br /><br />
              This contrasts with the "Forgot Password" method, which requires fingerprint authentication and is used only
              when access is completely lost.
            </>
          ),
        },
        {
          video: '/assets/videos/thesis/thesis8.mp4',
          text: (
            <>
              The "Reset" tab gives the admin the option to wipe the database of all election-related data,
              including voters, candidates, and vote logs.<br /><br />
              However, it retains the admin account and all previously generated backup records.
            </>
          ),
        },
      ],
    },
    {
      id: 2,
      title: 'Orpheus',
      image: '/assets/images/covers/orpheus.png',
      panels: [
        {
          video: '/assets/videos/orpheus/orpheus1.mp4',
          text: (
            <>
              Orpheus is a video streaming platform that features select Kpop groups and compiles all their respective
              videos accessible from YouTube. The website was created to be fully responsive across all devices.<br /><br />
              What I used:<br />
              ReactJS - Tailwind CSS -  Golang - PostgreSQL - YouTube API<br /><br />
              Hosted on:<br />
              Vercel - Render - Supabase<br /><br />
              Live App: https://orpheus-hq.vercel.app/
            </>
          ),
        },
        {
          video: '/assets/videos/orpheus/orpheus2.mp4',
          text: (
            <>
              To keep the platform scalable and maintainable, I designed everything to be reusable and data-driven.<br /><br />
              Once a group is clicked, every part of the interface is mounted dynamically — from the video header,
              content categories, and group-specific video queues.<br /><br />
              This required careful planning in advance, especially when structuring the database to support automated
              rendering and modular content loading.
            </>
          ),
        },
        {
          video: '/assets/videos/orpheus/orpheus3.mp4',
          text: (
            <>
              To optimize performance and reduce initial load times, I avoided embedding all videos simultaneously.<br /><br />
              Instead, I implemented a pseudo-video player that only embeds the video currently selected by the user.<br /><br />
              All other videos are displayed as thumbnails with their titles, allowing for a faster and cleaner browsing
              experience, especially for mobile and slower connections.
            </>
          ),
        },
      ],
    },
    {
      id: 3,
      title: 'Apollo',
      image: '/assets/images/covers/apollo.png',
      panels: [
        {
          video: '/assets/videos/apollo/apollo1.mp4',
          text: (
            <>
              Apollo is a playlist dedication website where users can anonymously dedicate Spotify playlists to others.<br /><br />
              A message can accompany the playlist, and optionally, it can be locked using the “time capsule” feature — preventing access until a specific date.<br /><br />
              However, the website was created with only desktop in mind to preserve the concept of a sliding content.<br /><br />
              What I used:<br />
              React - Tailwind CSS - Golang - PostgreSQL - Spotify API<br /><br />
              Status: Incomplete
            </>
          ),
        },
        {
          video: '/assets/videos/apollo/apollo2.mp4',
          text: (
            <>
              Account security is handled by bcrypt for securely hashing passwords.<br /><br />
              When a user signs up, a unique UUID is generated and linked to the account for identification purposes.<br /><br />
              This UUID becomes essential for sending or receiving playlists between users.
            </>
          ),
        },
        {
          video: '/assets/videos/apollo/apollo3.mp4',
          text: (
            <>
              The “Your Playlists” section displays all playlists a user has created for others.<br /><br />
              To create one, users fill out a form with the playlist link, message, and optional unlock date.<br /><br />
              If no unlock time is set, it becomes instantly accessible. However, sending requires the recipient's UUID,
              which is retrieved through a (currently unimplemented) sharing feature for publishing UUIDs on social media.
            </>
          ),
        },
        {
          video: '/assets/videos/apollo/apollo4.mp4',
          text: (
            <>
              In the “Playlists Received” section, users get notified when they receive a new playlist,
              along with its unlock date and title.<br /><br />
              Currently, section switching is triggered via a placeholder button, but a proper UI for toggling is still under development.
            </>
          ),
        },
        {
          video: '/assets/videos/apollo/apollo5.mp4',
          text: (
            <>
              Another planned feature is social sharing — allowing users to generate a visual preview of the playlist
              and post it on platforms like Twitter or Instagram.
            </>
          ),
        },
      ],
    },
    {
      id: 4,
      title: 'Student Information System',
      image: '/assets/images/covers/hanlim.png',
      panels: [
        {
          video: '/assets/videos/hanlim/hanlim1.mp4',
          text: (
            <>
              Hanlim Student Information System is a basic CRUD project submitted for a school requirement.<br /><br />
              It displays the latest registered students, and charts for student distribution by program and year level.<br /><br />
              The website was created to be fully responsive across all devices.<br /><br />
              What I used:<br />
              React - Tailwind CSS - PHP - MySQL
            </>
          ),
        },
        {
          video: '/assets/videos/hanlim/hanlim2.mp4',
          text: (
            <>
              The add student form includes dropdowns for programs and year levels for ease of use.<br /><br />
              All form fields are sanitized on both frontend and backend to ensure valid and safe data entry.
            </>
          ),
        },
        {
          video: '/assets/videos/hanlim/hanlim3.mp4',
          text: (
            <>
              To edit a student, the admin enters the student ID, and the system fetches their current information automatically.<br /><br />
              This simplifies updates while reducing human error during edits.
            </>
          ),
        },
        {
          video: '/assets/videos/hanlim/hanlim4.mp4',
          text: (
            <>
              Deleting a student requires admin authentication.<br /><br />
              Once authorized, the student can be removed by inputting their student ID.<br /><br />
              Note: The admin password is hardcoded as a proof of concept — not intended for production use.
            </>
          ),
        },
        {
          video: '/assets/videos/hanlim/hanlim5.mp4',
          text: (
            <>
              Search features include:<br />
              • By name (partial matches, e.g. “Jen” matches “Jennifer”, “Jenkins”)<br />
              • By student ID (exact match)<br />
              • Filter by program and year level
            </>
          ),
        },
        {
          video: '/assets/videos/hanlim/hanlim6.mp4',
          text: (
            <>
              A print/download button is available to render a student's details into a printable format (e.g. PDF).<br /><br />
              This was added as a mock "student ID" feature to simulate administrative export functionality.
            </>
          ),
        },
      ],
    },
  ];

  return (
    <div className="bg-portfolio bg-cover bg-center min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Section Heading */}
      <h3 className="text-[#9E6D0C] font-squada text-4xl md:text-6xl pb-12">
        Portfolio
      </h3>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 lg:gap-16 xl:gap-32 w-fit">
        {projects.map((project, index) => (
          <div
            key={project.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => {
              setSelectedProject(project);
              setCurrentPanelIndex(0);
            }}
            className={`relative w-[100px] h-[270px] md:w-[200px] md:h-[425px] lg:w-[220px] lg:h-[550px] xl:w-[275px] xl:h-[720px] rounded-xl cursor-pointer transition-all duration-300 overflow-hidden shadow-lg border-2 border-white
              ${hoveredIndex !== null && hoveredIndex !== index ? 'blur-sm opacity-50' : 'opacity-100'}
            `}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <span className="text-white bg-black w-full py-3 font-montserrat_medium font-semibold text-center text-md">
                {project.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          panels={selectedProject.panels}
          currentIndex={currentPanelIndex}
          setCurrentIndex={setCurrentPanelIndex}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default Portfolio;
