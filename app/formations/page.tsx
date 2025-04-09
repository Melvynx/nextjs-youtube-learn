"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLocalStorage } from "react-use";

type ModuleStatus = "completed" | "current" | "upcoming";

interface Topic {
  title: string;
  isCompleted: boolean;
}

interface Module {
  id: number;
  title: string;
  logo: string;
  url: string;
  description: string;
  topics: Topic[];
  status: ModuleStatus;
}

const initialModules: Module[] = [
  {
    id: 1,
    title: "Fondamentaux",
    logo: "/images/next-p1.png",
    url: "mlv.sh/nextjs-1",
    description: "Les bases de Next.js pour bien démarrer",
    topics: [
      { title: "Setup de l'application", isCompleted: false },
      { title: "Routing", isCompleted: false },
      { title: "Ajout de Shadcn/UI", isCompleted: false },
      { title: "Page static", isCompleted: false },
      { title: "Page dynamic", isCompleted: false },
    ],
    status: "current",
  },
  {
    id: 2,
    title: "Server Component + Database",
    logo: "/images/next-p2.png",
    url: "mlv.sh/nextjs-2",
    description:
      "Exploiter la puissance des server components avec une base de données",
    topics: [
      { title: "Fonctionnement des server components", isCompleted: false },
      { title: "Fonctionnement des client components", isCompleted: false },
      { title: "Comment les utiliser", isCompleted: false },
      { title: "Installation de Prisma", isCompleted: false },
      { title: "Utilisation du Prisma Studio", isCompleted: false },
      { title: 'Setup d\'une table "Review"', isCompleted: false },
      { title: "Streaming component", isCompleted: false },
    ],
    status: "upcoming",
  },
  {
    id: 3,
    title: "Server Action (Mutation)",
    logo: "/images/next-p3.png",
    url: "mlv.sh/nextjs-3",
    description: "Manipuler les données avec les server actions",
    topics: [
      { title: "Comprendre les server-actions", isCompleted: false },
      { title: "Ajout de Server-Action", isCompleted: false },
      {
        title: "Utilisation de Next-safe-action pour avoir un code plus clean",
        isCompleted: false,
      },
      { title: "Validation avec Zod", isCompleted: false },
      { title: "Présentation des API Routes", isCompleted: false },
      {
        title: "Ajout de next-zod-route pour simplifier les API Routes",
        isCompleted: false,
      },
      {
        title: "Quand utiliser les API Routes VS les Server Functions",
        isCompleted: false,
      },
      { title: "Form avec Shadcn/UI Form", isCompleted: false },
    ],
    status: "upcoming",
  },
  {
    id: 4,
    title: "Authentification",
    logo: "/images/next-p4.png",
    url: "mlv.sh/nextjs-4",
    description: "Sécuriser votre application avec l'authentification",
    topics: [
      { title: "Ajout de Better-Auth", isCompleted: false },
      { title: "Ajout de page de sign up", isCompleted: false },
      { title: "Ajout de page de sign in", isCompleted: false },
      {
        title: "Ajout d'une page pour modifier les informations de son compte",
        isCompleted: false,
      },
      { title: "Lier les review à un compte utilisateur", isCompleted: false },
      {
        title: "Sécuriser les pages et les actions avec l'authentification",
        isCompleted: false,
      },
    ],
    status: "upcoming",
  },
  {
    id: 5,
    title: "Fullstack SaaS",
    url: "mlv.sh/nextjs-5",
    logo: "/images/next-p4.png",
    description: "Transformer votre application en SaaS complet",
    topics: [
      {
        title: "Créer un lien de partage pour faire une review",
        isCompleted: false,
      },
      {
        title:
          "Limiter le nombre de review à 10 et demander de payer un abonnement one-time de 99 euros avec Stripe pour pouvoir en upload plus",
        isCompleted: false,
      },
      {
        title: "Gestion de la page d'information d'abonné",
        isCompleted: false,
      },
      {
        title: "Création d'une landing page rapidement avec l'IA",
        isCompleted: false,
      },
      {
        title: "Publication de l'application avec Prisma Database et Vercel",
        isCompleted: false,
      },
    ],
    status: "upcoming",
  },
];

export default function RoutePage() {
  const [modules, setModules] = useLocalStorage<Module[]>(
    "modules-4",
    initialModules
  );

  const handleTopicToggle = (moduleId: number, topicIndex: number) => {
    if (!modules) return;

    const newModules = [...modules];
    const moduleIndex = newModules.findIndex((m) => m.id === moduleId);
    if (moduleIndex === -1) return;

    // Toggle topic completion
    newModules[moduleIndex].topics[topicIndex].isCompleted =
      !newModules[moduleIndex].topics[topicIndex].isCompleted;

    // Check if all topics in the module are completed
    const allTopicsCompleted = newModules[moduleIndex].topics.every(
      (topic) => topic.isCompleted
    );

    if (allTopicsCompleted) {
      newModules[moduleIndex].status = "completed";
      // Set next module as current if it exists
      if (moduleIndex < newModules.length - 1) {
        newModules[moduleIndex + 1].status = "current";
      }
    }

    setModules(newModules);
  };

  if (!modules) return null;

  return (
    <div className="flex flex-col gap-8 container">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-4">
        Next.js formation complète <Youtube size={32} />
      </h1>

      <div className="grid gap-6">
        {modules.map((module) => (
          <Card
            key={module.id}
            className={cn("overflow-hidden pl-6", {
              "border-primary shadow-primary/20 shadow-lg":
                module.status === "current",
              "border-green-500 shadow-green-500/20 shadow-lg":
                module.status === "completed",
              "border-muted opacity-75": module.status === "upcoming",
            })}
          >
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-1 items-center justify-center bg-secondary/20">
                <Image
                  src={module.logo}
                  alt={`${module.title} logo`}
                  width={128}
                  height={128}
                  className="rounded-md shadow shadow-black/20 shrink-0 w-full h-auto"
                />
              </div>
              <div className="flex-3">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-xl">
                      {module.id}. {module.title}
                    </CardTitle>
                    <div className="flex-1"></div>
                    <Link
                      href={module.url}
                      className={buttonVariants({
                        size: "sm",
                        variant: "outline",
                      })}
                    >
                      {module.url}
                    </Link>
                  </div>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-6">
                  <ul className="space-y-2">
                    {module.topics.map((topic, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Checkbox
                          checked={topic.isCompleted}
                          onCheckedChange={() =>
                            handleTopicToggle(module.id, index)
                          }
                          disabled={module.status === "upcoming"}
                        />
                        <span className="text-sm text-muted-foreground">
                          {topic.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
