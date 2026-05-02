import type { Metadata } from "next";
import Image from "next/image";
import {
  Apple,
  BadgeCheck,
  Gamepad2,
  LockKeyhole,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import {
  CtaBand,
  EliteHero,
  ElitePageShell,
  EliteSection,
  FaqBlock,
  FeatureGrid,
  SectionHeader,
  StepList,
} from "@/components/elite-gaming-page";
import S9GameiOS from "@/public/s9gameios.png";
import TrollStore from "@/public/TrollStore.webp";
import InstallOrImport from "@/public/Install-or-Import-S9-Game-iOS.webp";

export const metadata: Metadata = {
  title: "S9 Game for iOS Download | iPhone and iPad Install Guide",
  description:
    "Download S9 Game for iOS with an iPhone and iPad installation guide. Learn iOS requirements, sideloading steps, safety notes, and platform features.",
  keywords: [
    "S9 Game iOS",
    "S9 Game for iPhone",
    "S9 Game iPad",
    "S9 Game iOS download",
    "Super S9 Game iOS",
  ],
  openGraph: {
    title: "S9 Game for iOS Download Guide",
    description:
      "Install S9 Game on iPhone or iPad with premium gaming copy, clear requirements, and player-focused setup steps.",
    type: "website",
  },
};

export default function IOSPage() {
  return (
    <ElitePageShell>
      <EliteHero
        badge="iPhone Gaming Suite"
        title="S9 Game for iOS, crafted for a premium iPhone lobby."
        subtitle="Bring S9 Game to iPhone or iPad with a clean iOS guide, polished gameplay positioning, and step-by-step help for compatible installation methods."
        image={S9GameiOS}
        imageAlt="S9 Game iOS app preview for iPhone and iPad"
        cta="Download S9 Game for iOS"
        stats={[
          { value: "iOS", label: "Platform" },
          { value: "11+", label: "Version" },
          { value: "Pro", label: "Feel" },
        ]}
      />

      <EliteSection>
        <SectionHeader
          eyebrow="iOS Experience"
          title="A sharp, secure, big-brand style lobby for Apple players."
          description="The iOS page now speaks to players who want premium visuals, confidence, and direct answers before installing S9 Game on iPhone or iPad."
        />
        <FeatureGrid
          items={[
            {
              icon: <Apple className="h-7 w-7" />,
              title: "Apple-First Positioning",
              text: "The page is written around iPhone and iPad search intent with platform-specific requirements, install methods, and safety guidance.",
            },
            {
              icon: <LockKeyhole className="h-7 w-7" />,
              title: "Security-Minded Setup",
              text: "Players get clear reminders to use trusted sources, protect account details, and understand the installation path before proceeding.",
            },
            {
              icon: <Sparkles className="h-7 w-7" />,
              title: "Premium Gameplay Feel",
              text: "The copy positions S9 Game as a polished lobby with card games, lottery rooms, fast navigation, and a high-energy iOS experience.",
            },
          ]}
        />
      </EliteSection>

      <EliteSection id="download" className="bg-white/[0.03]">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4">
              <Image
                src={TrollStore}
                alt="TrollStore installation option for S9 Game iOS"
                className="h-auto w-full rounded-[1.5rem]"
              />
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4">
              <Image
                src={InstallOrImport}
                alt="Importing S9 Game iOS installation file"
                className="h-auto w-full rounded-[1.5rem]"
              />
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="Install Guide"
              title="How to download S9 Game on iOS."
              description="iOS installation can vary by device and method. Review each step carefully and only use sources you trust."
            />
            <StepList
              steps={[
                "Prepare your iPhone or iPad, confirm available storage, and use a stable internet connection.",
                "Download the S9 Game iOS file or compatible package from the trusted download source.",
                "Open your selected iOS install method, import the S9 Game file, and follow the on-screen prompts.",
                "Launch S9 Game, sign in or create an account, and browse the lobby once installation is complete.",
              ]}
            />
          </div>
        </div>
      </EliteSection>

      <EliteSection id="requirements">
        <SectionHeader
          eyebrow="Requirements"
          title="Before installing S9 Game on iPhone or iPad."
        />
        <FeatureGrid
          items={[
            {
              icon: <Smartphone className="h-7 w-7" />,
              title: "Compatible Device",
              text: "Use an iPhone or iPad that supports the selected install method and can run modern web or app experiences smoothly.",
            },
            {
              icon: <BadgeCheck className="h-7 w-7" />,
              title: "iOS 11 or Newer",
              text: "A newer iOS version helps with smoother gameplay, stronger device security, and better compatibility.",
            },
            {
              icon: <Zap className="h-7 w-7" />,
              title: "500 MB Free Storage",
              text: "Keep enough space available so the S9 Game file can download, import, and open without storage errors.",
            },
          ]}
        />
      </EliteSection>

      <EliteSection className="bg-white/[0.03]">
        <SectionHeader
          eyebrow="iOS vs Android"
          title="Choose the platform that matches your play style."
          description="S9 Game keeps the core lobby familiar across devices, while each platform has its own setup advantages."
        />
        <FeatureGrid
          items={[
            {
              icon: <ShieldCheck className="h-7 w-7" />,
              title: "iOS Advantage",
              text: "iPhone and iPad players often value a polished feel, strong device security, and consistent touch performance.",
            },
            {
              icon: <Gamepad2 className="h-7 w-7" />,
              title: "Android Advantage",
              text: "Android players get the most direct APK installation path and wider flexibility across device models.",
            },
            {
              icon: <Apple className="h-7 w-7" />,
              title: "Same S9 Energy",
              text: "Both routes lead to the S9 Game lobby, popular game categories, account access, and lottery-style experiences.",
            },
          ]}
        />
      </EliteSection>

      <EliteSection>
        <SectionHeader eyebrow="FAQ" title="S9 Game iOS questions." />
        <FaqBlock
          items={[
            {
              question: "Can I download S9 Game on iPhone?",
              answer:
                "Yes, the iOS page provides an installation guide for iPhone and iPad users. The exact method depends on device compatibility and the trusted source you use.",
            },
            {
              question: "Does S9 Game iOS need jailbreaking?",
              answer:
                "Some iOS methods involve sideloading tools, while others may vary by device. Review the steps carefully and avoid any method you do not trust or understand.",
            },
            {
              question: "Is the iOS version different from Android?",
              answer:
                "The core S9 Game experience is similar, but Android usually has a simpler APK flow while iOS may require extra installation steps.",
            },
          ]}
        />
      </EliteSection>

      <EliteSection>
        <CtaBand
          title="Download S9 Game for iOS."
          text="Bring the S9 Game lobby to iPhone or iPad with a cleaner guide, platform-specific SEO copy, and a premium player experience."
          cta="Download S9 Game for iOS"
        />
      </EliteSection>
    </ElitePageShell>
  );
}
