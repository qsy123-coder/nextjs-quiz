import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Metric from "./Metric";
import { ROUTES } from "@/constant/routes";
import Link from "next/link";
import TagCard from "./TagCard";
import { getTimeStamp } from "@/lib/utils";
interface QuestionProps {
  question: Question;
}
export function QuestionCard({ question }: QuestionProps) {
  const {
    _id,
    title,
    description,
    tags,
    author,
    upvotes,
    answers,
    views,
    createdAt,
  } = question;
  return (
    <Card className="w-full ">
      <CardHeader>
        <span className="font-bold text-muted-foreground sm:hidden">
          {getTimeStamp(createdAt)}
        </span>
        <Link href={ROUTES.QUESTION(question._id)} key={question._id}>
          <CardTitle className="font-semibold text-xl">{title}</CardTitle>
        </Link>
      </CardHeader>

      <CardContent className="flex flex-wrap gap-2 mt-3.5">
        {tags.map((tag) => {
          return (
            <TagCard key={tag._id} _id={tag._id} name={tag.name} compact />
          );
        })}
      </CardContent>
      <CardFooter className="flex justify-between gap-2 flex-wrap ">
        <Metric
          alt={author.name}
          imgUrl={author.imgUrl}
          href={ROUTES.AUTHOR(author._id)}
          title={author.name}
          createdAt={createdAt}
        />
        <div className="flex gap-3">
          <Metric
            imgUrl="/icons/like.svg"
            alt="likes"
            value={upvotes}
            title="Votes"
            textStyles=""
          />
          <Metric
            imgUrl="/icons/message.svg"
            alt="answers"
            value={answers}
            title="Answers"
            textStyles=""
          />
          <Metric
            imgUrl="/icons/eye.svg"
            alt="views"
            value={views}
            title="Views"
            textStyles=""
          />
        </div>
      </CardFooter>
    </Card>
  );
}
