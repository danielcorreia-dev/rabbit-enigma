import ReactComment from '@/app/components/ReactComment';
import React from 'react';

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <ReactComment text="save the humans" />
    </div>
  );
};

export default Page;
