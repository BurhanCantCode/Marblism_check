import { Trpc } from '@/core/trpc/server'
import { User } from '@prisma/client'
import { z } from 'zod'
import { EmailService, EmailTemplateKey } from '../libraries/email'

const TemplateKeys = Object.keys(EmailService.templates) as [
  EmailTemplateKey,
  ...EmailTemplateKey[],
]

export const EmailRouter = Trpc.createRouter({
  send: Trpc.procedure
    .input(
      z.object({
        userId: z.string().optional(),
        email: z.string().optional(),
        name: z.string().optional(),
        subject: z.string(),
        content: z.string().optional(),
        templateKey: z.enum(TemplateKeys),
        variables: z.record(z.string(), z.string()),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      let user: User

      if (input.userId) {
        user = await ctx.database.user.findUniqueOrThrow({
          where: { id: input.userId },
        })
      }

      const email = user?.email ?? input.email
      const name = user?.name ?? input.name

      await EmailService.send({
        templateKey: input.templateKey,
        content: input.content,
        email,
        name,
        subject: input.subject,
        variables: input.variables,
      })

      return {}
    }),
})
