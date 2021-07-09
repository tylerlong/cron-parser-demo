import cronParser from 'cron-parser';
import moment from 'moment-timezone';

const interval = cronParser.parseExpression('1 1 1 1 1 *');

const dateString = interval.prev().toISOString();

const prevTimestamp = moment.tz(dateString, 'utc');

const currentTimestamp = moment
  .tz(dateString, 'utc')
  .seconds(0)
  .milliseconds(0);

console.log((currentTimestamp as any) - (prevTimestamp as any));
