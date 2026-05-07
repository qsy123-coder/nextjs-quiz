import React from "react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { ROUTES } from "@/constant/routes";
import { getTechIconClass } from "@/lib/utils";
interface TagCardProps {
  _id: string;
  name: string;
  questions: number;
  showCount?: boolean;
  compact?: boolean;
}
const TagCard = ({
  _id,
  name,
  questions,
  showCount,
  compact,
}: TagCardProps) => {
  const iconClass = getTechIconClass({ name });
  return (
    <Link href={ROUTES.TAGROUTE(_id)} className="flex justify-between ">
      <Badge className="rounded-sm px-4 py-4 border-none font-bold capitalize dark:bg-gray-700 dark:text-gray-800">
        <div className="flex gap-2">
          <i className={`${iconClass} text-sm`}></i>
          <p>{name}</p>
        </div>
      </Badge>
      {showCount && <p className="font-semibold text-sm ">{questions}</p>}
    </Link>
  );
};

export default TagCard;
