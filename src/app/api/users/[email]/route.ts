import { NextResponse } from 'next/server';
import { deleteUserByEmail, getUserByEmail, getUsers, updateUserByEmail } from '@lib/mongodb/users';
import url from 'url';


export async function GET(req: Request, { params }: { params: { email: string } }) {
  try {
    // const user = url.parse(req.url, true).query;
    const { user, error } = await getUserByEmail(params.email);
    if (error) throw new Error(error);

    return NextResponse.json({ success: true, data: user })
  } catch (error) {
    return NextResponse.json({ success: false, error: error })
  }
}


export async function PUT(req: Request, { params }: { params: { email: string } }) {
  try {
    const { name, phone } = await req.json();

    const { message, error } = await updateUserByEmail(params.email, { name, phone });
    if (error) throw new Error(error);

    return NextResponse.json({ success: true, data: message })
  } catch (error) {
    return NextResponse.json({ success: false, err: error })
  }
}

export async function DELETE(req: Request, { params }: { params: { email: string } }) {
  try {
    const updatedUser = await req.json()

    const { message, error } = await deleteUserByEmail(params.email);
    if (error) throw new Error(error);

    return NextResponse.json({ success: true, data: message })
  } catch (error) {
    return NextResponse.json({ success: false, err: error })
  }
}
