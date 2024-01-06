import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import Image from 'next/image';

type Props = {
  children: ReactNode;
  backgroundColor: string;
  backgroundImage?: StaticImageData;
  opacity?: number;
};

const EnigmaLayout = ({
  children,
  backgroundColor,
  backgroundImage,
  opacity = 50,
}: Props) => {
  return (
    <div
      className={`h-screen flex justify-center items-center ${
        !backgroundImage && backgroundColor
      } `}
    >
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="background image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className={`filter blur-[2px] opacity-20 -z-10`}
          />
        </div>
      )}
      {children}
    </div>
  );
};

export default EnigmaLayout;
