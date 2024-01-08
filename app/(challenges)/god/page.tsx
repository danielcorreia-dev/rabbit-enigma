import Enigma from '@/app/components/Enigma';
import { encryptData } from '@/app/utils/encrypt';
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
        correctAnswer={encryptData('1618033988')}
        nextPage="triquete"
        pageNumber="5"
        phrase="Tractatus mathematicus"
      />
      <span className="gold">%.10f</span>
    </>
  );
};

export default Page;
