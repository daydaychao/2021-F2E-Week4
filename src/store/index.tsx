import create from 'zustand'
import { salary as api } from '@/api'
import { TypeFE, TypeUI, TypeKey } from '@/types'

interface State {
  loading: boolean
  FEData: TypeFE[]
  UIData: TypeUI[]
  FEAge: string[]
  UIAge: string[]
  FESalary: string[]
  UISalary: string[]
  getAllData: () => void
}
const useStore = create<State>((set) => ({
  loading: false,
  FEData: [],
  UIData: [],
  FEAge: [],
  UIAge: [],
  FESalary: [],
  UISalary: [],
  async getAllData() {
    await api.getFEData().then((res) => set((state) => (state.FEData = res)))
    await api.getUIData().then((res) => set((state) => (state.UIData = res)))
    await set((state) => {
      state.FEAge = getRange(state.FEData, 'age')
      state.UIAge = getRange(state.UIData, 'age')
      state.FESalary = getRange(state.FEData, 'company', 'salary')
      state.UISalary = getRange(state.UIData, 'company', 'salary')
    })
  },
  setLoading(flag: boolean) {
    set({ loading: flag })
  }
}))

const getRange = (data: any, key: any, childKey?: any): string[] => {
  let range: any[] = []
  data.map((item: any) => {
    if (childKey) {
      let res = item[key as TypeKey][childKey]
      range.push(res)
      return
    } else {
      let res = item[key as TypeKey]
      range.push(res)
    }
  })
  return (range = range.sort((a, b) => a - b))
}

export default useStore
