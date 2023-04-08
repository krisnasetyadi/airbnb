/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import EmptyState from '@/app/components/empty-state-component';
import ClientOnly from '@/app/components/client-only-component';

import getCurrentUser from '@/app/actions/getCurrentUser';
import getFavoriteListings from '@/app/actions/getFavoriteListings';
import FavoriteClient from './favorite-client';
import Container from '@/app/components/container-component';

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No Favorites Found"
          subtitle="Looks like you have no favorite listings"
        />
      </ClientOnly>
    );
  }
  return (
    <Container>
      <FavoriteClient listings={listings} currentUser={currentUser} />
    </Container>
  );
};

export default ListingPage;
