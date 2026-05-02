import React from "react";
type User = {
  userId: number;
  id: number;
  title: string;
};
const ServerFetchPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!res.ok) throw new Error("there is a error");
  const data: User[] = await res.json();
  return (
    <div>
      {data.map((item, index) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
};

export default ServerFetchPage;
