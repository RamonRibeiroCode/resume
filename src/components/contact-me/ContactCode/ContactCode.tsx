import { ReactNode } from "react"

function ContactCode() {
  return (
    <div className="flex flex-col">
      <CodeLine number={1}>
        <CodePurple>const</CodePurple> <CodeBlue>button</CodeBlue>{" "}
        <CodePurple>=</CodePurple> <CodeBlue>document.querySelector</CodeBlue>
        <CodeGray>(</CodeGray>
        <CodeOrange>{"'sendBtn'"}</CodeOrange>
        <CodeGray>);</CodeGray>
      </CodeLine>

      <CodeLine number={2} />

      <CodeLine number={3}>
        <CodePurple>const</CodePurple> <CodeBlue>message</CodeBlue>{" "}
        <CodePurple>=</CodePurple> <CodeGray>{"{"}</CodeGray>{" "}
      </CodeLine>

      <CodeLine number={4} indent={1}>
        <CodeBlue>name</CodeBlue>
        <CodeGray>:</CodeGray> <CodeOrange>{'"Jonathan Davis"'}</CodeOrange>
        <CodeGray>,</CodeGray>
      </CodeLine>

      <CodeLine number={5} indent={1}>
        <CodeBlue>email</CodeBlue>
        <CodeGray>:</CodeGray> <CodeOrange>{'""'}</CodeOrange>
        <CodeGray>,</CodeGray>
      </CodeLine>

      <CodeLine number={6} indent={1}>
        <CodeBlue>message</CodeBlue>
        <CodeGray>:</CodeGray> <CodeOrange>{'""'}</CodeOrange>
        <CodeGray>,</CodeGray>
      </CodeLine>

      <CodeLine number={7} indent={1}>
        <CodeBlue>date</CodeBlue>
        <CodeGray>:</CodeGray> <CodeOrange>{'"Thu 21 Apr"'}</CodeOrange>
        <CodeGray>,</CodeGray>
      </CodeLine>

      <CodeLine number={8}>
        <CodeGray>{"}"}</CodeGray>
      </CodeLine>

      <CodeLine number={9} />

      <CodeLine number={10}>
        <CodeBlue>button</CodeBlue>
        <CodeGray>.</CodeGray>
        <CodeBlue>addEventListener</CodeBlue>
        <CodeGray>(</CodeGray>
        <CodeOrange>{"'click'"}</CodeOrange>
        <CodeGray>,</CodeGray> <CodeGray>()</CodeGray>{" "}
        <CodePurple>{"=>"}</CodePurple> <CodeGray>{"{"}</CodeGray>
      </CodeLine>

      <CodeLine number={11} indent={1}>
        <CodeBlue>form</CodeBlue>
        <CodeGray>.</CodeGray>
        <CodeBlue>send</CodeBlue>
        <CodeGray>(</CodeGray>
        <CodeBlue>message</CodeBlue>
        <CodeGray>);</CodeGray>
      </CodeLine>

      <CodeLine number={12}>
        <CodeGray>{"}"})</CodeGray>
      </CodeLine>
    </div>
  )
}

interface CodeProps {
  children: ReactNode
}

interface CodeLineProps {
  number: number
  indent?: number
  children?: ReactNode
}

function Line({ children }: CodeProps) {
  return <span className="text-lg text-secondary-gray mr-10">{children}</span>
}

function CodeLine({ number, indent = 0, children }: CodeLineProps) {
  return (
    <div className="flex items-center mb-[2px] last:mb-0">
      <Line>{number}</Line>

      <p style={{ marginLeft: indent * 12 }}>{children}</p>
    </div>
  )
}

function CodePurple({ children }: CodeProps) {
  return <span className="text-lg text-accent-purple">{children}</span>
}

function CodeBlue({ children }: CodeProps) {
  return <span className="text-lg text-primary-blue-code">{children}</span>
}

function CodeGray({ children }: CodeProps) {
  return <span className="text-lg text-secondary-gray">{children}</span>
}

function CodeOrange({ children }: CodeProps) {
  return <span className="text-lg text-accent-orange">{children}</span>
}

export default ContactCode
