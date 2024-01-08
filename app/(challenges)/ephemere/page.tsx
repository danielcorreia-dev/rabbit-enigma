import Enigma from '@/app/components/Enigma';
import { encryptData } from '@/app/utils/encrypt';

export const metadata = {
  title: 'The sheep and the wolf',
};

const Page = () => {
  return (
    <Enigma
      backgroundColor="bg-neutral-700"
      correctAnswer={encryptData('life')}
      phrase="beauty fades that is why it is beautiful."
      nextPage="god"
      pageNumber="4"
    />
  );
};

export default Page;
