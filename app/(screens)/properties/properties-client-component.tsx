'use client';

import React, { FC, useCallback, useState } from 'react';
import { SafeUser, SafeReservations } from '../../types';
import Container from '../../components/container-component';
import Heading from '../../components/heading-component';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import ListingCard from '../../components/listings/listing-card-component';

interface PropertiesClientProps {
  listings: SafeReservations[];
  currentUser?: SafeUser | null;
}

const PropertiesClient: FC<PropertiesClientProps> = ({ listings, currentUser }) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');
  const onDelete = useCallback(
    (id: string) => {
      setDeletingId(id);
      axios
        .delete(`/api/listings/${id}`)
        .then(() => {
          toast.success('Listing Deleted');
          router.refresh();
        })
        .catch((err) => {
          toast.error(err?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId('');
        });
    },
    [router],
  );
  return (
    <Container>
      <Heading title="Properties" subtitle="List of your properties" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl: gap-8">
        {listings.map((listing: any) => (
          <ListingCard
            key={listing.id}
            data={listing}
            actionId={listing.id}
            onAction={onDelete}
            actionLabel="Delete Property"
            disabled={deletingId === listing.id}
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default PropertiesClient;
