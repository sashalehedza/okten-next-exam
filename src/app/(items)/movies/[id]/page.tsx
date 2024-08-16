import { getMovieDetail } from '@/services/api.service'

const PostPage = async ({ params }: { params: { id: string } }) => {
  const movie = await getMovieDetail(params.id)

  return (
    <div>
      <h1>{movie.title}</h1>
    </div>
  )
}

export default PostPage
