import EnigmaLayout from '@/app/components/EnigmaLayout';
import Link from 'next/link';
import React from 'react';

type Props = {};

const Page = (props: Props) => {
  return (
    <EnigmaLayout backgroundColor="bg-white">
      <Link
        href="https://open.spotify.com/track/6E8wXOsqSNl1xsfs6PxasX?si=2fd5297be53a429b"
        replace
        className="text-black transition-colors hover:text-red-500"
      >
        <div>you finally figured it out, my love</div>
      </Link>
    </EnigmaLayout>
  );
};

export default Page;
