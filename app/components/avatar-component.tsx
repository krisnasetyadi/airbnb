'use client';
import React, { FC } from 'react';
import Image from 'next/image';

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      alt="Avatar"
      src={src || '/images/placeholder-avatar.jpg'}
    />
  );
};

export default Avatar;
