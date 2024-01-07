'use client';

import React, { FC, FormEvent } from 'react';

export type AnswerInputProps = {
  textColor?: string;
  answer: string;
  onChange: (answer: string) => void;
  onSubmit: (evnet: FormEvent<HTMLFormElement>) => void;
};

const AnswerInput: FC<AnswerInputProps> = ({
  answer,
  onChange,
  onSubmit,
  textColor,
}) => {
  return (
    <div className="flex w-full flex-col justify-center">
      <form onSubmit={onSubmit} autoComplete="off">
        <div className="flex flex-col items-center justify-center gap-4">
          <input
            className={`w-3/4 border-b border-white bg-transparent text-center focus:outline-none ${textColor}`}
            type="text"
            placeholder="keyword"
            value={answer}
            onChange={(e) => onChange(e.target.value)}
          />
          <button
            title="answer-submit"
            disabled={answer.length === 0}
            className={`mt-4 rounded-md bg-white px-2 py-1 text-neutral-950 transition-all duration-300 hover:bg-neutral-900 hover:text-white ${
              answer.length === 0 && 'cursor-default opacity-0'
            }`}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AnswerInput;
