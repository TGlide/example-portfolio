import axios from "axios";

export interface PortfolioInfo {
  basics: Basics;
}

export interface Basics {
  name: string;
  picture: string;
  label: string;
  headline: string;
  summary: null;
  website: string;
  blog: null;
  yearsOfExperience: null;
  id: string;
  username: string;
  karma: number;
  email: string;
  region: string;
  phone: string;
  followers: number;
  following: number;
  profiles: Profile[];
}

export interface Profile {
  network: string;
  username: string;
  url: string;
}

export function getPortfolioInfo() {
  return axios.get("https://gitconnected.com/v1/portfolio/tglide");
}
