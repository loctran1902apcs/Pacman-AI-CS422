// All of our JavaScript code goes here... 
	
// 1 => <div class='wall'></div>
// 2 => <div class='coin'></div>
// 3 => <div class='ground'></div>
// 4 => <div class='ghost'></div>
// 5 => <div class='pacman'></div>
// map = [ 1, 2, 3 ]
// map = [ [1,2,3], [1,2,3], [1,2,3] ];

window.onload = function () {
	console.log(1)
	map = readFile("./map/map1.txt", inputMap, pacman)

	drawWorld(map);
	const path = BFS(map, pacman)
	console.log(pacman, path)
	path.forEach((direction,index) => {
		console.log('1',direction);
		setTimeout(()=> {
			console.log('2',direction);
			switch (direction) {
				case 'up':
					// setTimeout(goUp,4000,map,pacman)
					goUp(map,pacman);
					break
				case 'down':
					// setTimeout(goDown,4000,map,pacman)
					goDown(map,pacman);
					break
				case 'left':
					// setTimeout(goLeft,4000,map,pacman)
					goLeft(map,pacman);
					break
				case 'right':
					goRight(map,pacman);
					// setTimeout(goRight,4000,map,pacman)
					break				
			}
		},2000*(index+1))
	})
}

	pacman = {
		i: 0,
		j: 0
	}


	// readTextFile('map1.txt')
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
				else if (map[i][j] === 6) {
					el.innerHTML += "<div class='visitted'></div>";
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
    
	function readFile(path, callback, pacman) {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", path, true);
		xhr.onload = function (e) {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
			callback(xhr.responseText, pacman);
			} else {
			console.error(xhr.statusText);
			}
		}
		};
		xhr.onerror = function (e) {
		console.error(xhr.statusText);
		};
		xhr.send(null);
	}
	
	function inputMap(text, pacman) {
		var items = text.split("\n").map(function(el){ return el.split(" ");});
		var m = items[0][0]
		var n = items[0][1]
		var map = []
		for (let i = 0; i < m; i++) {
			var line = []
			for (let j = 0; j < n; j++) {
				line.push(items[i+1][j])
				if (items[i+1][j] == 5) {
					pacman.i=i+1
					pacman.j=j
				}
			}
			map.push(line)
		}
		
		console.log("map: ", map)
		return map
	}