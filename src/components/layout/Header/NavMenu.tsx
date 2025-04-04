"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  featuredServicesPreviews,
  servicesMenuItems,
} from "@/data/navigation/services";

import { featuredWork } from "@/data/navigation/work";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/our-work">
            <NavigationMenuTrigger>Our Work</NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent className="bg-black">
            <div className="grid grid-cols-2 md:w-[500px] lg:w-[700px] min-h-[400px] gap-4">
              {featuredWork.map((preview) => (
                <div
                  key={preview.title}
                  className="rounded-lg overflow-hidden group w-full"
                >
                  <Image
                    src={preview.image}
                    alt={preview.title}
                    height={500}
                    width={500}
                    className="object-cover h-full w-full transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1"
                  />
                  <div className="absolute bottom-0 w-full p-4">
                    <h4 className="font-text">{preview.title}</h4>
                    <p className="text-foreground/60 text-sm">
                      {preview.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Service Menu Section */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-black">
            <div className="grid grid-cols-[1.5fr_1fr_1fr] min-w-[900px] gap-4">
              <ul className="flex flex-col gap-2">
                {servicesMenuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-3 bg-muted/60 rounded-lg px-4 py-2 hover:bg-muted/80"
                    >
                      <Icon />
                      <div>
                        <h4 className="text-sm font-semibold">{item.title}</h4>
                        <p className="text-xs text-foreground/50">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </ul>
              {featuredServicesPreviews.map((preview) => (
                <div
                  key={preview.title}
                  className="rounded-lg h-full relative w-full overflow-hidden group"
                >
                  <Image
                    src={preview.image}
                    alt={preview.title}
                    height={500}
                    width={500}
                    className="object-cover h-full w-full transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1"
                  />

                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <h4 className="font-semibold">{preview.title}</h4>
                    <p className="text-xs text-foreground/70">
                      {preview.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
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
  );
});
ListItem.displayName = "ListItem";
