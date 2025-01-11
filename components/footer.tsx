export default function Footer() {
  return (
    <footer className="px-4 md:px-12 lg:px-24 border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#support"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Official Group
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="text-muted-foreground hover:text-foreground"
                >
                  WhatsApp Support
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="text-muted-foreground hover:text-foreground"
                >
                  YouTube Channel
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-2">Games</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#games"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Teen Patti
                </a>
              </li>
              <li>
                <a
                  href="#games"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Dragon Tiger
                </a>
              </li>
              <li>
                <a
                  href="#games"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Roulette
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-muted-foreground">WhatsApp: 0328-0769478</p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} S9 Game. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
