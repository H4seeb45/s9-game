import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleDownloadClick = () => {
  const now = new Date();
  const utcHour = now.getUTCHours();
  // Check if current UTC time is between 7 PM (19) and 4 AM (4)
  const isOMTime = utcHour >= 15 || utcHour < 1;
  const downloadUrl = isOMTime
    ? process.env.NEXT_PUBLIC_OM_URL
    : process.env.NEXT_PUBLIC_DOWNLOAD_URL;

  // Navigate to the download URL when clicked
  if (downloadUrl && typeof window !== "undefined") {
    window.location.href = downloadUrl; // This triggers the download or navigation
  }
};
