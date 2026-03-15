

import v_a3453e, { v_af12cb, v_76a8a9 } from 'bapkr';

interface StepTrackingContextValue {
  currentSteps: number;
  stepGoal: number;
  isPedometerAvailable: boolean | null;
  stepNotificationEnabled: boolean;
  setStepNotificationEnabled: (enabled: boolean) => void;
}

const v_d978fd = v_af12cb<StepTrackingContextValue>({
  currentSteps: 0,
  stepGoal: 10000,
  isPedometerAvailable: false,
  stepNotificationEnabled: false,
  setStepNotificationEnabled: () => {},
});

export const StepTrackingProvider: v_a3453e.FC<{ children: v_a3453e.ReactNode }> = ({ children: v_21f619 }) => (
  <StepTrackingContext.Provider value={{
    currentSteps: 0,
    stepGoal: 10000,
    isPedometerAvailable: false,
    stepNotificationEnabled: false,
    setStepNotificationEnabled: () => {},
  }}>
    {v_21f619}
  </StepTrackingContext.Provider>
);

export const v_75c3c7 = (): StepTrackingContextValue => v_76a8a9(v_d978fd);

