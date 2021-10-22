import prismaClient from "../prisma"

class GetLast3MessagesService {
   async execute() {
      const messages = await prismaClient.message.findMany({
         take: 3,
         orderBy: {
            create_at: "desc"
         },
         include: {
            user: true
         }
      })

      // SELECT * FROM MESSAGES LIMIR 3 ORDER BY CREATED_AT

      return messages
   }
}

export { GetLast3MessagesService }
