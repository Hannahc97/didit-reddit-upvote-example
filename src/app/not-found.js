import Link from "next/link"
import { LoginButton } from "@/components/LoginButton"

export default function NotFoundPage(){
    return(
        <>
            <div className="flex flex-col justify-center items-center m-4 p-4">
                <h1 className="text-pink-400">Oops! To vote please log in!</h1>
                <LoginButton />
            </div>
        </>
    )
}