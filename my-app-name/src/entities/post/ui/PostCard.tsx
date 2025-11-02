type PostCardProps = {
  title: string
  text: string
}

function PostCard({ title, text }: PostCardProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default PostCard
