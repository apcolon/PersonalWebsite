import { resumeUrl } from "@/lib/contact";

export const metadata = { title: "Resume | Antonio Colon" };

export default function ResumePage() {
  return (
    <>
      <header className="page-header topo">
        <div className="shell resume-intro">
          <h1>Resume</h1>
          <a className="button" href={resumeUrl} download>
            Download PDF
          </a>
        </div>
      </header>
      <div className="shell page-body">
        <div className="resume-viewer">
          <iframe src={`${resumeUrl}#view=FitH`} title="Antonio Colon resume" />
        </div>
        <p className="resume-fallback">
          Preview not loading? <a href={resumeUrl}>Open the resume in a new tab.</a>
        </p>
      </div>
    </>
  );
}
