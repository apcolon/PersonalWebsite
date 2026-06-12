import Image from "next/image";

export const metadata = { title: "About | Antonio Colon" };

export default function AboutPage() {
  return (
    <section className="page shell">
      <div className="page-intro">
        <p className="eyebrow">About me</p>
        <h1>Engineer, builder, lifelong learner.</h1>
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
            I&apos;m a Miami native and University of Michigan computer science
            graduate with a minor in mathematics who enjoys turning ideas into
            products people can use.
            I&apos;m especially interested in full-stack engineering, AI tools,
            and building clean experiences around complicated technology.
          </p>
          <p>
            Projects like CartWise and Modus AI have given me room to work
            across the stack, make product decisions, and learn what it takes
            to move from an early concept to working software.
          </p>
          <p>
            Away from the keyboard, you can usually find me exploring Miami,
            learning something new, or thinking about the next thing worth
            building.
          </p>
          <div className="facts-grid">
            <div><span>Based in</span><strong>Miami, FL</strong></div>
            <div><span>Education</span><strong>University of Michigan</strong></div>
            <div><span>Focus</span><strong>Full-stack + AI</strong></div>
            <div><span>Status</span><strong>Open to opportunities</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}
