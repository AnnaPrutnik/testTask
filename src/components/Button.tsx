import React from "react";
import Link from "next/link";

interface ButtonProps {
    year: string;
    makeId: string;
}

export const Button = ({ makeId, year }: ButtonProps) => {
    const disabled = makeId === "" || year === "";
    return (
        <Link
            className={`px-8 py-2 rounded-md text-white font-bold ${
                disabled
                    ? "pointer-events-none bg-gray-400 cursor-not-allowed"
                    : "bg-green-700 cursor-pointer pointer-events-auto"
            }`}
            href={`/result/${makeId}/${year}`}
        >
            Next
        </Link>
    );
};
