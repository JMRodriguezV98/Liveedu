import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes/AppRoutes';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './firebase-config';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <AppRoutes />
    </FirebaseAppProvider>
  </React.StrictMode>
);
