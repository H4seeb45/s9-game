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
  Users,
  Gamepad2,
  Zap,
  Trophy,
  Layers,
  Monitor,
  Lock,
  Phone,
  ComputerIcon as Desktop,
  Apple,
  Smartphone,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-900 dark:to-blue-900 py-16">
        <div className="container mx-8 md:mx-40 flex flex-col items-center md:items-start justify-center">
          <h1 className="text-4xl font-bold text-white mb-4">S9 Game</h1>
          <p className="text-white/90 mb-8">
            Real Gold Latest Version (V1.3.98)
          </p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white gap-2">
            <Download size={20} />
            Download S9 Game APK
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-16 space-y-24">
        {/* What is S9 Game Section */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What is S9 Game APK?</h2>
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
          <div className="grid md:grid-cols-3 gap-6 px-8 md:px-40">
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
          <h2 className="text-3xl font-bold text-center mb-8">S9 Lottery</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-muted-foreground">
              The craziest feature of the S9 Game app is the{" "}
              <strong>S9 Lottery.</strong> You can buy a S9 Rich Ticket for only
              in 500 rupees and try your Luck.{" "}
            </p>
            <p className="text-muted-foreground">
              If you win the lottery, the reward will be of{" "}
              <strong>1 Million</strong>. Isn't it amazing and mind-blowing? So
              what are you waiting for? Go, get your S9 Rich Ticket, and test
              your <strong>luck!</strong>
            </p>
            <p className="text-muted-foreground">
              Additionally, it has also a pair offer for you. That is Buy 2 get
              1 Free So, if you buy two tickets together, you will get another
              one for free. Think! What will be the probability of your win? If
              you're participating in the lottery with more than one ticket? Get
              the Offer Now and test your <strong>LUCK!</strong>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-40">
            {games.map((game, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-muted text-center flex flex-col items-center"
              >
                {game.icon}
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
          <div className="max-w-3xl mx-auto">
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
  { name: "Teen Patti", icon: <Gamepad2 className="w-8 h-8" /> },
  { name: "Tiger and Dragon", icon: <Zap className="w-8 h-8" /> },
  { name: "Cash Roulette", icon: <Trophy className="w-8 h-8" /> },
  { name: "Jhandi Munda", icon: <Layers className="w-8 h-8" /> },
  { name: "Sports and Ludo", icon: <Users className="w-8 h-8" /> },
  { name: "Mines", icon: <Monitor className="w-8 h-8" /> },
  { name: "Black Jacks", icon: <Lock className="w-8 h-8" /> },
  { name: "Seabad Bonanza", icon: <Gamepad2 className="w-8 h-8" /> },
  { name: "Black Red", icon: <Zap className="w-8 h-8" /> },
  { name: "7 UP Down", icon: <Trophy className="w-8 h-8" /> },
  { name: "Rummy", icon: <Layers className="w-8 h-8" /> },
  { name: "Texas Cowboys", icon: <Users className="w-8 h-8" /> },
  { name: "Fruit Party", icon: <Monitor className="w-8 h-8" /> },
  { name: "Cricket Battle", icon: <Lock className="w-8 h-8" /> },
  { name: "Wingo Lottery", icon: <Gamepad2 className="w-8 h-8" /> },
  { name: "Baccarat", icon: <Zap className="w-8 h-8" /> },
];

const features = [
  { name: "Teen Patti", icon: <Gamepad2 className="w-8 h-8" /> },
  { name: "Tiger and Dragon", icon: <Zap className="w-8 h-8" /> },
  { name: "Cash Roulette", icon: <Trophy className="w-8 h-8" /> },
  { name: "Jhandi Munda", icon: <Layers className="w-8 h-8" /> },
  { name: "Sports and Ludo", icon: <Users className="w-8 h-8" /> },
  { name: "Mines", icon: <Monitor className="w-8 h-8" /> },
  { name: "Black Jacks", icon: <Lock className="w-8 h-8" /> },
  { name: "Seabad Bonanza", icon: <Gamepad2 className="w-8 h-8" /> },
  { name: "Black Red", icon: <Zap className="w-8 h-8" /> },
  { name: "7 UP Down", icon: <Trophy className="w-8 h-8" /> },
  { name: "Rummy", icon: <Layers className="w-8 h-8" /> },
  { name: "Texas Cowboys", icon: <Users className="w-8 h-8" /> },
  { name: "Fruit Party", icon: <Monitor className="w-8 h-8" /> },
  { name: "Cricket Battle", icon: <Lock className="w-8 h-8" /> },
  { name: "Wingo Lottery", icon: <Gamepad2 className="w-8 h-8" /> },
  { name: "Baccarat", icon: <Zap className="w-8 h-8" /> },
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
