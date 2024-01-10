import Enigma from '@/app/components/Enigma';
import ReactComment from '@/app/components/ReactComment';
import { encryptData } from '@/app/utils/encrypt';

export const metadata = {
  title: 'Yggdrasil',
  description: 'Die Walküre, father by incest',
};

const Page = () => {
  return (
    <>
      <Enigma
        backgroundColor="bg-slate-600"
        correctAnswer={encryptData('freud')}
        nextPage="humanity"
        pageNumber="11"
        phrase="childhood, sexuality, unconscious, dreams, repression, 1p-cocaine"
      />
      <ReactComment text="50.3309° N, 8.7511° E" />
    </>
  );
};

export default Page;
