ServerEvents.recipes(event => {
    event.custom({
        "type": "immersiveengineering:arc_furnace",
        "additives": [
            {
                "tag": 'c:dusts/volcanic_ash'
            },
            {
                "tag": 'c:raw_materials/martian_iron_ore'
            }
        ],
        "energy": 51200,
        "input": {
            "tag": "c:ingots/titanium"
        },
        "results": [
            {
                "basePredicate": {
                    "tag": "c:ingots/martian_steel"
                },
                "count": 2
            }
        ],
        "time": 100
    })
    event.custom({
        "type": "immersiveengineering:arc_furnace",
        "additives": [
            {
                "tag": 'c:dusts/coal_coke'
            },
            {
                "tag": 'c:raw_materials/martian_iron_ore'
            }
        ],
        "energy": 51200,
        "input": {
            "tag": "c:ingots/titanium"
        },
        "results": [
            {
                "basePredicate": {
                    "tag": "c:ingots/martian_steel"
                },
                "count": 2
            }
        ],
        "time": 100
    })
})