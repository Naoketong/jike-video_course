import request from "./request.js";
import API from "./api.js";
export default {
  login(params) {
    return request.post(API.login, params)
  },
  login_sms(params) {
    return request.post(API.login_sms, params)
  },
  list(params) {//获取全部课程
    return request.get(API.course, params);
  },
  category(params) {//获取课程分类
    return request.get(API.courseItem, params);
  },
  CourseSearch(params) {//选择课程（搜索）
    return request.get(API.courseSearch, params);
  },
  courseItem(id) {//获取课程详情
    return request.get(API.courseId(id));
  },
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
