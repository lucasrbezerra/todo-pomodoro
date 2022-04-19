import { Theme } from './themes';
import { Router } from './routes';
import { GlobalStyles } from './themes';
import { ModalProvider, StageProvider, StorageProvider, TaskProvider, TimerProvider } from './context';
import { AnimationProvider } from './context/AnimationContext';

export const App = () => {
  return (
    <Theme>
      <AnimationProvider>
        <StorageProvider>
          <StageProvider>
            <ModalProvider>
              <TaskProvider>
                <TimerProvider>
                  <GlobalStyles />
                  <Router />
                </TimerProvider>
              </TaskProvider>
            </ModalProvider>
          </StageProvider>
        </StorageProvider>
      </AnimationProvider>
    </Theme>
  );
};
