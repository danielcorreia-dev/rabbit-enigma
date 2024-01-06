import Enigma from '@/app/components/Enigma';

export const metadata = {
  title: 'celestial injustice',
};

const Page = () => {
  return (
    <>
      <Enigma
        backgroundColor="bg-orange-900"
        correctAnswer="galileo galilei"
        pageNumber="8"
        phrase="Malleus Maleficarum"
        nextPage="truth"
      />
    </>
  );
};

export default Page;
