let initialPositions = [];
for (let i = 8; i >= 1; i--) {
    for (let j = 1; j <= 8; j++) {
        initialPositions.push({
            x: j,
            y: i,
            type: 'empty',
            isSelected: false,
            isEmpty: true,
            isDark: (j + i) % 2 === 0,
            isLegal: false,
            isHighlighted: false
        });
    }
}

initialPositions[0].type = 'rook_black';  //Black pieces
initialPositions[1].type = 'knight_black';
initialPositions[2].type = 'bishop_black';
initialPositions[3].type = 'queen_black';
initialPositions[4].type = 'king_black';
initialPositions[5].type = 'bishop_black';
initialPositions[6].type = 'knight_black';
initialPositions[7].type = 'rook_black';

for (let j = 0; j < 8; j++) {
    initialPositions[j + 8].type = 'pawn_black';
    initialPositions[j + 8].isEmpty = false;
    initialPositions[j].isEmpty = false;
}

initialPositions[56].type = 'rook_white';  //White pieces
initialPositions[57].type = 'knight_white';
initialPositions[58].type = 'bishop_white';
initialPositions[59].type = 'queen_white';
initialPositions[60].type = 'king_white';
initialPositions[61].type = 'bishop_white';
initialPositions[62].type = 'knight_white';
initialPositions[63].type = 'rook_white';

for (let j = 0; j < 8; j++) {
    initialPositions[j + 48].type = 'pawn_white';
    initialPositions[j + 48].isEmpty = false;
    initialPositions[j + 56].isEmpty = false;
}

const positionMap = new Map([  //used for converting numerical coordinates to chess-like format (Ex. 5,4 => e4 )
    [1, 'a'],
    [2, 'b'],
    [3, 'c'],
    [4, 'd'],
    [5, 'e'],
    [6, 'f'],
    [7, 'g'],
    [8, 'h'],
]);

const invertedPositionMap = new Map([  //used for converting chess-like format to numerical coordinates (Ex. e4 => 5,4 )
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
    ['f', 6],
    ['g', 7],
    ['h', 8],
]);

export {initialPositions,positionMap,invertedPositionMap}