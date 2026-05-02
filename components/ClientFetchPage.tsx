"use client";
import React, { Dispatch, useEffect, useState } from "react";
type User = {
  userId: number;
  id: number;
  title: string;
};
const ClientFetchPage = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/albums");
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(`there is a error ${error}`);
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map((item, index) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
};

export default ClientFetchPage;
