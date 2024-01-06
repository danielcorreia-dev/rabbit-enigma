import Enigma from '@/app/components/Enigma';

export const metadata = {
  title: 'The devil has many faces',
};

const Page = () => {
  return (
    <Enigma
      backgroundColor="bg-neutral-800"
      correctAnswer="griffith"
      nextPage="ephemere"
      pageNumber="3"
      phrase="ozqnnqbp"
    />
  );
};

export default Page;
