import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  Brain,
  GraduationCap,
  NotebookPen,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function ImportantPage() {
  const importantPoints = [
    {
      id: 1,
      title: "Pratique en temps réel",
      icon: BookOpen,
      description:
        "Suis la vidéo et pratique en même temps. Le rythme est volontairement lent pour te permettre de coder en parallèle et bien assimiler chaque concept.",
    },
    {
      id: 2,
      title: "Formation accessible à tous",
      icon: Brain,
      description:
        "Quel que soit ton âge ou ton niveau d'expérience, cette formation est conçue pour être accessible à tous. Chaque concept est expliqué en détail.",
    },
    {
      id: 3,
      title: "Prérequis : React",
      icon: GraduationCap,
      description: (
        <>
          La seule connaissance requise est React. Besoin de te mettre à niveau
          ?{" "}
          <Link
            href="https://mlv.sh/react-complet"
            className="underline text-primary"
          >
            mlv.sh/react-complet
          </Link>
        </>
      ),
    },
    {
      id: 4,
      title: "Pratique guidée",
      icon: NotebookPen,
      description: (
        <>
          La pratique est essentielle ! Suis notre formation pratique sur{" "}
          <Link
            href="https://mlv.sh/react-complet"
            className="underline text-primary"
          >
            mlv.sh/nextjs
          </Link>{" "}
          avec un repository dédié.
        </>
      ),
    },
    {
      id: 5,
      title: "Communauté active",
      icon: Users,
      description: (
        <>
          Rejoins notre communauté sur{" "}
          <Link
            href="https://mlv.sh/next-discord"
            className="underline text-primary"
          >
            Discord
          </Link>{" "}
          pour partager ta progression et obtenir de l&apos;aide dans le canal
          Next.js dédié sur{" "}
          <Link
            href="https://mlv.sh/next-discord"
            className="underline text-primary"
          >
            https://mlv.sh/next-discord
          </Link>
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-8 container py-8">
      <h1 className="text-3xl font-bold">Points importants à retenir</h1>

      <div className="grid gap-6">
        {importantPoints.map((point) => (
          <Card key={point.id}>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 bg-muted rounded-full border">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">{point.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{point.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
