import Image from 'next/image';

export default function Gifts() {
  return ( 
    <div>
      <h1>Lista de presentes</h1>
      <Image
        src="/QRJoao.jpg"
        width={300}
        height={300}
        alt="Pix QR Code"
      />
    </div>
  );
};