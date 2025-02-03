import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Download, Smartphone, CheckCircle } from "lucide-react";
import S9GameAndroid from "@/public/s9 game.png";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "S9 Game Download APK V1.4.23 For Android",
  description:
    "Super S9 Game is the real earning app for Android. It allows you to play games & buy lottery tickets to win awards. Download the latest Super 9 APK from here!",
};

export default function AndroidPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[url('/s9-game-banner.webp')] bg-no-repeat bg-cover bg-center bg-fixed py-8 sm:py-16">
        <div className="mb-8 px-4 sm:px-6 lg:px-8 md:mx-0 flex flex-col justify-center">
          <Image
            src={S9GameAndroid}
            alt="S9 Game image"
            width={600}
            height={600}
          />
        </div>

        <div className="container px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            S9 Game for Android - Latest APK Free Download
          </h1>
          <p className="text-white/90 mb-6 sm:mb-8">
            Transform your Android device into a gaming powerhouse!
          </p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white gap-2">
            <Download size={20} />
            Download S9 Game APK
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <div className="container px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-12 sm:space-y-24">
        {/* Introduction */}
        <section>
          <p className="text-muted-foreground mb-4">
            Are you trying to find a terrific gaming experience that is close to
            your fingers? The Android S9 Game is here to transform how you play
            games ultimately. With an extensive variety of games, easy
            navigation, and a strong earning system, this app guarantees that
            you will have entertainment and make money.
          </p>
          <p className="text-muted-foreground mb-4">
            The S9 Game APK includes a user-friendly interface, modern visuals,
            and quick, reliable transactions, whether you're a moderate gamer or
            someone who enjoys competition. This Android-optimized gaming
            platform is made to provide an excellent gaming experience on your
            device, even if it's not the newest model, so forget about delays or
            tricky setups.
          </p>
          <p className="text-muted-foreground">
            Why wait? Get the S9 Game APK immediately to turn your regular
            gaming sessions into an exciting adventure with many chances to win
            big!
          </p>
        </section>

        {/* Why Play S9 Game on Android */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Why Play S9 Game on Android
          </h2>
          <p className="text-2xl font-semibold mb-4">
            Unmatched Convenience, Effortless Fun!
          </p>
          <p className="text-muted-foreground mb-4">
            The S9 Game for Android offers hours of entertainment and real-money
            rewards. It gives players an unusual gaming experience worldwide and
            is optimized for Android devices. Whether you're a seasonal gamer or
            a daily pro, the features of the S9 Game APK make it a top pick for
            mobile gaming.
          </p>
          <p className="text-muted-foreground mb-4">
            Some of the core features are listed below!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8">
            <Card>
              <CardContent className="p-6">
                <Smartphone className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  Accessible Anytime, Anywhere
                </h3>
                <p className="text-muted-foreground">
                  Enjoy your favorite games whenever and wherever you choose.
                  The app's small size ensures smooth performance even on
                  affordable Android smartphones.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CheckCircle className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  Optimized for Android Devices
                </h3>
                <p className="text-muted-foreground">
                  Experience lag-free gameplay and immersive graphics, even on
                  affordable Android smartphones. Your device can easily manage
                  multiplayer games and live sports betting.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Download className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  Simple Installation Process
                </h3>
                <p className="text-muted-foreground">
                  No complicated settings or technical knowledge required! The
                  S9 Game APK is easy to install with just a few taps.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How to Download and Install */}
        <section>
          <div className="mb-8 flex flex-col justify-center">
            <Image
              src={S9GameAndroid}
              alt="S9 Game image"
              width={600}
              height={600}
            />
          </div>
          <h2 className="text-3xl font-bold mb-6">
            Steps to Download and Install S9 Game APK on Android
          </h2>
          <p className="text-muted-foreground mb-4">
            Here's your ultimate guide to getting started:
          </p>
          <ol className="list-decimal list-inside space-y-4 text-muted-foreground">
            <li>
              <strong>Allow Unknown Sources:</strong> Go to Settings - Security
              or Privacy and enable "Unknown Sources".
            </li>
            <li>
              <strong>Download the S9 Game APK:</strong> Visit our official
              website and click the download link.
            </li>
            <li>
              <strong>Locate the APK file:</strong> Open your File Manager or
              Downloads folder and find the S9 Game APK file.
            </li>
            <li>
              <strong>Install the APK:</strong> Tap on the APK file and follow
              the prompts to install.
            </li>
            <li>
              <strong>Launch and play:</strong> Open the app, create an account
              or log in, and start playing!
            </li>
          </ol>
        </section>

        {/* Installation Requirements */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Installation Requirements for S9 Game APK
          </h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              Ensure your device has at least 500 MB of free storage before
              installation.
            </li>
            <li>Keep your Android version updated for optimal performance.</li>
            <li>
              Use a secure internet connection to avoid any issues during the
              download.
            </li>
          </ul>
        </section>

        {/* How to Play */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            How to Play Super S9 Game APK on Android
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>
              Launch the Game: Open the S9 Game app from your home screen.
            </li>
            <li>
              Sign Up or Log In: Register if you're new or log into your
              existing account.
            </li>
            <li>Choose a Game: Pick from a variety of exciting games.</li>
            <li>
              Place Your Bet or Play: Start playing by depositing for bets or
              enjoying casual games.
            </li>
            <li>Play & Earn: Win games and earn real money rewards.</li>
          </ol>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Key Features of S9 Game on Android
          </h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>User-Friendly Interface</li>
            <li>Wide Variety of Games</li>
            <li>Smooth Transactions and Payouts</li>
          </ul>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Is S9 Game Safe to Download on Android?
              </AccordionTrigger>
              <AccordionContent>
                Yes, S9 Game is safe to download from trusted sources. Ensure
                you're downloading the APK from an official website to avoid any
                security issues and enjoy a smooth, secure gaming experience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What Android Version Is Required for S9 Game?
              </AccordionTrigger>
              <AccordionContent>
                The S9 Game requires Android 5.0 or higher for optimal
                performance. Ensure your device meets the requirements to enjoy
                seamless gameplay and full functionality.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can I Earn Money with S9 Game on Android?
              </AccordionTrigger>
              <AccordionContent>
                S9 Game allows you to earn real money by playing various games.
                Win games, complete challenges, and withdraw your earnings
                directly to your bank account or preferred payment method.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
          <p className="text-muted-foreground mb-4">
            The S9 Game for Android delivers all gamers with an engaging,
            accessible, and profitable gaming experience. The game offers smooth
            integration with your Android device, whether you want to make real
            money or enjoy top-notch gameplay. It's time to upgrade your mobile
            gaming experience with its simple installation, seamless operation,
            and many money-making options.
          </p>
          <p className="text-muted-foreground mb-6">
            Don't hesitate; get the S9 Game APK now and begin playing to win
            rewards!
          </p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white gap-2">
            <Download size={20} />
            Download S9 Game APK Now
          </Button>
        </section>
      </div>
    </div>
  );
}
