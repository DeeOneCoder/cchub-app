import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome to My Page</h1>
      <Link href={"/patients"}> Patients </Link>
    </>);
}
