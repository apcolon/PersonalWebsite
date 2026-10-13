export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <p>
          Built by Antonio Colon in Miami, Florida. {new Date().getFullYear()}.
        </p>
        <p className="footer-quote">
          “It&apos;s a leap of faith.” <cite>Spider-Man: Into the Spider-Verse</cite>
        </p>
      </div>
    </footer>
  );
}
