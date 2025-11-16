
import { NextRequest, NextResponse } from 'next/server';
import { Groq } from 'groq-sdk';

const MODEL_NAME = 'openai/gpt-oss-20b';
const asistant_prompt = 'Merhaba! Ben senin günlük motivasyon asistanım. Gününü, duygularını ve yaşadıklarını benimle paylaş, sana uygun motive edici yanıtlar vereyim 💪';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
  dangerouslyAllowBrowser: false, // Backend tarafında çalışacak
});

export async function POST(req: NextRequest) {
  try {
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json({ error: 'GROQ_API_KEY not configured' }, { status: 500 });
    }

    const body = await req.json();
    const { prompt, history } = body as {
      prompt: string;
      history?: Array<{ role: string; content: string }>;
    };

    const MAX_HISTORY = 12;
    const recent = (history ?? []).slice(-MAX_HISTORY);
    const messages = [
      { role: 'system', content: asistant_prompt },
      ...recent,
      { role: 'user', content: prompt },
    ];

    const chatCompletion = await groq.chat.completions.create({
      messages: messages as any,
      model: MODEL_NAME,
      temperature: 1,
      max_completion_tokens: 8192,
      top_p: 1,
      stream: true,
      reasoning_effort: 'medium',
      stop: null,
    });

    let reply = '';

    for await (const chunk of chatCompletion) {
      const content = chunk.choices[0]?.delta?.content;
      if (content) reply += content;
    }

    if (!reply || reply.trim().length === 0) {
      reply = 'I hear you. Take a moment to breathe. You\'ve got this! 💪';
    }

    reply = reply.trim();
    if (reply.startsWith('Coach:')) reply = reply.substring(6).trim();

    return NextResponse.json({ reply });
  } catch (err: any) {
    console.error('[GROQ] Error:', err);
    return NextResponse.json({ error: err.message || 'Something went wrong' }, { status: 500 });
  }
}
