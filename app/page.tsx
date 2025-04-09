import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Formation Next.js</CardTitle>
          <CardDescription>
            Formation Next.js est une formation pour apprendre Next.js.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link
            href="/formations"
            className={buttonVariants({ variant: "outline" })}
          >
            Plan de la vidéo
          </Link>
          <Link
            href="/important"
            className={buttonVariants({ variant: "outline" })}
          >
            Importnat !
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
