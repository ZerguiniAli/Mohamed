"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string }[] = [
  {
    title: "Toutes les annonces",
    href: "/annonce",
  },
  {
    title: "Avis d’appel d’offres",
    href: "/annonce",
  },
  {
    title: "Avis d'attribution",
    href: "/annonce",
  },
  {
    title: "Avis d’annulation",
    href: "/annonce",
  },
  {
    title: "Avis de prorogation de délais",
    href: "/annonce",
  },
  {
    title: "Mise en demeure et résiliation",
    href: "/annonce",
  },
  {
    title: "Réponse à une mise en demeure",
    href: "/annonce",
  },
  {
    title: "Avis d'Infructuosité",
    href: "/annonce",
  },
  {
    title: "Consultation",
    href: "/annonce",
  },
  {
    title: "Concours",
    href: "/annonce",
  },
  {
    title: "Résultat de concours",
    href: "/annonce",
  },
  {
    title: "Adjudication et avis de vente aux enchères",
    href: "/annonce",
  },
  {
    title: "Appel à manifestation d'intérêt",
    href: "/annonce",
  },
  {
    title: "Avis de Préselection",
    href: "/annonce",
  },
  {
    title: "Correction - Rectification",
    href: "/annonce",
  },
  {
    title: "Avis de préqualification",
    href: "/annonce",
  }
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Accueil
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Annonces</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/b2bservice" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Service B2B
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/offer" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Nos Offres
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
