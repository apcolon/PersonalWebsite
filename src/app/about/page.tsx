import Image from "next/image";

export const metadata = { title: "About | Antonio Colon" };

export default function AboutPage() {
  return (
    <section className="page shell">
      <div className="page-intro">
        <p className="eyebrow">About me</p>
        <h1>Puerto Rico roots. Miami home. Learning as I go.</h1>
      </div>
      <div className="about-layout">
        <div className="portrait-frame">
          <Image
            src="/images/antonio-graduation.jpg"
            alt="Antonio Colon in University of Michigan graduation regalia"
            width={1200}
            height={1800}
            sizes="(max-width: 700px) 100vw, 40vw"
            priority
          />
        </div>
        <div className="prose">
          <h2>Hey, I&apos;m Antonio.</h2>
          <p>
            I was born in Puerto Rico and now live in Miami. I&apos;m a University
            of Michigan computer science graduate with a minor in mathematics,
            and I enjoy turning ideas into products people can actually use.
            I&apos;m especially interested in the intersection of technology and
            finance, along with my growing interest in machine learning.
          </p>
          <p>
            Projects like CartWise and Modus AI have given me room to work
            across the stack, make product decisions, and learn what it takes
            to move from an early concept to working software.
          </p>
          <p>
            In my free time, I enjoy going to the gym, rock climbing, going on
            runs, and reading. I like having interests that pull me away from a
            screen and give me something different to work toward.
          </p>
          <p>
            One of my favorite challenges was completing the Camino de
            Santiago, walking 150 miles in 10 days from Porto, Portugal, to
            Santiago de Compostela, Spain.
          </p>
          <div className="facts-grid">
            <div><span>Based in</span><strong>Miami, FL</strong></div>
            <div><span>Born in</span><strong>Puerto Rico</strong></div>
            <div><span>Education</span><strong>University of Michigan</strong></div>
            <div><span>Interests</span><strong>Tech, finance + ML</strong></div>
          </div>
        </div>
      </div>

      <section className="about-section volunteering-section">
        <div>
          <p className="eyebrow">Giving back</p>
          <h2>Community work</h2>
        </div>
        <div className="prose">
          <p>
            I&apos;ve volunteered with Feed My Starving Children, helping pack
            meals for communities facing food insecurity. I&apos;ve also organized
            neighborhood donation drives because small, local efforts can still
            put useful things into the hands of people who need them.
          </p>
          <ul className="community-list">
            <li>Collected books for donation to local libraries.</li>
            <li>Collected clothing for a local homeless shelter.</li>
            <li>Collected baby and children&apos;s clothes and toys for shelters and hospitals.</li>
          </ul>
        </div>
      </section>

      <section className="about-section reading-section">
        <div>
          <p className="eyebrow">Off the clock</p>
          <h2>A few books I&apos;ve enjoyed and recommend</h2>
        </div>
        <div className="book-grid">
          <article>
            <p className="book-number">01</p>
            <h3><cite>Stoner</cite></h3>
            <p className="book-author">John Williams</p>
            <p>A quiet, deeply human story about an ordinary life shaped by work, love, and disappointment.</p>
          </article>
          <article>
            <p className="book-number">02</p>
            <h3><cite>The Stranger</cite></h3>
            <p className="book-author">Albert Camus</p>
            <p>A short, unsettling novel that asks how we create meaning in an indifferent world.</p>
          </article>
          <article>
            <p className="book-number">03</p>
            <h3><cite>City of Thieves</cite></h3>
            <p className="book-author">David Benioff</p>
            <p>A darkly funny adventure about friendship and survival during the siege of Leningrad.</p>
          </article>
        </div>
      </section>
    </section>
  );
}
