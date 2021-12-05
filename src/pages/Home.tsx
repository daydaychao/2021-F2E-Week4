import { ReactChild, ReactFragment, ReactPortal, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { always, identity, map, memoizeWith, tap } from 'ramda'
import { TypeFE, TypeUI, TypeKey } from '@/types'
import * as V from 'victory'
import { VictoryChart, VictoryStack, VictoryBar, VictoryAxis, VictoryTheme } from 'victory'
import useStore from '@/store'

let UIAgeArray: any[] = []
let FEAgeArray: any[] = []
let UIAgeSource: any[] = []
let FEAgeSource: any[] = []

let UISalaryArray: any[] = []
let FESalaryArray: any[] = []
let UISalarySource: any[] = []
let FESalarySource: any[] = []

const filterAges = (dataArray: string[]) => {
  let cache = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0
  }
  dataArray.forEach((item: string) => {
    if (item.includes('21')) {
      cache.a++
    }
    if (item.includes('26')) {
      cache.b++
    }
    if (item.includes('31')) {
      cache.c++
    }
    if (item.includes('36')) {
      cache.d++
    }
    if (item.includes('41')) {
      cache.e++
    }
    if (item.includes('46')) {
      cache.f++
    }
  })
  return Object.values(cache)
}
const filterSalary = (dataArray: string[]) => {
  let cache = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0
  }
  dataArray.forEach((item: string, index) => {
    if (item.includes('36')) {
      cache.a++
    }
    if (item.includes('51')) {
      cache.b++
    }
    if (item.includes('61')) {
      cache.c++
    }
    if (item.includes('71')) {
      cache.d++
    }
    if (item.includes('81')) {
      cache.e++
    }
    if (item.includes('91')) {
      cache.f++
    }
    if (item.includes('101')) {
      cache.g++
    }
    if (item.includes('111')) {
      cache.h++
    }
    if (item.includes('121')) {
      cache.i++
    }
    if (item.includes('131')) {
      cache.j++
    }
    if (item.includes('141')) {
      cache.k++
    }
  })
  return Object.values(cache)
}
const makeChartSource = (dataArray: string[]) => {
  let cache: any[] = []
  dataArray.forEach((item: string, index: number) => {
    cache.push({ rangeIndex: index, value: Number(item) })
  })
  return cache
}

export function Home() {
  const store = useStore()
  const getAllData = store.getAllData
  const UIData = store.UIData
  const FEData = store.FEData
  const UIAge = store.UIAge
  const FEAge = store.FEAge
  const UISalary = store.UISalary
  const FESalary = store.FESalary

  //抓資料
  useEffect(() => {
    getAllData()
  }, [])

  console.log('UISalary', UISalary)
  UIAgeArray = filterAges(UIAge)
  FEAgeArray = filterAges(FEAge)
  UIAgeSource = makeChartSource(UIAgeArray)
  FEAgeSource = makeChartSource(FEAgeArray)
  UISalaryArray = filterSalary(UISalary)
  FESalaryArray = filterSalary(FESalary)
  UISalarySource = makeChartSource(UISalaryArray)
  FESalarySource = makeChartSource(FESalaryArray)

  return (
    <main className="py-4">
      <section className="flex flex-row flex-wrap md:flex-nowrap mb-2">
        <div className="bg-[#2c2c2c] p-4 mb-4 md:mb-0 md:mr-2">
          UI設計師 年齡分布
          <VictoryChart>
            <VictoryAxis style={{ tickLabels: { fill: '#a7a7a7' } }} tickFormat={['21~25', '26~30', '31~35', '36~40', '41~45', '46~50', '51以上']} />
            <VictoryAxis style={{ tickLabels: { fill: '#a7a7a7' } }} dependentAxis tickFormat={(x) => x + '人'} label="歲" />
            <VictoryStack colorScale={['#9effb0']}>
              <VictoryBar data={UIAgeSource} x="rangeIndex" y="value" />
            </VictoryStack>
          </VictoryChart>
        </div>
        <div className="bg-[#2c2c2c] p-4">
          前端工程師 年齡分布
          <VictoryChart>
            <VictoryAxis style={{ tickLabels: { fill: '#a7a7a7' } }} tickFormat={['21~25', '26~30', '31~35', '36~40', '46~50', '51以上']} />
            <VictoryAxis style={{ tickLabels: { fill: '#a7a7a7' } }} dependentAxis tickFormat={(x) => x + '人'} />
            <VictoryStack colorScale={['#67d6fb']}>
              <VictoryBar data={FEAgeSource} x="rangeIndex" y="value" />
            </VictoryStack>
          </VictoryChart>
        </div>
      </section>

      <section className="flex flex-row flex-wrap md:flex-nowrap ">
        <div className="bg-[#2c2c2c] p-4 mb-4 md:mb-0 md:mr-2">
          UI設計師 薪水分布 (純人數,沒有依照年資)
          <VictoryChart>
            <VictoryAxis style={{ tickLabels: { fill: '#a7a7a7' } }} tickFormat={['50', '60', '70', '80', '90', '100', '110', '111', '120', '130', '140']} />
            <VictoryAxis style={{ tickLabels: { fill: '#a7a7a7' } }} dependentAxis tickFormat={(x) => x + '人'} />
            <VictoryStack colorScale={['#9effb0']}>
              <VictoryBar data={UISalarySource} x="rangeIndex" y="value" />
            </VictoryStack>
          </VictoryChart>
        </div>
        <div className="bg-[#2c2c2c] p-4">
          前端工程師 薪水分布 (純人數,沒有依照年資)
          <VictoryChart>
            <VictoryAxis style={{ tickLabels: { fill: '#a7a7a7' } }} tickFormat={['50', '60', '70', '80', '90', '100', '110', '111', '120', '130', '140']} />
            <VictoryAxis style={{ tickLabels: { fill: '#a7a7a7' } }} dependentAxis tickFormat={(x) => x + '人'} />
            <VictoryStack colorScale={['#67d6fb']}>
              <VictoryBar data={FESalarySource} x="rangeIndex" y="value" />
            </VictoryStack>
          </VictoryChart>
        </div>
      </section>
    </main>
  )
}
