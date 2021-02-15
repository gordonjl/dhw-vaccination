
interface FaqItemProps{
  question:string
  answer:string
}

export function FaqItem({ question, answer }: FaqItemProps) {
  return <div className="flex flex-col space-y-2">
    <div className="font-bold text-lg">{question}</div>
    <div className="text-base">{answer}</div>
  </div>;
}
