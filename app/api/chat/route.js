import Anthropic from '@anthropic-ai/sdk'
import { systemPrompt } from '@/lib/system-prompt'

const anthropic = new Anthropic()

export async function POST(request) {
  try {
    const { message } = await request.json()

    if (!message) {
      return Response.json({ error: 'Message is required' }, { status: 400 })
    }

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: systemPrompt,
      messages: [
        { role: 'user', content: message }
      ]
    })

    const assistantMessage = response.content[0].text

    return Response.json({ response: assistantMessage })
  } catch (error) {
    console.error('Chat API error:', error)
    return Response.json(
      { error: 'Failed to process message' },
      { status: 500 }
    )
  }
}
