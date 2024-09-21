import { db } from "@/lib/db";
import { messages } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";


export const runtime = 'edge'

export async function POST(req: Request) {
    const { chatId } = await req.json();


    try {
        const msgs = await db.select().from(messages).where(eq(messages.chatId, chatId))
        return NextResponse.json(msgs)
    } catch (error) {
        console.log("Error in getting the messages.")
        return NextResponse.json([])
    }

}