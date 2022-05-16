import { useQuery } from "react-query";
// Constants
import { CONSTANTS } from "../../config/constants";
// Services
import { getCourses, getCourseById } from "../../services/Courses.service";
import { getProgressCourseById } from "../../services/Courses.service";

const { MIN_10 } = CONSTANTS;

const useGeneralCoursesQuery = (id) => {
  const coursesList = useQuery(
    ["coursesList"],
    () => {
      return getCourses();
    },
    {
      enabled: true,
      staleTime: MIN_10,
    }
  );

  const courseById = useQuery(
    ["courseById", id],
    () => {
      return getCourseById(id);
    },
    {
      enabled: true,
      staleTime: MIN_10,
    }
  );

  const progressCourseById = useQuery(
    ["progressCourseById", id],
    () => {
      return getProgressCourseById(id);
    },
    {
      enabled: true,
      staleTime: MIN_10,
    }
  );

  return { coursesList, courseById, progressCourseById };
};

export default useGeneralCoursesQuery;
