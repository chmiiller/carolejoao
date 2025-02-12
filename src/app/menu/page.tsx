import Header from '@/components/Header';
import Image from 'next/image';

export default function Menu() {
  return ( 
    <div className='p-4 flex flex-col items-center'>
      <Header />
      <Image
        className='mt-8'
        src="/menuv3.png"
        width={1000}
        height={705}
        alt="Menu do casamento"
        quality={100}
      />
    </div>
  );
};