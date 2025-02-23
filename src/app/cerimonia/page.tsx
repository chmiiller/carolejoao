import Header from "@/components/Header";
import Image from "next/image";

const texto = `A Cerimônia terá início às 10:30hrs no Buffet Mediterrâneo na Rua dois de julho, 607 - Ipiranga onde também acontecerá a Recepção a partir das 12hrs.`;
const texto2 = `Esperamos vocês lá.`;
export default function Cerimonia() {
  return (
    <div className="p-4 flex flex-col items-center">
      <Header />
      <p className="text-center mt-8 mb-2 font-[family-name:var(--font-geist-sans)] font-thin">
        {texto}
      </p>
      <p className="text-center font-[family-name:var(--font-geist-sans)] font-thin">
        {texto2}
      </p>
      <Image
        className="mt-4"
        src="/calendario.png"
        width={635}
        height={655}
        alt="Linha do tempo"
        quality={100}
      />
    </div>
  );
}
