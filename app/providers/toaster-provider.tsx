/* eslint-disable import/no-extraneous-dependencies */
'use client';
import React from 'react';
// why on this side
// toaster is a foreign library
// => its not adjusted the next 13 app router
// this is a client component which we want to use inside out app
import { Toaster } from 'react-hot-toast';

// if we declare <Toaster /> on layout.tsx we gonna get an error
//  because we importing a component that needs use effect and it requires at least one parent
//  which is a client
const ToasterProvider = () => {
  return <Toaster />;
};

export default ToasterProvider;
