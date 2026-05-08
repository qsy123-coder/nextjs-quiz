import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";
import { signOut } from "next-auth/react";
import { ROUTES } from "@/constant/routes";
import LocalSearch from "@/components/search/LocalSearch";
import Link from "next/link";
import { FileQuestion } from "lucide-react";
interface SearchParamsProps {
  searchParams: Promise<{ [key: string]: string }>;
}

const questions = [
  {
    _id: "1",
    title: "How to learn javaScript",
    description: "Iwanfslf",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "javascript" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to learn React",
    description: "Iwanfslffsfsf",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "javascript" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 210,
    answers: 25,
    views: 2100,
    createdAt: new Date(),
  },
];
const Home = async ({ searchParams }: SearchParamsProps) => {
  const { query = "" } = await searchParams;
  const filterQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <div>
      <section className="flex flex-row gap-4 sm:items-center  justify-between  max-sm:flex-col-reverse">
        <h1 className="text-3xl font-bold ">All questions</h1>
        <Button className="p-6 bg-amber-400 text-white hover:bg-amber-600 min-h-[42px] max-sm:w-full">
          <Link href={ROUTES.ASK_QUESTION}>Ask a question</Link>
        </Button>
      </section>
      <section>
        <LocalSearch route="/" />
      </section>
      home filter
      <section className="flex flex-col gap-4 mt-11">
        {filterQuestions.map((question) => {
          return <p key={question._id}>{question.title}</p>;
        })}
      </section>
    </div>
  );
};

export default Home;
