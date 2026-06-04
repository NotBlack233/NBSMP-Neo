ServerEvents.recipes(event => {
    //C: New Age
    event.custom({
        "type": "create_new_age:energising",
        "energy_needed": 10000,
        "ingredients": [
            {
                "tag": "c:storage_blocks/iron"
            }
        ],
        "results": [
            {
                "id": "create_new_age:magnetite_block",
                "count": 4
            }
        ]
    })
})