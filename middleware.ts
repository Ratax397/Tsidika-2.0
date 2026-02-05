
import {withAuth} from "next-auth/middleware"

export default withAuth({
    pages:{
        signIn:"/"
    }
})

export const config = {
    matcher: [
        // Commentez temporairement pour tester
        // "/trips",
        // "/reservations",
        // "/properties",
        // "/favorites"
    ]
}