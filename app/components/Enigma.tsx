'use client';
import React, { FC, FormEvent, useEffect, useRef, useState } from 'react';
import AnswerInput, { AnswerInputProps } from './AnswerInput';
import { useRouter } from 'next/navigation';
import { useStage } from '../contexts/stagesContext';
import Link from 'next/link';
import EnigmaLayout from './EnigmaLayout';
import Image, { StaticImageData } from 'next/image';

type EnigmaProps = {
  backgroundImage?: StaticImageData;
  image?: StaticImageData;
  phrase: string;
  correctAnswer: string | string[];
  pageNumber: string;
  nextPage?: string;
  backgroundColor: string;
};

type EnigmaPropsWithInput = EnigmaProps & Pick<AnswerInputProps, 'textColor'>;

const Enigma: FC<EnigmaPropsWithInput> = ({
  image,
  pageNumber,
  phrase,
  correctAnswer,
  nextPage,
  backgroundColor,
  backgroundImage: background,
  textColor,
}) => {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(false);
  const [showLastStage, setShowLastStage] = useState(false);
  const [textImportance, setTextImportance] = useState<string>('');
  const phraseRef = useRef<HTMLSpanElement>(null);

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

    if (Array.isArray(correctAnswer)) {
      const answerArray = correctAnswer.map((answer) => answer.toLowerCase());
      if (answerArray.includes(answer.toLowerCase())) {
        toggleStage(pageNumber);
        router.push(`/${nextPage}`);
      } else {
        setAnswer('');
        setError(true);
      }
      return;
    }

    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      toggleStage(pageNumber);
      router.push(`/${nextPage}`);
    } else {
      setAnswer('');
      setError(true);
    }
  };

  useEffect(() => {
    if (pageNumber !== '10') return;

    if (answer === 'i love you') {
      setTextImportance('text-red-500');
      if (phraseRef.current) {
        phraseRef.current.innerText = '143';
      }
    } else {
      setTextImportance('');
      if (phraseRef.current) {
        phraseRef.current.innerText = phrase;
      }
    }
  }, [answer, pageNumber]);

  const handleChange = (answer: string) => {
    setAnswer(answer);
    setError(false);
  };

  useEffect(() => {
    if (lastStage && lastStage?.lastStageName !== pageNumber) {
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
        <span
          className={`mb-8 text-center transition-colors ${textImportance}`}
          ref={phraseRef}
        >
          {phrase}
        </span>
        <AnswerInput
          answer={answer}
          onChange={(answer) => handleChange(answer)}
          onSubmit={handleSubmit}
          textColor={textColor}
        />
        {showLastStage && (
          <Link
            className={`rounded-md  px-4 py-2 text-xs  transition-colors duration-200 ease-in-out ${
              lastStage?.lastStageName === 'end'
                ? 'bg-white text-neutral-800 hover:text-neutral-400'
                : 'bg-neutral-800 text-white hover:bg-neutral-700'
            }`}
            href={lastStage?.lastStageUrl ?? ''}
          >
            {(lastStage?.lastStageName === 'end' && (
              <span>Go to the end</span>
            )) || <span>Go to the last enigma you solved</span>}
          </Link>
        )}
      </div>
      <span className="absolute bottom-4 right-4 opacity-75">{pageNumber}</span>
    </EnigmaLayout>
  );
};

export default Enigma;
