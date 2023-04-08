import EmptyState from '../../components/empty-state-component';
import ClientOnly from '../../components/client-only-component';

import getCurrentUser from '../../actions/getCurrentUser';
import PropertiesClient from './properties-client-component';
import getListings from '@/app/actions/getListings';

const TripsPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorize" subtitle="Please login" />
      </ClientOnly>
    );
  }
  const listings = await getListings({
    userId: currentUser.id,
  });
  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No properties found"
          subtitle="Looks like you havent reserved any properties"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <PropertiesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default TripsPage;
