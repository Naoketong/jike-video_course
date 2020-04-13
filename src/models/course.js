import request from "./request.js";
import API from "./api.js";
export default {
  list(params) {
    return request.get(API.course, params);
  },
  category(params) {
    return request.get(API.courseItem, params);
  },
  categoryAdd(params) {
    return request.get(API.course, params);
  },
  // show(id) {
  //   return request.get(API.courseItem(id));
  // },
  // update(id, params) {
  //   return request.put(API.courseItem(id), params)
  // },
  add(params) {
    return request.post(API.course, params);
  }
  // delete(id) {
  //   return request.delete(API.courseItem(id))
  // }
};
