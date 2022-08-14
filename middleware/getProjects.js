import { GetAPI } from "@utility/apiCall"
const projectsDataManipulation = (allProjects) => {

   //   const allProjects = {
   //     "products":[
   //        {
   //           "id":"prod_01G9BX1ZAPQQAKMHSC7BNR07SQ",
   //           "title":"Progressive Prive",
   //           "subtitle":null,
   //           "description":"Progressive Grande is scheduled for possession in Jun, 2022 and will offer expansive apartments in various configurations.",
   //           "handle":"/progressivePrive",
   //           "is_giftcard":false,
   //           "status":"published",
   //           "thumbnail":"https://myawsbucket1395.s3.ap-south-1.amazonaws.com/building1.jpg",
   //           "profile_id":"sp_01G81940M1F6J9Y9DJN5F7GJ48",
   //           "weight":null,
   //           "length":null,
   //           "height":null,
   //           "width":null,
   //           "hs_code":"",
   //           "origin_country":null,
   //           "mid_code":"",
   //           "material":null,
   //           "collection_id":null,
   //           "type_id":null,
   //           "discountable":false,
   //           "external_id":null,
   //           "created_at":"2022-08-01T05:11:30.320Z",
   //           "updated_at":"2022-08-01T05:11:30.320Z",
   //           "deleted_at":null,
   //           "metadata":null,
   //           "carpetArea":"1100-1300 sqft.",
   //           "bedrooms":"2bhk,3bhk",
   //           "builderDetails":"Progressive Prive is a project by Progressive Group in Navi Mumbai. It is a Under Construction project.",
   //           "amenities":"Internal Roads, 24x7 water supply, Open Parking, Strom Water Drain, Sweage Treatment",
   //           "addressDetails":"Plot No. 80, Progressive Prive, Sector 21, Ulwe, Navi Mumbai, Maharashtra 410206",
   //           "overview":"Progressive Prive is an upcoming under-construction property in Ulwe, Mumbai, being developed by Progressive.",
   //           "highlights":"Internal Roads, 24x7 water supply, Open Parking, Strom Water Drain, Sweage Treatment",
   //           "aboutProject":"Progressive Prive is a project by Progressive Group in Navi Mumbai. It is a Under Construction project",
   //           "variants":[
   //              {
   //                 "id":"variant_01G9BX93Z0339PT3FDJSAV0Q0R",
   //                 "title":"2bhk",
   //                 "product_id":"prod_01G9BX1ZAPQQAKMHSC7BNR07SQ",
   //                 "sku":"10",
   //                 "barcode":"10",
   //                 "ean":"10",
   //                 "upc":null,
   //                 "inventory_quantity":10,
   //                 "allow_backorder":true,
   //                 "manage_inventory":true,
   //                 "hs_code":null,
   //                 "origin_country":null,
   //                 "mid_code":null,
   //                 "material":null,
   //                 "weight":null,
   //                 "length":null,
   //                 "height":null,
   //                 "width":null,
   //                 "created_at":"2022-08-01T05:15:24.494Z",
   //                 "updated_at":"2022-08-01T05:15:24.494Z",
   //                 "deleted_at":null,
   //                 "metadata":null,
   //                 "options":[
   //                    {
   //                       "id":"optval_01G9BX93Z77Z78J502TE4KF3JZ",
   //                       "value":"1200 sqft.",
   //                       "option_id":"opt_01G9BX89B2CPEW7H68FKJNZGE2",
   //                       "variant_id":"variant_01G9BX93Z0339PT3FDJSAV0Q0R",
   //                       "created_at":"2022-08-01T05:15:24.494Z",
   //                       "updated_at":"2022-08-01T05:15:24.494Z",
   //                       "deleted_at":null,
   //                       "metadata":null
   //                    }
   //                 ],
   //                 "prices":[
   //                    {
   //                       "id":"ma_01G9BX93ZSH6S23J81VV35KR6D",
   //                       "currency_code":"usd",
   //                       "amount":1000,
   //                       "min_quantity":null,
   //                       "max_quantity":null,
   //                       "price_list_id":null,
   //                       "variant_id":"variant_01G9BX93Z0339PT3FDJSAV0Q0R",
   //                       "region_id":null,
   //                       "created_at":"2022-08-01T05:15:24.494Z",
   //                       "updated_at":"2022-08-01T05:15:24.494Z",
   //                       "deleted_at":null,
   //                       "price_list":null
   //                    }
   //                 ],
   //                 "original_price":null,
   //                 "calculated_price":null
   //              },
   //              {
   //                 "id":"variant_01G9BXATM44JZ2W1KECGPK4CZK",
   //                 "title":"3bhk",
   //                 "product_id":"prod_01G9BX1ZAPQQAKMHSC7BNR07SQ",
   //                 "sku":"1",
   //                 "barcode":"1",
   //                 "ean":"1",
   //                 "upc":null,
   //                 "inventory_quantity":1,
   //                 "allow_backorder":false,
   //                 "manage_inventory":true,
   //                 "hs_code":null,
   //                 "origin_country":null,
   //                 "mid_code":null,
   //                 "material":null,
   //                 "weight":null,
   //                 "length":null,
   //                 "height":null,
   //                 "width":null,
   //                 "created_at":"2022-08-01T05:16:20.473Z",
   //                 "updated_at":"2022-08-01T05:16:20.473Z",
   //                 "deleted_at":null,
   //                 "metadata":null,
   //                 "options":[
   //                    {
   //                       "id":"optval_01G9BXATM4GQ3SA5TD5JFRQA8D",
   //                       "value":"1300sqft",
   //                       "option_id":"opt_01G9BX89B2CPEW7H68FKJNZGE2",
   //                       "variant_id":"variant_01G9BXATM44JZ2W1KECGPK4CZK",
   //                       "created_at":"2022-08-01T05:16:20.473Z",
   //                       "updated_at":"2022-08-01T05:16:20.473Z",
   //                       "deleted_at":null,
   //                       "metadata":null
   //                    }
   //                 ],
   //                 "prices":[
   //                    {
   //                       "id":"ma_01G9BXATMGN6GDRDYX90G59848",
   //                       "currency_code":"usd",
   //                       "amount":10000,
   //                       "min_quantity":null,
   //                       "max_quantity":null,
   //                       "price_list_id":null,
   //                       "variant_id":"variant_01G9BXATM44JZ2W1KECGPK4CZK",
   //                       "region_id":null,
   //                       "created_at":"2022-08-01T05:16:20.473Z",
   //                       "updated_at":"2022-08-01T05:16:20.473Z",
   //                       "deleted_at":null,
   //                       "price_list":null
   //                    }
   //                 ],
   //                 "original_price":null,
   //                 "calculated_price":null
   //              }
   //           ],
   //           "options":[
   //              {
   //                 "id":"opt_01G9BX89B2CPEW7H68FKJNZGE2",
   //                 "title":"size",
   //                 "product_id":"prod_01G9BX1ZAPQQAKMHSC7BNR07SQ",
   //                 "created_at":"2022-08-01T05:14:57.244Z",
   //                 "updated_at":"2022-08-01T05:14:57.244Z",
   //                 "deleted_at":null,
   //                 "metadata":null,
   //                 "values":[
   //                    {
   //                       "id":"optval_01G9BX93Z77Z78J502TE4KF3JZ",
   //                       "value":"1200 sqft.",
   //                       "option_id":"opt_01G9BX89B2CPEW7H68FKJNZGE2",
   //                       "variant_id":"variant_01G9BX93Z0339PT3FDJSAV0Q0R",
   //                       "created_at":"2022-08-01T05:15:24.494Z",
   //                       "updated_at":"2022-08-01T05:15:24.494Z",
   //                       "deleted_at":null,
   //                       "metadata":null
   //                    },
   //                    {
   //                       "id":"optval_01G9BXATM4GQ3SA5TD5JFRQA8D",
   //                       "value":"1300sqft",
   //                       "option_id":"opt_01G9BX89B2CPEW7H68FKJNZGE2",
   //                       "variant_id":"variant_01G9BXATM44JZ2W1KECGPK4CZK",
   //                       "created_at":"2022-08-01T05:16:20.473Z",
   //                       "updated_at":"2022-08-01T05:16:20.473Z",
   //                       "deleted_at":null,
   //                       "metadata":null
   //                    }
   //                 ]
   //              }
   //           ],
   //           "images":[
   //              {
   //                 "id":"img_01G9BX1ZAP1BSFX1V2MX7DAY7H",
   //                 "url":"https://myawsbucket1395.s3.ap-south-1.amazonaws.com/building1.jpg",
   //                 "created_at":"2022-08-01T05:11:30.320Z",
   //                 "updated_at":"2022-08-01T05:11:30.320Z",
   //                 "deleted_at":null,
   //                 "metadata":null
   //              },
   //              {
   //                 "id":"img_01G9BX1ZAPYANJ94R9VWM2KBS0",
   //                 "url":"https://myawsbucket1395.s3.ap-south-1.amazonaws.com/progressive2.jpg",
   //                 "created_at":"2022-08-01T05:11:30.320Z",
   //                 "updated_at":"2022-08-01T05:11:30.320Z",
   //                 "deleted_at":null,
   //                 "metadata":null
   //              }
   //           ],
   //           "tags":[
   //              {
   //                 "id":"ptag_01G819V5836Y01646KCKC7D87P",
   //                 "value":"ulwe",
   //                 "created_at":"2022-07-15T16:07:37.960Z",
   //                 "updated_at":"2022-07-15T16:07:37.960Z",
   //                 "deleted_at":null,
   //                 "metadata":null
   //              },
   //              {
   //                 "id":"ptag_01G9BX1ZAADM1V9AJAMQEAT36T",
   //                 "value":"sector 21",
   //                 "created_at":"2022-08-01T05:11:30.320Z",
   //                 "updated_at":"2022-08-01T05:11:30.320Z",
   //                 "deleted_at":null,
   //                 "metadata":null
   //              },
   //              {
   //                 "id":"ptag_01G9BX1ZAFDMQ9AB1K29A92EYE",
   //                 "value":"2bhk",
   //                 "created_at":"2022-08-01T05:11:30.320Z",
   //                 "updated_at":"2022-08-01T05:11:30.320Z",
   //                 "deleted_at":null,
   //                 "metadata":null
   //              },
   //              {
   //                 "id":"ptag_01G9BX1ZAKPDX9V6C5ESJGW7AF",
   //                 "value":"3bhk",
   //                 "created_at":"2022-08-01T05:11:30.320Z",
   //                 "updated_at":"2022-08-01T05:11:30.320Z",
   //                 "deleted_at":null,
   //                 "metadata":null
   //              }
   //           ],
   //           "collection":null,
   //           "type":null
   //        },
   //        {
   //           "id":"prod_01G9BXXA92R488053EPKH6P30Z",
   //           "title":"Sapphire",
   //           "subtitle":null,
   //           "description":"Sai Proviso Sapphire is a residential cum commercial project Stand-alone tower of G+16 at Roadpali, Kalamboli in Navi Mumbai. At Sai Proviso Sapphire; 1, 2 & 2BHK+T spaces are designed to meet your expectations, with all modern amenities.",
   //           "handle":"/sapphire",
   //           "is_giftcard":false,
   //           "status":"published",
   //           "thumbnail":"https://myawsbucket1395.s3.ap-south-1.amazonaws.com/building2.jpg",
   //           "profile_id":"sp_01G81940M1F6J9Y9DJN5F7GJ48",
   //           "weight":null,
   //           "length":null,
   //           "height":null,
   //           "width":null,
   //           "hs_code":"",
   //           "origin_country":null,
   //           "mid_code":"",
   //           "material":null,
   //           "collection_id":null,
   //           "type_id":null,
   //           "discountable":false,
   //           "external_id":null,
   //           "created_at":"2022-08-01T05:26:26.290Z",
   //           "updated_at":"2022-08-01T05:26:26.290Z",
   //           "deleted_at":null,
   //           "metadata":null,
   //           "carpetArea":"1000 sqft.",
   //           "bedrooms":"2bhk",
   //           "builderDetails":"The project is RERA compliant and fulfils all necessities as required by the authorities. RERA ID of Sai Proviso Sapphire is P52000021378.\nEstablished in 1989, Proviso Group is a renowned developer firm. Till date, Proviso Group has developed 21 projects with a focus on healthy and sustainable lifestyle.",
   //           "amenities":"Club House,Car Parking,CCTV,Kids Pool, Outdoor Chess Layout, Toddler Park, Water Bodies And Fountains",
   //           "addressDetails":"Sector 8, ulwe, navi mumbai",
   //           "overview":"Sai Proviso Sapphire is a residential cum commercial project Stand-alone tower of G+16 at Roadpali, Kalamboli in Navi Mumbai. At Sai Proviso Sapphire; 1, 2 & 2BHK+T spaces are designed to meet your expectations, with all modern amenities.",
   //           "highlights":"Sai Proviso Sapphire is a residential cum commercial project Stand-alone tower of G+16 at Roadpali, Kalamboli in Navi Mumbai. At Sai Proviso Sapphire; 1, 2 & 2BHK+T spaces are designed to meet your expectations, with all modern amenities.",
   //           "aboutProject":"Sai Proviso Sapphire is a residential cum commercial project Stand-alone tower of G+16 at Roadpali, Kalamboli in Navi Mumbai. At Sai Proviso Sapphire; 1, 2 & 2BHK+T spaces are designed to meet your expectations, with all modern amenities.",
   //           "variants":[
   //              {
   //                 "id":"variant_01G9BY0Y28YCHYDNFTWNEN0RQH",
   //                 "title":"2bhk",
   //                 "product_id":"prod_01G9BXXA92R488053EPKH6P30Z",
   //                 "sku":"11",
   //                 "barcode":"111",
   //                 "ean":"111",
   //                 "upc":null,
   //                 "inventory_quantity":11,
   //                 "allow_backorder":false,
   //                 "manage_inventory":false,
   //                 "hs_code":null,
   //                 "origin_country":null,
   //                 "mid_code":null,
   //                 "material":null,
   //                 "weight":null,
   //                 "length":null,
   //                 "height":null,
   //                 "width":null,
   //                 "created_at":"2022-08-01T05:28:24.896Z",
   //                 "updated_at":"2022-08-01T05:29:04.500Z",
   //                 "deleted_at":null,
   //                 "metadata":null,
   //                 "options":[
   //                    {
   //                       "id":"optval_01G9BY0Y2890A3GVF4QBGHWMPN",
   //                       "value":"1000 sqft.",
   //                       "option_id":"opt_01G9BXYS76Q6S253DM4EK86FBX",
   //                       "variant_id":"variant_01G9BY0Y28YCHYDNFTWNEN0RQH",
   //                       "created_at":"2022-08-01T05:28:24.896Z",
   //                       "updated_at":"2022-08-01T05:28:24.896Z",
   //                       "deleted_at":null,
   //                       "metadata":null
   //                    }
   //                 ],
   //                 "prices":[
   //                    {
   //                       "id":"ma_01G9BY0Y2JJVRC1SVFZVMK72SW",
   //                       "currency_code":"usd",
   //                       "amount":11000,
   //                       "min_quantity":null,
   //                       "max_quantity":null,
   //                       "price_list_id":null,
   //                       "variant_id":"variant_01G9BY0Y28YCHYDNFTWNEN0RQH",
   //                       "region_id":null,
   //                       "created_at":"2022-08-01T05:28:24.896Z",
   //                       "updated_at":"2022-08-01T05:28:24.896Z",
   //                       "deleted_at":null,
   //                       "price_list":null
   //                    },
   //                    {
   //                       "id":"ma_01G9BY0Y2NAAFZWPYS6T8SQY6Y",
   //                       "currency_code":"eur",
   //                       "amount":1000,
   //                       "min_quantity":null,
   //                       "max_quantity":null,
   //                       "price_list_id":null,
   //                       "variant_id":"variant_01G9BY0Y28YCHYDNFTWNEN0RQH",
   //                       "region_id":null,
   //                       "created_at":"2022-08-01T05:28:24.896Z",
   //                       "updated_at":"2022-08-01T05:28:24.896Z",
   //                       "deleted_at":null,
   //                       "price_list":null
   //                    }
   //                 ],
   //                 "original_price":null,
   //                 "calculated_price":null
   //              }
   //           ],
   //           "options":[
   //              {
   //                 "id":"opt_01G9BXYS76Q6S253DM4EK86FBX",
   //                 "title":"size",
   //                 "product_id":"prod_01G9BXXA92R488053EPKH6P30Z",
   //                 "created_at":"2022-08-01T05:27:14.396Z",
   //                 "updated_at":"2022-08-01T05:27:14.396Z",
   //                 "deleted_at":null,
   //                 "metadata":null,
   //                 "values":[
   //                    {
   //                       "id":"optval_01G9BY0Y2890A3GVF4QBGHWMPN",
   //                       "value":"1000 sqft.",
   //                       "option_id":"opt_01G9BXYS76Q6S253DM4EK86FBX",
   //                       "variant_id":"variant_01G9BY0Y28YCHYDNFTWNEN0RQH",
   //                       "created_at":"2022-08-01T05:28:24.896Z",
   //                       "updated_at":"2022-08-01T05:28:24.896Z",
   //                       "deleted_at":null,
   //                       "metadata":null
   //                    },
   //                    {
   //                       "id":"optval_01G9BYAGTWGZBP284N2KDM9KPK",
   //                       "value":"1000sqft",
   //                       "option_id":"opt_01G9BXYS76Q6S253DM4EK86FBX",
   //                       "variant_id":"variant_01G9BYAGTW3PH394333K2BSWC7",
   //                       "created_at":"2022-08-01T05:33:39.025Z",
   //                       "updated_at":"2022-08-01T05:33:39.025Z",
   //                       "deleted_at":null,
   //                       "metadata":null
   //                    },
   //                    {
   //                       "id":"optval_01G9C04MBEHGQ16XF0ASD69907",
   //                       "value":"900 sqft.",
   //                       "option_id":"opt_01G9BXYS76Q6S253DM4EK86FBX",
   //                       "variant_id":"variant_01G9C04MBD63G17TJZGHKPFRVG",
   //                       "created_at":"2022-08-01T06:05:23.168Z",
   //                       "updated_at":"2022-08-01T06:05:23.168Z",
   //                       "deleted_at":null,
   //                       "metadata":null
   //                    }
   //                 ]
   //              }
   //           ],
   //           "images":[
   //              {
   //                 "id":"img_01G9BXXA92W4F9G5QPKW5CR4DM",
   //                 "url":"https://myawsbucket1395.s3.ap-south-1.amazonaws.com/building2.jpg",
   //                 "created_at":"2022-08-01T05:26:26.290Z",
   //                 "updated_at":"2022-08-01T05:26:26.290Z",
   //                 "deleted_at":null,
   //                 "metadata":null
   //              },
   //              {
   //                 "id":"img_01G9BX1ZAP1BSFX1V2MX7DAY7H",
   //                 "url":"https://myawsbucket1395.s3.ap-south-1.amazonaws.com/building1.jpg",
   //                 "created_at":"2022-08-01T05:11:30.320Z",
   //                 "updated_at":"2022-08-01T05:11:30.320Z",
   //                 "deleted_at":null,
   //                 "metadata":null
   //              }
   //           ],
   //           "tags":[
   //              {
   //                 "id":"ptag_01G819V5836Y01646KCKC7D87P",
   //                 "value":"ulwe",
   //                 "created_at":"2022-07-15T16:07:37.960Z",
   //                 "updated_at":"2022-07-15T16:07:37.960Z",
   //                 "deleted_at":null,
   //                 "metadata":null
   //              },
   //              {
   //                 "id":"ptag_01G9BXXA8WV4HNJK2CY0K9VXCR",
   //                 "value":"sector 8",
   //                 "created_at":"2022-08-01T05:26:26.290Z",
   //                 "updated_at":"2022-08-01T05:26:26.290Z",
   //                 "deleted_at":null,
   //                 "metadata":null
   //              },
   //              {
   //                 "id":"ptag_01G9BX1ZAFDMQ9AB1K29A92EYE",
   //                 "value":"2bhk",
   //                 "created_at":"2022-08-01T05:11:30.320Z",
   //                 "updated_at":"2022-08-01T05:11:30.320Z",
   //                 "deleted_at":null,
   //                 "metadata":null
   //              }
   //           ],
   //           "collection":null,
   //           "type":null
   //        }
   //     ],
   //     "count":2,
   //     "offset":0,
   //     "limit":100
   //   }


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

export const getRecomendationsProjects = async () => {
   try {
      const allProjects = await GetAPI('store/showRecomendations')
      return projectsDataManipulation(allProjects)
   } catch (error) {
      console.error('Encountered error', error)
   }
}

export const getFilteredProjects = async ({ ...query }) => {
   try {
      const allProjects = await GetAPI('store/filter', query)
      return projectsDataManipulation(allProjects)
   } catch (error) {
      console.error('Encountered error', error)
   }
}