// import NextAuth from "next-auth";
// import Github from "next-auth/providers/github";
// import Google from "next-auth/providers/google";

// export default NextAuth({
//     providers: [
        
//     ]
// })

import { authOptions } from "@/app/utils/auth";
import NextAuth from "next-auth";

const handler = NextAuth(  authOptions);

export {handler as GET, handler as POST};