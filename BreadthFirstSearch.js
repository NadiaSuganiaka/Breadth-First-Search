const graf = {
    name: 'start',
    neighbors: [{
        name: 'D1',
        neighbors: [{
            name: 'D4',
            neighbors: []
        },
        {
            name: 'D5',
            neighbors: []
        }]
    },
    {
        name: 'D2',
        neighbors: [{
            name: 'D6',
            neighbors: []
        }]
    },
    {
        name: 'D3',
        neighbors: [{
            name: 'D7',
            neighbors: [{
                name: 'D8',
                neighbors: []
            },
            {
                name: 'D9',
                neighbors: []
            }]
        }]
    }],
}
console.log(graf);
function bfs(graph, needToFind) {
    let query = [graph];

    while (query.length > 0) {    
        const node = query.shift();

        if (node.name === needToFind) {
            return true;
        }
        if (node.neighbors.length){
            query.push(...node.neighbors);
        }
    }
    return false;
    
}
console.log(bfs(graf, 'D9'));
console.log(bfs(graf, 'D11'));