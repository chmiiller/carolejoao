"use client";
import Header from "@/components/Header";
import Image from "next/image";
import { Copy } from "lucide-react";

const texto = `Sua presença é nosso maior presente, mas se você quiser contribuir para o começo da nossa história, pode usar o QR Code ou Chave Pix abaixo`;

const tituloJoao = `Presenteie o João`;
const tituloCarol = `Presenteie a Carol`;
const pixValueJoao = `+5511994524358`;
const pixValueCarol = `+5511992294062`;
const pixJoao = `Chave Pix: +5511994524358`;
const pixCarol = `Chave Pix: +5511992294062`;
export default function Presentes() {
  return (
    <div className="p-4 flex flex-col items-center">
      <Header />
      <p className="text-center mt-8 mb-8 font-[family-name:var(--font-geist-sans)] font-thin ml-1">
        {texto}
      </p>
      {/* Container */}
      <div className="flex flex-col">
        <div>
          <p className="text-center mb-2 font-[family-name:var(--font-geist-sans)] font-normal text-lg">
            {tituloJoao}
          </p>
          <Image src="/QRJoao.jpg" width={250} height={250} alt="Pix QR Code" />
          <p
            className="text-center mt-6 mb-8 font-[family-name:var(--font-geist-sans)] font-thin flex flex-row items-center cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(`${pixValueJoao}`);
            }}
          >
            <Copy className="cursor-pointer mr-1" size={16} />
            {pixJoao}
          </p>
        </div>
        <div>
          <p className="text-center mb-2 font-[family-name:var(--font-geist-sans)] font-normal text-lg">
            {tituloCarol}
          </p>
          <Image
            src="/QRCarol.jpg"
            width={250}
            height={250}
            alt="Pix QR Code"
          />
          <p
            className="text-center mt-6 mb-8 font-[family-name:var(--font-geist-sans)] font-thin flex flex-row items-center cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(`${pixValueCarol}`);
            }}
          >
            <Copy className="cursor-pointer mr-1" size={16} />
            {pixCarol}
          </p>
        </div>
      </div>
    </div>
  );
}
