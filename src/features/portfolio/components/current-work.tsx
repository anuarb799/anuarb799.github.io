"use client";

import { Markdown } from "@/components/markdown";
import { ProseMono } from "@/components/ui/typography";
import { USER } from "@/features/portfolio/data/user";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";
import { useState } from "react";

export function CurrentWork() {
  const [view, setView] = useState<"about" | "bullets">("bullets");
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>Current Project: Eatly</PanelTitle>
      </PanelHeader>

      <PanelContent>

        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <img
            src="/images/IMG_7674.PNG"
            alt="Screenshot 1"
            className="w-full h-100 object-cover rounded-md ring-1 ring-border select-none"
            fetchPriority="high"
          />
          <img
            src="/images/IMG_7675.PNG"
            alt="Screenshot 2"
            className="w-full h-100 object-cover rounded-md ring-1 ring-border select-none"
          />
          <img
            src="/images/IMG_7676.PNG"
            alt="Screenshot 3"
            className="w-full h-100 object-cover rounded-md ring-1 ring-border select-none"
          />
          <img
            src="/images/IMG_7677.PNG"
            alt="Screenshot 4"
            className="w-full h-100 object-cover rounded-md ring-1 ring-border select-none"
          />
        </div>


      {/*
        <div className="mt-3">
          {view === "about" ? (
            <ProseMono>
              <Markdown>{USER.about}</Markdown>
            </ProseMono>
          ) : (
            <ul className="list-disc pl-5">
              <li>Hello</li>
              <li>Meow</li>
              <li>Car</li>
            </ul>
          )}
        </div>
      */}
      </PanelContent>
    </Panel>
  );
}
