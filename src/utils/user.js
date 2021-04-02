const users=[]

const addUser=({id, username, room}) => {
    // clean the data
    username=username.trim().toLowerCase()
    room=room.trim().toLowerCase()

    console.log(room)
    // validate the data
    if (!username||!room) {
        return {
            error: "Username and Password are required!"
        }
    }

    // checking for existing user
    const existingUser=users.find((user) => {
        return user.room===room&&user.username===username
    })

    // validate username
    if (existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    // Store user
    const user={id, username, room}
    users.push(user)
    return {user}

}

const removeUser=(id) => {
    const index=users.findIndex((user) => user.id===id)

    if (index!==-1) {
        return users.splice(index, 1)[0]
    }
}

const getUser=(id) => {
    return users.find((user) => user.id===id)
}

const getUsersInRoom=(room) => {
    room=room.trim().toLowerCase()
    return users.filter((user) => user.room===room)
}

module.exports={
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}

// addUser({
//     id: 22,
//     username: 'Andrew',
//     room: ' South philly'
// })

// addUser({
//     id: 42,
//     username: 'Mike ',
//     room: 'South philly'
// })


// addUser({
//     id: 32,
//     username: 'aks',
//     room: 'Center city'
// })

// console.log(users)

// const user=getUser(42)
// console.log(user)

// const userList=getUsersInRoom('south philly')
// console.log(userList)

// const removeuser=removeUser(22)
// console.log(removeuser)
// console.log(users)