import { useEffect, useState } from 'react';
import { IAnimationContext } from '../../interfaces';

export const useAnimation = (initialValues: IAnimationContext) => {
  const [animation, setAnimation] = useState(initialValues.animation);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const notifyWork = () => {
    if (!window.Notification) {
      alert('Browser does not support notifications.');
    } else {
      if (Notification.permission === 'granted') {
        new Audio('/sound/public_notification.mp3').play();
        // Android.showToast(toast);
        // if (!!currentTask) {
        //   new Notification('Tarefa finalizada!', {
        //     body: `Você terminou: ${currentTask.task} (;`,
        //   });
        // } else {
        //   new Notification('Timer finalizada!', {
        //     body: `Chegou ao final o temporizador`,
        //   });
        // }
      }
    }
  };

  const notifySleep = () => {
    if (!window.Notification) {
      alert('Browser does not support notifications.');
    } else {
      if (Notification.permission === 'granted') {
        new Audio('/sound/public_notification.mp3').play();
        // Android.showToast(toast);
        // if (!!currentTask) {
        //   new Notification('Tarefa finalizada!', {
        //     body: `Você terminou: ${currentTask.task} (;`,
        //   });
        // } else {
        //   new Notification('Timer finalizada!', {
        //     body: `Chegou ao final o temporizador`,
        //   });
        // }
      }
    }
  };
  const toogleAnimation = () => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 2500);
  };

  return {
    animation,
    setAnimation,
    notifyWork,
    notifySleep,
    toogleAnimation,
  };
};
