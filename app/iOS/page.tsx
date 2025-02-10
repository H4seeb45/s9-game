import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Download,
  Smartphone,
  Apple,
  SmartphoneIcon as Android,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import TrollStore from "@/public/TrollStore.webp";
import Jailbreak from "@/public/Jailbreak-via-evasiOn.webp";
import InstallOrImport from "@/public/Install-or-Import-S9-Game-iOS.webp";

export const metadata: Metadata = {
  title: "S9 Game for iOS | Real Money App | Latest Version",
  description:
    "S9 Game is a popular IOS-based card gaming platform in Pakistan that allows users to play various card games and earn real money. Super S9 Game for IOS also offers S9 rich tickets where you can buy lottery tickets and earn rewards.",
};

export default function IOSPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center bg-[url('/s9-game-banner.webp')] bg-no-repeat bg-cover bg-center bg-fixed py-8 sm:py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Download Super S9 Game iOS - Latest Version (2025)
          </h1>
          <p className="text-white/90 mb-6 sm:mb-8">
            Transform Your iPhone into a Profitable Tool!
          </p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white gap-2">
            <Download size={20} />
            Download S9 Game for iOS
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-12 sm:space-y-24">
        {/* Introduction */}
        <section>
          <p className="text-muted-foreground mb-4">
            Imagine just a few touches to cash out real money while playing
            games on your iPhone or iPad. It is made achievable by the iOS
            version of the Super S9 Game! It was created just for iOS users and
            offers a seamless gaming experience by integrating excellent
            gameplay, a slick user experience, and safe payment options.
          </p>
          <p className="text-muted-foreground mb-4">
            When you can make money while enjoying, why limit yourself to just
            having fun? With exquisite graphics and dependable security, the S9
            Game offers everything from card games to live sports betting. This
            app will keep you interested and rewarded whether you're a casual
            gamer or an iPhone enthusiast.
          </p>
          <p className="text-muted-foreground">
            Let's get started by following the detailed instructions!
          </p>
        </section>

        {/* Why Play S9 Game on iOS? */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">
            Why Play S9 Game on iOS?
          </h2>
          <p className="text-2xl font-semibold mb-4">
            Play Smarter, Earn Bigger—Exclusively on iOS!
          </p>
          <p className="text-muted-foreground mb-4">
            Both iOS and the Super S9 Game are top-tier when it comes to mobile
            gaming. It's time to transform your iOS gaming experience if you're
            sick of glitches or limitations.
          </p>
          <p className="text-muted-foreground mb-4">
            The following explains why iOS users appreciate the S9 Game:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li>
              <strong>Perfect Performance:</strong> Bid farewell to delays! Even
              when the stakes are massive, iOS guarantees flexible, consistent
              gameplay.
            </li>
            <li>
              <strong>Enhanced Security:</strong> You can play games safely and
              securely without stressing, thanks to Apple's tight privacy
              policies.
            </li>
            <li>
              <strong>Amazing Graphics:</strong> Every game has cinematic-like
              images thanks to excellent quality graphics.
            </li>
            <li>
              <strong>Simple Money Withdrawals:</strong> Everything is set up
              for your convenience, from dependable transactions to immediate
              payouts.
            </li>
          </ul>
          <p className="text-muted-foreground">
            Why wait, then? Start winning now by transforming your iPhone or
            iPad into a gaming powerhouse!
          </p>
        </section>

        {/* How to Download */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">
            How to Download S9 Game iOS Version
          </h2>
          <p className="text-2xl font-semibold mb-4">
            Get the Super S9 Game on Your iPhone in Minutes!
          </p>
          <p className="text-muted-foreground mb-4">
            It may seem complicated to download the S9 game for iOS, but with
            this complete tutorial, you'll be playing and making money swiftly.
            We will consider your preference for either Jailbreaking or
            Sideloading. Let's get began!
          </p>

          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="m-auto mb-4 flex md:flex-row flex-col gap-8 items-center justify-center">
                <Image
                  src={TrollStore}
                  alt="S9 Game image of installing via TrollStore"
                  width={300}
                  height={300}
                />
                <Image
                  src={InstallOrImport}
                  alt="S9 Game image of installing via TrollStore"
                  width={300}
                  height={300}
                />
              </div>

              <h3 className="text-xl font-semibold mb-4">
                Method 1: Sideloading via TrollStore
              </h3>
              <p className="mb-2">Follow the instructions for installation:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  Download TrollStore: Start by downloading the TrollStore app
                  from a trusted source like GitHub.
                </li>
                <li>
                  Grab the S9 Game File: Visit our website and download the
                  latest version of the S9 Game.
                </li>
                <li>
                  Open TrollStore: Launch TrollStore and tap the "Import"
                  option.
                </li>
                <li>
                  Import the Game File: Select the S9 Game file you downloaded.
                </li>
                <li>
                  Wait for Installation: TrollStore will import and install the
                  app automatically—just wait a few moments.
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Image
                src={Jailbreak}
                className="m-auto mb-4"
                alt="S9 Game image of installing via Jailbreaking"
                width={700}
                height={400}
              />
              <h3 className="text-xl font-semibold mb-4">
                Method 2: Jailbreaking via Evasion
              </h3>
              <p className="mb-2">
                Below you can check the installation guide via Eviation:
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  Backup Your Phone: Before starting, back up your iPhone to
                  your PC.
                </li>
                <li>
                  Download Evasion 7: Install the Evasion 7 Jailbreaking tool on
                  your computer.
                </li>
                <li>
                  Start Jailbreaking: Connect your iPhone to your PC, open
                  Evasion 7, and click "Jailbreak."
                </li>
                <li>
                  Follow Prompts: Unlock your phone mid-process if prompted.
                </li>
                <li>
                  Install the S9 Game: After Jailbreaking, download and install
                  the S9 Game just like any other app.
                </li>
              </ol>
            </CardContent>
          </Card>
        </section>

        {/* Required Specs */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">
            Required Specs for S9 Game iOS Installation
          </h2>
          <p className="text-muted-foreground mb-4">
            Check the following criteria before installing. So, you will not
            face any issue in the installation process.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Verify that you have iOS 11.0 or higher updated.</li>
            <li>
              Before downloading, make sure your storage is at least 500 MB
              free.
            </li>
            <li>
              To avoid disruptions, make sure your internet connection is
              reliable.
            </li>
          </ul>
          <p className="text-muted-foreground mt-4">
            You can join in on the enthusiasm, enjoy seamless gameplay, and
            begin making real money on your iOS smartphone by following these
            easy steps!
          </p>
        </section>

        {/* Comparison */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">
            Comparison of S9 Game iOS & Android Versions
          </h2>
          <p className="text-2xl font-semibold mb-4">
            Battle of Platforms: iOS vs. Android—Which One Reigns Supreme?
          </p>
          <p className="text-muted-foreground mb-4">
            Both iOS and Android users have an incredible time with the Super S9
            Game. However, which version is the best? Let us explore it and
            examine the comparative advantages of these two platforms!
          </p>

          <h3 className="text-xl font-semibold mb-4">
            Similar Features: What Both Versions Offer
          </h3>
          <p className="text-muted-foreground mb-2">
            These notable aspects are constant across all devices:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li>
              <strong>Gameplay & Graphics:</strong> Both platforms offer smooth
              gameplay and amazing; high-quality graphics.
            </li>
            <li>
              <strong>Registration & Transactions:</strong> Both versions use
              the same method of registration, deposits, and withdrawals.
            </li>
            <li>
              <strong>Feature Availability:</strong> No one is left behind as
              all users take advantage of the same exciting games and financial
              chances!
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">
            Divergent Features: Key Differences
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Performance</h4>
                <p className="mb-2">
                  <strong>iOS:</strong> Enhanced performance for iOS devices
                  means smoother gameplay, particularly with the latest iPhone
                  versions.
                </p>
                <p>
                  <strong>Android:</strong> Depending on your device's
                  requirements, performance varies; smartphones with low specs
                  can struggle a little.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">
                  Procedure for Installation
                </h4>
                <p className="mb-2">
                  <strong>iOS:</strong> A little complex because it requires
                  sideloading or jailbreaking.
                </p>
                <p>
                  <strong>Android:</strong> A simple APK that is easy and quick
                  to download and install.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Limitations</h4>
                <p className="mb-2">
                  <strong>iOS:</strong> More rigid because of Apple's safety
                  standards, however this guarantees a more secure gaming
                  experience.
                </p>
                <p>
                  <strong>Android:</strong> Provides greater choices of
                  customization for apps and device usage.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold mb-2">Who Wins?</h4>
            <p className="text-muted-foreground mb-2">
              If security and impeccable gaming are important to you, go with
              iOS.
            </p>
            <p className="text-muted-foreground mb-4">
              If you want liberty in app usage and ease of installation, go with
              Android.
            </p>
            <p className="text-muted-foreground">
              In the end, the Super S9 Game is a great option for any smartphone
              because both versions offer the pleasure and earning opportunities
              you desire. What would you choose, then?
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Can I install the S9 Game on iOS without Jailbreaking?
              </AccordionTrigger>
              <AccordionContent>
                Yes, you can! The S9 Game can be installed on iOS devices using
                the TrollStore sideloading method, which eliminates the need for
                jailbreaking. This keeps your device secure while granting you
                access to the game.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Is the S9 Game for iOS better than the Android version?
              </AccordionTrigger>
              <AccordionContent>
                It depends on your priorities! The iOS version offers smoother
                gameplay and enhanced security, ideal for users seeking a
                polished experience. Meanwhile, Android provides easier
                installation and greater flexibility. Both versions excel in
                delivering fun and earning opportunities.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can I earn money on S9 Game for iOS?
              </AccordionTrigger>
              <AccordionContent>
                Whether you're using iOS or Android, the S9 Game allows you to
                play multiple games and earn real money. Withdrawals are
                seamless and can be directly transferred to your account,
                regardless of the platform you choose.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Conclusion */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
          <p className="text-muted-foreground mb-4">
            More than simply gaming software, the Super S9 Game for iOS is your
            pass to fun, prizes, and countless chances to win real money. This
            app has something for everyone, whether you're jailbreaking it for
            more advanced access or sideloading it for security. It's the ideal
            balance of enjoyment and usefulness because of its fast-paced
            gameplay, captivating visuals, and easy-earning possibilities.
          </p>
          <p className="text-muted-foreground mb-4">
            Why wait, then? Explore the world of S9, put your abilities to the
            test, and let the victories do the talking. The excitement on your
            iOS smartphone has increased considerably!
          </p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white gap-2">
            <Download size={20} />
            Download S9 Game for iOS Now
          </Button>
        </section>
      </div>
    </div>
  );
}
