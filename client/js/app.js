// all of our js will appear here!
// create our event 
window.addEventListener('load',()=>{
	// the 'load' event fires when the entire html page including contents has been loaded
	// we then select our active elements
	const cards = document.querySelectorAll('.card-body');
	const sounds = document.querySelectorAll('.sound');
	const visual = document.querySelector('.visual');

	const colors = [
	"grey","black","blue","green","yellow","red"
	];
	// loop through our cards and access each one of them
	cards.forEach((card,index)=>{
		// console.log(sounds[2]);
		// create an event that fires when we click/tap our cards
		card.addEventListener('click',()=>{
			// our audio should start from 0 everytime we click card
			sounds[index].currentTime = 0;
			sounds[index].play();

			// call our function here too to get access to our index
			createBubbles(index);
		});
	});

	// create our bubbles in visual section
	const createBubbles =(index)=>{
		// console.log(colors[index]);
		// create div that will house our bubble and append it to visual section
		const bubble = document.createElement('div');
		visual.appendChild(bubble);
		// style our bubble
		bubble.style.backgroundColor = colors[index];
		// create animation
		bubble.style.animation = 'jump 1s ease';
		
		// we dont want our created bubbles to be saved in our visual div
		// as this would eventually lead to our app crashing
		// hence we create another event
		bubble.addEventListener('animationend',()=>{
			// the animation end event fires when an animation has completed
			// it is applied on the obj that contains the animation
			visual.removeChild(bubble);
		});
	}

});
