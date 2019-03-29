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
	if (path.length >= 10) {
		console.log('Duong di nhieu hon >10 steps. Quyet dinh khong di de lay 0 diem')
		// Cho nay bao la khong di tai vi di qua 10 step
		// An 1 food co 10 point -> point < 0
		// Dung yen thi point = 0 ngon hon
		// Bao len man hinh la 'End Game. Point = 0'
	}
	else if (path.length == 0) {
		console.log('Khong tim duoc duong di toi food.')
		console.log('Diem so dat duoc: ', point)
	}
	else {		
		path.forEach((direction,index) => {
			console.log('1',direction);
			setTimeout(()=> {
				console.log('2',direction);
				switch (direction) {
					case 'up':
						goUp(map,pacman);
						break
					case 'down':
						goDown(map,pacman);
						break
					case 'left':
						goLeft(map,pacman);
						break
					case 'right':
						goRight(map,pacman);
						break
				}
			},200*(index+1))
		})
		point  = 10 - path.length
		console.log('Diem so dat duoc: ', point)
		console.log(map)
		// Cho nay hien thi len man hinh so point dat duoc
		// 'End game. Point = ...'
	}
}

	point = 0
	pacman = {
		i: 4,
		j: 6
	}

	map = [ //level 1
		[1,1,1,1,1,1,1,1,1,1,1,1,1], 
		[1,0,3,0,0,0,1,0,0,0,0,1,1], 
		[1,0,1,1,0,0,1,0,1,1,1,0,1], 
		[1,0,1,0,0,0,0,0,0,0,1,0,1], 
		[1,0,0,0,0,0,5,1,1,0,0,0,1], 
		[1,0,0,0,0,0,0,0,0,0,1,0,1], 
		[1,0,1,1,1,0,1,0,0,1,1,0,1], 
		[1,0,2,0,1,1,1,0,0,0,0,0,1], 
		[1,1,1,1,1,1,1,1,1,1,1,1,1]
	]

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
    
   