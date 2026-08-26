import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONTACT } from "@/lib/site-contact";
import { telHref } from "@/lib/phone";
import {
  HERITAGE_COMMUNITY_NAV,
  HERITAGE_BUYER_NAV,
  HERITAGE_PRIMARY_NAV,
} from "@/lib/heritage-stonebridge/routes";
import MobileNav from "@/components/layouts/MobileNav";

const mainNavLinks = [
  ...HERITAGE_PRIMARY_NAV.filter((link) => link.href !== "/"),
  { href: "/about", label: "About" },
];

const serviceLinks = [
  ...HERITAGE_COMMUNITY_NAV.filter((l) => l.href !== "/community"),
  ...HERITAGE_BUYER_NAV.slice(0, 4),
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex flex-col">
            <span className="text-lg md:text-xl font-bold text-slate-900 hover:text-purple-600 transition-colors leading-tight">
              Heritage Stonebridge
            </span>
            <span className="text-xs text-slate-500 hidden sm:block">
              Homes By Dr. Jan Duffy
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-5">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}

            <details className="relative group">
              <summary className="flex items-center text-slate-700 hover:text-blue-600 font-medium transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-md px-2 py-1 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                Community & Guides
                <ChevronDown className="h-4 w-4 ml-1" aria-hidden="true" />
              </summary>
              <div
                className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                role="menu"
                aria-orientation="vertical"
              >
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-none focus-visible:bg-blue-50 focus-visible:text-blue-600"
                    role="menuitem"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </details>

            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link
                href={telHref(SITE_CONTACT.phone.tel)}
                className="flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline">
                  {SITE_CONTACT.phone.display}
                </span>
                <span className="xl:hidden">Call</span>
              </Link>
            </Button>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Link
                href={telHref(SITE_CONTACT.phone.tel)}
                aria-label={`Call Dr. Jan Duffy at ${SITE_CONTACT.phone.display}`}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <MobileNav
              mainNavLinks={mainNavLinks}
              serviceLinks={serviceLinks}
              phoneDisplay={SITE_CONTACT.phone.display}
              phoneTel={SITE_CONTACT.phone.tel}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
