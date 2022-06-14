import express from 'express'
const router = express.Router()

// router.post('/user', (req, res) => {
//     console.log(req.body);
//     res.send(req.body)
// })
router.post('/', (req, res) => {
    const body = req.body
    res.send({
        status: 0,
        msg: "POST请求成功",
        data: body
    })
    console.log(body)
})

router.delete('/', (req, res) => {
    const body = req.body
    res.send({
        status: 0,
        msg: "DELETE请求成功",
        data: body
    })
    console.log("DELETE请求成功", body)
})

router.post('/login', (req, res) => {
    if (req.body.username !== 'admin' || req.body.password !== '123') {
        return res.send({ status: 1, msg: '登录失败' })
    }
    req.session.user = req.body
    req.session.isLogin = true

    res.send({ status: 0, msg: '登录成功' })
})
export default router

