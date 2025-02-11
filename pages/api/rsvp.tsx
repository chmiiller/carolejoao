import type { NextApiRequest, NextApiResponse } from 'next'
import Mailgun from 'mailgun.js';
import FormData from 'form-data';

type ResponseData = {
  message: string,
  error: boolean
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const mgKey = process.env.MG_API_KEY || '';
  const mgDomain = process.env.MG_DOMAIN || '';
  const emailJoao = process.env.EMAIL_JOAO || '';
  const emailCarol = process.env.EMAIL_CAROL || '';
  const emailControle = process.env.EMAIL_CONTROLE || '';
  const {name, people} = req.body;
  const messageData = {
    from: `Lista RSVP <${emailJoao}>`,
    to: [emailJoao, emailCarol, emailControle],
    // to: [emailControle],
    subject: `Presença confirmada! ${name}`,
    text: `${name} confirmou a presença dela + ${people} pessoa(s)`,
  };
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: 'api',
    key: mgKey
  });
  try {
    const response = await mg.messages.create(mgDomain+'asd', messageData);
    console.log(`---------------------> RSVP response: ${JSON.stringify(response, null, '    ')}`);
    res.status(200).json({ error: false, message: 'Success' });
  } catch(e: unknown) {
    console.log(`---------------------> RSVP error from name: ${name}: ${JSON.stringify(e, null, '    ')}`);
    res.status(401).json({ error: true, message: 'Something went wrong'});
  }
}