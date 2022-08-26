import { GetAPI, PostAPI } from "helpers"

export const getCartProjects = async ({ cartId = '' }) => {
  try {
    const allProjects = await GetAPI(`store/carts/${cartId}`)
    const cartItems = allProjects?.cart?.items
    // const cartItems = [
    //   {
    //     "id": "item_01GBB2WZVE1Q7RVG0G70VMTMYF",
    //     "cart_id": "cart_01GBAXQS012CWG870BVC1DKJ2Y",
    //     "order_id": null,
    //     "swap_id": null,
    //     "claim_order_id": null,
    //     "title": "test",
    //     "description": "2bhk",
    //     "thumbnail": "https://myawsbucket1395.s3.ap-south-1.amazonaws.com/building1.jpg",
    //     "is_return": false,
    //     "is_giftcard": false,
    //     "should_merge": true,
    //     "allow_discounts": false,
    //     "has_shipping": false,
    //     "unit_price": null,
    //     "variant_id": "variant_01GAG41DJ2HZ632SSPNYSMXZ68",
    //     "quantity": 12,
    //     "fulfilled_quantity": null,
    //     "returned_quantity": null,
    //     "shipped_quantity": null,
    //     "created_at": "2022-08-25T18:05:47.684Z",
    //     "updated_at": "2022-08-25T18:49:25.330Z",
    //     "metadata": {

    //     },
    //     "adjustments": [

    //     ],
    //     "tax_lines": [

    //     ],
    //     "variant": {
    //       "id": "variant_01GAG41DJ2HZ632SSPNYSMXZ68",
    //       "title": "2bhk",
    //       "product_id": "prod_01GAG3ZR44VBBT34E3YW7CJJQH",
    //       "sku": "ebdf1899-4d8e-4b35-a2eb-443f2d318d34",
    //       "barcode": "f79dbbfa-7272-46bc",
    //       "ean": "7bb7ab9c-0b90-4e70-9173-a66bae89056d",
    //       "upc": null,
    //       "inventory_quantity": 17,
    //       "allow_backorder": false,
    //       "manage_inventory": true,
    //       "hs_code": null,
    //       "origin_country": "India",
    //       "mid_code": null,
    //       "material": null,
    //       "weight": null,
    //       "length": null,
    //       "height": null,
    //       "width": null,
    //       "created_at": "2022-08-15T06:46:11.765Z",
    //       "updated_at": "2022-08-25T18:25:54.327Z",
    //       "deleted_at": null,
    //       "metadata": null,
    //       "product": {
    //         "id": "prod_01GAG3ZR44VBBT34E3YW7CJJQH",
    //         "title": "test",
    //         "subtitle": null,
    //         "description": "test description",
    //         "handle": "/test",
    //         "is_giftcard": false,
    //         "status": "published",
    //         "thumbnail": "https://myawsbucket1395.s3.ap-south-1.amazonaws.com/building1.jpg",
    //         "profile_id": "sp_01GAEMYWM5AYJ3RSMMVT6A4SN6",
    //         "weight": null,
    //         "length": null,
    //         "height": null,
    //         "width": null,
    //         "hs_code": "",
    //         "origin_country": null,
    //         "mid_code": "",
    //         "material": null,
    //         "collection_id": null,
    //         "type_id": null,
    //         "discountable": false,
    //         "external_id": null,
    //         "created_at": "2022-08-15T06:45:17.009Z",
    //         "updated_at": "2022-08-15T06:45:17.009Z",
    //         "deleted_at": null,
    //         "metadata": null,
    //         "carpetArea": "1200 sqft",
    //         "bedrooms": "2bhk,3bhk",
    //         "builderDetails": "test builder Details, test builder Detailstest builder Detailstest builder Details",
    //         "amenities": "garden, pool, parking",
    //         "addressDetails": "testsetestt",
    //         "overview": "test Overview",
    //         "highlights": "test",
    //         "aboutProject": "About Project,About ProjectAbout ProjectAbout ProjectAbout ProjectAbout Project",
    //         "price": 20000,
    //         "projecttype": "Residential",
    //         "projectstatus": "Ready To Move"
    //       }
    //     }
    //   }
    // ]

    const projectArr = cartItems?.length ? cartItems.map(data => {
      const product = data?.variant?.product
      return {
        itemId: data?.id,
        id: product?.id,
        name: product?.title,
        price: product?.price || 'none',
        image: product?.thumbnail,
        provider: product?.provider || 'by sqfthomes',
        address: product?.addressDetails,
        rooms: product?.bedrooms || false,
        bathrooms: product?.bathroom || false,
        parking: product?.parking || false,
        area: product?.carpetArea || false,
        saved: false
      }
    }) : []

    return projectArr

  } catch (error) {
    console.error('Encountered error', error)
  }
}

export const deleteCartProject = async ({ cartId, itemId }) => {
  try {
    const res = await GetAPI(`carts/${cartId}/line-items/${itemId}`)
    return res
  } catch (error) {
    console.error('Encountered error', error)
    return false
  }
}

export const addCartProject = async ({ cartId, variantId }) => {
  try {
    const query = {
      variant_id: variantId,
      quantity: 1
    }
    const res = await PostAPI(`carts/${cartId}/line-items`, query)
    return res
  } catch (error) {
    console.error('Encountered error', error)
    return false
  }
}