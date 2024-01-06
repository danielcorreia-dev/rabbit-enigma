'use client';
import React, { FC, FormEvent, useEffect, useState } from 'react';
import AnswerInput from './AnswerInput';
import { useRouter } from 'next/navigation';
import { useStage } from '../contexts/stagesContext';
import Link from 'next/link';
import EnigmaLayout from './EnigmaLayout';
import Image, { StaticImageData } from 'next/image';

type EnigmaProps = {
  backgroundImage?: StaticImageData;
  image?: StaticImageData;
  phrase: string;
  correctAnswer: string;
  pageNumber: string;
  nextPage?: string;
  backgroundColor: string;
};

const Enigma: FC<EnigmaProps> = ({
  image,
  pageNumber,
  phrase,
  correctAnswer,
  nextPage,
  backgroundColor,
  backgroundImage: background,
}) => {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(false);
  const [showLastStage, setShowLastStage] = useState(false);
  const { stages, toggleStage, useLastStage } = useStage();

  const lastStage = useLastStage();

  const router = useRouter();

  useEffect(() => {
    const pageNumberCorrect = pageNumber !== '1' ? +pageNumber - 1 : 0;

    if (pageNumberCorrect && !stages[+pageNumber - 1].passed) {
      router.push('/');
    }
  }, [pageNumber, router, stages]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!answer) return;
    e.preventDefault();

    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      toggleStage(pageNumber);
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

  useEffect(() => {
    if (lastStage?.lastStageName !== pageNumber) {
      console.log(lastStage?.lastStageName, pageNumber);
      setShowLastStage(true);
    } else {
      setShowLastStage(false);
    }
  }, [lastStage, pageNumber]);

  return (
    <EnigmaLayout
      backgroundColor={backgroundColor}
      backgroundImage={background}
    >
      <div className="z-10 flex flex-col items-center justify-center gap-4 px-4 md:px-0">
        {error && <span className="text-red-500">Incorrect answer</span>}
        {image && (
          <div className="h-96 w-96">
            <Image src={image} alt="enigma-image" />
          </div>
        )}
        <span className="mb-8 text-center">{phrase}</span>
        <AnswerInput
          answer={answer}
          onChange={(answer) => handleChange(answer)}
          onSubmit={handleSubmit}
        />
        {showLastStage && (
          <Link
            className={`rounded-md bg-neutral-800 px-4 py-2 text-xs text-white transition-colors duration-200 ease-in-out hover:bg-neutral-700`}
            href={lastStage?.lastStageUrl ?? ''}
          >
            Go to the last enigma you solved
          </Link>
        )}
      </div>
      <span className="absolute bottom-4 right-4 opacity-75">{pageNumber}</span>
    </EnigmaLayout>
  );
};

export default Enigma;
