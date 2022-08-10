const cardArray=
[
    {
    name: 'cavien',
    img: 'image/cavien.jpg',
    },
    {
        name:'cheese',
        img:'image/cheese.jpg'
    },
    {
        name:'avocado',
        img:'image/kembo.jpg'
    },
    {
        name:'pudding',
        img: 'image/pudding.jpg'
    },
    {
        name:'socola',
        img:'image/socola.jpg'
    },
    {
        name:'trasua',
        img:'image/trasua.jpg'
    },
    {
        name: 'cavien',
        img: 'image/cavien.jpg',
    },
    {
        name:'cheese',
        img:'image/cheese.jpg'
    },
    {
        name:'avocado',
        img:'image/kembo.jpg'
    },
    {
        name:'pudding',
        img: 'image/pudding.jpg'
    },
    {
        name:'socola',
        img:'image/socola.jpg'
    },
    {
        name:'trasua',
        img:'image/trasua.jpg'
    },

]

var timedisplay=document.getElementById('timer')
timedisplay.innerText='Ready'
var time=window.prompt("Nhập số giây bạn muốn chơi")
let mytime=setInterval(timing,1000)
function timing()
{
    timedisplay.innerHTML=time
    time=time-1
    if(time===-1)
    {
        clearInterval(mytime)
        alert('Het gio hehe \r\nHơi non he')
        setTimeout("location.reload(true);",1000)
    }
}

cardArray.sort(()=>0.5-Math.random())
const griddisplay=document.querySelector('#grid')
const resultdisplay=document.querySelector('#result')
let cardChosen=[]
let cardChosenid=[]
const cardsWon=[]
function createBoard()
{
    for(let i=0;i<cardArray.length;i++)
    {
        const card=document.createElement('img')
        card.width=150
        card.height=150
        card.setAttribute('src','image/blank.jpg')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipcard)
        griddisplay.appendChild(card)
    }
}
createBoard()
function flipcard()
{
    let cardId=this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenid.push(cardId)
    console.log(cardChosen)
    console.log(cardChosenid)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardChosen.length===2)
    {
        setTimeout(checkMatch,50)
    }
}
function checkMatch()
{
    const cards=document.querySelectorAll('img')
    const optionone=cardChosenid[0]
    const optiontwo=cardChosenid[1]
    if(optionone===optiontwo)
    {
        alert('No cheating hehe')
    }
    if(cardChosen[0]==cardChosen[1])
    {
        alert('Nice hime')
        cards[cardChosenid[0]].setAttribute('src','image/white.png')
        cards[cardChosenid[1]].setAttribute('src','image/white.png')
        cards[cardChosenid[0]].removeEventListener('click',flipcard)
        cards[cardChosenid[1]].removeEventListener('click',flipcard)
        cardsWon.push(cardChosen)
    }
    else{
        cards[optionone].setAttribute('src','image/blank.jpg')
        cards[optiontwo].setAttribute('src','image/blank.jpg')
        alert('Again pls')
    }
    resultdisplay.innerHTML=cardsWon.length
    cardChosen = []
    cardChosenid = []
    if(cardsWon.length==cardArray.length/2)
    {
        resultdisplay.innerHTML='Win r hehe'
        clearInterval(mytime)
        timedisplay.innerText='Còn tận '+time
    }

}