const kbControlMap = {
    w: 'MOVE_UP',    
    38: 'MOVE_UP',
    87: 'MOVE_UP',
    s: 'MOVE_DOWN',
    40: 'MOVE_DOWN',
    83: 'MOVE_DOWN',
    a: 'MOVE_LEFT',
    37: 'MOVE_LEFT',
    65: 'MOVE_LEFT',
    d: 'MOVE_RIGHT',
    39: 'MOVE_RIGHT',
    68: 'MOVE_RIGHT',
    46: 'GO_BACK',
    8: 'GO_BACK',
    13: 'ACTIVATE',
    Enter: 'ACTIVATE',
    Return: 'ACTIVATE',
    Backspace: 'GO_BACK',
    Delete: 'GO_BACK',
    ArrowUp: 'MOVE_UP',
    ArrowDown: 'MOVE_DOWN',
    ArrowLeft: 'MOVE_LEFT',
    ArrowRight: 'MOVE_RIGHT'
};

// {  
// MOVE_UP: ['w', 'ArrowUp', 38 ],
//     MOVE_DOWN: ['s', 'ArrowDown', 40],
//     MOVE_LEFT: ['a', 'ArrowLeft', 37],
//     MOVE_RIGHT: ['d', 'ArrowRight', 39],
//     ACTIVATE: ['Enter', 'Return', 13],
//     GO_BACK: ['Backspace', 'Delete', 8, 46]
// };
 

export default kbControlMap;