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
  ComputerIcon as Desktop,
  Apple,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import S9Game from "@/public/s9 game.png";
import S9Games from "@/public/s9 games.png";
import S9Lottery from "@/public/s9 lottery.png";

import SevenUpDown from "@/public/list of games/7 UP Down.png";
import BlackRed from "@/public/list of games/Black red.png";
import BlackJacks from "@/public/list of games/Black Jacks.png";
import CashRoulette from "@/public/list of games/Cash roulette.png";
import CricketBattle from "@/public/list of games/Cricket Battle.png";
import FuriteParty from "@/public/list of games/Furite Party.png";
import TigerAndDragon from "@/public/list of games/Tiger and Dragon.png";
import JhanduMunda from "@/public/list of games/Jhandi Munda.png";
import Mines from "@/public/list of games/Mines.png";
import TexasCowBoys from "@/public/list of games/Texas Cowboys.png";
import Rummy from "@/public/list of games/Rummy.png";
import TeenPatti from "@/public/list of games/Teen Patti.png";
import SportsAndLudo from "@/public/list of games/Sports and ludo.png";
import SeabadBonanza from "@/public/list of games/Seabad Bonanza.png";
import WingoLottery from "@/public/list of games/Wingo Lottery.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "S9 Game Download apk Latest Version in pakistan",
  description:
    "Super S9 Game (super 9)  is one of the greatest online gaming platforms in Pakistan, offering a variety of games including Roulette, Mines, Dragon Tiger, Blackjack, Ludo, and S9 Rich Ticket. Players can invest and earn real money while enjoying their favorite games.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[url('/s9-game-banner.webp')] bg-no-repeat bg-cover bg-center bg-fixed py-8 sm:py-16">
        <div className="container flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="md:hidden border rounded-lg border-white/20 p-4 mx-4 md:mx-0 md:p-8 flex flex-col items-center justify-center">
            <Image src={S9Game} alt="S9 Game image" width={600} height={600} />
          </div>
          <div className="px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              S9 Game
            </h1>
            <p className="text-white/90 mb-6 sm:mb-8">
              Real Gold Latest Version (V1.3.98)
            </p>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white gap-2">
              <Download size={20} />
              Download S9 Game APK
            </Button>
          </div>
          <div className="hidden border rounded-lg border-white/20 p-4 mx-4 md:mx-0 md:p-8 md:flex flex-col items-center justify-center">
            <Image src={S9Game} alt="S9 Game image" width={600} height={600} />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-12 sm:space-y-24">
        {/* What is S9 Game Section */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What is S9 Game APK?</h2>
          <div className="my-4 border rounded-lg border-white/20 p-4 mx-4 md:mx-0 md:p-8 flex flex-col items-center justify-center">
            <Image src={S9Games} alt="S9 Game image" width={800} height={600} />
          </div>
          <p className="text-muted-foreground mb-8">
            S9 Game APK is one of the greatest online gaming platforms in
            Pakistan, offering a variety of games including Roulette, Mines,
            Dragon Tiger, Blackjack, Ludo, and S9 Rich Ticket. Players can
            invest and earn real money while enjoying their favorite games.
          </p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white gap-2">
            <Download size={20} />
            Download S9 Game APK
          </Button>
        </section>

        {/* Requirements Section */}
        <section id="requirements">
          <h2 className="text-3xl font-bold text-center mb-12">
            Requirements to Install
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
            <RequirementCard
              icon={<Smartphone className="w-8 h-8" />}
              title="Android"
              requirements={[
                "App installation file",
                "Active and stable internet connection",
              ]}
            />
            <RequirementCard
              icon={<Apple className="w-8 h-8" />}
              title="iOS"
              requirements={[
                "Device should not be rooted",
                "Works on old versions",
                "No extra functions needed",
              ]}
            />
            <RequirementCard
              icon={<Desktop className="w-8 h-8" />}
              title="PC"
              requirements={[
                "Play directly in browser",
                "Or use Android emulator",
                "Install game through emulator",
              ]}
            />
          </div>
        </section>

        {/* How to Download Section */}
        <section id="download">
          <h2 className="text-3xl font-bold text-center mb-12">
            How to Download S9 Game APP?
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Downloading process
              </h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  Click on the "Download" button available in the download
                  section.
                </li>
                <li>
                  Now, tap the "Download Now" button to start the downloading.
                </li>
                <li>
                  After clicking the download now button, a window appears to
                  confirm whether you want to download the APK file. So, click
                  on the "Download anyway" option.
                </li>
                <li>Wait to download the file completely.</li>
              </ol>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Installation guide
              </h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  After completing the downloading process click on the file
                  from your notification bar. A window appears to ask you "Do
                  you want to install the app".
                </li>
                <li>
                  Click the "INSTALL" button. Also, don't forget to enable
                  third-party apps.
                </li>
                <li>
                  After a wait of a few seconds, your App is installed
                  successfully, and the option "Open" appears on your phone
                  screen.
                </li>
              </ol>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Account creation</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  Once you install the app, you have two options: Register or
                  Login.
                </li>
                <li>
                  If you already have an account, click the "Login" button and
                  play your desired games.
                </li>
                <li>
                  But if you are new to the app, then tap on the "Register"
                  button.
                </li>
                <li>Then enter the required data.</li>
                <li>Enter your name, Gmail address, and phone number.</li>
                <li>Select a secure password that has never been used.</li>
                <li>
                  After submitting the form, click to receive the OTP on your
                  device.
                </li>
                <li>
                  Tap to verify. And your account is created successfully.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features">
          <h2 className="text-3xl font-bold text-center mb-12">
            Features of S9 Game APK
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-muted-foreground">
              Here are some key features available in the latest version of the
              S9 Game:
            </p>
            <h3 className="text-2xl font-bold mb-4">Features of S9 Lottery</h3>
            <ul className="space-y-4 list-disc list-inside">
              <li>
                <strong>Earing through the Referral system</strong> You can
                receive a referral bonus when you use a referral link to
                persuade new players to join the game. These players contribute
                to the game and make money by investing. To increase your
                income, you should post your link on as many social media sites
                as you can.
              </li>
              <li>
                <strong>Huge Variety of Games</strong> The rules for unlocking
                card games are different, but players can use this game to
                access them as well. On the other hand, every game is
                straightforward and has rounds. In addition, other games that
                focus on puzzles and slots, such as 7UP, Tiger and Dragon,
                Mines, Ludo, Blackjack, and many more, captivate players.
              </li>
              <li>
                <strong>Free Lucky Spins</strong> In this game, you can easily
                receive a lucky spin when you deposit more than 1000PKR. It
                features a wheel where you can win a lot of real money,
                motorcycles, smartphones, and other prizes. When the wheel stops
                on any number your account is credited with lots of coins. So
                take a chance and reap a lot of beneficial benefits.
              </li>
              <li>
                <strong>Level Crosses Multiple Rewards</strong> Every game will
                be unlocked when you cross the specific level. After crossing
                the levels you become eligible for the game, as well as you are
                rewarded with additional funds. For this, you should be
                consistent in your daily gaming challenges. Complete the
                challenges and win multiple rewards.
              </li>
              <li>
                <strong>Unlock All Game Modes</strong> After getting feedback,
                the latest version of the S9 game has different modes available
                for players. If you're playing individually, solo mode is best
                for you. And if you are playing with your friends then, you
                should select other modes in the game. For a better experience,
                try all modes and then choose accordingly.
              </li>
              <li>
                <strong>High Quality and Use-Friendly 3D interface</strong> The
                finest feature of the S9Game APP is its high-quality graphics.
                The games become more interesting as you play.
              </li>
              <li>
                <strong>Secure Payment Method</strong> The app has a highly
                secure and reliable payment method for a safe withdrawal from
                the app to your provided account.
              </li>
            </ul>
          </div>
        </section>

        {/* S9 Lottery Section */}
        <section id="lottery" className="bg-muted p-8 rounded-lg">
          <div className="my-4 md:mx-0 md:p-4 flex flex-col items-center justify-center">
            <Image
              src={S9Lottery}
              alt="S9 Game lottery image"
              className="border rounded-lg border-white/20"
              width={800}
              height={600}
            />
          </div>
          <h2 className="text-3xl font-bold text-center mb-8">S9 Lottery</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-muted-foreground">
              Get your Lucky S9 Rich Ticket for only 500 rupees and win up to 1
              Million!
            </p>
            <h3 className="text-2xl font-bold mb-4">Benefits of S9 Lottery</h3>
            <ul className="space-y-4 list-disc list-inside">
              <li>
                <strong>Regular Updates:</strong> The fact that S9 Game Online
                keeps app updates is one of its most notable features. This
                online platform contains a large number of games, and its makers
                update them every day. It guarantees that gamers have complete
                access to every category and what is fresh for newbies. The app
                keeps you updated on changes and notifies you every day on your
                Android devices.
              </li>
              <li>
                <strong>Free to Play:</strong> More than fifteen games in the S9
                Game App Download are free to play and enjoy during your free
                time. Players can win real coins by playing these games. These
                games are useful for beginners who want to progress to bounty
                games later. You can send a referral link to your friends to
                play with them, too.
              </li>
              <li>
                <strong>Improving Constantly:</strong> Makers are improving the
                app after getting feedback from users. It's the best way to
                engage with users to update their desired features as they want.
                New games are also added to every latest version of the app.
              </li>
              <li>
                <strong>Multiple Withdrawal options:</strong> The S9 Game app
                has multiple and easy withdrawal options. You just need to
                connect your JazzCash or Easypaisa app then you can transfer
                funds within a few moments.
              </li>
              <li>
                <strong>Winning Opportunities:</strong> Winning Opportunities
                increases with experience. This app has more than an 80% chance
                of winning, but I suggest understanding the games and features
                to improve your win rate.
              </li>
              <li>
                <strong>Low Deposits:</strong> Because of its minimum deposit
                feature, users showed more interest in the app. You have to
                invest a bit to start your gaming journey then you'll earn when
                your gaming skills are enhanced to the next level.
              </li>
            </ul>
          </div>
        </section>

        {/* Personal Experience Section */}
        <section id="experience">
          <h2 className="text-3xl font-bold text-center mb-8">
            My Personal Experience with the S9 Game
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground mb-4">
              I played the game on the Super S9 Game App Personally. I won many
              rewards while playing and unlocked different Features. I also got
              a side hustle during my work break and scrolling time.
            </p>
            <p className="text-muted-foreground mb-4">
              The withdrawal method is so easy and convenient even for new
              users, you can withdraw your funds directly to your bank accounts
              or wallets in just a few moments.
            </p>
            <p className="text-muted-foreground">
              My overall experience is so good with the App, recommended from my
              side!
            </p>
          </div>
        </section>

        {/* Games List Section */}
        <section id="games">
          <h2 className="text-3xl font-bold text-center mb-12">
            Available Games
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {games.map((game, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-muted text-center flex flex-col items-center"
              >
                <Image src={game.icon} alt="game icon" width={50} height={50} />
                <span className="mt-2">{game.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Support Section */}
        <section id="support">
          <h2 className="text-3xl font-bold text-center mb-12">24/7 Support</h2>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-muted-foreground">
              Users become depressed when they do not receive active support
              when playing online games. It plays an important part in answering
              their questions. When we look at S9 customer service, we can see
              that it is always active and ready to help its customers. You can
              send your concerns directly to the customer service department.
            </p>
            <p className="text-muted-foreground">
              The customer service and assistance helpline is available 24 hours
              a day, seven days a week. They have included their contact
              information in the app, and customers can phone the helpline and
              submit their problems.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Official Group</h3>
                  <Button variant="outline" className="w-full">
                    Join Group
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">WhatsApp</h3>
                  <Button variant="outline" className="w-full">
                    0328-0769478
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">YouTube</h3>
                  <Button variant="outline" className="w-full">
                    Visit Channel
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section id="conclusion">
          <h2 className="text-3xl font-bold text-center mb-8">Conclusion</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground mb-4">
              That is all I have to say about the Super S9 Game APK in as much
              detail as possible so that you can better understand its features
              and what I have shared with you. If you are competent at this game
              or want to learn how to play it, you should download it to your
              Android smartphone and begin playing it regularly.
            </p>
            <p className="text-muted-foreground">
              This game is specifically intended for players who enjoy playing
              it. There are many other types of games in the world, but few are
              as well-known as this one since they allow players to win a lot of
              money and other rewards while playing.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

function RequirementCard({ icon, title, requirements }: any) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-4 text-primary">{icon}</div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <ul className="space-y-2 text-muted-foreground">
          {requirements.map((req: any, index: any) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

const games = [
  { name: "Teen Patti", icon: TeenPatti },
  { name: "Tiger and Dragon", icon: TigerAndDragon },
  { name: "Cash Roulette", icon: CashRoulette },
  { name: "Jhandi Munda", icon: JhanduMunda },
  { name: "Sports and Ludo", icon: SportsAndLudo },
  { name: "Mines", icon: Mines },
  { name: "Black Jacks", icon: BlackJacks },
  { name: "Seabad Bonanza", icon: SeabadBonanza },
  { name: "Black Red", icon: BlackRed },
  { name: "7 UP Down", icon: SevenUpDown },
  { name: "Rummy", icon: Rummy },
  { name: "Texas Cowboys", icon: TexasCowBoys },
  { name: "Fruit Party", icon: FuriteParty },
  { name: "Cricket Battle", icon: CricketBattle },
  { name: "Wingo Lottery", icon: WingoLottery },
];

const faqs = [
  {
    question: "How To Create an Account?",
    answer:
      "Download the app, click on 'Registration', follow the instructions, fill out the form with essential details, and verify your account.",
  },
  {
    question: "How to Use S9 Game APK?",
    answer:
      "Choose your favorite game from the home page, follow the game rules, and start playing. You can watch live games and place customized bets. Winnings can be transferred to your bank account.",
  },
  {
    question: "How do you withdraw money from the S9 Game APK?",
    answer:
      "Visit the withdrawal section and select your preferred payment method (E-Wallet or bank account). Provide valid account information to receive your winnings.",
  },
  {
    question: "Is the S9 Game App safe to download?",
    answer:
      "Yes, the app is safe to download. It has been scanned for viruses and protects your personal information.",
  },
  {
    question: "Can I Use the S9 Game On PC?",
    answer:
      "Yes, you can play on PC either directly through the browser or by setting up an Android emulator.",
  },
  {
    question: "Can I play the S9 Game on iOS?",
    answer:
      "Yes, the game works on iOS devices that are not rooted and don't require additional functions.",
  },
];
