export default function DownloadResume() {
  return (
    <a
      href="/resume.pdf" // You'll need to add your resume.pdf to the public folder
      download="Isacco_Bosio_Resume.pdf"
      className="inline-flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-2xl font-onest font-medium transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-xl border bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-white/20 shadow-2xl hover:shadow-purple-500/10 text-sm md:text-base touch-manipulation"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
      </svg>
      <span>Resume</span>
    </a>
  );
}