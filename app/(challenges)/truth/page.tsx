import Enigma from '@/app/components/Enigma';
import ReactComment from '@/app/components/ReactComment';
import { encryptData } from '@/app/utils/encrypt';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'meaning',
  description: '42.1959° N, 70.7259° W',
};

const Page = () => {
  redirect('/journey');

  return (
    <>
      <Enigma
        backgroundColor="bg-white"
        correctAnswer={encryptData('i love you')}
        pageNumber="10"
        phrase="String(11/06/2014 by CN + Viktor Vasnetsov - 137 + A = b*h/2)"
        textColor="text-black"
        nextPage="end"
      />
      <ReactComment text="3 w" />
    </>
  );
};

export default Page;
