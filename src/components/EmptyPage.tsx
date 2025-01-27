import React from 'react';

interface EmptyPageProps {
  year: string;
}

export const EmptyPage = ({ year }: EmptyPageProps) => {
  return (
    <section>
      <h1>No data available cars for this brand from the year ${year}</h1>E
    </section>
  );
};
