'use client';

import React, { FC, useEffect } from 'react';
import EmptyState from './components/empty-state-component';

interface ErrorStateProps {
  error: Error;
}

const ErrorState: FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return <EmptyState title="Uh Oh" subtitle="Something went wrong!" />;
};

export default ErrorState;
