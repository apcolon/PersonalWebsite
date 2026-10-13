import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "About | Antonio Colon" };

const books = [
  {
    title: "Stoner",
    author: "John Williams",
    note: "A quiet, deeply human story about an ordinary life shaped by work, love, and disappointment.",
  },
  {
    title: "The Stranger",
    author: "Albert Camus",
    note: "A short, unsettling novel that asks how we create meaning in an indifferent world.",
  },
  {
    title: "City of Thieves",
    author: "David Benioff",
    note: "A darkly funny adventure about friendship and survival during the siege of Leningrad.",
  },
];

export default function AboutPage() {
  return (
    <>
      <header className="page-header topo">
        <div className="shell">
          <h1>Born in Puerto Rico, based in Miami.</h1>
        </div>
      </header>
      <div className="shell page-body">
        <div className="about-layout">
          <div className="photo-frame">
            <Image
              src="/images/antonio-graduation.jpg"
              alt="Antonio Colon in University of Michigan graduation regalia"
              width={1200}
              height={1800}
              sizes="(max-width: 700px) 100vw, 36vw"
              priority
            />
          </div>
          <div className="prose">
            <p>
              I&apos;m Antonio. I was born in Puerto Rico, live in Miami, and
              studied computer science at the University of Michigan with a
              minor in mathematics.
            </p>
            <p>
              I like taking an idea all the way to something people can use.{" "}
              <Link href="/projects/cartwise">CartWise</Link> turns a recipe
              into a Walmart cart. <Link href="/projects/modus-ai">Modus AI</Link>{" "}
              answers questions from a course&apos;s own lectures.{" "}
              <Link href="/projects/rocky">Rocky</Link>, the one I&apos;m on
              now, is an iPhone app that coaches bouldering, and it&apos;s as
              much a way to learn computer vision and iOS as it is a climbing
              tool.
            </p>
            <p>
              I&apos;m interested in where technology meets finance, and lately
              in machine learning.
            </p>
            <p>
              Away from the screen I climb, lift, run, and read. One of my
              favorite challenges was the Camino de Santiago: 150 miles on foot
              in 10 days, from Porto, Portugal, to Santiago de Compostela,
              Spain.
            </p>
            <dl className="facts">
              <div><dt>Based in</dt><dd>Miami, FL</dd></div>
              <div><dt>Born in</dt><dd>Puerto Rico</dd></div>
              <div><dt>Education</dt><dd>University of Michigan</dd></div>
              <div><dt>Interests</dt><dd>Tech, finance, ML</dd></div>
            </dl>
          </div>
        </div>

        <section className="split-section">
          <h2>Work in banking technology</h2>
          <div className="prose">
            <p>
              Two internships at International Finance Bank, a commercial bank in
              Miami, showed me how software, data, and security hold up the
              systems people rely on in financial services.
            </p>
            <div className="experience">
              <h3>Cybersecurity Intern</h3>
              <p className="experience-meta">International Finance Bank · 2024</p>
              <p>
                Ran phishing simulation tests, worked with business impact
                analysis data, and supported brand-protection efforts.
              </p>
            </div>
            <div className="experience">
              <h3>Software Engineering Intern</h3>
              <p className="experience-meta">International Finance Bank · 2023</p>
              <p>
                Analyzed SQL database structure and built Power BI dashboards
                for reporting.
              </p>
            </div>
          </div>
        </section>

        <section className="split-section">
          <h2>Community work</h2>
          <div className="prose">
            <p>
              I&apos;ve packed meals with Feed My Starving Children for
              communities facing food insecurity, and organized donation
              drives in my neighborhood:
            </p>
            <ul className="plain-list">
              <li>Books for local libraries.</li>
              <li>Clothing for a local homeless shelter.</li>
              <li>Baby and children&apos;s clothes and toys for shelters and hospitals.</li>
            </ul>
          </div>
        </section>

        <section className="split-section">
          <h2>Three books I recommend</h2>
          <ul className="book-list">
            {books.map((book) => (
              <li key={book.title}>
                <h3><cite>{book.title}</cite></h3>
                <p className="experience-meta">{book.author}</p>
                <p>{book.note}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
