import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export const Header = async () => {
  return (
    <header className="px-4 py-2 border-b flex items-center gap-2">
      <Link
        href="/"
        className="font-bold flex items-center gap-2 rounded-lg hover:bg-accent transition px-2 py-1"
      >
        <Image
          src="/logo.png"
          width={32}
          height={32}
          alt="logo"
          className="rounded-md shadow shadow-black/20"
        />
        <span className="text-sm">
          Pratique :{" "}
          <span className="font-mono text-sm border border-accent px-2 py-1 bg-muted">
            mlv.sh/nextjs
          </span>
        </span>
      </Link>
      <div className="flex-1"></div>
      <Link
        className={buttonVariants({ size: "sm", variant: "outline" })}
        href="/auth/signin"
      >
        SignIn
      </Link>
    </header>
  );
};
