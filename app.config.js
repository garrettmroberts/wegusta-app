import 'dotenv/config';
module.exports = {
  name: 'wegusta-test-app',
  slug: 'wegusta-test-app',
  privacy: 'unlisted',
  version: '0.0.19',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/images/icon.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'wegusta.io.test'
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#FFFFFF'
    }
  },
  web: {
    favicon: './assets/images/icon.png'
  },
  extra: {
    loadStorybook: process.env.LOAD_STORYBOOK,
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
    gMapsApiKey: process.env.G_MAPS_API_KEY,
    eas: {
      projectId: '6f7940f7-0576-475b-987d-74ac9c7e56a2'
    }
  }
};

