import {NextRequest, NextResponse} from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const {email} = body
        
        if (!email) {
            return NextResponse.json(
                {error: "Email is required"},
                {status: 400}
            )
        }

        await axios.post("https://api.intercom.io/contacts", {email, role: "lead"}, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_INTERCOM_TOKEN}`,
                'Content-Type': 'application/json',
            },
        })

        return NextResponse.json({
            message: "Ok"
        })
    } catch (err: any) {
        console.log(err)
        return NextResponse.json(
            {error: err.message || "Internal Server Error"},
            {status: err.status || 500}
        )
    }
}