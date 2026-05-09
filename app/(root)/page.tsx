import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";
import { signOut } from "next-auth/react";
import { ROUTES } from "@/constant/routes";
import LocalSearch from "@/components/search/LocalSearch";
import Link from "next/link";
import { FileQuestion } from "lucide-react";
import HomeFilter from "@/components/filters/HomeFilter";
import { QuestionCard } from "@/components/card/QuestionCard";
interface SearchParamsProps {
  searchParams: Promise<{ [key: string]: string }>;
}

const questions = [
  {
    _id: "1",
    title: "How to learn javaScript",
    description: "Iwanfslf",
    tags: [
      { _id: "2", name: "javascript" },
      { _id: "1", name: "React" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      imgUrl:
        "https://img1.baidu.com/it/u=1611598392,1593784950&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    },
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
    author: {
      _id: "1",
      name: "John Doe",
      imgUrl:
        "https://img1.baidu.com/it/u=1611598392,1593784950&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    },
    upvotes: 210,
    answers: 25,
    views: 2100,
    createdAt: new Date(),
  },
];
const Home = async ({ searchParams }: SearchParamsProps) => {
  const { query = "", filter = "" } = await searchParams;
  const filterQuestions = questions.filter((question) => {
    const matchQuery = question.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchFilter = filter
      ? question.tags[0].name.toLowerCase().includes(filter.toLowerCase())
      : true;
    return matchQuery && matchFilter;
  });
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
      <HomeFilter />
      <section className="flex flex-col gap-8 mt-11">
        {filterQuestions.map((question) => {
          return <QuestionCard key={question._id} question={question} />;
        })}
      </section>
    </div>
  );
};

export default Home;
