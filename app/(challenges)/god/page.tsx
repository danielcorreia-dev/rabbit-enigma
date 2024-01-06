import Enigma from '@/app/components/Enigma';
import galaxy from '@/public/galaxy.jpg';

export const metadata = {
  title: 'God',
};

const Page = () => {
  return (
    <>
      <Enigma
        backgroundImage={galaxy}
        backgroundColor="bg-neutral-600"
        correctAnswer="1618033988"
        nextPage="triquete"
        pageNumber="5"
        phrase="Tractatus mathematicus"
      />
      <span className="triquete">%.10f</span>
    </>
  );
};

export default Page;
