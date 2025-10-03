import ContactCard from "./ContactCard";
import CatGif from "./CatGif";
import AnimatedBackground from "./AnimatedBackground";
import DownloadResume from "./DownloadResume";

export default function HomeContent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 md:gap-12 p-4 md:p-8 relative bg-black/80">
      <AnimatedBackground />
      
      {/* Header with name and title */}
      <div className="text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-jersey mb-2 text-white leading-tight">
          Isacco Bosio
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-onest font-light text-gray-300">
          Frontend Developer
        </p>
        <div className="mt-4 md:mt-6">
          <DownloadResume />
        </div>
      </div>

      {/* Contact Information */}
      <div className="flex flex-col gap-3 md:gap-4 w-full max-w-sm md:max-w-md px-4">
        <ContactCard type="email" />
        <ContactCard type="linkedin" />
        <ContactCard type="github" />
      </div>

      {/* Cat section */}
      <CatGif />
    </div>
  );
}