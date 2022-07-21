import mock from "./../mock";

const projectsDb = [
  {
    id: 1,
    name: "Shree Complex",
    price: "20000",
    picturePath: "/assets/images/garbage/sample-2.png",
    provider: "By Kamdhenu Builders",
    address: "Sector 3, Kharghar, Navi Mumbai 410210",
    rooms: "5",
    bathrooms: "3",
    parking: "3",
    area: "1000",
    saved: true,
  },
  {
    id: 2,
    name: "Shree Complex",
    price: "20000",
    picturePath: "/assets/images/garbage/sample-3.png",
    provider: "By Kamdhenu Builders",
    address: "Sector 3, Kharghar, Navi Mumbai 410210",
    rooms: "5",
    bathrooms: "3",
    parking: "3",
    area: "1000",
    saved: true,
  },
  {
    id: 3,
    name: "Shree Complex",
    price: "20000",
    picturePath: "/assets/images/garbage/sample-2.png",
    provider: "By Kamdhenu Builders",
    address: "Sector 3, Kharghar, Navi Mumbai 410210",
    rooms: "5",
    bathrooms: "3",
    parking: "3",
    area: "1000",
    saved: true,
  },
  {
    id: 4,
    name: "Shree Complex",
    price: "20000",
    picturePath: "/assets/images/garbage/sample.png",
    provider: "By Kamdhenu Builders",
    address: "Sector 3, Kharghar, Navi Mumbai 410210",
    rooms: "5",
    bathrooms: "3",
    parking: "3",
    area: "1000",
    saved: true,
  },
];

mock.onGet("/projects").reply((config) => {
  try {
    console.log("projects");
    const params = config.params;
    let response = [];
    response = projectsDb;

    return [200, response];
  } catch (error) {
    console.error("error", error);
    return [400];
  }
});
