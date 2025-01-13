import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-lg w-screen h-screen flex items-center justify-center">
      <div>
        TodoApplication
        <br />
        <Link className="text-md border m-2" href={"/signin"}>Sign in to ToDo App</Link >
        <br />
        <Link className="text-md border m-2" href={"/signup"}>Sign up to Todo App</Link>
      </div>
    </div>
  );
}
