import React from "react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { ROUTES } from "@/constant/routes";
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
  return (
    <Link href={ROUTES.TAGROUTE(_id)} className="flex justify-between ">
      <Badge className="rounded-sm px-4 py-4 border-none font-semibold capitalize">
        <div className="flex gap-2">
          <i>ICON</i>
          <p>{name}</p>
        </div>
      </Badge>
      {showCount && <p className="font-semibold text-sm">{questions}</p>}
    </Link>
  );
};

export default TagCard;
