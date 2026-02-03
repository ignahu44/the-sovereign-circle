const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-background border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo / Brand */}
          <div>
            <span className="text-foreground font-serif text-xl tracking-wide">
              Meridian
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex gap-8">
            <a 
              href="#" 
              className="text-foreground-muted text-sm font-sans hover:text-foreground transition-colors duration-300"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="text-foreground-muted text-sm font-sans hover:text-foreground transition-colors duration-300"
            >
              Terms
            </a>
            <a 
              href="#" 
              className="text-foreground-muted text-sm font-sans hover:text-foreground transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <div>
            <p className="text-foreground-muted/60 text-xs font-sans">
              © 2024 Meridian. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
