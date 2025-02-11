'use client'
import { useState } from 'react';
import Confetti from 'react-confetti'

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
        setApiError("Ops, algo deu errado. Por favor, tente novamente mais tarde.");
      }
    } catch (err) {
      console.error('Err', err)
    }
  }

  return isSubmitted ? (
    <div>
      <h1 className="text-center font-semibold text-3xl mt-4">
        {`Obrigado ${name}! Sua presença foi confirmada!`}
      </h1>
      <Confetti recycle={false} numberOfPieces={1000}/>
    </div>
  ) : 
    <form
      className="flex flex-col p-4"
      onSubmit={onSubmit}
    >
      {/* Name */}
      <label className="label font-semibold mt-2" htmlFor='nomeCompleto'>
        <span className="label-text">Nome completo</span>
      </label>
      <input
        id='nomeCompleto'
        name='nomeCompleto'
        className="input w-full input-bordered input-primary mt-2 mb-2 border border-zinc-800 p-1 text-lg"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Digite seu nome"
      />
      {/* People */}
      <label className="label font-semibold" htmlFor='pessoas'>
        <span className="label-text">Número de acompanhantes</span>
      </label>
      <input
        id='pessoas'
        name='pessoas'
        className="w-full mt-2 mb-2 border border-zinc-800 p-1 text-lg"
        type='number'
        inputMode={'numeric'}
        min={1}
        max={20}
        step={1}
        placeholder="2"
        value={people}
        onChange={(e) => setPeople(e.target.value)}
      />
      {apiError && (
        <p>{apiError}</p>
      )}
      {/* Button */}
      <button
        className="text-white bg-gradient-to-br mt-4 from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        disabled={apiError !== ''}
        type="submit">
          Confirmar presença
      </button>
    </form>
  
};