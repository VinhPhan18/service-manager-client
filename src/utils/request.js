import axios from "axios";

const request = axios.create({
  baseURL: "https://service-manager-server.herokuapp.com/api/",
  //baseURL: "http://127.0.0.1:5413/api/",
});

export const get = async (path, options = {}) => {
  const response = await request.get(path, options);
  return response.data;
};

export const post = async (path, data = {}) => {
  const response = await request.post(path, data);
  return response.data;
};

export const patch = async (path, data = {}) => {
  const response = await request.patch(path, data);
  return response.data;
};

export const put = async (path, data = {}) => {
  const response = await request.put(path, data);
  return response.data;
};

export const destroy = async (path, options = {}) => {
  const response = await request.delete(path, options);
  return response.data;
};
export default request;