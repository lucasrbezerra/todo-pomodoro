import { useEffect, useState } from 'react';

export const useAnimation = () => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const notifyMe = () => {
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
  return {
    animation,
    setAnimation,
    notifyMe,
  };
};
