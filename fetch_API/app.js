// ! information responses(100-199)
// ? succesfull responses(200-299)
// ! redirects(300-399)
// ! clients errors(400-499)
// ! server errors(500-599)


fetch('users.json')
.then(res => res.json)

.then(users =>{
    console.log(users)

    const card = document.querySelector('.card')
    console.log(card);

    users.forEach((user) => {
        const cards = `
            <div id="card" class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
            </div>
        </div>
        `
        card.innerHTML += cards
        
    })
})

.catch(err => console.log(err))

// json -> text()
// Number()