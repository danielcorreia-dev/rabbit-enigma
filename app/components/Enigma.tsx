'use client';
import React, { FC, FormEvent, useState } from 'react';
import AnswerInput from './AnswerInput';
import { useRouter } from 'next/navigation';

type EnigmaProps = {
  phrase: string;
  correctAnswer: string;
  pageNumber: string;
  nextPage: string;
};

const Enigma: FC<EnigmaProps> = ({
  pageNumber,
  phrase,
  correctAnswer,
  nextPage,
}) => {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!answer) return;
    e.preventDefault();

    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      router.push(`/${nextPage}`);
    } else {
      setAnswer('');
      setError(true);
    }
  };

  const handleChange = (answer: string) => {
    setAnswer(answer);
    setError(false);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        {error && <span className="text-red-500 trans">Incorrect answer</span>}
        <span className="mb-8">{phrase}</span>
        <AnswerInput
          answer={answer}
          onChange={(answer) => handleChange(answer)}
          onSubmit={handleSubmit}
        />
      </div>
      <span className="absolute bottom-4 right-4 opacity-75">{pageNumber}</span>
    </>
  );
};

export default Enigma;
