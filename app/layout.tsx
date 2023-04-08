import React from 'react';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/navbar-component';
import './globals.css';
import ClientOnly from './components/client-only-component';
import RegisterModal from './components/modals/register-modal-component';
import ToasterProvider from './(screens)/providers/toaster-provider';
import LoginModal from './components/modals/login-modal-component';
import getCurrentUser from './actions/getCurrentUser';
import RentModal from './components/modals/rent-modal';

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
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-20">{children}</div>
      </body>
    </html>
  );
}
