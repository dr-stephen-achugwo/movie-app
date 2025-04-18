"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search/${search}`);
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="flex justify-between px-5 max-w-6xl mx-auto rounded-full border py-0"
        >
            <input
                type="text"
                placeholder="Search Keywords..."
                className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button
                className="text-amber-600 disabled:text-gray-400"
                disabled={search === ""}
            >
                Search
            </button>
        </form>
    );
}
