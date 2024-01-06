import Enigma from '@/app/components/Enigma';
import ReactComment from '@/app/components/ReactComment';
import React from 'react';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Enigma
        backgroundColor="bg-black"
        correctAnswer="izabelle"
        phrase="in your deepest feelings"
        pageNumber="8"
      />
      <ReactComment text="dGhlIG9uZSB0aGF0IHlvdSBsb3ZlIHRoZSBtb3N0" />
    </>
  );
};

export default Page;
