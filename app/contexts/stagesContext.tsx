'use client';
import { getCookie, setCookie } from 'cookies-next';
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useReducer,
  useEffect,
} from 'react';

const TOGGLE_STAGE = 'TOGGLE_STAGE';

interface StageContextValue {
  stages: StageState;
  toggleStage: (stage: string) => void;
  useLastStage: () => { lastStageName: string; lastStageUrl: string };
}

const StageContext = createContext<StageContextValue | undefined>(undefined);

type StageState = Record<string, { passed: boolean; url: string }>;

const initialStagesMock: StageState = {
  1: {
    passed: false,
    url: '/journey',
  },
  2: {
    passed: false,
    url: '/matrix',
  },
  3: {
    passed: false,
    url: '/cesar',
  },
  4: {
    passed: false,
    url: '/ephemere',
  },
  5: {
    passed: false,
    url: '/god',
  },
  6: {
    passed: false,
    url: '/matrix',
  },
  7: {
    passed: false,
    url: '/matrix',
  },
  8: {
    passed: false,
    url: '/matrix',
  },
  9: {
    passed: false,
    url: '/matrix',
  },
  10: {
    passed: false,
    url: '/matrix',
  },
};

export const StageProvider = ({ children }: { children: ReactNode }) => {
  const [initialStages, setInitialStages] = useState<StageState>(() => {
    Object.keys(initialStagesMock).forEach((stage) => {
      if (getCookie(stage)) {
        initialStagesMock[stage].passed = true;
      }
    });

    return initialStagesMock;
  });

  const stageReducer = (
    state: StageState,
    action: { type: string; stage: string }
  ): StageState => {
    switch (action.type) {
      case TOGGLE_STAGE:
        setCookie(action.stage, 'true');
        return {
          ...state,
          [action.stage]: {
            ...state[action.stage],
            passed: true,
          },
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(stageReducer, initialStages);

  const toggleStage = (stage: string) => {
    dispatch({ type: TOGGLE_STAGE, stage });
  };

  const useLastStage = () => {
    const [lastStage, setLastStage] = useState<{
      lastStageName: string;
      lastStageUrl: string;
    }>({ lastStageName: '', lastStageUrl: '' });

    useEffect(() => {
      const stages = Object.entries(state);
      const passedStage = stages.find((stage) => {
        return stage[1].passed === false;
      });

      if (!passedStage) return;

      const lastStageName = passedStage[0];
      const lastStageUrl = passedStage[1].url;

      setLastStage({
        lastStageName,
        lastStageUrl,
      });
    }, []);

    return lastStage;
  };

  return (
    <StageContext.Provider value={{ stages: state, toggleStage, useLastStage }}>
      {children}
    </StageContext.Provider>
  );
};

export const useStage = () => {
  const context = useContext(StageContext);
  if (!context) {
    throw new Error('useStage must be used within a StageProvider');
  }
  return context;
};