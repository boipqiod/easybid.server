import express from "express";
import {APIRequest, APIResponse} from "../common/type";
import FileManager from "../contoller/FileManager";
const router = express.Router()

router.get('/test', (req, res) => {
    res.send({test: req})
})

router.post('/save', (req, res)=>{
    const data = req.body as APIRequest
    console.log(`************SaveData***********`)
    console.log(`id: ${data.ebId}`)
    console.log(`fileName: ${data.fileName}`)
    console.log(`data: ${JSON.stringify(data.data)}`)
    FileManager.shared.saveFile(data.ebId, data.fileName, data.data ?? [])
    console.log(`*******************************`)
    res.send(true)
})

router.get('/load', (req, res) => {
    const data = req.query as unknown as APIRequest
    console.log(`************LoadData***********`)
    console.log(`id: ${data.ebId}`)
    console.log(`fileName: ${data.fileName}`)
    const response: APIResponse = FileManager.shared.loadFile(data.ebId, data.fileName) ?? []
    console.log(`data: ${JSON.stringify(response)}`)
    console.log(`*******************************`)
    res.send(response)
})


export default router