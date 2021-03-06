import {fireAjax} from '../../../services/index';
import {call, put} from 'redux-saga/effects';
import * as actions from '../../../redux/actions';
import * as constants from '../../../redux/constants';

export function* holidayList (action) {
  try {
    const response = yield call(fireAjax, 'POST', '', {
      'action': 'get_holidays_list',
      'year' : action.payload.year
    });
    if (response.error === 0) {
      yield put(actions.successHolidayList(response.data));
    } else if (response.error === 1) {
      yield put(actions.errorHolidayList('API response error.'));
    }
  } catch (e) {
    yield put(actions.errorHolidayList('Error Occurs !!'));
    console.warn('Some error found in requestHolidayList action\n', e);
  }
}

export function* addHoliday (action) {
  try {
    const response = yield call(fireAjax, 'POST', '', {
      'action': 'add_holiday',
       "holiday_date" : action.payload.data.date,
       "token":action.payload.token,
       "holiday_name":action.payload.data.holidayName,
       "holiday_type":action.payload.data.type
    });
    if (response.error === 0) {
      yield put(actions.successAddHoliday(response.data));
    } else if (response.error === 1) {
      yield put(actions.errorAddHoliday(response.data.message));
    }
  } catch (e) {
    yield put(actions.errorAddHoliday('Error Occurs !!'));
    console.warn('Some error found in addHolidayList action\n', e);
  }
}

export function* deleteHoliday (action) {
  try {
    const response = yield call(fireAjax, 'POST', '', {
      'action': 'delete_holiday',
       "holiday_id" : action.payload.id
    });
    if (response.error === 0) {
      yield put(actions.successDeleteHoliday(response.data));
    } else if (response.error === 1) {
      yield put(actions.errorDeleteHoliday(response.data.message));
    }
  } catch (e) {
    yield put(actions.errorDeleteHoliday('Error Occurs !!'));
    console.warn('Some error found in deleteHoliday action\n', e);
  }
}

export function* holidayType (action) {
  try {
    const response = yield call(fireAjax, 'POST', '', {
      'action': 'get_holiday_types_list',
       "token":action.payload.token,
    });
    if (response.error === 0) {
      yield put(actions.successHolidayType(response.data));
    } else if (response.error === 1) {
      yield put(actions.errorHolidayType('API response error.'));
    }
  } catch (e) {
    yield put(actions.errorHolidayType('Error Occurs !!'));
    console.warn('Some error found in requestHolidayType action\n', e);
  }
}