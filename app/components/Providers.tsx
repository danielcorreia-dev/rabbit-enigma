import React, { PropsWithChildren } from 'react';
import { StageProvider } from '../contexts/stagesContext';

const Providers = ({ children }: PropsWithChildren) => {
  return <StageProvider>{children}</StageProvider>;
};

export default Providers;
