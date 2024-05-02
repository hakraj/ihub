import { NextResponse } from 'next/server';


export async function GET(req: Request, { params }: { params: { reference: string } }) {
  try {
    console.log(process.env.PAYSTACK_SECRET_KEY, params.reference);

    const res = await fetch(`https://api.paystack.co/transaction/verify/${params.reference}`,
      {
        headers: {
          'Authorization': `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
          // Add other headers if needed
        }
      })

    console.log(res);

    if (!res.ok) {
      return NextResponse.json({ success: false, error: res.status })
    }

    const data = await res.json()

    return NextResponse.json({ success: true, data: data })
  } catch (error) {
    return NextResponse.json({ success: false, error: error })
  }
}