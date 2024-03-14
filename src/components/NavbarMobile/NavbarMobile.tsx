import Link from 'next/link';
import React from 'react';

const menuLinks = [
  { label: 'Играт', url: '/' },
  { label: 'Кредит', url: '/credit' },
  { label: 'Донат', url: '/donat' },
  { label: 'Донат', url: '/DONATS' }
];

const NavbarMobile = ({ containerStyle } : { containerStyle: string }) => {
  return (
    <nav className={`${containerStyle}`}>
      <menu className="w-full flex flex-col gap-4">
        {menuLinks.map((item, index) => {
          return (
            <>
              <li key={index}>
                <Link href={item.url}  className='text-white uppercase hover:text-accent transition-all sticky z-10 '>{item.label}</Link>
              </li>
              
            </>
          );
        })}
        
      </menu>
    </nav>
  )
}

export default NavbarMobile