'use client';
import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import { ButtonDemo } from "@/components/Firstpage/Firstpage";
import { TypewriterEffect } from "../ui/typewriter-effect";
import Link from "next/link";
import { PlaceholdersAndVanishInputDemo } from "../Placeholder/PlaceholdersAndVanishInputDemo";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { useEffect, useState } from 'react';

import { SparklesCore } from "../ui/sparkles";
 

export function SpotlightPreview() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const words = [
    {
      text: "Recruitment",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "and",
    },
    {
      text: "Staffing",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "made",
    },
    {
      text: "simple",
    },
  ];
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="absolute -top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="p-4 max-w-7xl mx-auto relative z-10 pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <div className="flex flex-col items-center justify-center">
            <p className="text-neutral-600 dark:text-neutral-200 text-base mb-10">
              Powerful ATS and CRM in a single recruitment platform
            </p>
            
            <TypewriterEffect words={words} />
            
            <div className="mt-10 max-w-7xl">
      <Link href="/Login">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          {isClient && (
            <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
              Login
            </button>
          )}
        </HoverBorderGradient>
      </Link>
      
    </div>
    
          </div>
          
        </h1>

      </div>
     
    </div>
    
  );
}
