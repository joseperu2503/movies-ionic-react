
import { App } from '@capacitor/app';

export function useBackButton() {
  document.addEventListener('ionBackButton', (ev: any) => {
    ev.detail.register(-1, () => {
      const currentPath = window.location.pathname;
      if (currentPath == '/' || currentPath == '/home') {
        App.exitApp();
      }
    });
  });
}
