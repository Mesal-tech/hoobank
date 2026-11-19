import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ClerkProvider } from '@clerk/react';

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const app = publishableKey ? (
  <ClerkProvider
    publishableKey={publishableKey}
    signInUrl="/sign-in"
    signUpUrl="/sign-up"
    signInFallbackRedirectUrl="/dashboard"
    signUpFallbackRedirectUrl="/dashboard"
  >
    <App />
  </ClerkProvider>
) : <App />;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {app}
  </React.StrictMode>
);
