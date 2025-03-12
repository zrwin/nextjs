import Image from "next/image";
import { Greet } from "./components/Greet";
import { Counter } from "./components/Counter";
import Form from "./components/Form";

export default function Home() {
  return (
      <div className="flex flex-col min-h-screen">
      <div className="flex justify-center items-center w-full">
        <Greet/>
      </div>
      <div className="flex justify-center items-center ">
        <Counter/>
      </div>
      <div className="flex flex-grow justify-center items-center">
        <Form/>
      </div>

      <footer className="flex justify-center gap-4">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
            />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
            />
          Go to nextjs.org →
        </a>
      </footer>
      </div>    
  );
}
