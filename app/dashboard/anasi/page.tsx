import Link from "next/link";

const AnasiPage = () => {
  return (
    <div className="flex text-xl font-bold gap-10">
      <Link href="/clientPage">go to clientPage</Link>
      <Link href="/serverpage">go to serverpage</Link>
    </div>
  );
};

export default AnasiPage;
