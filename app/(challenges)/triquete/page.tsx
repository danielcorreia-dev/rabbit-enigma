import Enigma from '@/app/components/Enigma';
import ReactComment from '@/app/components/ReactComment';
import { encryptData } from '@/app/utils/encrypt';
import React from 'react';

type Props = {};

export const metadata = {
  title: 'Ezek1421',
};

const Page = (props: Props) => {
  return (
    <>
      <ReactComment text={'DD'} />
      <Enigma
        backgroundColor="bg-green-500"
        correctAnswer={encryptData('27/06/2020')}
        pageNumber="6"
        phrase="the end"
        nextPage="mirror"
      />
      <ReactComment text={'MM'} />
      <span className="1921 alchemy absolute left-auto text-transparent">
        Moos Krenn
      </span>
      <ReactComment text={'YY'} />
    </>
  );
};

export default Page;
