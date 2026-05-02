import type { Metadata } from "next";
import Image from "next/image";
import {
  Cpu,
  Download,
  Gamepad2,
  Gauge,
  Layers,
  Monitor,
  ShieldCheck,
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
import Emulator from "@/public/Download-Emulator.webp";
import Installed from "@/public/S9-Game-Installed-PC.webp";
import Open from "@/public/S9-Game-for-PC-Open.webp";
import S9GamePC from "@/public/s9gamepc.png";

export const metadata: Metadata = {
  title: "S9 Game for PC Download | Windows Emulator and Browser Guide",
  description:
    "Download S9 Game for PC and learn how to play on Windows through an Android emulator or browser access. Includes requirements, setup steps, and FAQs.",
  keywords: [
    "S9 Game PC",
    "S9 Game for Windows",
    "S9 Game emulator",
    "S9 Game download PC",
    "Super S9 Game PC",
  ],
  openGraph: {
    title: "S9 Game for PC Download Guide",
    description:
      "Play S9 Game on a bigger screen with emulator setup steps, PC requirements, and premium gaming platform copy.",
    type: "website",
  },
};

export default function PCPage() {
  return (
    <ElitePageShell>
      <EliteHero
        badge="PC Command Center"
        title="S9 Game for PC, built for bigger screens and sharper control."
        subtitle="Take the S9 Game lobby to Windows with an emulator or browser-friendly setup path, then enjoy card games, lottery rooms, and fast navigation on a desktop display."
        image={S9GamePC}
        imageAlt="S9 Game for PC preview"
        cta="Download S9 Game for PC"
        stats={[
          { value: "Win", label: "Windows" },
          { value: "4 GB", label: "RAM" },
          { value: "1 GB", label: "Storage" },
        ]}
      />

      <EliteSection>
        <SectionHeader
          eyebrow="Big Screen Advantage"
          title="Turn your desktop into an S9 Game command center."
          description="The PC page now targets players searching for S9 Game on Windows, emulator setup, browser play, and a more comfortable way to enjoy the lobby."
        />
        <FeatureGrid
          items={[
            {
              icon: <Monitor className="h-7 w-7" />,
              title: "Bigger Visuals",
              text: "Enjoy S9 Game on a larger screen with easier navigation, clearer game rooms, and a more cinematic lobby feel.",
            },
            {
              icon: <Gauge className="h-7 w-7" />,
              title: "Better Control",
              text: "Mouse, keyboard, and emulator controls can make browsing game categories and account screens feel more precise.",
            },
            {
              icon: <Layers className="h-7 w-7" />,
              title: "Flexible Setup",
              text: "Use browser access where available or install S9 Game APK through trusted Android emulators like BlueStacks, MEmu, or NoxPlayer.",
            },
          ]}
        />
      </EliteSection>

      <EliteSection id="download" className="bg-white/[0.03]">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-4">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4">
              <Image
                src={Emulator}
                alt="Download Android emulator for S9 Game on PC"
                className="h-auto w-full rounded-[1.5rem]"
              />
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4">
              <Image
                src={Open}
                alt="Open S9 Game APK in a PC emulator"
                className="h-auto w-full rounded-[1.5rem]"
              />
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="Install Guide"
              title="How to download and play S9 Game on PC."
              description="Use this route if you want the Android app experience on a Windows laptop or desktop."
            />
            <StepList
              steps={[
                "Download and install a trusted Android emulator such as BlueStacks, MEmu, NoxPlayer, or LDPlayer.",
                "Download the latest S9 Game APK file from the trusted download source.",
                "Open the emulator, select Install APK or Add App, then choose the downloaded S9 Game file.",
                "Launch S9 Game inside the emulator, log in or register, and start exploring the big-screen lobby.",
              ]}
            />
          </div>
        </div>
      </EliteSection>

      <EliteSection id="requirements">
        <SectionHeader
          eyebrow="PC Requirements"
          title="What your Windows system needs for S9 Game."
        />
        <FeatureGrid
          items={[
            {
              icon: <Cpu className="h-7 w-7" />,
              title: "Windows PC",
              text: "A Windows 7 or newer machine is recommended for emulator-based play, with updated drivers where possible.",
            },
            {
              icon: <Zap className="h-7 w-7" />,
              title: "4 GB RAM",
              text: "At least 4 GB RAM helps the emulator and S9 Game lobby run with fewer slowdowns.",
            },
            {
              icon: <Download className="h-7 w-7" />,
              title: "1 GB Storage",
              text: "Keep free space for the emulator, APK file, app installation, and future S9 Game updates.",
            },
          ]}
        />
      </EliteSection>

      <EliteSection className="bg-white/[0.03]">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader
              eyebrow="How to Use"
              title="Launch, log in, and play with desktop comfort."
              description="After installation, S9 Game behaves like an Android app inside the emulator, giving you a familiar lobby with a larger display."
            />
            <FeatureGrid
              items={[
                {
                  icon: <Gamepad2 className="h-7 w-7" />,
                  title: "Open the Lobby",
                  text: "Start the emulator and open S9 Game from the home screen after installation finishes.",
                },
                {
                  icon: <ShieldCheck className="h-7 w-7" />,
                  title: "Secure Account Access",
                  text: "Register or log in carefully, keep your password private, and use trusted internet connections.",
                },
                {
                  icon: <Monitor className="h-7 w-7" />,
                  title: "Adjust Your Setup",
                  text: "Tune emulator controls, window size, and performance settings for a smoother PC experience.",
                },
              ]}
            />
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4">
            <Image
              src={Installed}
              alt="S9 Game installed and running on PC emulator"
              className="h-auto w-full rounded-[1.5rem]"
            />
          </div>
        </div>
      </EliteSection>

      <EliteSection>
        <SectionHeader eyebrow="FAQ" title="S9 Game PC questions." />
        <FaqBlock
          items={[
            {
              question: "Can I play S9 Game on PC?",
              answer:
                "Yes. You can play S9 Game on PC through supported browser access where available or by installing the Android APK in a trusted emulator.",
            },
            {
              question: "Which emulator works for S9 Game?",
              answer:
                "Popular options include BlueStacks, MEmu, NoxPlayer, and LDPlayer. Choose a trusted emulator, keep it updated, and download from official websites.",
            },
            {
              question: "Do I need a powerful gaming PC?",
              answer:
                "A high-end gaming PC is not required, but at least 4 GB RAM, stable internet, and 1 GB free storage are recommended for a smoother emulator experience.",
            },
          ]}
        />
      </EliteSection>

      <EliteSection>
        <CtaBand
          title="Download S9 Game for PC."
          text="Set up the S9 Game lobby on Windows and enjoy a larger, cleaner, command-center style gaming experience."
          cta="Download S9 Game for PC"
        />
      </EliteSection>
    </ElitePageShell>
  );
}
