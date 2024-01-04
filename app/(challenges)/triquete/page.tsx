import Enigma from '@/app/components/Enigma';
import React from 'react';

type Props = {};

export const metadata = {
  title: 'Ezek1421',
};

const Page = (props: Props) => {
  return (
    <>
      <Enigma
        backgroundColor="bg-green-500"
        correctAnswer="27/06/2020"
        pageNumber="6"
        phrase="the end"
        nextPage="mirror"
      />
      <span className="text-transparent absolute left-auto 1921 alchemy">
        Moos Krenn
      </span>
    </>
  );
};

export default Page;
