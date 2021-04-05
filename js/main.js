// Load your images on page-load
function preloader() {
    
const imagesList = [
"./img/wind.jpg",
    
"./img/biomass.png",
    
"./img/solar.jpg"
    
];

const images = [];
    
for (let i = 0; i < imagesList.length; i++) {
    
images[i] = new Image();
images[i].src = imagesList[i];
    
}

console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);


//Get all buttons in a NODE LIST of buttons
const buttons = document.querySelectorAll('.btn');


// resource-object that will store the dynamic content.
const resourceContainer = [
        
{
    
headingContent: "Wind",
imgUrl: "./img/wind.jpg",
imgAlt: 'wind image',
bodyText: "Wind energy is the lowest cost option for any new supply without any subsidies. The cost of land-based wind farms is expected to continue to fall in the future.A comprehensive survey of the wind industry shows wind energy is routinely purchased in bulk for just two cents per kilowatt-hour—and turbines are only getting cheaper, bigger, and better."
    
},

{
    
headingContent: "Biomass",
imgUrl: "./img/biomass.jpg",
imgAlt: 'biomass image',
bodyText: " The most common biomass materials used for energy are plants, such as corn and soy, above. The energy from these organisms can be burned to create heat or converted into electricity."

},
        
{
            
headingContent: "Solar",
imgUrl: "./img/solar.jpg",
imgAlt: 'solar image',
bodyText: "The world’s best solar power schemes now offer the “cheapest electricity in history” with the technology cheaper than coal and gas in most major countries.Solar, in particular, has cheapened at a blistering pace."
    
}
        
];


// Get the reference to your HTML-container that will be dynamically loaded from the resource-object.
const collecter = document.querySelector('.first-object');


// handleSelection function starts here.
function handleSelection(event){
	

	for (let btn of buttons){  
		if(btn.hasAttribute('id')){

			// Remove the id active-button
			btn.removeAttribute('id');  

		}
	}

	//Use the element-object method setAttribute() to set the id
	event.target.setAttribute('id', 'active-button');
    

    if (event.target.innerText == "Wind") {
		
		collecter.innerHTML = `<h1>${resourceContainer[0].headingContent}</h1>
		<div class="description">
			<img src="${resourceContainer[0].imgUrl}" alt="${resourceContainer[0].imgAlt}">
			<p>${resourceContainer[0].bodyText}</p>
		</div>`;
	            
	}else if(event.target.innerText == "Biomass"){
		
		collecter.innerHTML = `<h1>${resourceContainer[1].headingContent}</h1>
		<div class="description">
			<img src="${resourceContainer[1].imgUrl}" alt="${resourceContainer[1].imgAlt}">
			<p>${resourceContainer[1].bodyText}</p>
		</div>`;
	    
	}else if(event.target.innerText == "Solar"){
	                
		collecter.innerHTML = `<h1>${resourceContainer[2].headingContent}</h1>
		<div class="description">
			<img src="${resourceContainer[2].imgUrl}" alt="${resourceContainer[2].imgAlt}">
		 	<p>${resourceContainer[2].bodyText}</p>
		 </div>`;
	                
	}


}


//Register all buttons to click event. The event-handler handleSelection will listen for this event to happen.
for (let btn of buttons){

btn.addEventListener('click', handleSelection);

}