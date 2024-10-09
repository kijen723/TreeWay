import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const apiKey = process.env.NEXT_PUBLIC_GPT_API_KEY;
        console.log("API Key:", apiKey);  // API 키 로그로 확인

        const { prompt } = req.body;
        console.log("Received Prompt:", prompt);  // 클라이언트로부터 받은 prompt 로그로 확인

        try {
            const response = await fetch('https://api.openai.com/v1/images/generations', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: 'dall-e-3',
                    prompt: prompt,
                    n: 1,
                    size: '1024x1024',
                }),
            });

            const data = await response.json();
            console.log("OpenAI API Response:", data);  // OpenAI API 응답 로그로 확인
            res.status(200).json({ imageUrl: data.data[0].url });
        } catch (error) {
            console.error("Error occurred:", error);  // 오류 로그 확인
            res.status(500).json({ error: 'Image generation failed' });
        }
    } else {
        res.status(405).json({ message: 'Only POST requests are allowed' });
    }
}
