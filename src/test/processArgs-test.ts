process.argv.forEach((val: string, index: number) => {
    console.log(index + ': ' + val)
})

// 실행 결과
/*
0: C:\Users\m9613\AppData\Roaming\npm\node_modules\ts-node\dist\bin.js
1: C:\Users\m9613\OneDrive\문서\typescriptProjectWithMongoDBAndReact\src\test\processArgs-test.ts
2: data/fake.csv
3: 100000
*/