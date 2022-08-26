import { GetAPI } from "helpers"
export const getProjectDetail = async (projectId) => {

   try {
      const projectDetail = await GetAPI(`store/products?id=${projectId}`)

      if (projectDetail?.products?.length) {

         const product = projectDetail?.products?.[0] || {}

         const floorPlanAndPrice = product?.variants && product?.variants.map(data => {
            return {
               structure: data?.title,
               price: data?.prices[0]?.amount || '',
               area: data?.area ? `${data?.area}sqft` : '-'
            }
         })

         const finalData = {
            id: product?.id,
            name: product?.title,
            price: product?.price || 'none',
            imageArr: product?.images ? product?.images.map(data => data.url) : [],
            tags: product?.tags ? product?.tags.map(data => data.value) : [],
            provider: product?.provider || 'by sqfthomes',
            address: product?.addressDetails,
            rooms: product?.bedrooms || false,
            bathrooms: product?.bathroom || false,
            parking: product?.parking || false,
            area: product?.carpetArea || false,
            overview: product?.overview || false,
            aboutProject: product?.aboutProject || false,
            aboutDevelopers: product?.builderDetails || false,
            highlights: product?.highlights && product?.highlights.split(',') || false,
            amenities: product?.amenities && product?.amenities.split(',') || false,
            floorPlanAndPrice: floorPlanAndPrice || false,
            saved: false,
            variants: product?.variants || []
         }

         return finalData
      } else {
         return false
      }

   } catch (error) {
      console.error('Encountered error', error)
      return false
   }

}