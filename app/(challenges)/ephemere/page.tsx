import Enigma from '@/app/components/Enigma';

export const metadata = {
  title: 'The sheep and the wolf',
};

const Page = () => {
  return (
    <Enigma
      backgroundColor="bg-neutral-700"
      correctAnswer="life"
      phrase="beauty fades that is why it is beautiful."
      nextPage="god"
      pageNumber="4"
    />
  );
};

export default Page;
