import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Handle chat request
    res.status(200).json({ message: 'Chat response' });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
