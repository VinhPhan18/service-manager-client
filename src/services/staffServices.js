import * as request from "~/utils/request";

export const login = async (username, password) => {
  try {
    const res = await request.get("staff/login", {
      params: {
        username,
        password
      }
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getPosition = async () => {
  try {
    const res = await request.get("staff/positions");
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getStaffs = async (filter) => {
  try {
    const res = await request.get("staff/", {
      params: {
        limit: filter.limit,
        sort: filter.sort,
        page: filter.page,
        q: filter.q,
        chucvu: filter.chucvu,
        tinh: filter.tinh,
        phuong: filter.phuong,
        xa: filter.xa,
      }
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const createPosition = async (data) => {
  try {
    const res = await request.post("staff/add-position", data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const staffTypeChange = async (data) => {
  try {
    const res = await request.post("staff/add-position", data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const createStaff = async (data) => {
  try {
    const res = await request.post("staff/create", data);
    return res;
  } catch (error) {
    console.log(error);
  }
};