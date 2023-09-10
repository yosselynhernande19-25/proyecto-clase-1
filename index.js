async function getData(){

    try {

        const response = await fetch("https://rickandmortyapi.com/api/character")

        const data = await response.json()  


        data.results.forEach(element => {

            const article = document.createRange().createContextualFragment(`

                <article>
                    <div class="image-container">
                        <img src="${element.image}"></img>
                    
                    </div>

                    <h2>${element.name}</h2>
                    <span>${element.status}</span>
                
                
                </article>

                `)
                const main = document.querySelector("main")
            main.append(article)
        });
            
        } catch (error) {


        console.log('Ha ocurrido un error'+ error)
    }
}

getData()