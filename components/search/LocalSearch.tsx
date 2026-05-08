"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";
interface LocalSearchProps {
  route: string;
  placeholder?: string;
  imgUrl?: string;
  otherClasses?: string;
}
const LocalSearch = ({
  route,
  placeholder,
  imgUrl,
  otherClasses,
}: LocalSearchProps) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  useEffect(() => {
    const deBounceFn = setTimeout(() => {
      const currentQuery = searchParams.get("query") || "";
      if (searchQuery) {
        if (searchQuery !== currentQuery) {
          const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: "query",
            value: searchQuery,
          });
          router.push(newUrl, { scroll: false });
        }
      } else {
        if (pathName === route) {
          // 【核心修复】只有当 URL 中确实存在 query 时，才执行清除和跳转
          if (searchParams.has("query")) {
            console.log(searchParams.toString());
            const newUrl = removeKeysFromUrlQuery({
              params: searchParams.toString(),
              keysToRemove: ["query"],
            });
            router.push(newUrl, { scroll: false });
          }
        }
      }
    }, 300);

    return () => {
      clearTimeout(deBounceFn);
    };
  }, [searchQuery, pathName, route, router, searchParams]);

  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 mt-11 ${otherClasses || ""}`}
    >
      <Image
        src={imgUrl || "/icons/search.svg"}
        width={15}
        height={15}
        alt="Search"
        className="cursor-pointer"
      />
      <Input
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        placeholder={placeholder || "Search..."}
        type="text"
        className="
      paragraph-regular 
      placeholder 
      text-dark400_light700 
      no-focus 
      !bg-transparent 
      !border-none 
      !shadow-none 
      !outline-none
    "
      />
    </div>
  );
};

export default LocalSearch;
