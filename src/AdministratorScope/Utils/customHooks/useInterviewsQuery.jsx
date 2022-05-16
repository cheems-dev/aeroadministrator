import { useQuery } from 'react-query'

// Services
import { getCareer } from '../../services/Interviews.service'
import { getBusiness } from '../../services/Interviews.service'
// Constants
import { CONSTANTS } from '../../config/constants'

const { MIN_10 } = CONSTANTS

const useGeneralInterviews = () => {
  const careerList = useQuery(
    ['careerList'],
    () => {
      return getCareer()
    },
    {
      enabled: true,
      staleTime: MIN_10,
    }
  )

  const businessList = useQuery(
    ['businessList'],
    () => {
      return getBusiness()
    },
    {
      enabled: true,
      staleTime: MIN_10,
    }
  )

  return { careerList, businessList }
}

export default useGeneralInterviews
