import type { Metadata } from "next";
import Image from "next/image";
import {
  BadgeCheck,
  Download,
  Gauge,
  Gamepad2,
  ShieldCheck,
  Smartphone,
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
import S9GameAndroid from "@/public/s9gameandroid.png";
import S9GameAndroidSteps from "@/public/stepstodownloadandroid.png";

export const metadata: Metadata = {
  title: "S9 Game APK Download for Android | Latest Version",
  description:
    "Download S9 Game APK latest version for Android. Get installation steps, requirements, safety tips, and features for the Super S9 Game mobile gaming app.",
  keywords: [
    "S9 Game APK download",
    "S9 Game Android",
    "Super S9 Game APK",
    "S9 Game latest version",
    "Android gaming app Pakistan",
  ],
  openGraph: {
    title: "S9 Game APK Download for Android",
    description:
      "Install the latest S9 Game APK on Android with a fast guide, clear requirements, and premium gaming features.",
    type: "website",
  },
};

export default function AndroidPage() {
  return (
    <ElitePageShell>
      <EliteHero
        badge="Android APK Arena"
        title="S9 Game APK for Android, tuned for fast mobile play."
        subtitle="Download the latest S9 Game APK and bring a polished casino-style lobby, card games, lottery action, and smooth account access to your Android phone."
        image={S9GameAndroid}
        imageAlt="S9 Game Android APK app preview"
        cta="Download S9 Game APK"
        stats={[
          { value: "APK", label: "Android File" },
          { value: "5.0+", label: "Android" },
          { value: "Fast", label: "Install" },
        ]}
      />

      <EliteSection>
        <SectionHeader
          eyebrow="Why Android Players Choose It"
          title="Mobile-first gaming with a lobby that feels ready for match day."
          description="S9 Game for Android is designed for players who want quick access, responsive screens, and a clear path from download to play."
        />
        <FeatureGrid
          items={[
            {
              icon: <Smartphone className="h-7 w-7" />,
              title: "Pocket-Ready Lobby",
              text: "Open S9 Game on your Android device and jump into card games, quick rounds, lottery options, and account tools from one clean app.",
            },
            {
              icon: <Gauge className="h-7 w-7" />,
              title: "Optimized Performance",
              text: "The Android APK guide focuses on smooth setup, stable internet, and enough storage so the app can run with fewer interruptions.",
            },
            {
              icon: <ShieldCheck className="h-7 w-7" />,
              title: "Trusted Download Flow",
              text: "Follow a clear installation path and download from trusted sources to keep the APK setup simple and safer.",
            },
          ]}
        />
      </EliteSection>

      <EliteSection id="download" className="bg-white/[0.03]">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4">
            <Image
              src={S9GameAndroidSteps}
              alt="Steps to download and install S9 Game APK on Android"
              className="h-auto w-full rounded-[1.5rem]"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="Install Guide"
              title="How to download and install S9 Game APK on Android."
              description="Follow the steps below to move from download to the gaming lobby without guesswork."
            />
            <StepList
              steps={[
                "Tap Download S9 Game APK and wait for the Android installation file to finish downloading.",
                "Open your Downloads folder or browser notification and select the S9 Game APK file.",
                "Allow installation from trusted sources if Android asks for permission during setup.",
                "Install the app, open S9 Game, then register or log in to enter the lobby.",
              ]}
            />
          </div>
        </div>
      </EliteSection>

      <EliteSection id="requirements">
        <SectionHeader
          eyebrow="Requirements"
          title="What your Android phone needs before launch."
        />
        <FeatureGrid
          items={[
            {
              icon: <Download className="h-7 w-7" />,
              title: "Latest APK File",
              text: "Use the newest S9 Game APK so you get the latest lobby updates, game access, and installation compatibility.",
            },
            {
              icon: <Zap className="h-7 w-7" />,
              title: "Stable Internet",
              text: "A reliable connection helps downloads finish correctly and keeps game rooms responsive after login.",
            },
            {
              icon: <BadgeCheck className="h-7 w-7" />,
              title: "Enough Storage",
              text: "Keep at least 500 MB free before installation so Android has room to download, verify, and install the app.",
            },
          ]}
        />
      </EliteSection>

      <EliteSection className="bg-white/[0.03]">
        <SectionHeader
          eyebrow="Game Experience"
          title="A compact Android app with big-lobby energy."
          description="Players can explore popular S9 Game modes, manage account access, and move through the app with straightforward navigation."
        />
        <FeatureGrid
          items={[
            {
              icon: <Gamepad2 className="h-7 w-7" />,
              title: "Popular Game Rooms",
              text: "Play familiar card, casino-style, sports, ludo, and lottery formats from a mobile-friendly interface.",
            },
            {
              icon: <Gauge className="h-7 w-7" />,
              title: "Smooth Navigation",
              text: "Clear menus help new users find registration, login, game categories, and account options quickly.",
            },
            {
              icon: <ShieldCheck className="h-7 w-7" />,
              title: "Responsible Access",
              text: "Use real-money features carefully, follow local rules, and keep your account details secure.",
            },
          ]}
        />
      </EliteSection>

      <EliteSection>
        <SectionHeader
          eyebrow="FAQ"
          title="S9 Game Android APK questions."
        />
        <FaqBlock
          items={[
            {
              question: "Is S9 Game available as an Android APK?",
              answer:
                "Yes. This Android page is built around the S9 Game APK download, installation permissions, and launch steps for Android phones.",
            },
            {
              question: "What Android version is recommended?",
              answer:
                "Android 5.0 or newer is recommended for a smoother experience, along with stable internet and enough free storage.",
            },
            {
              question: "Why does Android ask for unknown source permission?",
              answer:
                "APK files downloaded outside an app store may require manual permission. Only allow it when you trust the source and are ready to install S9 Game.",
            },
          ]}
        />
      </EliteSection>

      <EliteSection>
        <CtaBand
          title="Download S9 Game APK for Android."
          text="Get the latest Android version, install it in minutes, and enter the S9 Game lobby with a faster, cleaner mobile experience."
          cta="Download S9 Game APK"
        />
      </EliteSection>
    </ElitePageShell>
  );
}
