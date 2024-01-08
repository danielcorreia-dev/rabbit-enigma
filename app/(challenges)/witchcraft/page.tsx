import Enigma from '@/app/components/Enigma';
import { encryptData } from '@/app/utils/encrypt';

export const metadata = {
  title: 'g - celestial injustice - g',
};

const Page = () => {
  return (
    <>
      <span className="absolute text-[#FFFFFF0A]">1.898 × 10^27 kg</span>
      <span className="absolute left-3/4 top-1/2 z-10 h-24 w-24 rounded-full bg-white text-transparent">
        the old world
      </span>
      <Enigma
        backgroundColor="bg-orange-600"
        correctAnswer={encryptData('galileo galilei')}
        pageNumber="8"
        phrase="Malleus Maleficarum"
        nextPage="humanity"
      />

      <span className="absolute left-1/4 top-3/4 z-10 h-24 w-24 rounded-full bg-white text-transparent">
        rape, by Mazza
      </span>

      <span className="absolute left-2/4 top-16 z-10 h-24 w-24 rounded-full bg-white text-transparent">
        Input and output
      </span>
    </>
  );
};

export default Page;
