"use client";

import { useEffect } from "react";

export function HeadingComma() {
  useEffect(() => {
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

    headings.forEach((heading) => {
      const nodes = Array.from(heading.childNodes);

      nodes.forEach((node) => {
        if (node.nodeType !== Node.TEXT_NODE) return;
        const text = node.textContent;
        if (!text || !text.includes(",")) return;

        const fragments = text.split(/(,)/);
        fragments.forEach((fragment) => {
          if (fragment === ",") {
            const span = document.createElement("span");
            span.className = "heading-comma";
            span.textContent = ",";
            heading.insertBefore(span, node);
          } else if (fragment.length > 0) {
            heading.insertBefore(document.createTextNode(fragment), node);
          }
        });

        heading.removeChild(node);
      });
    });
  }, []);

  return null;
}
