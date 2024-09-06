const dataField = {
    'Start' : {
        'Spawn' : [40, 520],
        'CheckPoint' : [],
        'Thing' : [
            {'Type' : 'Wall', 'Position' : [0, 560], 'Size' : [160, 160]},
            {'Type' : 'Wall', 'Position' : [1120, 560], 'Size' : [160, 160]},
            {'Type' : 'Platform', 'Position' : [200, 570], 'Size' : [80, 20], 'Path' : [[200, 570], [1080, 570]], 'Speed' : 200, 'Next' : 1},
            {'Type' : 'Tile', 'Start' : [1000, 40], 'Cell' : [
                [1, 1, 1, 1, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 1, 1, 1, 1]
            ]}
        ],
        'Connection' : [

        ],
        'Monster' : [

        ],
    },

    'Entrance1' : {
        'Spawn' : [600, 600],
        'CheckPoint' : [],
        'Thing' : [

        ],
        'Tile' : [

        ],
        'Connection' : [

        ],
        'Monster' : [

        ],
    }
}