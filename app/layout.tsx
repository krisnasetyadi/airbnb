import React from 'react';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/navbar-component';
import './globals.css';
import ClientOnly from './components/client-only-component';
import RegisterModal from './components/modals/register-modal-component';
import ToasterProvider from './providers/toaster-provider';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          {/* <Modal actionLabel="Submit" isOpen title="Title" /> */}
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
