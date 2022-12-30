import { zip } from "../utils"
import { makeFakeData, IFake } from "../fake"

const data = makeFakeData()
const keys = Object.keys(data), values = Object.values(data)

const fake: IFake = zip(keys, values) as IFake
console.log(fake)

// 실행 결과
/*
{
  name: 'Thomas Newman',  
  email: 'wibekcib@vo.gl',
  profession: 'Author',
  birthday: 1993-02-06T08:27:15.312Z,
  sentence: 'Cenaf tilwuwka jaczo ap bijwemo wafsab di fahhigne jok kiw mudahi jutnu jemimfuv mudbovgo ka.'
}
*/