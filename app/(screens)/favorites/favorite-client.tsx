import Container from '@/app/components/container-component';
import Heading from '@/app/components/heading-component';
import ListingCard from '@/app/components/listings/listing-card-component';
import { SafeListing, SafeUser } from '@/app/types';
import { FC } from 'react';

interface FavoriteClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const FavoriteClient: FC<FavoriteClientProps> = ({ listings, currentUser }) => {
  return (
    <Container>
      <Heading title="Favorite" subtitle="List of place you have favorited" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl-grid-cols-6 gap-8">
        {listings.map((listing) => (
          <ListingCard currentUser={currentUser} key={listing.id} data={listing} />
        ))}
      </div>
    </Container>
  );
};

export default FavoriteClient;
