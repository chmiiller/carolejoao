import type { NextApiRequest, NextApiResponse } from 'next'
import Mailgun from 'mailgun.js';
import FormData from 'form-data';

type ResponseData = {
  message: string
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const mgKey = process.env.MG_API_KEY || '';
  const mgDomain = process.env.MG_DOMAIN || '';
  const {name, people} = req.body;
  const messageData = {
    from: "Lista RSVP <jlzinato@gmail.com>",
    to: ["cmzinato@gmail.com", "jlzinato@gmail.com", "cavendeiro@gmail.com"],
    subject: `Presença confirmada! ${name}`,
    text: `A ${name} confirmou a presença dela + ${people} pessoas`,
  };
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: 'api',
    key: mgKey
  });
  const response = mg.messages.create(mgDomain, messageData);
  console.log(response);
  res.status(200).json({ message: 'Success' })
}