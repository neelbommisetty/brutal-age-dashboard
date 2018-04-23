const moment = require('moment-timezone');
const ical = require('ical-generator');

const cal = ical({
  domain: 'brutalagecalculator.netlify.com',
  name: 'Brutal Age Calendar',
  prodId: { company: 'brutal age calculator', product: 'Event Calendar' }
});

const startDateString = '2018-04-29 09:30';

const eventTypes = [
  {
    name: 'Adventure Path',
    startTime: {
      days: 0,
      hours: 0
    },
    duration: 2520, // minutes,
    repeating: {
      freq: 'WEEKLY', // required
      byDay: ['su']
    }
  },
  {
    name: 'Smilodon',
    startTime: {
      days: 4,
      hours: 19
    },
    duration: 1440, // minutes,
    repeating: {
      freq: 'WEEKLY', // required
      byDay: ['we']
    }
  },
  {
    name: 'Horde Plunder',
    startTime: {
      days: 5,
      hours: 11
    },
    duration: 480, // minutes,
    repeating: {
      freq: 'WEEKLY', // required
      byDay: ['th']
    }
  },
  {
    name: 'Altar Sacrifice',
    startTime: {
      days: 2,
      hours: 19
    },
    duration: 480, // minutes,
    repeating: {
      freq: 'WEEKLY', // required
      byDay: ['tu']
    }
  },
  {
    name: 'Barbarian War',
    startTime: {
      days: 6,
      hours: 18
    },
    duration: 1440, // minutes,
    repeating: {
      freq: 'WEEKLY', // required
      byDay: ['fr']
    }
  }
];

eventTypes.map(evtype => {
  if (evtype.repeating) {
    const start = moment
      .tz(startDateString, 'Asia/Calcutta')
      .add(evtype.startTime.days, 'days')
      .add(evtype.startTime.hours, 'hours');
    const end = moment(start).add(evtype.duration, 'minutes');
    cal.createEvent({
      start: start.toDate(),
      end: end.toDate(),
      summary: evtype.name,
      repeating: evtype.repeating
    });
  }
});

cal.saveSync('test.ical');
