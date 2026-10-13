import { email, githubUrl, linkedinUrl } from "@/lib/contact";

export const metadata = { title: "Contact | Antonio Colon" };

export default function ContactPage() {
  return (
    <>
      <header className="page-header topo">
        <div className="shell">
          <h1>Get in touch</h1>
          <p>
            Email is the fastest way to reach me. I&apos;m glad to talk about
            engineering, something you&apos;re building, or a role.
          </p>
        </div>
      </header>
      <div className="shell page-body">
        <a className="contact-email" href={`mailto:${email}`}>
          {email}
        </a>
        <p className="contact-links">
          <a href={githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </p>
      </div>
    </>
  );
}
