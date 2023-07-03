"use client"

import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { LoadingSpinnerChico } from "../loadingSpinner";

export default function Menu() {
    const [loading, setLoading] = useState(true)
    const pathName= usePathname()
    const session= useSession()
    
    
    useEffect(() => {
        setLoading(false)    
    }, [])

    if (loading) return <LoadingSpinnerChico />

    const user= session?.data?.user
    
    if (!user) return <div></div>


    const userIsAdmin= user.role === "admin"

    return (
        <div className="flex flex-1 gap-6 pl-5 md:gap-5">
        <nav>
            <ul className="flex items-center">
                {userIsAdmin && adminMenu(pathName)}
                {!userIsAdmin && userMenu(pathName)}
                {commonMenu(pathName)}
            </ul>
        </nav>
        </div>
    );
}


function adminMenu(path: string) {
    return (
        <>
            <li className={`flex items-center border-b-first-color hover:border-b-first-color hover:border-b-2 h-14 ${path.includes("admin") && "border-b-2"}`}>
                <Link href="/admin/wines"><Button className="text-lg" variant="ghost">Manage Wines</Button></Link>
            </li>
            <li className={`flex items-center border-b-first-color ${path.endsWith("chat") && "border-b-2"}`}>
                <Link href="/chat"><Button className="text-lg" variant="ghost"></Button></Link>
            </li>
        </>
    );
}

function userMenu(path: string) {
    return (
        <>
            <li className={`flex items-center border-b-first-color h-14 ${path.endsWith("ss") && "border-b-2"}`}>
                <Link href="/"><Button className="text-lg" variant="ghost"></Button></Link>
            </li>
        </>
    );
}

function commonMenu(path: string) {
    return (
        <>
            <li className={`flex items-center border-b-first-color h-14 ${path.endsWith("ss") && "border-b-2"}`}>
                <Link href="/"><Button className="text-lg" variant="ghost"></Button></Link>
            </li>
        </>
    );
}
