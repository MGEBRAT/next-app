import Link from 'next/link';
import React from 'react';

// menuData 
const menuLinks = [
  { label: 'Играт', url: '/' },
  { label: 'Кредит', url: '/sdam_dom' },
  { label: 'Задонатить', url: '/donat' },
  { label: 'Задонатить', url: '/DONATS' }
];

const Navbar = ( { containerStyle } : { containerStyle: string } ) => {
  return (
    <nav className={`${containerStyle}`}>
      <menu className="w-full flex items-center justify-center gap-4">
        {menuLinks.map(( item, index ) => {
          return (
            <>
              <li key={index}>
                <Link href={item.url} className='text-white text-xl font-medium  hover:text-accent transition-all'>{item.label}</Link>
              </li>
            </>
          )
        })}
      </menu>
    </nav>
  )
}

export default Navbar;