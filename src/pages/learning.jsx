import Head from 'next/head'
import Link from 'next/link'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function LearningSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-10">
        {children}
      </ul>
    </Section>
  )
}

function Learning({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Learnings() {
  return (
    <>
      <Head>
        <title>Learnings - Pochi Chao</title>
        <meta
          name="description"
          content="What I've used for learning coding / programming."
        />
      </Head>
      <SimpleLayout
        title="What I've used for learning coding / programming."
        intro=""
      >
        <div className="space-y-16">
          <LearningSection title="Online Courses">
            <Learning title="Udemy - 'The Complete 2023 Web Development Bootcamp' by Angela Yu">
              <Link
                href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
                className="text-blue-400"
              >
                Covers HTML, CSS, JavaScript, Node + Express, React, MongoDB, and some Web3 stuff.
              </Link>
            </Learning>
            <Learning title="Udemy - '100 Days of Code: The Complete Python Pro Bootcamp for 2023' by Angela Yu">
              <Link
                href="https://www.udemy.com/course/100-days-of-code/"
                className="text-blue-400"
              >
                Covers Python, Flask, Pandas.
              </Link>
            </Learning>
          </LearningSection>
          <LearningSection title="One-on-One Mentoring Sessions via Zoom">
            <Learning title="Playground Technology School by wenquai">
              I had the privilege of attending the {" "} 
              <Link
                href="https://onplayground.notion.site/Playground-Technology-School-176eef9dcdc14adcb4d66b280b7b0406"
                className="text-blue-400"
              >
                pilot program for Playground
              </Link>
               {" "} since I was friends with wenquai. 
              Through a well-crafted, project-oriented curriculum and our weekly Zoom sessions, I greatly reinforced 
              my knowledge of HTML, CSS, JavaScript, and React from the Web Dev Udemy course. I also learned about
              NextJS, TypeScript, TailwindCSS, OpenAI, common APIs like NextAuth, and more!
            </Learning>
          </LearningSection>
          <LearningSection title="YouTube Channels">
            <Learning title="Fireship">
              To round out the &quot;hard&quot; learning sessions and reduce the fatigue of rapid learning for new coders, {" "}
              <Link
                href="https://www.youtube.com/@Fireship"
                className="text-blue-400"
              >
                Fireship
              </Link>
               {" "} is such a great channel for &quot;soft&quot; learning through entertaining yet info-packed videos. 
            </Learning>
          </LearningSection>
          <LearningSection title="Troubleshooting Refs other than StackOverflow">
            <Learning title="BobbyHadz">
              So, so many common web development bugs are catalogued in {" "}
              <Link
                href="https://bobbyhadz.com/"
                className="text-blue-400"
              >
                BobbyHadz&apos; website
              </Link>
               {" "}, and his website and articles have a super clean UI with clear, thorough explanations of bugs. 
            </Learning>
          </LearningSection>
        </div>
      </SimpleLayout>
    </>
  )
}
