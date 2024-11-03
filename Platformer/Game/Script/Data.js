const data = {
    levelMap: {
        'Start': {'Position': [120, 360], 'Connection': [['ArrowRight', 'Tutorial']], 'Level': -1},
        'Tutorial': {'Position': [240, 360], 'Connection': [['ArrowLeft', 'Start'], ['ArrowRight', 'Plain']], 'Level': 0},
        'Plain': {'Position': [360, 360], 'Connection': [['ArrowLeft', 'Tutorial'], ['ArrowRight', 'Node1']], 'Level': 1},
        'Node1': {'Position': [480, 360], 'Connection': [['ArrowLeft', 'Plain'], ['ArrowRight', 'Earth'], ['ArrowUp', 'Snow']], 'Level': -1},
        'Snow': {'Position': [600, 240], 'Connection': [['ArrowLeft', 'Node1'], ['ArrowRight', 'Node2']], 'Level': 2},
        'Earth': {'Position': [600, 360], 'Connection': [['ArrowLeft', 'Tutorial'], ['ArrowRight', 'Node1']], 'Level': 3},
        'Node2': {'Position': [720, 360], 'Connection': [['ArrowLeft', 'Tutorial'], ['ArrowRight', 'Node1']], 'Level': -1},
        'Fire': {'Position': [840, 360], 'Connection': [['ArrowLeft', 'Tutorial'], ['ArrowRight', 'Node1']], 'Level': 4},
        'Wind': {'Position': [840, 480], 'Connection': [['ArrowLeft', 'Tutorial'], ['ArrowRight', 'Node1']], 'Level': 5},
        'Node3': {'Position': [960, 360], 'Connection': [['ArrowLeft', 'Tutorial'], ['ArrowRight', 'Node1']], 'Level': -1},
        'Light': {'Position': [1080, 360], 'Connection': [['ArrowLeft', 'Tutorial'], ['ArrowRight', 'Node1']], 'Level': 6},
        'Dark': {'Position': [1080, 240], 'Connection': [['ArrowLeft', 'Tutorial'], ['ArrowRight', 'Node1']], 'Level': 7},
    },
    levelMapLine: [
        [[120, 360], [240, 360]], [[240, 360], [360, 360]], [[360, 360], [480, 360]], [[480, 360], [600, 360]],
        [[600, 360], [720, 360]], [[720, 360], [840, 360]], [[840, 360], [960, 360]], [[960, 360], [1080, 360]],
        [[1080, 360], [1080, 240]],
        [[480, 360], [480, 240], [600, 240]], [[600, 240], [720, 240], [720, 360]],
        [[720, 360], [720, 480], [840, 480]], [[840, 480], [960, 480], [960, 360]],
    ],
    levelPath: {
        'Start': {'ArrowRight': [[240, 360]]},
        'Tutorial': {'ArrowLeft': [[120, 360]], 'ArrowRight': [[360, 360]]},
        'Plain': {'ArrowLeft': [[240, 360]], 'ArrowRight': [[480, 360]]},
        'Node1': {'ArrowLeft': [[360, 360]], 'ArrowUp': [[480, 240], [600, 240]], 'ArrowRight': [[600, 360]]},
        'Snow': {'ArrowLeft': [[480, 240], [480, 360]], 'ArrowRight': [[720, 240], [720, 360]]},
        'Tutorial': {'ArrowLeft': [[120, 360]], 'ArrowRight': [[360, 360]]},
        'Tutorial': {'ArrowLeft': [[120, 360]], 'ArrowRight': [[360, 360]]},
        'Tutorial': {'ArrowLeft': [[120, 360]], 'ArrowRight': [[360, 360]]},
        'Tutorial': {'ArrowLeft': [[120, 360]], 'ArrowRight': [[360, 360]]},
    }
}