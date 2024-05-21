import React, { useState, ChangeEvent, FormEvent } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import  Modal  from "./Modal";

interface FormData {
  Name_of_Candidate: string;
  Skill_Technology: string;
  Mobile_No: string;
  Email_ID: string;
  Recruiter: string;
}

export function AddCandidate() {
  const [formData, setFormData] = useState<FormData>({
    Name_of_Candidate: "",
    Skill_Technology: "",
    Mobile_No: "",
    Email_ID: "",
    Recruiter: ""
  });
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const validateForm = (): string => {
    const { Name_of_Candidate, Skill_Technology, Mobile_No, Email_ID, Recruiter } = formData;
    if (!Name_of_Candidate || !Skill_Technology || !Mobile_No || !Email_ID || !Recruiter) {
      return "All fields are required.";
    }
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(Mobile_No)) {
      return "Invalid mobile number. It should be a 10-digit number.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email_ID)) {
      return "Invalid email address.";
    }
    return "";
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setSuccess("");
      return;
    }
    setError("");

    try {
      const response = await fetch("https://iscsfastapi.azurewebsites.net/Record", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccess("Data sent successfully");
        setIsModalVisible(true);
        setFormData({
          Name_of_Candidate: "",
          Skill_Technology: "",
          Mobile_No: "",
          Email_ID: "",
          Recruiter: ""
        });
      } else {
        setError("Failed to send data: " + response.statusText);
      }
    } catch (error) {
      setError("Error: " + (error as Error).message);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Candidate Information Form
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Enter Details to add New Applicant to the Database
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Name_of_Candidate">Full Name</Label>
          <Input id="Name_of_Candidate" value={formData.Name_of_Candidate} placeholder="Enter Candidate's Name" type="text" onChange={handleChange} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Skill_Technology">Skill/Technology</Label>
          <Input id="Skill_Technology" value={formData.Skill_Technology} placeholder="Enter Skill/Technology" type="text" onChange={handleChange} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Mobile_No">Mobile Number</Label>
          <Input id="Mobile_No" value={formData.Mobile_No} placeholder="Enter Mobile Number" type="text" onChange={handleChange} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Email_ID">Email Address</Label>
          <Input id="Email_ID" value={formData.Email_ID} placeholder="Enter Email Address" type="email" onChange={handleChange} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Recruiter">Recruiter</Label>
          <Input id="Recruiter" value={formData.Recruiter} placeholder="Enter Recruiter Name" type="text" onChange={handleChange} />
        </LabelInputContainer>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{success}</p>}

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <Button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </Button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>

      <Modal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        recruiter={formData.Recruiter}
      />
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );

};
