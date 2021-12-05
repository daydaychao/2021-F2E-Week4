import { always, identity, map, memoizeWith, tap } from 'ramda'

import apiFE from '@/api/frontend_data.json'
import apiUI from '@/api/ui_data.json'

export const salary = {
  getFEData: () => {
    return Promise.resolve(apiFE).then(tap(console.log))
  },
  // .catch((err) => console.warn(err)),
  getUIData: () => {
    return Promise.resolve(apiUI).then(tap(console.log))
  }
  // .catch((err) => console.warn(err))
}
