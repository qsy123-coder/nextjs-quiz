import { getTimeStamp } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface MetricProps {
  imgUrl: string;
  alt: string;
  value?: number;
  title?: string;
  href?: string;
  textStyles?: string;
  isAuthor?: boolean;
  createdAt?: Date;
}
const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  href,
  textStyles,
  isAuthor,
  createdAt,
}: MetricProps) => {
  const MetricContent = (
    <div className="flex gap-3 items-center">
      <Image
        src={imgUrl}
        alt={alt}
        width={25}
        height={25}
        className="rounded-full object-contain"
      />
      <p className="max-sm:hidden">
        · Asked {createdAt && getTimeStamp(createdAt)}
      </p>
      <p>{title}</p>
    </div>
  );

  return href ? (
    <Link href={href}>{MetricContent}</Link>
  ) : (
    <div className="flex gap-2 items-center">
      <Image src={imgUrl} alt={alt} width={15} height={15} />
      <p className="flex gap-1 items-center">
        {value}
        <span>{title}</span>
      </p>
    </div>
  );
};

export default Metric;
