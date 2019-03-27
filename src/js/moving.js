function canMove(map, i, j) {
    if (map[i][j] == 0 || map[i][j] == 2)
        return true;
    return false;
}

function goDown(map, pacman){
    if (canMove(map, pacman.i+1, pacman.j)) {
        map[pacman.i][pacman.j] = 6;
        pacman.i = pacman.i + 1;
        map[pacman.i][pacman.j] = 5;
        drawWorld(map)
    }
}

function goUp(map, pacman){
    if (canMove(map, pacman.i-1, pacman.j)) {
        map[pacman.i][pacman.j] = 6;
        pacman.i = pacman.i - 1;
        map[pacman.i][pacman.j] = 5;
        drawWorld(map)
    }
}

function goLeft(map, pacman) {
    if (canMove(map, pacman.i, pacman.j-1)) {
        map[pacman.i][pacman.j] = 6;
        pacman.j = pacman.j - 1;
        map[pacman.i][pacman.j] = 5;
        drawWorld(map)
    }
}

function goRight(map, pacman){
    if (canMove(map, pacman.i, pacman.j+1)){
        map[pacman.i][pacman.j] = 6;
        pacman.j = pacman.j + 1;
        map[pacman.i][pacman.j] = 5;
        drawWorld(map)
    }
}