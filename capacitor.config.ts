import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Movies Plus',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  android: {

  },
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
    },
    Keyboard: {
      resizeOnFullScreen: true,
    },
  },
};

export default config;
