import App from './App.svelte';

// Initialize Google API
function initGoogleAPI() {
  gapi.load('auth2', () => {
    gapi.auth2
        .init({
          client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
        })
        .then(() => {
          console.log('Google API initialized');
        })
        .catch((err) => {
          console.error('Google API Initialization Error:', err);
        });
  });
}

// Wait for gapi to load and initialize it
window.onload = () => {
  if (typeof gapi !== 'undefined') {
    initGoogleAPI();
  } else {
    console.error('Google API script is not loaded!');
  }
};

// Initialize Svelte App
const app = new App({
  target: document.getElementById('app'),
});

export default app;
