import { IFake, makeFakeData } from "../fake/makeFakeData"

const data: IFake = makeFakeData()
const keys = Object.keys(data)
console.log('keys: ', keys)
const values = Object.values(data)
console.log('value: ', values)

// 실행 결과
/*
keys:  [ 'name', 'email', 'profession', 'birthday', 'sentence' ]
value:  [
  'Kathryn Green',
  'tan@inenap.mo',
  'Optometrist',
  1971-01-16T20:51:39.418Z,
  'Ijri fi wozsifepu upmevvar vih lokad wed irrarimo vaghonji hurebo araveaz peora.'
]
*/