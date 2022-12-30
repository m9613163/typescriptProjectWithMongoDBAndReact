import * as fs from 'fs'

function* readFileGenerator() {
    yield 1
    //@ts-ignore
    fs.readFile('filename', (err: Error, data: any) => { 
        yield data
    })
}