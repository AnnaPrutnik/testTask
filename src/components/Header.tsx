import React from "react";
import Image from "next/image";
import logo from "@/assets/image/logo.png";
import Link from "next/link";

export const Header = () => {
    return (
        <header className="py-4 px-4 md:px-8 xl:px-16 shadow-md flex justify-between items-center">
            <Link href={"/"}>
                <Image src={logo} alt="logo" width={40} height={40} />
            </Link>
            <p className="text-lg font-bold">Car Dealer</p>
        </header>
    );
};
