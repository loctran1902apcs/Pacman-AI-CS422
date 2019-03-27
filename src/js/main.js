// import "./moving";
// All of our JavaScript code goes here... 
	
	// 1 => <div class='wall'></div>
	// 2 => <div class='coin'></div>
	// 3 => <div class='ground'></div>
	// 4 => <div class='ghost'></div>
	// 5 => <div class='pacman'></div>
	// map = [ 1, 2, 3 ]
	// map = [ [1,2,3], [1,2,3], [1,2,3] ];
window.onload = function () { 
	drawWorld(map);
	const path = BFS(map, pacman)
	console.log(pacman, path)
	path.forEach((direction) => {
		setTimeout(function() {
			switch (direction) {
				case 'up':
					setTimeout(goUp(map,pacman), 1000)
					break
				case 'down':
					setTimeout(goDown(map,pacman), 1000)
					break
				case 'left':
					setTimeout(goLeft(map,pacman), 1000)
					break
				case 'right':
					setTimeout(goRight(map,pacman), 1000)
					break				
			}
		}, 1000)
	})
}

	pacman = {
		i: 4,
		j: 6
	}

	map = [ //level 1
		[1,1,1,1,1,1,1,1,1,1,1,1,1], 
		[1,0,3,0,0,0,1,0,0,0,2,1,1], 
		[1,0,1,1,0,0,1,0,1,1,1,0,1], 
		[1,0,1,0,0,0,0,0,0,0,1,0,1], 
		[1,0,0,0,1,1,5,1,1,0,0,0,1], 
		[1,0,1,0,0,0,0,0,0,0,1,0,1], 
		[1,0,1,1,0,0,1,0,0,1,1,0,1], 
		[1,0,0,0,0,0,1,0,0,0,0,0,1], 
		[1,1,1,1,1,1,1,1,1,1,1,1,1]
	]

	var el = document.getElementById('world');
	
	function drawWorld(){
		el.innerHTML = '';
		for(var i = 0; i < map.length ; i = i + 1) {
			for(var j = 0; j < map[i].length ; j = j + 1) {		
				if (map[i][j] === 1) {
					el.innerHTML += "<div class='wall'></div>";
				}
				else if (map[i][j] === 2) {
					el.innerHTML += "<div class='food'></div>";
				}
				else if (map[i][j] === 3) {
					el.innerHTML += "<div class='monster'></div>";
				}
				else if (map[i][j] === 0) {
					el.innerHTML += "<div class='ground'></div>";
				}
				else if (map[i][j] === 4) {
					el.innerHTML += "<div class='monster'></div>";
				}
				else if (map[i][j] === 5) {
					el.innerHTML += "<div class='pacman'></div>";
				}
			}
			el.innerHTML += "<br>";
		}
	}

	document.onkeydown = function(event){
		// console.log(event);
		switch(event.keyCode) {
			case 37: // PACMAN MOVE LEFT
				goLeft(map,pacman)
				break
			case 38: // PACMAN MOVE UP
				goUp(map,pacman)
				break
			case 39: // PACMAN MOVE RIGHT
				goRight(map,pacman)
				break
			case 40: // PACMAN MOVE DOWN
				goDown(map,pacman)
				break
		}
    }
    
   