import { GetAPI, PostAPI } from "./api";
import { getProjects, getFilteredProjects, getRecomendationsProjects } from "./getProjects";
import { getProjectDetail } from "./getProjectDetail";
import { getCartProjects, deleteCartProject, addCartProject } from "./handleCart";
import { register, login } from "./authentication";
import { sendOTP, verifyOTP, getCallback, contactRealEstate, becomePartner } from "./requestCallback";
export {
  GetAPI,
  PostAPI,
  getProjects,
  getRecomendationsProjects,
  getFilteredProjects,
  getProjectDetail,
  getCartProjects,
  deleteCartProject,
  addCartProject,
  register,
  login,
  sendOTP,
  verifyOTP,
  getCallback,
  contactRealEstate,
  becomePartner,
}