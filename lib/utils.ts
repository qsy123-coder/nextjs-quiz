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

export const getTimeStamp = (date: Date): string => {
  const now = new Date();
  const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000);

  // 处理未来的时间或误差
  if (secondsAgo < 5) return "Just now";

  const intervals = [
    { label: "年", seconds: 31536000 },
    { label: "月", seconds: 2592000 },
    { label: "周", seconds: 604800 },
    { label: "天", seconds: 86400 },
    { label: "小时", seconds: 3600 },
    { label: "分钟", seconds: 60 },
    { label: "秒", seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(secondsAgo / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}前`;
    }
  }

  return "Just now";
};
