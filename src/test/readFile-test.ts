import { readFile } from "../fileApi/readFile"

const readTest = async(filenmae: string) => {
    const result = await readFile(filenmae)
    console.log(`read '${result}' from ${filenmae} file.`)
}

readTest('./data/hello.txt')
    .then(s => readTest('./data/test.json'))
    .catch((e: Error) => console.log(e.message))

// 실행 결과
/*
read 'hello world' from ./data/hello.txt file.
read '{
  "name": "Jack",
  "age": 32
}' from ./data/test.json file.
*/