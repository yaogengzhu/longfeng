import { observable, action } from "mobx"

interface IUser {
    avatarUrl: string
    city: string
    country: string
    gender: number
    language: string
    nickName: string
    province: string
}
const userInfo = observable({
    counter: 0,
})

export {
    userInfo
}