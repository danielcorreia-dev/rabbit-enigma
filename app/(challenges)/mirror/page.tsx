import Enigma from '@/app/components/Enigma';
import ReactComment from '@/app/components/ReactComment';

export const metadata = {
  title: "Lily's theme",
};

const Page = () => {
  return (
    <>
      <Enigma
        pageNumber="7"
        nextPage="witchcraft"
        backgroundColor="bg-neutral-500"
        phrase="start - 7-tuple - CN−26.018 - pardon"
        correctAnswer="turing"
      />
      <ReactComment text="74 111 97 110 32 67 108 97 114 107 101" />
    </>
  );
};

export default Page;
