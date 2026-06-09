ServerEvents.recipes(event => {
    const mek = event.recipes.mekanism
    mek.metallurgic_infusing(
        '32x fluxnetworks:flux_dust',
        '#c:dusts/obsidian',
        MekanismChemical.stack('mekanism:redstone', 160)
    )
    mek.metallurgic_infusing(
        'create_new_age:redstone_magnet',
        'create_new_age:magnetite_block',
        MekanismChemical.stack('mekanism:redstone', 40)
    )
    mek.metallurgic_infusing(
        'create_new_age:layered_magnet',
        'create_new_age:redstone_magnet',
        MekanismChemical.stack('mekanism:gold', 40)
    )
    mek.metallurgic_infusing(
        'create_new_age:fluxuated_magnetite',
        'create_new_age:layered_magnet',
        MekanismChemical.stack('mekanism:diamond', 40)
    )
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemical_input": { "amount": 320, "tag": "mekanism:diamond" },
        "item_input": {
            "type": "neoforge:components",
            "components": {
                "minecraft:custom_data": { AttachmentId: "tacz:extended_mag_1" }
            },
            "items": "tacz:attachment"
        },
        "output": Item.of('tacz:attachment', { custom_data: { AttachmentId: "tacz:extended_mag_2" } }).toJson(),
        "per_tick_usage": false
    })
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemical_input": { "amount": 320, "tag": "mekanism:diamond" },
        "item_input": {
            "type": "neoforge:components",
            "components": {
                "minecraft:custom_data": { AttachmentId: "tacz:light_extended_mag_1" }
            },
            "items": "tacz:attachment"
        },
        "output": Item.of('tacz:attachment', { custom_data: { AttachmentId: "tacz:light_extended_mag_2" } }).toJson(),
        "per_tick_usage": false
    })
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemical_input": { "amount": 320, "tag": "mekanism:diamond" },
        "item_input": {
            "type": "neoforge:components",
            "components": {
                "minecraft:custom_data": { AttachmentId: "tacz:shotgun_extended_mag_1" }
            },
            "items": "tacz:attachment"
        },
        "output": Item.of('tacz:attachment', { custom_data: { AttachmentId: "tacz:shotgun_extended_mag_2" } }).toJson(),
        "per_tick_usage": false
    })
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemical_input": { "amount": 320, "tag": "mekanism:diamond" },
        "item_input": {
            "type": "neoforge:components",
            "components": {
                "minecraft:custom_data": { AttachmentId: "tacz:sniper_extended_mag_1" }
            },
            "items": "tacz:attachment"
        },
        "output": Item.of('tacz:attachment', { custom_data: { AttachmentId: "tacz:sniper_extended_mag_2" } }).toJson(),
        "per_tick_usage": false
    })
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemical_input": { "amount": 640, "tag": "mekanism:refined_obsidian" },
        "item_input": {
            "type": "neoforge:components",
            "components": {
                "minecraft:custom_data": { AttachmentId: "tacz:extended_mag_2" }
            },
            "items": "tacz:attachment"
        },
        "output": Item.of('tacz:attachment', { custom_data: { AttachmentId: "tacz:extended_mag_3" } }).toJson(),
        "per_tick_usage": false
    })
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemical_input": { "amount": 640, "tag": "mekanism:refined_obsidian" },
        "item_input": {
            "type": "neoforge:components",
            "components": {
                "minecraft:custom_data": { AttachmentId: "tacz:light_extended_mag_2" }
            },
            "items": "tacz:attachment"
        },
        "output": Item.of('tacz:attachment', { custom_data: { AttachmentId: "tacz:light_extended_mag_3" } }).toJson(),
        "per_tick_usage": false
    })
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemical_input": { "amount": 640, "tag": "mekanism:refined_obsidian" },
        "item_input": {
            "type": "neoforge:components",
            "components": {
                "minecraft:custom_data": { AttachmentId: "tacz:shotgun_extended_mag_2" }
            },
            "items": "tacz:attachment"
        },
        "output": Item.of('tacz:attachment', { custom_data: { AttachmentId: "tacz:shotgun_extended_mag_3" } }).toJson(),
        "per_tick_usage": false
    })
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemical_input": { "amount": 640, "tag": "mekanism:refined_obsidian" },
        "item_input": {
            "type": "neoforge:components",
            "components": {
                "minecraft:custom_data": { AttachmentId: "tacz:sniper_extended_mag_2" }
            },
            "items": "tacz:attachment"
        },
        "output": Item.of('tacz:attachment', { custom_data: { AttachmentId: "tacz:sniper_extended_mag_3" } }).toJson(),
        "per_tick_usage": false
    })
    
    mek.combining(
        'create_new_age:netherite_magnet',
        'create_new_age:fluxuated_magnetite',
        '2x minecraft:netherite_scrap'
    )

})