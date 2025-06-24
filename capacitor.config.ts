
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.fb2529e8fd234e83b1c2ebc9cceb0c4d',
  appName: 'bastion-terra-command',
  webDir: 'dist',
  server: {
    url: 'https://fb2529e8-fd23-4e83-b1c2-ebc9cceb0c4d.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#0f1419',
      showSpinner: false
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#0f1419'
    }
  }
};

export default config;
