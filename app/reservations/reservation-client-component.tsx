'use client';

import { toast } from 'react-hot-toast';
import axios from 'axios';
import React, { FC, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SafeReservations, SafeUser } from '../types';

import Heading from '../components/heading-component';
import Container from '../components/container-component';
import ListingCard from '../components/listings/listing-card-component';

interface ReservationsClientProps {
  reservations: SafeReservations[];
  currentUser: SafeUser | null;
}

const ReservationClient: FC<ReservationsClientProps> = ({ currentUser, reservations }) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState();

  const onCancel = useCallback(() => {
    setDeletingId(id);
    axios
      .delete(`/api/reservations/${id}`)
      .then(() => {
        toast.success('Reservation canceled');
        router.refresh();
      })
      .catch(() => {
        toast.error('Something went wrong');
      })
      .finally(() => {
        setDeletingId('');
      });
  }, [router]);
  return (
    <Container>
      <Heading title="Reservations" subtitle="Bookings on your properties" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {reservations.map((reservation) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel="Cancel guest reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default ReservationClient;
