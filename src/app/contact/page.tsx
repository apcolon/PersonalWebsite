export const metadata = { title: "Contact | Antonio Colon" };

export default function ContactPage() {
  return (
    <section className="page shell contact-layout">
      <div className="page-intro">
        <p className="eyebrow">Contact</p>
        <h1>Let&apos;s build something useful.</h1>
        <p>
          I&apos;m always happy to talk about engineering, interesting products,
          and new opportunities. The fastest way to reach me is by email.
        </p>
      </div>
      <div className="contact-card">
        <p className="eyebrow">Say hello</p>
        <a className="contact-email" href="mailto:apcolon@umich.edu">
          apcolon@umich.edu
        </a>
        <p>I&apos;d be glad to hear what you&apos;re working on.</p>
        <div className="social-links">
          <a href="https://github.com/apcolon" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/apcolon/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </section>
  );
}
