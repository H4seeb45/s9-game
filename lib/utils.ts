import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleDownloadClick = () => {
  const downloadUrl = process.env.NEXT_PUBLIC_DOWNLOAD_URL;

  // Navigate to the download URL when clicked
  if (downloadUrl && typeof window !== "undefined") {
    window.location.href = downloadUrl; // This triggers the download or navigation
  }
};
