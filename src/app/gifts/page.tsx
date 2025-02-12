import Header from '@/components/Header';
import Image from 'next/image';

const texto = `Sua presença é nosso maior presente, mas se você quiser contribuir para o começo da nossa história, pode usar o QR Code ou Chave Pix abaixo`;
const sugestao = `(Valor sugerido R$200)`;
const pix = `Chave Pix: (11) 99452-4358`;
export default function Gifts() {
  return ( 
    <div className='p-4 flex flex-col items-center'>
      <Header />
      <p className='text-center mt-8 mb-8 font-[family-name:var(--font-geist-sans)] font-thin ml-1'>{texto}<br />{sugestao}</p>
      <Image
        src="/QRJoao.jpg"
        width={250}
        height={250}
        alt="Pix QR Code"
      />
      <p className='text-center mt-6 mb-8 font-[family-name:var(--font-geist-sans)] font-thin ml-1'>{pix}</p>
    </div>
  );
};