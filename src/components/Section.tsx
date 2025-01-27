import { PropsWithChildren } from 'react';


export const Section = ({ children }: PropsWithChildren) => {
  return (
    <section className="p-4 md:p-10 xl:p-20 max-w-[540px] md:max-w-[850px] xl:max-w-[1400px] mx-auto">
      {children}
    </section>
  );
};
