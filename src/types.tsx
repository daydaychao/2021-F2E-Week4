export type TypeFE = {
  job: string // 職稱
  gender: string // 性別
  age: string // 年齡
  education: string // 學歷
  major: string // 科系
  // 第一份工作
  first_job: {
    tenure: string // 第一份年資
    leave: string // 第一份工作離職原因
    position: string // 第一份工作被要求非前端工程師的技能
    skill: string // 第一份工作上公司所導入的技能
    render: string // 接觸到哪一種開發模式
  }
  // 工作相關
  works: {
    window: string // 主要是哪些窗口有溝通障礙
    market: string // 自評工作能力範圍
  }
  // 目前公司
  company: {
    industry: string // 產業類型
    score: string // 產業滿意度
    work: string // 工作型態
    area: string // 公司位置
    scale: string // 公司規模人數
    people: string // 相同職位人數
    job_tenure: string // 工作年資
    salary: string // 年薪範圍
    salary_score: string // 薪水滿意度
    industry_message: string // 產業簽到區
  }
}

export type TypeUI = {
  job: string // 職稱
  name: string // 姓名
  gender: string // 性別
  age: string // 年齡
  education: string // 學歷
  major: string // 科系
  // 第一份工作
  first_job: {
    tenure: string // 第一份年資
    leave: string // 第一份離職原因
    content: string // 第一份工作內容
    skill: string // 你掌握哪些開發技能
    software: string // 公司主要使用哪些繪圖軟體
  }
  // 工作相關
  works: {
    window: string // 主要是哪些窗口有溝通障礙
  }
  // 目前公司
  company: {
    industry: string // 產業類型
    score: string // 產業滿意度
    work: string // 工作型態
    area: string // 公司位置
    scale: string // 公司規模人數
    people: string // 相同職位人數
    job_tenure: string // 工作年資
    salary: string // 年薪範圍
    salary_score: string // 薪水滿意度
    industry_message: string // 產業簽到區
  }
}

export type TypeKey = keyof TypeFE & keyof TypeUI
