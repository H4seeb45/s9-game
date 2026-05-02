import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Apple,
  Crown,
  Gamepad2,
  Headphones,
  Monitor,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Trophy,
  Users,
  WalletCards,
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
import S9Game from "@/public/s9 game.png";
import S9Lottery from "@/public/s9 lottery.png";
import Requirements from "@/public/requirements.png";

export const metadata: Metadata = {
  title: "S9 Game Download APK | Elite Online Gaming Platform Pakistan",
  description:
    "Download S9 Game APK latest version for Android, iOS, and PC. Explore premium casino-style games, lottery, fast registration, secure access, and step-by-step installation guides.",
  keywords: [
    "S9 Game",
    "S9 Game APK",
    "S9 Game download",
    "online gaming Pakistan",
    "S9 Game Android",
    "S9 Game iOS",
    "S9 Game PC",
    "Teen Patti",
    "Dragon Tiger",
    "S9 Lottery",
  ],
  openGraph: {
    title: "S9 Game - Elite Online Gaming Platform",
    description:
      "Join the S9 Game arena with Android, iOS, and PC download guides, premium game modes, lottery access, and player-first support.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "S9 Game Download APK",
    description:
      "Download S9 Game and enter a premium gaming lobby built for Android, iOS, and PC players.",
  },
};

const gameModes = [
  "Teen Patti",
  "Dragon Tiger",
  "Roulette",
  "Mines",
  "Blackjack",
  "Rummy",
  "Sports and Ludo",
  "Wingo Lottery",
];

export default function Home() {
  return (
    <ElitePageShell>
      <EliteHero
        badge="S9 Game Official Arena"
        title="Download S9 Game APK and enter the elite lobby."
        subtitle="S9 Game brings a polished, high-energy gaming platform to Pakistan with fast access, popular casino-style games, lottery rooms, and guides for Android, iOS, and PC players."
        image={S9Game}
        imageAlt="S9 Game app preview for online gaming"
        cta="Download S9 Game APK"
        stats={[
          { value: "24/7", label: "Game Lobby" },
          { value: "3", label: "Platforms" },
          { value: "8+", label: "Game Modes" },
        ]}
      />

      <EliteSection>
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4">
            <Image
              src={Requirements}
              alt="S9 Game installation requirements for Android iOS and PC"
              className="h-auto w-full rounded-[1.5rem]"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-300">
              Premium Gaming Hub
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Built like a champion lobby, written for players who want speed.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              The new S9 Game experience is designed around clear download
              paths, searchable gaming content, and confidence-building details.
              Whether a player searches for the latest S9 Game APK, iOS install
              help, PC emulator setup, or lottery access, the page now answers
              with direct sections, strong headings, and player-first language.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                ["Android APK", "/android"],
                ["iOS Guide", "/iOS"],
                ["PC Setup", "/pc"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-full border border-yellow-300/30 bg-yellow-300/10 px-5 py-3 text-sm font-bold text-yellow-100 transition hover:bg-yellow-300 hover:text-slate-950"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </EliteSection>

      <EliteSection id="features">
        <SectionHeader
          eyebrow="Elite Features"
          title="A lobby that feels fast, sharp, and ready for competition."
          description="S9 Game focuses on smooth access, exciting game variety, and a clean download journey for every major device."
        />
        <FeatureGrid
          items={[
            {
              icon: <Zap className="h-7 w-7" />,
              title: "Instant Access",
              text: "Clear download buttons, simple install steps, and quick onboarding help players reach the lobby with fewer distractions.",
            },
            {
              icon: <Gamepad2 className="h-7 w-7" />,
              title: "High-Energy Games",
              text: "Explore player favorites including Teen Patti, Dragon Tiger, Roulette, Mines, Rummy, Blackjack, Sports, Ludo, and lottery rooms.",
            },
            {
              icon: <ShieldCheck className="h-7 w-7" />,
              title: "Security-Minded Guidance",
              text: "Each page explains how to download from trusted links, check requirements, and keep the installation process clean.",
            },
          ]}
        />
      </EliteSection>

      <EliteSection id="games" className="bg-white/[0.03]">
        <SectionHeader
          eyebrow="Game Library"
          title="Step into a stacked arena of classic and modern games."
          description="The S9 Game APK is made for players who want variety: quick rounds, strategic tables, lottery action, and familiar card rooms in one place."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gameModes.map((mode) => (
            <article
              key={mode}
              className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-center shadow-xl shadow-black/20"
            >
              <Crown className="mx-auto h-7 w-7 text-yellow-300" />
              <h3 className="mt-4 text-lg font-black text-white">{mode}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Fast rounds, clean navigation, and a premium lobby feel.
              </p>
            </article>
          ))}
        </div>
      </EliteSection>

      <EliteSection id="requirements">
        <SectionHeader
          eyebrow="Requirements"
          title="Choose your device and launch the right version."
          description="S9 Game is presented for Android APK users, iPhone players, and PC gamers who prefer a browser or emulator setup."
        />
        <FeatureGrid
          items={[
            {
              icon: <Smartphone className="h-7 w-7" />,
              title: "Android",
              text: "Use a stable internet connection, allow trusted APK installation, and keep enough free storage for the latest S9 Game APK.",
            },
            {
              icon: <Apple className="h-7 w-7" />,
              title: "iOS",
              text: "Follow the iOS guide for compatible installation options, device preparation, and a smoother launch on iPhone or iPad.",
            },
            {
              icon: <Monitor className="h-7 w-7" />,
              title: "PC",
              text: "Play through a supported browser where available or install the APK through an Android emulator on Windows.",
            },
          ]}
        />
      </EliteSection>

      <EliteSection id="download" className="bg-white/[0.03]">
        <SectionHeader
          eyebrow="Download Guide"
          title="How to download S9 Game APK latest version."
          description="Use this quick path to move from search to install without confusion."
        />
        <StepList
          steps={[
            "Tap the Download S9 Game APK button and confirm the file download when your browser asks.",
            "Wait for the APK or platform file to finish downloading before opening the installer.",
            "On Android, allow installation from trusted sources if your device requests permission.",
            "Open S9 Game, register or log in, and enter the lobby to browse games, lottery rooms, and account options.",
          ]}
        />
      </EliteSection>

      <EliteSection id="lottery">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-300">
              S9 Lottery
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Lottery rooms with the same premium S9 Game energy.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              S9 Lottery gives players another way to explore the platform with
              simple ticket-style gameplay, clear navigation, and the same
              fast-access experience as the main S9 Game app.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                <Trophy className="h-7 w-7 text-yellow-300" />
                <h3 className="mt-3 font-black text-white">Reward Focused</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Designed for players who enjoy quick entries and prize-driven
                  gaming formats.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                <Sparkles className="h-7 w-7 text-yellow-300" />
                <h3 className="mt-3 font-black text-white">Easy to Explore</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Simple menus help new users understand where to start.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4">
            <Image
              src={S9Lottery}
              alt="S9 Lottery game preview"
              className="h-auto w-full rounded-[1.5rem]"
            />
          </div>
        </div>
      </EliteSection>

      <EliteSection id="benefits" className="bg-white/[0.03]">
        <SectionHeader
          eyebrow="Player Benefits"
          title="Why players keep S9 Game in their shortlist."
        />
        <FeatureGrid
          items={[
            {
              icon: <WalletCards className="h-7 w-7" />,
              title: "Clear Account Flow",
              text: "Registration, login, deposits, game selection, and withdrawal guidance are explained in plain language.",
            },
            {
              icon: <Users className="h-7 w-7" />,
              title: "Built for Pakistani Players",
              text: "Copy and page structure target local searches for S9 Game APK download, iOS install, PC setup, and popular game categories.",
            },
            {
              icon: <Headphones className="h-7 w-7" />,
              title: "Support-Oriented",
              text: "The page points users toward safe download habits, compatible devices, and the common questions they search before installing.",
            },
          ]}
        />
      </EliteSection>

      <EliteSection id="support">
        <SectionHeader
          eyebrow="FAQ"
          title="S9 Game questions players ask before downloading."
        />
        <FaqBlock
          items={[
            {
              question: "What is S9 Game?",
              answer:
                "S9 Game is an online gaming platform with casino-style games, card games, lottery features, and download options for Android, iOS, and PC players.",
            },
            {
              question: "Can I download S9 Game APK for Android?",
              answer:
                "Yes. The Android page explains the latest S9 Game APK download path, installation permissions, and device requirements.",
            },
            {
              question: "Does S9 Game work on iOS and PC?",
              answer:
                "The site includes dedicated iOS and PC guides. iOS players can review compatible install methods, while PC players can use browser access where available or an Android emulator.",
            },
            {
              question: "Is this website SEO friendly?",
              answer:
                "The redesigned pages use focused titles, descriptive metadata, clear headings, internal links, FAQ content, and platform-specific keywords to help search engines understand each page.",
            },
          ]}
        />
      </EliteSection>

      <EliteSection>
        <CtaBand
          title="Ready to join the S9 Game arena?"
          text="Download the latest S9 Game APK, choose your platform, and enter a cleaner, sharper, elite gaming experience. Play responsibly and follow your local rules before using real-money features."
          cta="Download S9 Game APK"
        />
      </EliteSection>
    </ElitePageShell>
  );
}
