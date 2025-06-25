// new Date, new Math

const promise = new Promise((resolve, reject)=> {
    setTimeout(() =>{
        // resolve({
        //     user_name : 'Ana'
        // })

        reject(new Error('ასეთი მომხმარებელი ვერ მოიძებნა'))
    }, 1500)

})

promise('nt@gmail.com', 1234)

.then(user => console.log(user))

.catch(err => console.log(err))



