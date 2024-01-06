import Enigma from '@/app/components/Enigma';

export const metadata = {
  title: "Lily's theme",
};

const Page = () => {
  return (
    <Enigma
      pageNumber="7"
      nextPage="humanity"
      backgroundColor="bg-neutral-500"
      phrase="start - 7-tuple - CN−26.018 - pardon"
      correctAnswer="turing"
    />
  );
};

export default Page;
