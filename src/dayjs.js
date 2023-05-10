import dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import * as isoWeek from 'dayjs/plugin/isoWeek';
import * as timezone from 'dayjs/plugin/timezone';
import * as isLeapYear from 'dayjs/plugin/isLeapYear';
import * as objectSupport from 'dayjs/plugin/objectSupport';
import 'dayjs/locale/pt-br';

dayjs.extend(utc);
dayjs.extend(isoWeek);
dayjs.extend(timezone);
dayjs.extend(isLeapYear);
dayjs.extend(objectSupport);
dayjs.locale('pt-br');

export { dayjs };