console.log('hello');

setTimeout(()=>{
    console.log('how are you');
}, 1000)

console.log('bye');

// setTimeout(()=>{
//     console.log('im fine');
// }, 1000)


function getRecipes(){
    setTimeout(()=> {
        console.log('hi all')
        const recipe_id = [1, 2, 3, 4, 5]
        console.log(recipe_id)

        setTimeout((id)=>{
            const recipe_authors = {
                author : 'Ana',
                recipe: 'Fresh juice'
            }
            console.log(recipe_authors)
        



            setTimeout((author)=>{
                const recipe_authors2 = {
                    user: author,
                    recipe: 'chocolate',
                }
                console.log(recipe_authors2);
                console.log(`${recipe_authors2.recipe} is also made by ${recipe_authors2.author}`)
            })
        }, 1500, recipe_id[2], recipe_authors.author)
    }, 2500)
}

getRecipes()