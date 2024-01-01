import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="h-screen bg-neutral-950 flex justify-center items-center">
      {children}
    </div>
  );
};

export default Layout;
