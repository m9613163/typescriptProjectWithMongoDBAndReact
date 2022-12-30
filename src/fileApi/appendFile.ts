import * as fs from 'fs'

export const appendFile = (fielname: string, data: any): Promise<any> => 
    new Promise((resolve, reject) => {
        fs.appendFile(fielname, data, 'utf-8', (error: Error) => {
            error ? reject(error) : resolve(data)
        })
    })