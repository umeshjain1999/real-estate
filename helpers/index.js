import { GetAPI, PostAPI } from "./api";
import { getProjects, getFilteredProjects, getRecomendationsProjects } from "./getProjects";
import { getProjectDetail } from "./getProjectDetail";
import { getCartProjects, deleteCartProject } from "./handleCart";
import { register, login } from "./authentication";
export {
  GetAPI,
  PostAPI,
  getProjects,
  getRecomendationsProjects,
  getFilteredProjects,
  getProjectDetail,
  getCartProjects,
  deleteCartProject,
  register,
  login
}