import { writeCsvFormatFakeData } from "./fake"
import { getFileNameAndNumber } from "./utils/getFileNameAndNumber"

const [filename, numberOfItems] = getFileNameAndNumber('./data/fake', 1)
const csvFilename = `${filename}-${numberOfItems}.csv`
writeCsvFormatFakeData(csvFilename, numberOfItems)
    .then(result => console.log(result))
    .catch((e: Error) => console.log(e.message))

// 실행 결과
// write 1 items to ./data/fake-1.csv file