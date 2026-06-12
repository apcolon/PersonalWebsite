export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <p>Designed and built by Antonio Colon.</p>
        <p>{new Date().getFullYear()} · Miami, Florida</p>
      </div>
    </footer>
  );
}

