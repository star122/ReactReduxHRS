import {createAction} from 'redux-actions';
import * as constants from '../redux/constants';

export const userLoginRequest = createAction(constants.USER_LOGIN_REQUEST);
export const userLoginSuccess = createAction(constants.USER_LOGIN_SUCCESS);
export const userLoginFail = createAction(constants.USER_LOGIN_FAIL);
export const userLoginError = createAction(constants.USER_LOGIN_ERROR);
export const isAlreadyLogin = createAction(constants.IS_ALREADY_LOGGED_IN);

export const requestForgotPassword = createAction(constants.REQUEST_FORGOT_PASSWORD);
export const forgotPasswordSuccess = createAction(constants.SUCCESS_FORGOT_PASSWORD);
export const forgotPasswordError = createAction(constants.ERROR_FORGOT_PASSWORD);

export const requestLogout = createAction(constants.REQUEST_LOGOUT);
export const logoutSuccess = createAction(constants.LOGOUT_SUCCESS);

export const requestHolidayList = createAction(constants.REQUEST_HOLIDAYSLIST);
export const successHolidayList = createAction(constants.SUCCESS_HOLIDAYSLIST);
export const errorHolidayList = createAction(constants.ERROR_HOLIDAYSLIST);

export const requestAddHoliday = createAction(constants.REQUEST_ADDHOLIDAYS);
export const successAddHoliday = createAction(constants.SUCCESS_ADDHOLIDAYS);
export const errorAddHoliday = createAction(constants.ERROR_ADDHOLIDAYS);

export const requestHolidayType = createAction(constants.REQUEST_HOLIDAYTYPE);
export const successHolidayType = createAction(constants.SUCCESS_HOLIDAYTYPE);
export const errorHolidayType = createAction(constants.ERROR_HOLIDAYTYPE);

export const requestDeleteHoliday = createAction(constants.REQUEST_DELETEHOLIDAYS);
export const successDeleteHoliday = createAction(constants.SUCCESS_DELETEHOLIDAYS);
export const errorDeleteHoliday = createAction(constants.ERROR_DELETEHOLIDAYS);

export const resetReducer = createAction(constants.RESET_ADDHOLIDAYREDUCER);

export const requestUserAttendance = createAction(constants.REQUEST_USER_ATTENDANCE);
export const successUserAttendance = createAction(constants.SUCCESS_USER_ATTENDANCE);
export const errorUserAttendance = createAction(constants.ERROR_USER_ATTENDANCE);

export const requestUserDayAttendance = createAction(constants.REQUEST_USER_ATTENDANCE_REQUEST);
export const successUserDayAttendance = createAction(constants.SUCCESS_USER_ATTENDANCE_REQUEST);
export const errorUserDayAttendance = createAction(constants.ERROR_USER_ATTENDANCE_REQUEST);

export const requestUserAttendanceStatus = createAction(constants.REQUEST_USER_ATTENDANCE_STATUS);
export const successUserAttendanceStatus = createAction(constants.SUCCESS_USER_ATTENDANCE_STATUS);
export const errorUserAttendanceStatus = createAction(constants.ERROR_USER_ATTENDANCE_STATUS);
// -===-
export const requestUserDaySummary = createAction(constants.REQUEST_USER_DAY_SUMMARY);
export const successUserDaySummary = createAction(constants.SUCCESS_USER_DAY_SUMMARY);
export const errorUserDaySummary = createAction(constants.ERROR_USER_DAY_SUMMARY);

export const requestUpdateUserDaySummary = createAction(constants.REQUEST_UPDATE_USER_DAY_SUMMARY);
export const successUpdateUserDaySummary = createAction(constants.SUCCESS_UPDATE_USER_DAY_SUMMARY);
export const errorUpdateUserDaySummary = createAction(constants.ERROR_UPDATE_USER_DAY_SUMMARY);
// --Employee Update Day Summary ---
export const requestUpdateEmpDaySummary = createAction(constants.REQUEST_UPDATE_EMP_DAY_SUMMARY);
export const successUpdateEmpDaySummary = createAction(constants.SUCCESS_UPDATE_EMP_DAY_SUMMARY);
export const errorUpdateEmpDaySummary = createAction(constants.ERROR_UPDATE_EMP_DAY_SUMMARY);

export const requestUsersList = createAction(constants.REQUEST_USERSLIST);
export const successUsersList = createAction(constants.SUCCESS_USERSLIST);
export const errorUsersList = createAction(constants.ERROR_USERSLIST);

export const requestPolicyDocument = createAction(constants.REQUEST_POLICY_DOCUMENT);

export const requestUserPolicyDocument = createAction(constants.REQUEST_USER_POLICY_DOCUMENT);
export const successPolicyDocuments = createAction(constants.SUCCESS_POLICY_DOCUMENT);
export const errorPolicyDocuments = createAction(constants.ERROR_POLICY_DOCUMENT);

export const userDataUpdated = createAction(constants.USER_LOGIN_SUCCESS);

export const requestSubmitDocs = createAction(constants.REQUEST_SUBMIT_DOCS);
export const successSubmitDocs = createAction(constants.SUCCESS_SUBMIT_DOCS);
export const errorSubmitDocs = createAction(constants.ERROR_SUBMIT_DOCS);

export const requestUpdateReadStatus = createAction(constants.REQUEST_UPDATE_READ);
export const errorUpdateReadStatus = createAction(constants.ERROR_UPDATE_READ);

export const requestTeamList = createAction(constants.REQUEST_TEAM_LIST);
export const successTeamList = createAction(constants.SUCCESS_TEAM_LIST);
export const errorTeamList = createAction(constants.ERROR_TEAM_LIST);

export const requestAddTeam = createAction(constants.REQUEST_ADD_TEAM);
export const successAddTeam = createAction(constants.SUCCESS_ADD_TEAM);
export const errorAddTeam = createAction(constants.ERROR_ADD_TEAM);

export const requestGetTeam = createAction(constants.REQUEST_GET_TEAM);
export const successGetTeam = createAction(constants.SUCCESS_GET_TEAM);
export const errorGetTeam = createAction(constants.ERROR_GET_TEAM);

export const requestTeamStats = createAction(constants.REQUEST_TEAM_STATS);
export const successTeamStats = createAction(constants.SUCCESS_TEAM_STATS);
export const errorTeamStats = createAction(constants.ERROR_TEAM_STATS);

// dashboard graph apis
export const requestMonthlyReportAllUsers = createAction(constants.REQUEST_MONTHLY_REPORT_ALL_USERS);
export const successMonthlyReportAllUsers = createAction(constants.SUCCESS_MONTHLY_REPORT_ALL_USERS);
export const errorMonthlyReportAllUsers = createAction(constants.ERROR_MONTHLY_REPORT_ALL_USERS);

export const requestEmployeLifeCycle = createAction(constants.REQUEST_EMP_LIFE_CYCLE);
export const successEmployeLifeCycle = createAction(constants.SUCCESS_EMP_LIFE_CYCLE);
export const errorEmployeLifeCycle = createAction(constants.ERROR_EMP_LIFE_CYCLE);

export const requestEmployeeHours = createAction(constants.REQUEST_EMP_HOURS);
export const successEmployeeHours = createAction(constants.SUCCESS_EMP_HOURS);
export const errorEmployeeHours = createAction(constants.ERROR_EMP_HOURS);

export const requestEmployeeMonthlyHours = createAction(constants.REQUEST_EMP_MONTHLY_HOURS);
export const successEmployeeMonthlyHours = createAction(constants.SUCCESS_EMP_MONTHLY_HOURS);
export const errorEmployeeMonthlyHours = createAction(constants.ERROR_EMP_MONTHLY_HOURS);

export const requestEmployeePerformance = createAction(constants.REQUEST_EMP_PERFORMANCE);
export const successEmployeePerformance = createAction(constants.SUCCESS_EMP_PERFORMANCE);
export const errorEmployeePerformance = createAction(constants.ERROR_EMP_PERFORMANCE);

export const requestUserList = createAction(constants.REQUEST_USER_LIST);
export const successUserList = createAction(constants.SUCCESS_USER_LIST);
export const errorUserList = createAction(constants.ERROR_USER_LIST);

export const requestAddInventoryComment = createAction(constants.ACTION_REQUEST_ADD_INVENTORY_COMMENT);
export const successAddInventoryComment = createAction(constants.ACTION_SUCCESS_ADD_INVENTORY_COMMENT);
export const errorAddInventoryComment = createAction(constants.ACTION_ERROR_ADD_INVENTORY_COMMENT);

export const requestUnapprovedList = createAction(constants.ACTION_REQUEST_UPDATE_UNAPPROVED_USER);
export const successUnapprovedList = createAction(constants.ACTION_SUCCESS_UPDATE_UNAPPROVED_USER); 
export const errorUnapprovedList = createAction(constants.ACTION_ERROR_UPDATE_UNAPPROVED_USER);

export const requestApprovedList = createAction(constants.ACTION_REQUEST_UPDATE_APPROVED_USER);
export const successApprovedList = createAction(constants.ACTION_SUCCESS_UPDATE_APPROVED_USER); 
export const errorApprovedList = createAction(constants.ACTION_ERROR_UPDATE_APPROVED_USER);

export const requestUnassignedDeviceList = createAction(constants.REQUEST_UNASSIGNED_DEVICE_LIST);
export const successUnassignedDeviceList = createAction(constants.ACTION_SUCCESS_UNASSIGNED_DEVICE_LIST);
export const errorUnassignedDeviceList = createAction(constants.ACTION_ERROR_UNASSIGNED_DEVICE_LIST);


export const requestAddUserComment = createAction(constants.REQUEST_ADD_USER_COMMENT);
export const successAddUserComment = createAction(constants.ACTION_SUCCESS_ADD_USER_COMMENT);
export const errorAddUserComment = createAction(constants.ACTION_ERROR_ADD_USER_COMMENT);

export const requesteditwithoutapi = createAction(constants.ACTION_REQUEST_EDIT_WITHOUT_API);
export const successeditwithoutapi = createAction(constants.ACTION_SUCCESS_EDIT_WITHOUT_API);
export const erroreditwithoutapi = createAction(constants.ACTION_ERROR_EDIT_WITHOUT_API);

export const requestAddNewUserDetails = createAction(constants.REQUEST_ADD_NEW_USER_DETAILS);
export const successAddNewUserDetails = createAction(constants.ACTION_SUCCESS_ADD_NEW_USER_DETAILS);
export const errorAddNewUserDetails = createAction(constants.ACTION_ERROR_ADD_NEW_USER_DETAILS)

export const requestLeastActiveEmployee = createAction(constants.REQUEST_LEAST_ACTIVE_EMP);
export const successLeastActiveEmployee = createAction(constants.SUCCESS_LEAST_ACTIVE_EMP);
export const errorLeastActiveEmployee = createAction(constants.ERROR_LEAST_ACTIVE_EMP);

export const requestHealthStats = createAction(constants.REQUEST_HEALTH_STATS);
export const successHealthStats = createAction(constants.SUCCESS_HEALTH_STATS);
export const errorHealthStats = createAction(constants.ERROR_HEALTH_STATS);

export const requestHealthStatsSecretKeyList = createAction(constants.REQUEST_HEALTH_STATS_SECRET_KEY_LIST);
export const successHealthStatsSecretKeyList = createAction(constants.SUCCESS_HEALTH_STATS_SECRET_KEY_LIST);
export const errorHealthStatsSecretKeyList = createAction(constants.ERROR_HEALTH_STATS_SECRET_KEY_LIST);

export const requestHealthStatsAddSecretKey = createAction(constants.REQUEST_HEALTH_STATS_ADD_SECRET_KEY);
export const successHealthStatsAddSecretKey = createAction(constants.SUCCESS_HEALTH_STATS_ADD_SECRET_KEY);
export const errorHealthStatsAddSecretKey = createAction(constants.ERROR_HEALTH_STATS_ADD_SECRET_KEY);

export const requestHealthStatsDeleteSecretKey = createAction(constants.REQUEST_HEALTH_STATS_DELETE_SECRET_KEY);
export const successHealthStatsDeleteSecretKey = createAction(constants.SUCCESS_HEALTH_STATS_DELETE_SECRET_KEY);
export const errorHealthStatsDeleteSecretKey = createAction(constants.ERROR_HEALTH_STATS_DELETE_SECRET_KEY);

export const requestHealthStatsRegenerateSecretKey = createAction(constants.REQUEST_HEALTH_STATS_REGENERATE_SECRET_KEY);
export const successHealthStatsRegenerateSecretKey = createAction(constants.SUCCESS_HEALTH_STATS_REGENERATE_SECRET_KEY);
export const errorHealthStatsRegenerateSecretKey = createAction(constants.ERROR_HEALTH_STATS_REGENERATE_SECRET_KEY);

export const requestDeleteHealthStats = createAction(constants.DELETE_HEALTH_STATS);
export const successDeleteHealthStats = createAction(constants.SUCCESS_DELETE_HEALTH_STATS);
export const errorDeleteHealthStats = createAction(constants.ERROR_DELETE_HEALTH_STATS);

export const requestStatsHistory = createAction(constants.REQUEST_STATS_HISTORY);
export const successStatsHistory = createAction(constants.SUCCESS_STATS_HISTORY);
export const errorStatsHistory = createAction(constants.ERROR_STATS_HISTORY);

export const requestStatsLeaveHistory = createAction(constants.REQUEST_STATS_LEAVE_HISTORY);
export const successStatsLeaveHistory = createAction(constants.SUCCESS_STATS_LEAVE_HISTORY);
export const errorStatsLeaveHistory = createAction(constants.ERROR_STATS_LEAVE_HISTORY);
export const updateFlag = createAction(constants.UPDATE_FLAG);

export const requestGetAttendanceUploadSetting = createAction(constants.REQUEST_GET_ATTANDANCE_UPLOAD_SETTING);
export const successGetAttendanceUploadSetting = createAction(constants.SUCCESS_GET_ATTANDANCE_UPLOAD_SETTING);
export const errorGetAttendanceUploadSetting = createAction(constants.ERROR_GET_ATTANDANCE_UPLOAD_SETTING);

export const requestAddAttendanceUploadSetting = createAction(constants.REQUEST_ADD_ATTANDANCE_UPLOAD_SETTING);
export const successAddAttendanceUploadSetting = createAction(constants.SUCCESS_ADD_ATTANDANCE_UPLOAD_SETTING);
export const errorAddAttendanceUploadSetting = createAction(constants.ERROR_ADD_ATTANDANCE_UPLOAD_SETTING);

export const requestDeleteAttendanceUploadSetting = createAction(constants.REQUEST_DELETE_ATTANDANCE_UPLOAD_SETTING);
export const successDeleteAttendanceUploadSetting = createAction(constants.SUCCESS_DELETE_ATTANDANCE_UPLOAD_SETTING);
export const errorDeleteAttendanceUploadSetting = createAction(constants.ERROR_DELETE_ATTANDANCE_UPLOAD_SETTING);

export const requestResetPasswordSetting = createAction(constants.REQUEST_RESET_PASSWORD_SETTING);
export const successResetPasswordSetting = createAction(constants.SUCCESS_RESET_PASSWORD_SETTING);
export const errorrResetPasswordSetting = createAction(constants.ERROR_RESET_PASSWORD_SETTING);

export const requestResetPasswordStatus = createAction(constants.REQUEST_RESET_PASSWORD_STATUS);
export const successResetPasswordStatus = createAction(constants.SUCCESS_RESET_PASSWORD_STATUS);
export const errorrResetPasswordStatus = createAction(constants.ERROR_RESET_PASSWORD_STATUS);

export const requestClearResetPasswordData = createAction(constants.REQUEST_CLEAR_RESET_PASSWORD_DATA);
export const successClearResetPasswordData = createAction(constants.SUCCESS_CLEAR_RESET_PASSWORD_DATA);

export const showInventoryPending = createAction(constants.SHOW_INVENTOEY_PENDING); 

