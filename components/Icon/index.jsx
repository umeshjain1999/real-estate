import React from 'react'
import Close from "./svg/close.svg";
import Check from "./svg/check.svg";
import Activity from "./svg/activity.svg";
import MyListings from "./svg/myListings.svg";
import Logout from "./svg/logout.svg";
import LeftArrow from "./svg/leftArrow.svg";
import RightArrow from './svg/rightArrow.svg'
import DownChevron from './svg/downChevron.svg'
import Location from './svg/location.svg'
import Search from "./svg/search.svg";
import AmenitiesShield from './svg/amenitiesShield.svg'
import AmenitiesSize from './svg/amenitiesSize.svg'
import AmenitiesRooms from './svg/amenitiesRooms.svg'
import Hamburger from './svg/hamburger.svg'
import ProjectDirection from './svg/projectDirection.svg'
import ProjectSaved from './svg/projectSaved.svg'
import ProjectFav from './svg/projectFav.svg'
import ProjectArea from './svg/projectArea.svg'
import ProjectCar from './svg/projectCar.svg'
import ProjectShower from './svg/projectShower.svg'
import ProjectBed from './svg/projectBed.svg'
import PartnersIndustry from './svg/partnersIndustry.svg'
import PartnersThumbsUp from './svg/partnersThumbsUp.svg'
import PartnersCurrency from './svg/partnersCurrency.svg'
import Partners247services from './svg/partners247services.svg'
import LoginUser from './svg/loginUser.svg'
import Call from './svg/call.svg'
import DropdownArrow from './svg/dropdownArrow.svg'
import Delete from './svg/delete.svg'

const iconTypes = {
  close: Close,
  check: Check,
  activity: Activity,
  myListings: MyListings,
  logout: Logout,
  leftArrow: LeftArrow,
  rightArrow: RightArrow,
  downChevron: DownChevron,
  location: Location,
  search: Search,
  amenitiesShield: AmenitiesShield,
  amenitiesSize: AmenitiesSize,
  amenitiesRooms: AmenitiesRooms,
  hamburger: Hamburger,
  projectSaved: ProjectSaved,
  projectFav: ProjectFav,
  projectArea: ProjectArea,
  projectCar: ProjectCar,
  projectShower: ProjectShower,
  projectBed: ProjectBed,
  projectDirection: ProjectDirection,
  partnersIndustry: PartnersIndustry,
  partnersThumbsUp: PartnersThumbsUp,
  partnersCurrency: PartnersCurrency,
  partners247services: Partners247services,
  loginUser: LoginUser,
  call: Call,
  dropdownArrow: DropdownArrow,
  delete: Delete,
}

function Icon({ icon, ...props }) {

  let Icon = iconTypes[icon]

  if (iconTypes[icon]) {
    return <Icon {...props} />
  } else {
    return <span></span>
  }


}

export default Icon