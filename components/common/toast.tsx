import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import { CloseAltIcon, LinkAltIcon } from "./svgs";

export const success = (message = 'Action successful') => toast.custom((t) => (
    <div
        className={cn(t.visible ? 'animate-enter' : 'animate-leave', 'max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5')}
    >
        <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                    <img src='/icons/checked.png' alt="Checked" className="h-[18px] w-[18px]" />
                </div>
                <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                        Success
                    </p>
                    <p className="mt-1 text-[12px] text-gray-500">
                        {message}
                    </p>
                </div>
            </div>
        </div>
        <div className="relative">
            <button
                onClick={() => toast.dismiss(t.id)}
                className="w-[18px] h-[18px] absolute top-[-7px] left-[-10px] grid place-items-center rounded-full bg-white ring-1 ring-black ring-opacity-5"
            >
                <CloseAltIcon className="w-[8px] h-[8px] fill-[#acacac]" />
            </button>
        </div>
    </div>
))

export const error = (message = 'An error occurred') => toast.custom((t) => (
    <div
        className={cn(t.visible ? 'animate-enter' : 'animate-leave', 'max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5')}
    >
        <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                    <img src='/icons/close.png' alt="Checked" className="h-[18px] w-[18px]" />
                </div>
                <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                        Error
                    </p>
                    <p className="mt-1 text-[12px] text-gray-500">
                        {message}
                    </p>
                </div>
            </div>
        </div>
        <div className="relative">
            <button
                onClick={() => toast.dismiss(t.id)}
                className="w-[18px] h-[18px] absolute top-[-7px] left-[-10px] grid place-items-center rounded-full bg-white ring-1 ring-black ring-opacity-5"
            >
                <CloseAltIcon className="w-[8px] h-[8px] fill-[#acacac]" />
            </button>
        </div>
    </div>
))

export const info = (message = 'Important details to review') => toast.custom((t) => (
    <div
        className={cn(t.visible ? 'animate-enter' : 'animate-leave', 'max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5')}
    >
        <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                    <img src='/icons/information.png' alt="Checked" className="h-[18px] w-[18px]" />
                </div>
                <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                        Info
                    </p>
                    <p className="mt-1 text-[12px] text-gray-500">
                        {message}
                    </p>
                </div>
            </div>
        </div>
        <div className="relative">
            <button
                onClick={() => toast.dismiss(t.id)}
                className="w-[18px] h-[18px] absolute top-[-7px] left-[-10px] grid place-items-center rounded-full bg-white ring-1 ring-black ring-opacity-5"
            >
                <CloseAltIcon className="w-[8px] h-[8px] fill-[#acacac]" />
            </button>
        </div>
    </div>
))

export const warning = (message = 'Attention Needed Immediately') => toast.custom((t) => (
    <div
        className={cn(t.visible ? 'animate-enter' : 'animate-leave', 'max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5')}
    >
        <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                    <img src='/icons/warning.png' alt="Checked" className="h-[18px] w-[18px]" />
                </div>
                <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                        Warning
                    </p>
                    <p className="mt-1 text-[12px] text-gray-500">
                        {message}
                    </p>
                </div>
            </div>
        </div>
        <div className="relative">
            <button
                onClick={() => toast.dismiss(t.id)}
                className="w-[18px] h-[18px] absolute top-[-7px] left-[-10px] grid place-items-center rounded-full bg-white ring-1 ring-black ring-opacity-5"
            >
                <CloseAltIcon className="w-[8px] h-[8px] fill-[#acacac]" />
            </button>
        </div>
    </div>
))


export const showCustomBottomToast = (message: string) => {
    toast(<div className="flex gap-[8px]">
            <LinkAltIcon />
            {message}
        </div>,
        {
            position: 'bottom-center',
            duration: 45500, // Adjust the duration as needed
            style: {maxWidth: "500px", background: "#333333", color: "white", fontWeight: "500" },
            className: 'bg-gray! text-white px-[24px] py-[16px] text-[14px] rounded-lg shadow-lg'
        });
};
