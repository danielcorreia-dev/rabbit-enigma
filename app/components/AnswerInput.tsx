'use client';

import React, { FC, FormEvent } from 'react';

type AnswerInputProps = {
  answer: string;
  onChange: (answer: string) => void;
  onSubmit: (evnet: FormEvent<HTMLFormElement>) => void;
};

const AnswerInput: FC<AnswerInputProps> = ({ answer, onChange, onSubmit }) => {
  return (
    <div className="flex flex-col justify-center w-full">
      <form onSubmit={onSubmit} autoComplete="off">
        <div className="flex flex-col items-center justify-center gap-4">
          <input
            title="answer-input"
            className="text-center bg-transparent border-b border-white focus:outline-none w-3/4"
            type="text"
            placeholder="keyword"
            value={answer}
            onChange={(e) => onChange(e.target.value)}
            name="answer-input"
          />
          <button
            title="answer-submit"
            className={`px-2 py-1 bg-white rounded-md text-neutral-950 mt-4 hover:bg-neutral-900 hover:text-white transition-all duration-300 ${
              answer.length === 0 && 'opacity-0 cursor-default'
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
