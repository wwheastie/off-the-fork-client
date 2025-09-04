// app/components/Footer.jsx
import Link from "next/link";

const defaultLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Footer({ brand = "Your Brand", links = defaultLinks }) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Brand / Copy */}
          <div className="space-y-1">
            <div className="text-base font-semibold">{brand}</div>
            <p className="text-sm text-muted-foreground">
              © {year} {brand}. All rights reserved.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
