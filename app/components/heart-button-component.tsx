'use client';

import React, { FC } from 'react';
import { SafeUser } from '../types';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: FC<HeartButtonProps> = ({ listingId, currentUser }) => {
  const hasFavorited = false;
  const toggleFavorite = () => {};
  return (
    <div onClick={toggleFavorite} className="relative hover:opacity-80 transition cursor-pointer">
      <AiOutlineHeart className="fill-white absolute -top-[2px] -right-[2px]" size={28} />
      <AiFillHeart
        size={24}
        className={`${hasFavorited ? 'fill-rose-500' : 'fill-neutral-500/70'}`}
      />
    </div>
  );
};

export default HeartButton;
