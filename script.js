const grid = document.querySelector('.grid');
const div = document.querySelector('div');
const colour_b = document.querySelector('#colour_b');
const reset_b = document.querySelector('#reset_b')

function create_grid(n)
{
	for (i=0; i < n; i++)
	{
		const row = document.createElement('div');
		row.classList.add('row');
		grid.appendChild(row);
		for (a = 0; a < n; a++) {
		    const box = document.createElement('div');
		    box.classList.add('box');
		    row.appendChild(box)
		}    
		
	}
	console.log("hi");
}
grid.addEventListener('mouseover', function(e) {
	if (colour_b.value == 'off') {
		e.target.style.backgroundColor = 'black';
	}

	else {
		e.target.style.background = rgb();
	}
});

function rgb()
{
	var red = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	return 'rgb(' + red + ',' + blue + ',' + green + ')';
}

colour_b.addEventListener('click', function(e) 
{
	if (colour_b.value == 'off')
	{
		colour_b.setAttribute('value', 'on');
	}
	else
	{
		colour_b.setAttribute('value', 'off');
	}
});

reset_b.addEventListener('click', (newSize) =>
{
	document.getElementsByTagName('div')[3].innerHTML = '';
	
	var newSize = prompt("How many squares would you like?");
	create_grid(newSize);
});


create_grid(16);
