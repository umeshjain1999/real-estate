// Get API e.g. abc.com/../getAllProjects
/* For Filter or Pagination Get API will be used
  e.g.
  by default getAllProjects will give 9 counts

  pagination - abc.com/.../getAllProjects?page=3
  
  with filter - abc.com/.../getAllProjects?page=3&Price=10000to20000
  
  with Multiple Option filter - abc.com/.../getAllProjects?page=3&Rooms=1BHK%2C3BHK%2C4BHK  currently facing an issue that's why separator is %2C later it will be update by comma ","


  For Featured Projects,Recommended Projects, Nearby Projects section we can use separate API with same format 
*/
const AllProjects = {
  info : {
    count : 800, //total count
    //...
  },
  projects : [
    {
      id : '34534343243543',
      name : 'Brownz City',
      price : '2.3Cr', //or 30000
      image : 'image source',
      provider : 'By Kamdhenu Builders',
      address : 'Sector 3, Kharghar, Navi Mumbai, 410210',
      rooms : '3',
      bathrooms : '2',
      parking : '5',
      area : '700',
      saved : true, // or false,
    },
    //...
  ]
}

// Get API e.g. abc.com/../getAllProjects/[id] (currently implemented considering this) or Post API e.g. abc.com/../getProject (ID will be given in body)
const Project = {
  id : '34534343243543',
  name : 'Brownz City',
  price : '2.3Cr', //or 30000
  image : 'image source',
  provider : 'By Kamdhenu Builders',
  address : 'Sector 3, Kharghar, Navi Mumbai, 410210',
  rooms : '3',
  bathrooms : '2',
  parking : '5',
  area : '700',
  saved : true, // or false,
  imageArr : ['image-1','image-2','image-3'/*...*/],
  tags : ['new project','10 Properties on Sale'],
  amenities : [
    {
      id : '324',
      name : 'Configuration',
      desc : '1,2BHK Aparments',
      icon : 'amenitiesRooms'
    },
    {
      id : '23',
      name : 'Sizes',
      desc : '443.00 sq.ft. - 655.00 sq.ft. (Carpet Area)',
      icon : 'amenitiesRooms'
    },
    //...
  ],
  floorPlanAndPrice : [
    {
      id : 1,
      structure : '1 BHK',
      imagePath : '/.../1BHK.png',
      price : '1.3Cr',
      area : '443.00 Sqft',
    },
    {
      id : 2,
      structure : '2 BHK',
      imagePath : '/.../2BHK.png',
      price : '1.9Cr',
      area : '550.00 Sqft',
    }
  ],
  overview : "<h3>Arihant Developrs</h3><p>Arihant Developers is a promising Real Estate Development company. They develop residential properties with an aim to provide the best in quality. They have impeccable efficiency and remarkable management which will take them a long way in Real Estate development. They have a dedicated and experienced team of architects and workers who slog day in and day out to deliver projects on time to their customers. Their aim is to see their customers happy by providing them with dream homes equipped with all the modern amenities and features.</p>", // this string can include HTML this will be reflected accordingly
  aboutProject : "<h3>Arihant Developrs</h3><p>Arihant Developers is a promising Real Estate Development company. They develop residential properties with an aim to provide the best in quality. They have impeccable efficiency and remarkable management which will take them a long way in Real Estate development. They have a dedicated and experienced team of architects and workers who slog day in and day out to deliver projects on time to their customers. Their aim is to see their customers happy by providing them with dream homes equipped with all the modern amenities and features.</p>",
  aboutDevelopers : "<h3>Arihant Developrs</h3><p>Arihant Developers is a promising Real Estate Development company. They develop residential properties with an aim to provide the best in quality. They have impeccable efficiency and remarkable management which will take them a long way in Real Estate development. They have a dedicated and experienced team of architects and workers who slog day in and day out to deliver projects on time to their customers. Their aim is to see their customers happy by providing them with dream homes equipped with all the modern amenities and features.</p>",
  localityMap : '' //not sure yet how to render map
}