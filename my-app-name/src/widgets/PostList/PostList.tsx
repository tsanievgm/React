import PostCard from '../../entities/post/ui/PostCard'

function PostList() {
  const posts = [
    { id: 1, title: 'Первый пост', text: 'Просто текст 1' },
    { id: 2, title: 'Второй пост', text: 'Просто текст 2' },
  ]

  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} title={post.title} text={post.text} />
      ))}
    </div>
  )
}

export default PostList
