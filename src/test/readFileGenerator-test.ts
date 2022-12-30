import { readFileGenerator } from "../fileApi"

for(let value of readFileGenerator('data/fake-100000.csv')) {
    console.log('<line>', value, '</line>')
    break           // 일단 첫 줄만 출력
}

// 실행 결과
// <line> name,email,profession,birthday,sentence </line>