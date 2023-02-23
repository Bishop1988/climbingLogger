import { serverSupabaseUser } from "#supabase/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const user = await serverSupabaseUser(event)
    if (!user) {
        throw createError({ statusCode: 401, message: 'Unauthorized' })
    }

    const {
        description,
        title,
        date
    } = body

    const data = await prisma.climbs.create({
        data: {
            description,
            title,
            date,
            user: user.id
        }
    })

    return data
})