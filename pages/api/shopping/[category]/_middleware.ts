import { NextResponse , NextRequest } from 'next/server'


const protectAPI = async (
  req: NextRequest
) => {

  const basicAuth = req.headers.get('apitoken')
  const apikey = req.nextUrl.searchParams.get('apikey')
  
  if (
    req.method === "POST" &&
    basicAuth !==  process.env.NEXT_PUBLIC_API_TOKEN
    ) {
    return new Response('Auth required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    })
  }

  if (
    req.method === "GET" &&
    apikey !== process.env.NEXT_PUBLIC_API_KEY
  ) {
    return new Response('api-key required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    })
  }


  return NextResponse.next()


};

export default protectAPI;
