'use client'
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type HeaderProps = {
  hideBack?: boolean;
};
const Header = ({ hideBack }: HeaderProps) => {
  return (
    <div className='flex flex-col p-1 max-w-4xl'>
      {!hideBack && (
        <Link href={'/'}>
          <ArrowLeft
            className='cursor-pointer'
            size={30}
          />
        </Link>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={`w-auto`} src={'/logo.png'} alt='Carol & Joao'/>
    </div>
  );
};

export default Header;
