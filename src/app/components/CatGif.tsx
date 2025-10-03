'use client';

import Image from 'next/image';
import useCatGif from '../hooks/useCatGif';

const LOADING_MESSAGES = [
  'Which cat am I today?',
  'Finding the perfect cat...',
  'Summoning a random feline...',
  'Cat loading in progress...',
  'Preparing your daily dose of cats...',
];

export default function CatGif() {
  const { catGif, loading, error } = useCatGif();
  
  // Random loading message for variety
  const loadingMessage = LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)];

  if (loading) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="text-white text-xl animate-pulse font-onest text-center">
          {loadingMessage}
        </div>
        <div className="relative">
          <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-12 h-12 border-4 border-purple-300 border-b-transparent rounded-full animate-spin animate-reverse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm md:max-w-md px-4">
      <div className="relative rounded-2xl backdrop-blur-xl border bg-white/5 border-white/10 shadow-2xl overflow-hidden">
        <Image
          src={catGif}
          alt="Random Cat GIF"
          width={400}
          height={300}
          priority
          unoptimized
          className="w-full h-auto object-cover"
        />
        
        {/* Error indicator */}
        {error && (
          <div className="absolute top-3 right-3 bg-yellow-500/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-xs font-onest font-medium">
            Fallback cat 🐱
          </div>
        )}
      </div>
    </div>
  );
}