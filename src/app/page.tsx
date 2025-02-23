import Header from "@/components/Header";
import OutlineLink from "@/components/OutlineLink";
import { MapPin } from "lucide-react";

//bg-[url('/noivos.jpg')] bg-no-repeat
export default function Home() {
  return (
    <div className={`items-center min-h-screen pb-20`}>
      <img className={`absolute w-full opacity-50`} src="/noivos.jpg" />
      <main className="flex flex-col items-center relative">
        <Header hideBack />
        <div className="flex flex-col mt-10 mb-24 items-center">
          <OutlineLink url="/rsvp" title="Confirme presença" />
          <OutlineLink url="/cerimonia" title="Cerimônia e Recepção" />
          <OutlineLink url="/presentes" title="Pix presente" />
          <OutlineLink url="/roteiro" title="Roteiro do dia" />
          <div className="bg-white mt-14">
            <p className="text-center font-[family-name:var(--font-geist-sans)] text-lg font-extralight">
              Te esperamos para celebrar conosco
              <br />
              no dia 4 de Maio de 2025
            </p>
            <br />
            <a
              href="https://maps.app.goo.gl/UGuc4Rj1HDU2tqaj6"
              target="_blank"
              className="flex flex-row items-center"
            >
              <MapPin size={20} strokeWidth={1} />
              <p className="text-center font-[family-name:var(--font-geist-sans)] font-thin ml-1">
                Rua 2 de Julho 607 - Buffet Mediterrâneo
              </p>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
