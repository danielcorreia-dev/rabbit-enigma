import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  backgroundColor: string;
};

const EnigmaLayout = ({ children, backgroundColor }: Props) => {
  return (
    <div
      className={`h-screen flex justify-center items-center ${backgroundColor}`}
    >
      {children}
    </div>
  );
};

export default EnigmaLayout;
