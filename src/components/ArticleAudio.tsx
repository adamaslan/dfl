"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { mountArticleListener } from "./article-listener.js";
const articlePaths = new Set(["townbranch-hapenny", "coyoacan", "amaromontenegro", "babydaddy", "raki", "sourdough-recipe", "artandfish", "stylish-in-aspen-drinking-rose-at-bonnies", "cafeversailles", "tealove", "new-day-for-coney-island", "northdumplingindimessquare", "ascot-awards-2026", "3valuewines", "ja-tori-s-kitchen", "naplesbotanicalgardenwelcomesfrida", "summercocktailspart1", "betting-against-coney", "besttacosinbk", "perfect-nyc-summer-cocktail", "the-most-fun-conventions-in-2025", "naturalwine", "seawolf", "mole", "ascot-awards-2025"]);
export default function ArticleAudio({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    const path = pathname.replace(/^\/|\/$/g, "");
    if (!(articlePaths.has(path)) || !container.current) return;
    const root = container.current;
    let dispose: (() => void) | undefined;
    let mountedSource: HTMLElement | null = null;
    let panel: Element | null = null;
    const reconcile = () => {
      const source = root.querySelector<HTMLElement>('[class*="gridcontainer4"],[class*="article1"]') || root;
      if (mountedSource === source && panel?.isConnected && source.contains(panel)) return;
      dispose?.();
      dispose = undefined;
      mountedSource = null;
      panel = null;
      // Do not attach to an empty streaming/loading shell. Observe until prose arrives.
      if (!source.querySelector('p,h1,h2,li,blockquote,table')) return;
      dispose = mountArticleListener(source, false);
      mountedSource = source;
      panel = source.querySelector('[data-article-listener]');
    };
    // Same-path data/streaming replacement can detach the old main or its player.
    const observer = new MutationObserver(reconcile);
    observer.observe(root, { childList: true, subtree: true });
    reconcile();
    return () => { observer.disconnect(); dispose?.(); };
  }, [pathname]);
  return <div ref={container}>{children}</div>;
}
