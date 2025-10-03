'use client';

import { useState, useEffect, useCallback } from 'react';

interface UseCatGifReturn {
  catGif: string;
  loading: boolean;
  error: boolean;
  refetch: () => void;
}

export default function useCatGif(): UseCatGifReturn {
  const [catGif, setCatGif] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchRandomCatGif = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);

      // Using The Cat API - free, no key needed, reliable!
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search?mime_types=gif&limit=1'
      );

      if (response.ok) {
        const data = await response.json();
        setCatGif(data[0].url);
      } else {
        throw new Error('API response not ok');
      }
    } catch (error) {
      console.error('Error fetching cat GIF:', error);
      setError(true);
      // Fallback to a reliable cat GIF
      setCatGif('https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif');
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch a new cat on hook initialization
  useEffect(() => {
    fetchRandomCatGif();
  }, [fetchRandomCatGif]);

  return {
    catGif,
    loading,
    error,
    refetch: fetchRandomCatGif, // Allow manual refetch
  };
}