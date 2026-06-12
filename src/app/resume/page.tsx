export const metadata = { title: "Resume | Antonio Colon" };

const resumeUrl = "/documents/antonio-colon-resume.pdf";

export default function ResumePage() {
  return (
    <section className="page shell">
      <div className="page-intro resume-intro">
        <div>
          <p className="eyebrow">Resume</p>
          <h1>Experience at a glance.</h1>
          <p>Computer science, product engineering, applied AI, and cybersecurity.</p>
        </div>
        <a className="button button-primary" href={resumeUrl} download>
          Download PDF
        </a>
      </div>
      <div className="resume-viewer">
        <iframe src={`${resumeUrl}#view=FitH`} title="Antonio Colon resume" />
      </div>
      <p className="resume-fallback">
        Having trouble with the preview? <a href={resumeUrl}>Open the resume in a new tab.</a>
      </p>
    </section>
  );
}

