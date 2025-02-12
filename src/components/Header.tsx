'use client'
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation'

type HeaderProps = {
  hideBack?: boolean;
};
const Header = ({ hideBack }: HeaderProps) => {
  const router = useRouter();
  return (
    <div className='flex flex-col p-1 max-w-4xl'>
      {!hideBack && (
        <ArrowLeft
          className='cursor-pointer'
          size={30}
          onClick={() => {
            router.back();
          }}
        />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={`w-auto`} src={'/logo.png'} alt='Carol & Joao'/>
    </div>
  );
};

export default Header;
