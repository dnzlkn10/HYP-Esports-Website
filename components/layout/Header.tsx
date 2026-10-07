"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation } from "@/data/site";
import { Logo } from "./Logo";
export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [language, setLanguage] = useState<"tr" | "en">("tr");
  const button = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);
  useEffect(() => {
    const saved = window.localStorage.getItem("hyp-language");
    const next = saved === "en" ? "en" : "tr";
    setLanguage(next);
    document.documentElement.lang = next;
    document.documentElement.dataset.language = next;
  }, []);
  const changeLanguage = (next: "tr" | "en") => {
    setLanguage(next);
    window.localStorage.setItem("hyp-language", next);
    document.documentElement.lang = next;
    document.documentElement.dataset.language = next;
    const params = new URLSearchParams(searchParams.toString());
    if (next === "tr") params.delete("lang"); else params.set("lang", "en");
    router.replace(`${path}${params.size ? `?${params}` : ""}`, { scroll: false });
  };
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector("a")?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 951px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);
  return (
    <header className="header">
      <div className="header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={
                (item.href === "/" ? path === "/" : path.startsWith(item.href))
                  ? "page"
                  : undefined
              }
              className={item.href === "/join" ? "nav-join" : ""}
            >
              {item.label}
              {item.href === "/join" && <ArrowUpRight size={13} />}
            </Link>
          ))}
        </nav>
        <div className="language-switch" role="group" aria-label="Dil seçimi">
          <button type="button" className={language === "tr" ? "active" : ""} onClick={() => changeLanguage("tr")}>TR</button>
          <span>/</span>
          <button type="button" className={language === "en" ? "active" : ""} onClick={() => changeLanguage("en")}>EN</button>
        </div>
        <button
          ref={button}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls={open ? "mobile-navigation" : undefined}
          aria-label={open ? "Close navigation" : "Open navigation"}
          onKeyDown={(e) => {
            if (open && e.key === "Tab" && e.shiftKey) {
              e.preventDefault();
              const links = panel.current?.querySelectorAll("a");
              links?.[links.length - 1]?.focus();
            }
          }}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          ref={panel}
          className="mobile-nav"
          aria-label="Mobile navigation"
          onKeyDown={(e) => {
            if (e.key !== "Tab") return;
            const links = panel.current?.querySelectorAll("a");
            if (!links?.length) return;
            if (
              !e.shiftKey &&
              document.activeElement === links[links.length - 1]
            ) {
              e.preventDefault();
              button.current?.focus();
            }
          }}
        >
          {navigation.map((item, i) => (
            <Link
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
              aria-current={path === item.href ? "page" : undefined}
            >
              <span>0{i + 1}</span>
              {item.label}
              <ArrowUpRight size={18} />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
