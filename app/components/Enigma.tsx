'use client';
import React, {
  FC,
  FormEvent,
  Suspense,
  use,
  useEffect,
  useState,
} from 'react';
import AnswerInput from './AnswerInput';
import { useRouter } from 'next/navigation';
import { useStage } from '../contexts/stagesContext';
import Link from 'next/link';
import EnigmaLayout from './EnigmaLayout';
import Image, { StaticImageData } from 'next/image';

type EnigmaProps = {
  image?: StaticImageData;
  phrase: string;
  correctAnswer: string;
  pageNumber: string;
  nextPage: string;
  backgroundColor: string;
};

const Enigma: FC<EnigmaProps> = ({
  image,
  pageNumber,
  phrase,
  correctAnswer,
  nextPage,
  backgroundColor,
}) => {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(false);
  const { stages, toggleStage, useLastStage } = useStage();

  const lastStage = useLastStage();

  const router = useRouter();

  useEffect(() => {
    const pageNumberCorrect = pageNumber !== '1' ? +pageNumber - 1 : 0;

    if (pageNumberCorrect && !stages[+pageNumber - 1].passed) {
      router.push('/');
    }
  }, [stages]);

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

  return (
    <EnigmaLayout backgroundColor={backgroundColor}>
      <div className="flex flex-col justify-center items-center gap-4 px-4 md:px-0">
        {error && <span className="text-red-500">Incorrect answer</span>}
        {image && (
          <div className="w-96 h-96">
            <Image src={image} alt="enigma-image" />
          </div>
        )}
        <span className="mb-8 text-center">{phrase}</span>
        <AnswerInput
          answer={answer}
          onChange={(answer) => handleChange(answer)}
          onSubmit={handleSubmit}
        />
        {lastStage.lastStageName !== pageNumber && (
          <Link
            className={`bg-neutral-800 text-xs text-white px-4 py-2 rounded-md hover:bg-neutral-700 transition-colors duration-200 ease-in-out`}
            href={lastStage.lastStageUrl}
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
