import { techMapAll } from "@/constant/techMap";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTechIconClass = ({ name }: { name: string }) => {
  const formatName = name.replace(/[ .]/g, "").toLowerCase();
  const techMap: { [key: string]: string } = techMapAll;
  return techMap[formatName]
    ? techMap[formatName]
    : "devicon-github-plain colored";
};
