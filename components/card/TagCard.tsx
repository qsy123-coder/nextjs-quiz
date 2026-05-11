import React from "react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { ROUTES } from "@/constant/routes";
import { getTechIconClass } from "@/lib/utils";
import { Button } from "../ui/button";
import Image from "next/image";
interface TagCardProps {
  _id: string;
  name: string;
  questions?: number;
  showCount?: boolean;
  compact?: boolean;
  remove?: boolean;
  isButton?: boolean;
  handleRemove?: () => void;
}
const TagCard = ({
  _id,
  name,
  questions,
  showCount,
  compact,
  remove,
  isButton,
  handleRemove,
}: TagCardProps) => {
  const iconClass = getTechIconClass({ name });
  const Content = (
    <>
      <Badge className="rounded-sm px-4 py-4 border-none font-bold capitalize dark:bg-gray-700 dark:text-gray-800 flex gap-2 flex-row">
        <div className="flex gap-2">
          <i className={`${iconClass} text-sm`}></i>
          <p>{name}</p>
        </div>
        {remove && (
          <Image
            src="/icons/close.svg"
            alt="remove"
            width={15}
            height={15}
            className="object-contain cursor-pointer"
            onClick={handleRemove}
          />
        )}
      </Badge>
      {showCount && <p className="font-semibold text-sm ">{questions}</p>}
    </>
  );
  if (compact) {
    return isButton ? (
      <button
        className="cursor-pointer "
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        {Content}
      </button>
    ) : (
      <Link href={ROUTES.TAGROUTE(_id)} className="flex justify-between ">
        {Content}
      </Link>
    );
  }
};

export default TagCard;
