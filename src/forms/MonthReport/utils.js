import moment from 'moment';
import { GLOBAL_DATE_FORMAT } from '../../_constants';

export function addOneDay(dateValue) {
  return moment(dateValue, GLOBAL_DATE_FORMAT).add(1, 'days').format(GLOBAL_DATE_FORMAT);
}

export function minusCurrentDate(howMany, type) {
  return moment().subtract(howMany, type).format(GLOBAL_DATE_FORMAT);
}
