import { NextResponse } from 'next/server';


export async function GET(req: Request, { params }: { params: { reference: string } }) {
  try {
    const res = await fetch(`https://api.paystack.co/transaction/verify/${params.reference}`,
      {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
          // Add other headers if needed
        }
      })

    if (!res.ok) {
      return NextResponse.json({ success: false, error: res.status })
    }

    const data = await res.json()

    return NextResponse.json({ success: true, data: data })
  } catch (error) {
    return NextResponse.json({ success: false, error: error })
  }
}