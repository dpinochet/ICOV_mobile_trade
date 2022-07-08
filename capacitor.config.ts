import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'trade.comercialarroba.cl',
  appName: 'Red Trade',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 7000,
      launchAutoHide: true,
      backgroundColor: "#ffffffff",    
      splashFullScreen: true
    }
  },

};

export default config;
