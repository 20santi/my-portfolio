const { atom } = require("recoil");

export const email = atom({
    key: "email",
    default: ""
})

export const subject = atom({
    key: "subject",
    default: ""
})

export const message = atom({
    key: "message",
    default: ""
})