
//Nav effects
const links = document.querySelectorAll("a");
console.log(links);
links.forEach( item => {

	//Pink on hover
    item.addEventListener("mouseover", event =>{
    item.style.color = "pink";
    });

    //Reset color when not hover
    item.addEventListener("mouseleave", event =>{
        item.style.color = "black";
    });

    //Background to cyan on click
    item.addEventListener("click", event =>{
    	//stop normal effects when clicking
        event.preventDefault();

        item.style.background = "cyan";
        event.stopPropagation();
    });

});

//Header
const header = document.querySelector("header");
header.addEventListener("click" , (event) => {
    header.style.backgroundColor = "BlanchedAlmond";
});
header.addEventListener("mouseenter", (event) => {
    header.style.backgroundColor = "pink";
});
header.addEventListener("mouseleave", (event) => {
    header.style.backgroundColor = "white";
});

//Invert bus
const headerLogo = document.querySelector('.intro img');
headerLogo.addEventListener('click', (event)=>{
	headerLogo.style.filter = "opacity(0.5)";
	headerLogo.style.transition = "2s";
	event.stopPropagation();
})
headerLogo.addEventListener('dblclick', (event)=>{
	headerLogo.style.filter = "opacity(1)";
	headerLogo.style.transition = "2s";
	event.stopPropagation();
})

//text
const banner = document.querySelector('header p')
banner.addEventListener('mouseenter', (event) => {
    banner.textContent = "~Hover over mouse~"
})
banner.addEventListener('mouseleave', (event) => {
    banner.textContent = "Animations are working!";
})

const imgContent = document.querySelector('.img-content');
imgContent.addEventListener('wheel', (event)=>{
	imgContent.style.filter = "opacity(0)";
})
imgContent.addEventListener('click', (event)=>{
	imgContent.style.filter = "opacity(1)";
})