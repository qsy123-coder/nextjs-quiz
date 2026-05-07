import Image from "next/image";
import Link from "next/link";
import React from "react";
import TagCard from "../card/TagCard";

const RightSidebar = () => {
  const hotQuestions = [
    { _id: "1", title: "How to create a custom hook in react?" },
    { _id: "2", title: "What are the rules of hooks in React?" },
    {
      _id: "3",
      title: "What is the difference between custom hooks and HOCs?",
    },
    { _id: "4", title: "How to create a window resize custom hook in React?" },
    { _id: "5", title: "How to use useEffect inside a custom hook?" },
  ];
  const popularTags = [
    {
      _id: "1",
      name: "react",
      questions: 100,
    },
    {
      _id: "2",
      name: "javascript",
      questions: 200,
    },
    {
      _id: "3",
      name: "typescript",
      questions: 1100,
    },
    {
      _id: "4",
      name: "next.js",
      questions: 11100,
    },
    {
      _id: "5",
      name: "react query",
      questions: 11100,
    },
  ];
  return (
    <section className="pt-36 p-6 w-[350px] sticky top-0 right-0 h-screen dark:bg-gray-900 overflow-y-hidden flex flex-col gap-6 max-xl:hidden">
      <div>
        <h3 className="font-bold text-3xl">Top questions</h3>
        <div className="flex flex-col gap-6 w-full  mt-8">
          {hotQuestions.map(({ _id, title }) => {
            return (
              <Link
                key={_id}
                href={`/ask-question/${_id}`}
                className="flex gap-7  items-center justify-between"
              >
                <p className="font-light text-sm">{title}</p>
                <Image
                  src="/icons/chevron-right.svg"
                  alt="arrow-left"
                  width={25}
                  height={25}
                />
              </Link>
            );
          })}
        </div>
        <div className="mt-16">
          <h3 className="font-bold text-2xl">Popular tags</h3>
          <div className="flex flex-col gap-4 mt-4">
            {popularTags.map(({ _id, name, questions }) => {
              return (
                <TagCard
                  _id={_id}
                  name={name}
                  questions={questions}
                  showCount
                  compact
                  key={_id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
