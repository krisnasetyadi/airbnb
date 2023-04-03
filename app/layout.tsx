import React from 'react';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/navbar-component';
import './globals.css';
import ClientOnly from './components/client-only-component';
import RegisterModal from './components/modals/register-modal-component';
import ToasterProvider from './providers/toaster-provider';
import LoginModal from './components/modals/login-modal-component';
import getCurrentUser from './actions/getCurrentUser';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // layout.tsx by default a server component
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          {/* <Modal actionLabel="Submit" isOpen title="Title" /> */}
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
