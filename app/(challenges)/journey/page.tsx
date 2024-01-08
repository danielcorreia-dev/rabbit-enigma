import Enigma from '@/app/components/Enigma';
import { encryptData } from '@/app/utils/encrypt';

export const metadata = {
  title: 'Among kings, the only true wisdom is in knowing you know nothing.',
};

const Page = () => {
  return (
    <Enigma
      phrase="Silently Observing, Learning, Ordering, Mastering, and Overcoming life' obstacles, Navigating"
      correctAnswer={encryptData('solomon')}
      pageNumber="1"
      nextPage="matrix"
      backgroundColor="bg-neutral-950"
    />
  );
};

export default Page;
