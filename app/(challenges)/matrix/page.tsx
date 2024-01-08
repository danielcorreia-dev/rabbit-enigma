import Enigma from '@/app/components/Enigma';
import { encryptData } from '@/app/utils/encrypt';
import OracleImage from '@/public/oracle.jpeg';

export const metadata = {
  title:
    'Enter the realm where reality unravels, the key lies in understanding coded streams.',
};

const Page = () => {
  return (
    <Enigma
      image={OracleImage}
      pageNumber="2"
      correctAnswer={encryptData('path')}
      nextPage="cesar"
      phrase="Knowing != Walking"
      backgroundColor="bg-neutral-850"
    />
  );
};

export default Page;
