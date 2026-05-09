"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";

const filters = [
  { name: "React", value: "react" },
  { name: "JavaScript", value: "javascript" },
];
const HomeFilter = () => {
  const searchParams = useSearchParams();

  const router = useRouter();
  const [active, setActive] = useState("");
  const handleClick = (filter: string) => {
    if (filter === active) {
      setActive("");
      const newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["filter"],
      });
      router.push(newUrl, { scroll: false });
    } else {
      setActive(filter);
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: filter.toLowerCase(),
      });
      router.push(newUrl, { scroll: false });
    }
  };
  return (
    <div className="flex gap-2 mt-6">
      {filters.map((filter) => {
        return (
          <Button
            key={filter.name}
            className={`px-4 py-4 rounded-sm ${filter.value === active && "bg-amber-400 hover:bg-amber-500"}`}
            onClick={() => {
              handleClick(filter.value);
            }}
          >
            {filter.name}
          </Button>
        );
      })}
    </div>
  );
};

export default HomeFilter;
