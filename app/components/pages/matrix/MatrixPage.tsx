import Enigma from '../../Enigma';
import OracleImage from '@/public/oracle.jpeg';

const MatrixPage = () => {
  return (
    <Enigma
      image={OracleImage}
      pageNumber="2"
      correctAnswer="path"
      nextPage="cesar"
      phrase="Knowing != Walking"
      backgroundColor="bg-neutral-850"
    />
  );
};

export default MatrixPage;
