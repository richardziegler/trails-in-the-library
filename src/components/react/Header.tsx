import { $currentTheme } from "../../stores/themeStore";
import { useStore } from "@nanostores/react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    const currentTheme = useStore($currentTheme)

    return (
        <>
            <div className={`flex flex-row shadow-2xl items-center justify-between md:h-12 ${currentTheme === 'light' ? 'bg-orange-100 text-gray-600' : 'bg-gray-600 text-orange-100'} `}>
            <div className="ml-6 text-3xl">Welcome to Trails in the Library</div>
            <div className="flex items-center mt-1.5 mr-5">
                <ThemeToggle />
            </div>
        </div >
        </>
    )
}