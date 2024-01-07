import Enigma from '@/app/components/Enigma';
import ReactComment from '@/app/components/ReactComment';

export const metadata = {
  title: '64',
};

const HumanityPage = () => {
  return (
    <>
      <Enigma
        backgroundColor="bg-black"
        correctAnswer={['izabelle', 'myself']}
        phrase="in your deepest feelings"
        pageNumber="9"
        nextPage="truth"
      />
      <ReactComment text="dGhlIG9uZSB0aGF0IHlvdSBsb3ZlIHRoZSBtb3N0" />
    </>
  );
};

export default HumanityPage;
