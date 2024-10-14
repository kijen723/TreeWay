import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const apiKey = process.env.NEXT_PUBLIC_GPT_API_KEY;
    console.log('API Key:', apiKey); // API 키 로그로 확인

    const { prompt } = req.body;
    console.log('Received Prompt:', prompt); // 클라이언트로부터 받은 prompt 로그로 확인

    try {
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'text-davinci-003', // GPT-3 모델
          prompt: prompt,
          max_tokens: 150,
          temperature: 0.5,
        }),
      });

      const data = await response.json();
      console.log('OpenAI API Response:', data);

      res.status(200).json({ explanation: data.choices[0].text.trim() });
    } catch (error) {
      console.error('Error occurred:', error);
      res.status(500).json({ error: 'Text analysis failed' });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}
