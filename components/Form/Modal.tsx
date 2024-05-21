import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { MailCheck } from "lucide-react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  recruiter: string;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-gray-800 text-white rounded-md p-8 shadow-lg max-w-md w-full">
        <h2 className="font-bold text-xl mb-4">Success</h2>
        <p>Successfully submitted the candidate Information </p>
        <div className="mt-6 flex justify-end">
        <Button size="sm" className="h-8 gap-1" onClick={onClose}>
  
  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
    Close
  </span>
</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
