import "./InfoTags.css"

interface IInfoTagsProps {
  text: string
}

export default function InfoTags({ text }: IInfoTagsProps) {
  return (
    <div className="info_tag">
      <p>{text}</p>
    </div>
  )
}
