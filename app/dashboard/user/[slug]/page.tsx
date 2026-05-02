import React from "react";

const UserDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  return <div>{`im ${slug}`}</div>;
};

export default UserDetail;
