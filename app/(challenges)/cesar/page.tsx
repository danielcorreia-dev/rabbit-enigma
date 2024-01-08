import Enigma from '@/app/components/Enigma';
import { encryptData } from '@/app/utils/encrypt';

export const metadata = {
  title: 'The devil has many faces',
};

const Page = () => {
  return (
    <Enigma
      backgroundColor="bg-neutral-800"
      correctAnswer={encryptData('griffith')}
      nextPage="ephemere"
      pageNumber="3"
      phrase="ozqnnqbp"
    />
  );
};

export default Page;
