import Logo from "@/app/components/commons/logo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h6>This is a landing page</h6>
      <Link href="/login">Login</Link>
    </div>
  );
}
