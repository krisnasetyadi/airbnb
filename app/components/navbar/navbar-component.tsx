/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
'use client';
import React, { FC } from 'react';
import Container from '../container-component';
import Logo from './logo-component';
import Search from './search-component';
import UserMenu from './user-menu-component';

import { SafeUser } from '@/app/types';

interface NavbarProps {
  // we can use User from prisma/client
  // this was generated once your run npx prisma db push
  //  we can use the very same user type that we defined in our Prisma schema
  currentUser?: SafeUser | null;
}

const Navbar: FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
