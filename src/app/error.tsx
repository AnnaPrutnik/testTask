'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';
import { Section } from '@/components/Section';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Section>
      <h2 className="text-xl md:text-3xl xl:text-5xl font-bold mb-6 md:mb-10">
        Something went wrong!
      </h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </Section>
  );
}
