const express = require('express');
const { User } = require('../models');
const bcrypt = require('bcrypt');
const router = express.Router();

// 회원가입 

router.post('/register', async (req, res, next)=>{
    try {
        const { userId, pw, nick, email} = req.body;
        // 보안을 위해 비밀번호를 암호화 해주는 작업이 필요함.
        const hash = await bcrypt.hash(pw,12);

        // db에서 not null을 허용하지 않았는데 null 값이 들어가면 create가 안되나?
        await User.create({
            userId,
            pw: hash,
            nick,
            email,
        })
        // 회원가입이 성공했다면 200을 보내준다.
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        // 잘못된 요청이 들어오면 400을 보내준다.
        res.sendStatus(400);
    }
})

// 아이디 중복 체크 
    router.get('/register/:id', async (req, res, next)=>{
        try {
            // 입력한 아이디가 사용중인 id인지 확인
            const isUsingId = await User.findOne({ where:{
                userId: req.params.id
            }})
            if(isUsingId){
                // 사용중인 아이디라면 403을 보내준다.
                res.sendStatus(403)
            }else{
                // 사용중이 아니면 200을 보내준다.
                res.sendStatus(200)
            }
        } catch (error) {
            console.log(error)
            res.sendStatus(404)
        }
    })

// 닉네임 중복 체크

    router.get('/register/:id', async (req, res, next)=>{
        try {
            // 입력한 닉네임이 사용중인 닉네임인지 확인
            const isUsingNick = await User.findOne({where:{
                nick: req.params.id
            }})
            if(isUsingNick){
                // 사용중인 닉네임일 때 403
                res.sendStatus(403);
            }else{
                // 사용중인 닉네임이 아닐 때 200
                res.sendStatus(200);
            }
        } catch (error) {
            console.log(error)
            res.sendStatus(404)
        }
    })

