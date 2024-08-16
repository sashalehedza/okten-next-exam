import { getMovieDetail } from '@/services/api.service'
import StarRating from '@/components/StarRating' // Adjust the import path as needed
import MoviesListCard from '@/components/MoviesListCard'

const PostPage = async ({ params }: { params: { id: string } }) => {
  const movie = await getMovieDetail(params.id)

  return (
    <div>
      <MoviesListCard movie={movie} />
    </div>
  )
}

export default PostPage
