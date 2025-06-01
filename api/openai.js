export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 14000);

  try {
    const { messages } = req.body;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4-turbo',
        messages: messages.slice(-5),
        max_tokens: 600,
        temperature: 0.7,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const data = await response.json();

    if (!response.ok) {
      console.error('OpenAI API error:', data);
      return res.status(response.status).json({ error: data.error || 'OpenAI error' });
    }

    res.status(200).json(data);
  } catch (error) {
    clearTimeout(timeoutId);

    if (error.name === 'AbortError') {
      console.error('⏱ Запрос к OpenAI прерван по таймауту');
      return res.status(504).json({ error: { code: 504, message: 'Request timed out' } });
    }

    console.error('❌ Ошибка при обращении к OpenAI:', error);
    res.status(500).json({ error: { message: 'Internal Server Error' } });
  }
}



// export default async function handler(req, res) {
//     if (req.method !== 'POST') {
//       return res.status(405).json({ error: 'Method Not Allowed' });
//     }
  
//     try {
//       const response = await fetch('https://api.openai.com/v1/chat/completions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//         },
//         body: JSON.stringify(req.body),
//       });
  
//       const data = await response.json();
//       res.status(response.status).json(data);
//     } catch (error) {
//       console.error('Ошибка при обращении к OpenAI:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   }
  