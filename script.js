let content = document.getElementsByClassName("content")[0]
let alleLandenBtn = document.getElementsByClassName('landenlijst')[0]
let meesteMensenBtn = document.getElementsByClassName('Mensen')[0]
let allRegions = randomPersonData.map(e => e.region)


//Subopdracht 1: landenLijst
//Gesorteerd op naam

let regions = randomPersonData.map(e => e.region)
let sortedRegions = regions.sort()

let alleLanden = () => {
    for (i = 0; i < sortedRegions.length; i++) {
        let newLi = document.createElement('li')
        newLi.classList.add('text')
        newLi.innerHTML = sortedRegions[i]
        content.appendChild(newLi)
    }
}
//show all regions 
alleLandenBtn.addEventListener("click", () => {
    content.innerHTML = ""
    alleLanden()
})




//Subopdracht 2 : meeste mensen per land

//count how many people per region
let result = randomPersonData.reduce((e, { region }) => {
    e[region] = e[region] || { region, times: 0 };
    e[region].times += 1;
    return e;
}, [])
let countedRegions = Object.values(result)

//sort counts from high to low
let sortCounts = countedRegions.sort((a, b) => (b.times) - (a.times));

//show region and counts 
let countedRegion = () => {
    for (i = 0; i < countedRegions.length; i++) {
        let regionCounts = countedRegions[i]
        let countList = document.createElement('li')
        countList.classList.add('text')
        countList.innerHTML = `${regionCounts.region} :  ${regionCounts.times}`
        content.appendChild(countList)
    }
}

////show all regions with sorted counts
meesteMensenBtn.addEventListener("click", () => {
    content.innerHTML = ""
    countedRegion()
})


