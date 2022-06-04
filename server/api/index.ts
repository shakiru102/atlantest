import express, { Response, Request } from 'express'
import fs from 'fs'
import { parse } from 'csv'

const app = express()

//  app.get('/api', (req: Request, res: Response) => res.send('server is runing'))

 app.get('/api', (req: Request, res: Response) => {
     console.log('reached');
     
   const parser = parse({  columns: true}, (err, records) => {
         if(records) res.status(200).json(records)
          else res.status(400).send(err)
   })
   fs.createReadStream('./server/api/customers.csv').pipe(parser)
 })

export default app