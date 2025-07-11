import { X, ChevronLeft, ChevronRight } from 'lucide-react';

function ProjectModal({ project, panels, currentIndex, setCurrentIndex, onClose }) {
  if (!project) return null;

  const panel = panels[currentIndex];
  const maxIndex = panels.length - 1;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
      <div className="bg-[#1D1D1D] text-white sm:max-w-[90%] xl:max-w-[70%] rounded-lg shadow-lg relative p-6 max-h-[90vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        {/* Title */}
        <div className="w-full mb-6">
          <h2 className="text-white font-montserrat_medium text-center text-sm mb-2">
            {project.title}
          </h2>
          <hr className="border-t border-white/20" />
        </div>

        {/* Content Section */}
        <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Video Section (larger) */}
            <div className="flex-[1.5]">
              <video
                key={panel.video}
                controls
                className="w-full rounded object-cover max-h-[500px]"
              >
                <source src={panel.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Text Section */}
            <div className="flex-1 overflow-y-auto max-h-[500px]">
              <p className="font-montserrat text-sm lg:text-md xl:text-lg">
                {panel.text}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
            disabled={currentIndex === 0}
            className="p-2 bg-white text-black rounded disabled:opacity-30"
          >
            <ChevronLeft />
          </button>

          <span className="text-sm font-mono">
            {currentIndex + 1} / {panels.length}
          </span>

          <button
            onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))}
            disabled={currentIndex === maxIndex}
            className="p-2 bg-white text-black rounded disabled:opacity-30"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
