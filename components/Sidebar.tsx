"use client";
import Image from "next/image";
import  Link  from "next/link";
import { Montserrat } from "next/font/google";
import { LayoutDashboard, MessageSquare,ImageIcon, VideoIcon, MusicIcon, Code, Settings } from "lucide-react";
import {cn} from "@/lib/utils";
import { usePathname } from "next/navigation";
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: '600',
});
const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500",
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500",
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-pink-500",
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-orange-500",
    },
    {
        label: "Music Generation",
        icon: MusicIcon,
        href: "/music",
        color: "text-red-500",
    },
    {
        label: "Code Generation",
        icon: Code,
        href: "/code",
        color: "text-green-500",
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings ",
    },
]
const Sidebar = () => {
    const pathname = usePathname();
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                <div className="relative w-8 h-8 mr-4">
                    <Image
                        fill
                        src="/logo.png"
                        alt="Logo" />
                </div>
                <h1 className={cn("text-2xl font-bold text-white", montserrat.className)}>
                    PromptCraft
                </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn("flex items-center p-3 w-full justify-start text-sm font-medium cursor-pointer text-white rounded-lg transition hover:bg-white/10 hover:text-white", pathname === route.href ? "bg-white/10 text-white" : "text-zinc-400" )}
                        >
                            <route.icon className={cn("w-5 h-5 mr-3", route.color)} />
                            {route.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}   
export default Sidebar;

