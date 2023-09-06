import { NextResponse } from 'next/server';
import { getUsers } from '@lib/mongodb/users';
import url from 'url';


export async function GET(req: Request) {
  try {
    // const user = url.parse(req.url, true).query;
    const { users, error } = await getUsers();
    if (error) throw new Error(error);

    return NextResponse.json({ success: true, data: users })
  } catch (error) {
    return NextResponse.json({ success: false, error: error })
  }
}