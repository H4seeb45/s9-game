"use client";
import { Button } from "./ui/button";
import { handleDownloadClick } from "@/lib/utils";
import { Download } from "lucide-react";

export default function DownloadButton({ title }: any) {
  return (
    <Button
      onClick={handleDownloadClick}
      className="bg-yellow-500 hover:bg-yellow-600 text-white gap-2"
    >
      <Download size={20} />
      {title}
    </Button>
  );
}
