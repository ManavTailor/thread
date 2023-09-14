import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <div>
        <Link href="/">
        <Image
        src="/Tlogo.jpg"
        width={50}
        height={50}
        alt='logo'
      />
        </Link>
      </div>
      <div>
        <input type="text" placeholder="Search" />
      </div>
      <div>
        <ul>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/explore">Explore</Link>
          </li>
          <li>
            <Link href="/notifications">Notifications</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

