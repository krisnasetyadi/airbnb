import React from 'react';
import Container from '../container-component';
import Logo from './logo-component';
import Search from './search-component';
import UserMenu from './user-menu-component';

function Navbar() {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;