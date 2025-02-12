'use client'
import Header from '@/components/Header';
import { useState } from 'react';
import Confetti from 'react-confetti'

const errorMessage = `Não foi possível confirmar sua presença. Tente mais tarde ou entre em contato com os noivos.`;
export default function Rsvp() {
  const [isSubmitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [people, setPeople] = useState('');
  const [apiError, setApiError] = useState('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        body: JSON.stringify({ name, people }),
        headers: {
          'content-type': 'application/json',
        },
      })
      if (res.status === 200) {
        setSubmitted(true)
      } else {
        setApiError(errorMessage);
      }
    } catch (err) {
      console.error('Err', err)
    }
  }

  return isSubmitted ? (
    <div className='p-4 flex flex-col items-center'>
      <Header />
      <p className="p-1 text-center font-semibold text-2xl mt-10 font-[family-name:var(--font-geist-sans)] font-extralight">
        {`Obrigado ${name}.`}
        <br />
        {`Sua presença + ${people} foi confirmada!`}
      </p>
      <Confetti recycle={false} numberOfPieces={1000}/>
    </div>
  ) : 
    <div className='p-4 flex flex-col items-center'>
      <Header />
      <form
      className="flex flex-col p-4 mt-8"
      onSubmit={onSubmit}
    >
      {/* Name */}
      <label className="label font-[family-name:var(--font-geist-sans)] font-extralight" htmlFor='nomeCompleto'>
        <span className="label-text">Seu nome</span>
      </label>
      <input
        id='nomeCompleto'
        name='nomeCompleto'
        className="w-full mt-2 mb-6 border-slate-900 border-solid border rounded-xl p-2 text-lg font-[family-name:var(--font-geist-sans)] font-thin"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Digite seu nome"
        required
      />
      {/* People */}
      <label className="label font-[family-name:var(--font-geist-sans)] font-extralight" htmlFor='pessoas'>
        <span className="label-text">Nome do(s) acompanhante(s)</span>
      </label>
      <input
        id='pessoas'
        name='pessoas'
        className="w-full mt-2 mb-2 border-slate-900 border-solid border rounded-xl p-2 text-lg font-[family-name:var(--font-geist-sans)] font-thin"
        placeholder="Quem vai com você?"
        value={people}
        onChange={(e) => setPeople(e.target.value)}
        required
      />
      {/* Button */}
      <button
        className='font-tan text-3xl border-slate-900 border-solid border-2 rounded-xl p-2 mt-10 text-slate-700 min-w-60 text-center'
        disabled={apiError !== ''}
        type="submit">
          Confirmar presença
      </button>
      {apiError && (
        <p className='p-4 font-[family-name:var(--font-geist-sans)] text-center'>{apiError}</p>
      )}
    </form>
    </div>
  
};