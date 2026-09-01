import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Code2, BookOpen, Globe, ArrowLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RatingStars } from "@/components/items/rating-stars";
import { StatusBadge } from "@/components/items/status-badge";
import { getCategory, getItemBySlug, items } from "@/lib/mock-data";

export function generateStaticParams() {
  return items.map((item) => ({ slug: item.slug }));
}

export default async function ItemDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getItemBySlug(slug);

  if (!item) {
    notFound();
  }

  const category = getCategory(item.category);
  const createdAt = new Date(item.createdAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const links = [
    { href: item.repositoryUrl, label: "GitHub", icon: Code2 },
    { href: item.websiteUrl, label: "Site oficial", icon: Globe },
    { href: item.documentationUrl, label: "Documentação", icon: BookOpen },
  ].filter((link): link is { href: string; label: string; icon: typeof Code2 } =>
    Boolean(link.href),
  );

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <Link
        href="/items"
        className="flex w-fit items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Todos os itens
      </Link>

      <Card className="flex flex-col gap-6 p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                {item.name}
              </h1>
              <StatusBadge status={item.status} />
            </div>
            <p className="text-sm text-muted-foreground">
              {item.type} · {category?.name} · Fonte: {item.source}
            </p>
          </div>
          <RatingStars rating={item.rating} className="sm:justify-end" />
        </div>

        <p className="text-base leading-relaxed text-foreground/90">{item.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>

        {links.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <link.icon className="size-3.5" />
                {link.label}
                <ExternalLink className="size-3 text-muted-foreground" />
              </Link>
            ))}
          </div>
        ) : null}

        <Separator />

        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-medium text-foreground">Notas pessoais</h2>
          <p className="whitespace-pre-line rounded-lg bg-secondary/50 p-4 text-sm text-muted-foreground">
            {item.notes || "Nenhuma nota registrada ainda."}
          </p>
        </div>

        {item.relationships.length > 0 ? (
          <>
            <Separator />
            <div className="flex flex-col gap-2">
              <h2 className="text-sm font-medium text-foreground">Relacionamentos</h2>
              <div className="flex flex-col gap-2">
                {item.relationships.map((relationship) => (
                  <Link
                    key={relationship.itemSlug}
                    href={`/items/${relationship.itemSlug}`}
                    className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm transition-colors hover:border-primary/40"
                  >
                    <span className="text-muted-foreground">{relationship.label}</span>
                    <span className="font-medium text-foreground">{relationship.itemName}</span>
                  </Link>
                ))}
              </div>
            </div>
          </>
        ) : null}

        <Separator />

        <p className="text-xs text-muted-foreground">Adicionado em {createdAt}</p>
      </Card>
    </div>
  );
}
