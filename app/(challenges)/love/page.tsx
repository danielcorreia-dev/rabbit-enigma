import Enigma from '@/app/components/Enigma';
import React from 'react';

type Props = {};

const Page = (props: Props) => {
  return (
    <Enigma
      backgroundColor="bg-white"
      correctAnswer="143"
      pageNumber="10"
      phrase="1"
    />
  );
};

export default Page;
