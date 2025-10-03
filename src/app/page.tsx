"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [catGif, setCatGif] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchRandomCatGif = async () => {
    try {
      setLoading(true);
      setError(false);

      // Using The Cat API - free, no key needed, reliable!
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?mime_types=gif&limit=1"
      );

      if (response.ok) {
        const data = await response.json();
        setCatGif(data[0].url);
      } else {
        throw new Error("API response not ok");
      }
    } catch (error) {
      console.error("Error fetching cat GIF:", error);
      setError(true);
      // Fallback to a reliable cat GIF
      setCatGif("https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif");
    } finally {
      setLoading(false);
    }
  };

  // Fetch a new cat on every page load/refresh
  useEffect(() => {
    fetchRandomCatGif();
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-8">
      {loading ? (
        <div className="flex flex-col items-center gap-4">
          <div className="text-white text-xl animate-pulse">
            Which cat am I today?
          </div>
          <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <Image
              src={catGif}
              alt="Random Cat GIF"
              width={400}
              height={400}
              priority
              unoptimized
              className="rounded-lg max-w-full h-auto shadow-2xl"
            />
            {error && (
              <div className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded text-xs">
                Fallback cat
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
