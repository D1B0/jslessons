import {DateTime} from 'https://moment.github.io/luxon/es6/luxon.js'

export const diffDate = (date1, date2) => {
    const iso1 = DateTime.fromISO(date1)
    const iso2 = DateTime.fromISO(date2)

  return iso2.diff(iso1,['years','month','days']).toObject();
}