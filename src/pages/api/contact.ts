import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';

type Data = {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const user = process.env.EMAIL_SEND;
  const pass = process.env.EMAIL_SEND_PASSWORD;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass
    }
  });

  const mailData = {
    from: `"${req.body.name}" ${req.body.email}`,
    to: process.env.EMAIL,
    subject: `Contato portfólio!!`,
    text: `${req.body.text} - ${req.body.email}`,
    html: `
      <p>Nome: ${req.body.name}</p>
      <p>Email: ${req.body.email}</p>
      <p>Mensagem: <b>${req.body.text}</b> </p>
    `
   }

  transporter.sendMail(mailData, function (err, info) {
    if(err){
        res.status(404).json({message: 'Ocorreu algum problema ao enviar o email.'})
      }else {
      if(info.accepted){
        res.status(200).json({message: 'Email enviado.'})
      }
    }
  })
}
