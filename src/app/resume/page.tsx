export const metadata = { title: "Resume | Antonio Colon" };

export default function ResumePage() {
  return (
    <section className="page shell">
      <div className="page-intro resume-intro">
        <div>
          <p className="eyebrow">Resume</p>
          <h1>Experience at a glance.</h1>
          <p>
            Add your resume as <code>public/antonio-colon-resume.pdf</code> to
            enable the links below.
          </p>
        </div>
        <a className="button button-primary" href="/antonio-colon-resume.pdf" download>
          Download PDF
        </a>
      </div>
      <div className="resume-placeholder">
        <p className="eyebrow">PDF preview</p>
        <h2>Your resume will appear here.</h2>
        <p>
          Once the file is added, replace this panel with an embedded PDF or
          keep the clean download-only experience.
        </p>
      </div>
    </section>
  );
}

