import { useQuery } from 'react-query'
// Constants
import { CONSTANTS } from '../../config/constants'
// Services
import { getArticles } from '../../services/Articles.service'

const { MIN_10 } = CONSTANTS

const useGeneralArticlesQuery = () => {
  const articlesList = useQuery(
    ['articlesList'],
    () => {
      return getArticles()
    },
    {
      enabled: true,
      staleTime: MIN_10,
    }
  )

  return { articlesList }
}

export default useGeneralArticlesQuery
