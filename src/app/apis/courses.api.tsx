import server from "../axios"

export const getAllCourses = async () : Promise<any> => {
  try {
    const { data } = await server.get('/Courses')
    return data
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message
    throw new Error(message)
  }
}
