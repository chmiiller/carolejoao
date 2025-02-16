import Header from '@/components/Header';
import OutlineLink from '@/components/OutlineLink';
import { MapPin } from 'lucide-react';


export default function Home() {
  return (
    <div className={`items-center min-h-screen p-4 pb-20`}>
      <main className="flex flex-col items-center">
        <Header hideBack/>
        <div className='mt-24 mb-24'>
          <OutlineLink url='/rsvp' title='Confirmar presença'/>
          <OutlineLink url='/presentes' title='Lista de presentes'/>
          <OutlineLink url='/menu' title='Menu'/>
        </div>
        <p className='text-center font-[family-name:var(--font-geist-sans)] text-lg font-extralight'>Te esperamos para celebrar conosco<br />no dia 4 de Maio de 2025</p>
        <br />
        <a href='https://maps.app.goo.gl/UGuc4Rj1HDU2tqaj6' target='_blank' className='flex flex-row items-center'>
          <MapPin size={20} strokeWidth={1} />
          <p className='text-center font-[family-name:var(--font-geist-sans)] font-thin ml-1'>Rua 2 de Julho 607 - Buffet Mediterrâneo</p>
        </a>
      </main>
    </div>
  );
}
