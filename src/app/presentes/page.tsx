"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import { Copy } from "lucide-react";

const texto = `Sua presença é nosso maior presente, mas se você quiser contribuir para o começo da nossa história, pode usar o QR Code, Chave Pix ou os dados bancários abaixo`;

const tituloJoao = `Presenteie o João`;
const tituloCarol = `Presenteie a Carol`;
const pixValueJoao = `+5511994524358`;
const pixValueCarol = `+5511992294062`;
const pixJoao = `Chave Pix: +5511994524358`;
const pixCarol = `Chave Pix: +5511992294062`;
const bancoTitulo = `Se preferir, você também pode fazer uma transferência bancária`;
const bancoLabel = `Banco:`;
const bancoDescription = `077 - Inter`;
const contaLabel = `Número da conta:`;
const contaDescription = `3362216-7`;
const agenciaDescription = `0001`;
const agenciaLabel = `Agência:`;
const cpfLabel = `CPF:`;
const cpfDescription = `294.667.828-86`;

export default function Presentes() {
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [showAlert3, setShowAlert3] = useState(false);
  const [alert3Message, setAlert3Message] = useState("");

  const copyBankDetails = (itemToCopy: string, message: string) => {
    navigator.clipboard.writeText(`${itemToCopy}`);
    setAlert3Message(message);
    setShowAlert3(true);
    setTimeout(() => {
      setShowAlert3(false);
      setAlert3Message("");
    }, 2000);
  };

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
          <div className="flex flex-col mb-8">
            <p
              className="text-center mt-6 font-[family-name:var(--font-geist-sans)] font-thin flex flex-row items-center cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(`${pixValueJoao}`);
                setShowAlert(true);
                setTimeout(() => {
                  setShowAlert(false);
                }, 2000);
              }}
            >
              <Copy className="cursor-pointer mr-1" size={16} />
              {pixJoao}
            </p>
            {showAlert && (
              <div
                className="p-2 bg-slate-900 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex rounded-md mt-1"
                role="alert"
              >
                <span className="font-semibold mr-2 text-left flex-auto">
                  Chave Pix copiada
                </span>
              </div>
            )}
          </div>
        </div>
        {/* Carol */}
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
          <div className="flex flex-col mb-8">
            <p
              className="text-center mt-6 font-[family-name:var(--font-geist-sans)] font-thin flex flex-row items-center cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(`${pixValueCarol}`);
                setShowAlert2(true);
                setTimeout(() => {
                  setShowAlert2(false);
                }, 2000);
              }}
            >
              <Copy className="cursor-pointer mr-1" size={16} />
              {pixCarol}
            </p>
            {showAlert2 && (
              <div
                className="p-2 bg-slate-900 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex rounded-md mt-1"
                role="alert"
              >
                <span className="font-semibold mr-2 text-left flex-auto">
                  Chave Pix copiada
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Banco */}
      <div>
        <p className="text-center font-[family-name:var(--font-geist-sans)] font-normal text-lg">
          {bancoTitulo}
        </p>
        <div className="border rounded-md flex flex-col p-2 mb-2 mt-4">
          <span
            className="text-left flex-auto mb-1 flex flex-row items-center"
            onClick={() => {
              copyBankDetails(contaDescription, `Número da conta copiado`);
            }}
          >
            <Copy className="cursor-pointer mr-1" size={16} />
            <b>{contaLabel}</b> {contaDescription}
          </span>
          <span
            className="text-left flex-auto mb-1 flex flex-row items-center"
            onClick={() => {
              copyBankDetails(agenciaDescription, `Número da agência copiado`);
            }}
          >
            <Copy className="cursor-pointer mr-1" size={16} />
            <b>{agenciaLabel}</b> {agenciaDescription}
          </span>
          <span
            className="text-left flex-auto mb-1 flex flex-row items-center"
            onClick={() => {
              copyBankDetails(bancoDescription, `Banco copiado`);
            }}
          >
            <Copy className="cursor-pointer mr-1" size={16} />
            <b>{bancoLabel}</b> {bancoDescription}
          </span>
          <span
            className="text-left flex-auto mb-1 flex flex-row items-center"
            onClick={() => {
              copyBankDetails(cpfDescription, `CPF copiado`);
            }}
          >
            <Copy className="cursor-pointer mr-1" size={16} />
            <b>{cpfLabel}</b> {cpfDescription}
          </span>
        </div>
        {showAlert3 && (
          <div
            className="p-2 bg-slate-900 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex rounded-md mt-1"
            role="alert"
          >
            <span className="font-semibold mr-2 text-left flex-auto">
              {alert3Message}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
