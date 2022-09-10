import httpStatus from "./httpStatus";

export default {
  DEFAULT: {
    message: "Internal Server Error!",
    httpStatus: httpStatus.INTERNAL_SERVER_ERROR,
  },
  UNAUTHORIZED: {
    message: "Authentication failed!",
    httpStatus: httpStatus.UNAUTHRORIZED,
  },
  NOT_FOUND: {
    message: "Not Found!",
    httpStatus: httpStatus.NOT_FOUND,
  },
  RESUME_ALREADY_EXISTS: {
    message: "Resume Already exists, Try update it",
    httpStatus: httpStatus.CONFLICT,
  },
  SOCIAL_ALREADY_EXISTS: {
    message: "Social Media Already exists, Try update it",
    httpStatus: httpStatus.CONFLICT,
  },
  SLUG_NOT_AVAILABLE: {
    message: "Slug is already exists",
    httpStatus: httpStatus.CONFLICT,
  },
  INVALID_LOGIN: {
    message: "Incorrect Email or Password",
    httpStatus: httpStatus.BAD_REQUEST,
  },
  ADMIN_EXISTS: {
    message: "Admin Already Created!",
    httpStatus: httpStatus.CONFLICT,
  },
  SERVICES_EXISTS: {
    message: "Services Already Created!",
    httpStatus: httpStatus.CONFLICT,
  },
};
