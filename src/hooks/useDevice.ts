import { StatusBar } from "@capacitor/status-bar";
import { isPlatform } from "@ionic/react";
import { SafeArea } from "capacitor-plugin-safe-area";
import { useEffect } from "react";

interface SafeAreaInterface {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export function useDevice() {
  useEffect(() => {
    if (isPlatform("capacitor")) {
      //statusbar transparente
      StatusBar.setOverlaysWebView({ overlay: true });
    }

    SafeArea.getSafeAreaInsets().then(({ insets }) => {
      setInsets(insets);
    });

    const setInsets = (insets: SafeAreaInterface) => {
      for (const [key, value] of Object.entries(insets)) {
        document.documentElement.style.setProperty(
          `--ion-safe-area-${key}`,
          `${value}px`
        );
      }
    };
  }, []);
}
