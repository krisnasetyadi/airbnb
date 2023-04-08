/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import getCurrentUser from '@/app/actions/getCurrentUser';
import getListingById from '@/app/actions/getListingById';
import ClientOnly from '@/app/components/client-only-component';
import EmptyState from '@/app/components/empty-state-component';
import ListingClient from './listing-client';
import getReservations from '@/app/actions/getReservations';
interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();
  console.log('params listings[]', params, 'listing', listing);
  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <ListingClient listing={listing} currentUser={currentUser} reservations={reservations} />
    </ClientOnly>
  );
};

export default ListingPage;
