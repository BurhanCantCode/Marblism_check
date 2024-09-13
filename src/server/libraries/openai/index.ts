import { ReadStream } from 'fs'
import { ZodType } from 'zod'
import { Openai } from './internal/openai'

class Service {
  private openai = new Openai()

  async generateText(
    prompt: string,
    attachmentUrls?: string[],
  ): Promise<string> {
    return this.openai.generateText(prompt, attachmentUrls)
  }

  async generateJson<SchemaType extends ZodType>(
    instruction: string,
    content: string,
    schema: SchemaType,
    attachmentUrls?: string[],
  ) {
    return this.openai.generateJson<SchemaType>(
      instruction,
      content,
      schema,
      attachmentUrls,
    )
  }

  async generateImage(prompt: string): Promise<string> {
    return this.openai.generateImage(prompt)
  }

  async fromAudioToText(readStream: ReadStream): Promise<string> {
    return this.openai.fromAudioToText(readStream)
  }

  async fromTextToAudio(text: string): Promise<Buffer> {
    return this.openai.fromTextToAudio(text)
  }

  isActive(): boolean {
    return this.openai.isActive()
  }
}

class Singleton {
  static service = new Service()
}

export const OpenaiService = Singleton.service
