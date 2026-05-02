import Link from "next/link";
import React from "react";

const UserPage = () => {
  return (
    <div>
      <div>userPage</div>
      <div>
        <Link href="/dashboard/user/user1">go to user1</Link>
        <Link href="/dashboard/user/user2">go to user2</Link>
        <Link href="/dashboard/user/user3">go to user3</Link>
        <Link href="/dashboard/user/user4">go to user4</Link>
      </div>
    </div>
  );
};

export default UserPage;
