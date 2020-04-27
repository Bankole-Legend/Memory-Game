document.addEventListener('DOMContentLoaded', () =>{
    //All the boxes representing the the cards
        const boxArray = [
            {
                name: 'first',
                img:'images/first.png'
            },
            {
                name: 'first',
                img:'images/first.png'
            },
            {
                name: 'second',
                img:'images/second.png'
            },
            {
                name: 'second',
                img:'images/second.png'
            },
            {
                name: 'third',
                img:'images/third.png'
            },
            {
                name: 'third',
                img:'images/third.png'
            },
            {
                name: 'fourth',
                img:'images/fourth.png'
            },
            {
                name: 'fourth',
                img:'images/fourth.png'
            },
            {
                name: 'fifth',
                img:'images/fifth.jpeg'
            },
            {
                name: 'fifth',
                img:'images/fifth.jpeg'
            },
            {
                name: 'sixth',
                img:'images/sixth.png'
            },
            {
                name: 'sixth',
                img:'images/sixth.png'
            }
         ]
    
    const gameBox = document.querySelector('.box')
    // making the game board
    function gameBoard(){
        for(let i = 0; i < boxArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/background.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', turnCard)
            gameBox.appendChild(card)
        }
    }
    

    //checking cards that match

    //the turnCard function
    function turnCard(){
        let cardId =this.getAttribute('data-Id')
    }
    
    gameBoard()
    
    
    
    
    
     
    
    
    
    
    
    
    
    
    
    
    
 
})