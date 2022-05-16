import { useQuery } from 'react-query'
// Constants
import { CONSTANTS } from '../../config/constants'
// Services
import { getLiveStream } from '../../services/LiveStream.service'

const { MIN_10 } = CONSTANTS

const useGeneralLiveStreamQuery = () => {
  const liveStreamList = useQuery(
    ['liveStreamList'],
    () => {
      return getLiveStream()
    },
    {
      enabled: true,
      staleTime: MIN_10,
    }
  )

  return { liveStreamList }
}

export default useGeneralLiveStreamQuery
