const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const languages = $$('.language_item')
const content = $$('.content_item')
const itemActive = $('.language_item.active')
const line = $('.line')

line.style.width = 1 + itemActive.offsetWidth + 'px'
line.style.left = itemActive.offsetLeft + 'px'

languages.forEach((a,b)=> {
    a.onclick = function(){
        $('.language_item.active').classList.remove('active')
        this.classList.add('active')

        $('.content_item.active').classList.remove('active')
        content[b].classList.add('active')
        
        line.style.width = 1 + this.offsetWidth + 'px'
        line.style.left = this.offsetLeft + 'px'
    }
})