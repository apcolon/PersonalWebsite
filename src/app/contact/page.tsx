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
        <a className="contact-email" href="mailto:your-email@example.com">
          your-email@example.com
        </a>
        <p>Replace this placeholder with your preferred email address.</p>
        <div className="social-links">
          <a href="https://github.com/your-username" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </section>
  );
}
