import {APIRequest} from "../common/type";
import router from "./data";
import FileManager from "../contoller/FileManager";

router.post('/login', (req, res) => {
    const data = req.body as { directoryName: string }
    const dirResponse =  FileManager.shared.searchDirectory(data.directoryName)
    res.send(dirResponse)
})

export default router