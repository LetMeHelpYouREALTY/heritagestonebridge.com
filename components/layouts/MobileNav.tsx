"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { telHref } from "@/lib/phone";

type NavLink = { href: string; label: string };

type MobileNavProps = {
  mainNavLinks: NavLink[];
  serviceLinks: NavLink[];
  phoneDisplay: string;
  phoneTel: string;
};

export default function MobileNav({
  mainNavLinks,
  serviceLinks,
  phoneDisplay,
  phoneTel,
}: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-md p-1"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X size={24} aria-hidden="true" />
        ) : (
          <Menu size={24} aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-0 bg-white border-t border-slate-200 shadow-md">
          <div className="container mx-auto px-4 pb-4">
            <div className="flex flex-col space-y-1 pt-4">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors py-2 px-3 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="border-t border-slate-200 pt-2 mt-2">
                <span className="text-xs font-semibold text-slate-500 px-3 uppercase">
                  Community & Guides
                </span>
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors py-2 px-3 rounded block"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="pt-4">
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 w-full"
                >
                  <Link
                    href={telHref(phoneTel)}
                    className="flex items-center justify-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Call Dr. Jan: {phoneDisplay}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
