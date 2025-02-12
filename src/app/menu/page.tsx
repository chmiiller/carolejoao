import Image from 'next/image';

export default function Menu() {
  return ( 
    <div>
      <h1>Menu</h1>
      <Image
        src="/menuv3.png"
        width={1000}
        height={705}
        alt="Menu do casamento"
      />
    </div>
  );
};