const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/myownweb/:name', function (req, res) {
    const {name} = req.params

    if (name == "dog"){
        console.log("강아지 소리를 출력합니다.")
        res.send({'sound':'멍멍'})
    }
    else if (name == "cat"){
        console.log("고양이 소리를 출력합니다.")
        res.send({'sound':'야옹'})        
    }
    else if (name == "elephant"){
        console.log("코끼리 소리를 출력합니다.")
        res.send({'sound':'뿌우'})        
    }
    else {
        console.log("아무 소리도 낼 수 없습니다.")
        res.send({'sound':'알수없음'})
    }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})