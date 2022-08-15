import { GetAPI, PostAPI } from "@utility/apiCall"
const projectsDataManipulation = (allProjects) => {

   const projectArr = allProjects?.products && allProjects?.products.map(data => {
      return {
         id: data?.id,
         name: data?.title,
         price: data?.price || 'none',
         image: data?.thumbnail,
         provider: data?.provider || 'by sqfthomes',
         address: data?.addressDetails,
         rooms: data?.bedrooms || false,
         bathrooms: data?.bathroom || false,
         parking: data?.parking || false,
         area: data?.carpetArea || false,
         saved: false
      }
   })

   const count = allProjects?.count || 0
   const countPerPage = allProjects?.limit || 1
   const pages = Math.ceil(count / countPerPage)

   const finalData = {
      info: {
         count: count,
         pages: pages,
      },
      results: projectArr
   }
   return finalData
}

export const getProjects = async () => {
   try {
      const allProjects = await GetAPI('store/products')
      return projectsDataManipulation(allProjects)
   } catch (error) {
      console.error('Encountered error', error)
   }
}

export const getRecomendationsProjects = async (query = {}) => {
   try {
      const allProjects = await PostAPI('store/showRecomendations', query)
      return projectsDataManipulation(allProjects)
   } catch (error) {
      console.error('Encountered error', error)
   }
}

export const getFilteredProjects = async (query = {}) => {
   try {
      const allProjects = await GetAPI('store/filter', query)
      return projectsDataManipulation(allProjects)
   } catch (error) {
      console.error('Encountered error', error)
   }
}