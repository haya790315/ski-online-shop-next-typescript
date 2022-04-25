import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt"



const protectAPI = async (req: NextApiRequest) => {
  const secret = process.env.NEXTAUTH_SECRET
  
  const token = await getToken({ req, secret })
  if (token) {
    return NextResponse.next();
  } else {
    return new Response("ログインしてください", {
      status: 401,
    });
  }
};

export default protectAPI;
