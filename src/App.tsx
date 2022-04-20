import { Theme } from './themes';
import { Router } from './routes';
import { GlobalStyles } from './themes';
import { ModalProvider, StageProvider, StorageProvider, TaskProvider, TimerProvider } from './context';
import { AnimationProvider } from './context/AnimationContext';

export const App = () => {
  return (
    <Theme>
      <AnimationProvider>
        <StageProvider>
          <ModalProvider>
            <StorageProvider>
              <TaskProvider>
                <TimerProvider>
                  <GlobalStyles />
                  <Router />
                </TimerProvider>
              </TaskProvider>
            </StorageProvider>
          </ModalProvider>
        </StageProvider>
      </AnimationProvider>
    </Theme>
  );
};
