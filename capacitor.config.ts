import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'mobile-trade',
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
