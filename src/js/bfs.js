function BFS(map, pacman) {
    let visited = map.map(function(array) {
        return array.slice()
    })

    var queue  = [] // Storing which node will be search next
    queue.push({state: pacman, path: []})

    while (queue.length != 0) {
        let popElement = queue.shift()
        let {state, path} = popElement

        if (map[state.i][state.j] == 2){ 
            // At this state, food is the found
            return path
        }

        // Check if a state is visited by another state or not 
        if (visited[state.i][state.j] != 4) {
            //console.log(state, map, visited)
            visited[state.i][state.j] = 4 // Change the value of this state to visited
            
            checkAvailableNode(map, state).forEach(node => {
                queue.push({
                    state: node.state,
                    path: path.concat(node.direction)
                })
            })
        }

    }
    return []
}

function checkAvailableNode(map, current) {
    var availableNode = []
    if (canMove(map, current.i+1, current.j)) {
        availableNode.push({
            state: {
                i: current.i+1,
                j: current.j},
            direction: 'down'
        })
    }

    if (canMove(map, current.i-1, current.j)) {
        availableNode.push({
            state: {
                i: current.i-1,
                j: current.j},
            direction: 'up'
        })
    } 

    if (canMove(map, current.i, current.j+1)) {
        availableNode.push({
            state: {
                i: current.i,
                j: current.j+1},
            direction: 'right'
        })
    }

    if (canMove(map, current.i, current.j-1)) {
        availableNode.push({
            state: {
                i: current.i,
                j: current.j-1},
            direction: 'left'
        })
    }

    return availableNode
}
