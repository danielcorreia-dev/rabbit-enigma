import Enigma from '@/app/components/Enigma';

export const metadata = {
  title: 'celestial injustice',
};

const Page = () => {
  return (
    <>
      <Enigma
        backgroundColor="bg-neutral-100"
        correctAnswer="galileo galilei"
        pageNumber="9"
        phrase="Malleus Maleficarum"
        nextPage="love"
      />
    </>
  );
};

export default Page;
