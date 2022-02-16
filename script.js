const inputValue = document.querySelector('#inputValue')
const inputForm = document.querySelector('.myForm')
const copyLink = document.querySelector('.copy-button')
const generatedLink = document.querySelector('.generated-link')
inputForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue.value}`)
    .then((res) => res.json())
    .then((data) => shortLink(data))
})

function shortLink(data){
    generatedLink.value = `${data.result.short_link}`
}

copyLink.addEventListener('click', ()=>{
    const generatedLink = document.querySelector('.generated-link')
    generatedLink.select()
    generatedLink.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(generatedLink.value);
})