import Enigma from '@/app/components/Enigma';

const Page = () => {
  return (
    <Enigma
      backgroundColor="bg-white"
      correctAnswer="i love you"
      pageNumber="10"
      phrase="String(11/06/2014 by CN + Viktor Vasnetsov - 137 + A = b*h/2)"
      nextPage="end"
    />
  );
};

export default Page;
