import { getMovieDetail } from '@/services/api.service'
import StarRating from '@/components/StarRating' // Adjust the import path as needed

const PostPage = async ({ params }: { params: { id: string } }) => {
  const movie = await getMovieDetail(params.id)

  return (
    <div>
      <h1>{movie.title}</h1>
      <StarRating rating={movie.vote_average} />
    </div>
  )
}

export default PostPage
