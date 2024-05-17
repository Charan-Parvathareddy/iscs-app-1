"use client";

import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "Identifying and Connecting with potential candidates for a current or future job opening",
    "Gets your job openings in front of as many eyes as possible",
    "Hiring Pipeline providing a comprehensive breakdown of each recruitment stage",
    "Comprehensive Sourcing Summaries for each hiring channel",
    "Reduce time-to-hire by  building proactive hiring pipelines",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </>
  );
}
