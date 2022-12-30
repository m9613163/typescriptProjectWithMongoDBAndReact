import { makeFakeData, IFake } from "../fake/makeFakeData"

const fakeData: IFake = makeFakeData()
console.log(fakeData)

// 실행 결과
/*
{
  name: 'Blanche Kennedy',
  email: 'kuk@parolo.gov',
  profession: 'Interior Decorator',
  birthday: 1983-04-15T15:28:16.584Z,
  sentence: 'Sanab keh wuz bafi go ewwig fehcum fodgi bipi mandaduge ril nafon vubodzi gow tin ho gilefo zujefi.'
}
*/