import { NextResponse } from 'next/server'
import getOrCreateDb from './models/server/dbSetup'
import getOrCreateStorage from './models/server/storageSetup'

// This function can be marked `async` if using `await` inside
export async function middleware() {
   await Promise.all([
      getOrCreateDb(),
      getOrCreateStorage()
   ])

   return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
   /*
      Match all the routes where you dont want to run the above middleware function
      starts with:
         - api
         - _next/static
         - _next/image
         - favicon.ico   
      
   */
   matcher: [
      "/((?!api|_next/static|_next/image|favicon.ico).*)"
   ],
}