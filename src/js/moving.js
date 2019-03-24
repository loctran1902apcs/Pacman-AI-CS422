function goDown(map,pacman,callBack){
    if ( map[pacman.y+1][pacman.x] !== 1){
        map[pacman.y][pacman.x] = 0;
        pacman.y = pacman.y + 1;
        map[pacman.y][pacman.x] = 5;
        callBack(map);
    }
}

function goUp(map,pacman,callBack){
    if ( map[pacman.y-1][pacman.x] !== 1){
        map[pacman.y][pacman.x] = 0;
        pacman.y = pacman.y - 1;
        map[pacman.y][pacman.x] = 5;
        callBack(map);
    }
}

function goLeft(map,pacman,callBack){
    if ( map[pacman.y][pacman.x-1] !== 1){
        map[pacman.y][pacman.x] = 0;
        pacman.x = pacman.x - 1;
        map[pacman.y][pacman.x] = 5;
        callBack(map);
    }
}

function goRight(map,pacman,callBack){
    if ( map[pacman.y][pacman.x+1] !== 1){
        map[pacman.y][pacman.x] = 0;
        pacman.x = pacman.x + 1;
        map[pacman.y][pacman.x] = 5;
        callBack(map);
    }
}