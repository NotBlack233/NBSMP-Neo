ServerEvents.recipes(event => {
    /**
     * 
     * @param {{type: "gun" | "ammo" | "attachment", id: string, count?: number}} result 
     * @param {{item: {item: import("@package/net/minecraft/world/item").$ItemStack_} | {tag: import("@special/types").RegistryTypes.ItemTag}, count?: number}[]} materials 
     */
    function gunsmith(result, materials, attachments) {
        event.custom({
            "materials": materials,
            // "result": {
            //     "type": type,
            //     "id": id,
            //     "attachments": attachments
            // },
            "result": result,
            "type": "tacz:gun_smith_table_crafting"
        })
    }
    // Ammo
    gunsmith({type: 'ammo', id: 'tacz:22wmr', count: 50, group: 'pd_cartridges'}, [
        {item: {tag: 'c:plates/copper'}, count: 5},
        {item: {tag: 'c:gunpowders'}, count: 1}
    ])
    gunsmith({type: 'ammo', id: 'tacz:9mm', count: 25, group: 'pd_cartridges'}, [
        {item: {tag: 'c:plates/copper'}, count: 5},
        {item: {tag: 'c:gunpowders'}, count: 1}
    ])
    gunsmith({type: 'ammo', id: 'tacz:45acp', count: 15, group: 'pd_cartridges'}, [
        {item: {tag: 'c:plates/copper'}, count: 5},
        {item: {tag: 'c:gunpowders'}, count: 1}
    ])
    gunsmith({type: 'ammo', id: 'tacz:57x28', count: 48, group: 'pd_cartridges'}, [
        {item: {tag: 'c:plates/copper'}, count: 15},
        {item: {tag: 'c:gunpowders'}, count: 2},
        {item: {tag: 'c:nuggets/steel'}, count: 12}
    ])
    gunsmith({type: 'ammo', id: 'tacz:556x45', count: 15, group: 'ifp_rifle_cartridges'}, [
        {item: {tag: 'c:plates/copper'}, count: 5},
        {item: {tag: 'c:gunpowders'}, count: 1}
    ])
    gunsmith({type: 'ammo', id: 'tacz:58x42', count: 14, group: 'ifp_rifle_cartridges'}, [
        {item: {tag: 'c:plates/copper'}, count: 5},
        {item: {tag: 'c:gunpowders'}, count: 1}
    ])
    gunsmith({type: 'ammo', id: 'tacz:762x39', count: 12, group: 'ifp_rifle_cartridges'}, [
        {item: {tag: 'c:plates/copper'}, count: 5},
        {item: {tag: 'c:gunpowders'}, count: 1}
    ])
    gunsmith({type: 'ammo', id: 'tacz:762x54', count: 15, group: 'ifp_rifle_cartridges'}, [
        {item: {tag: 'c:plates/copper'}, count: 6},
        {item: {tag: 'c:gunpowders'}, count: 2}
    ])
    gunsmith({type: 'ammo', id: 'tacz:308', count: 12, group: 'ifp_rifle_cartridges'}, [
        {item: {tag: 'c:plates/copper'}, count: 6},
        {item: {tag: 'c:gunpowders'}, count: 2},
        {item: {tag: 'c:nuggets/steel'}, count: 4}
    ])
    gunsmith({type: 'ammo', id: 'tacz:792x57', count: 24, group: 'ifp_rifle_cartridges'}, [
        {item: {tag: 'c:plates/copper'}, count: 10},
        {item: {tag: 'c:gunpowders'}, count: 3}
    ])
    gunsmith({type: 'ammo', id: 'tacz:357mag', count: 12, group: 'lc_specialized'}, [
        {item: {tag: 'c:plates/copper'}, count: 6},
        {item: {tag: 'c:gunpowders'}, count: 2}
    ])
    gunsmith({type: 'ammo', id: 'tacz:50ae', count: 36, group: 'lc_specialized'}, [
        {item: {tag: 'c:plates/copper'}, count: 30},
        {item: {tag: 'c:gunpowders'}, count: 7},
        {item: {tag: 'c:nuggets/steel'}, count: 12}
    ])
    gunsmith({type: 'ammo', id: 'tacz:500mag', count: 32, group: 'lc_specialized'}, [
        {item: {tag: 'c:plates/copper'}, count: 40},
        {item: {tag: 'c:gunpowders'}, count: 10},
        {item: {tag: 'c:nuggets/steel'}, count: 18}
    ])
    gunsmith({type: 'ammo', id: 'tacz:45_70', count: 36, group: 'lc_specialized'}, [
        {item: {tag: 'c:plates/copper'}, count: 30},
        {item: {tag: 'c:gunpowders'}, count: 7},
        {item: {tag: 'c:nuggets/steel'}, count: 12}
    ])
    gunsmith({type: 'ammo', id: 'tacz:338', count: 18, group: 'lc_specialized'}, [
        {item: {tag: 'c:plates/copper'}, count: 25},
        {item: {tag: 'c:gunpowders'}, count: 8},
        {item: {tag: 'c:nuggets/steel'}, count: 12}
    ])
    gunsmith({type: 'ammo', id: 'tacz:30_06', count: 16, group: 'lc_specialized'}, [
        {item: {tag: 'c:plates/copper'}, count: 10},
        {item: {tag: 'c:gunpowders'}, count: 3}
    ])
    gunsmith({type: 'ammo', id: 'tacz:50bmg', count: 12, group: 'lc_specialized'}, [
        {item: {tag: 'c:plates/copper'}, count: 55},
        {item: {tag: 'c:gunpowders'}, count: 10},
        {item: {tag: 'c:nuggets/steel'}, count: 15},
        {item: {tag: 'c:dusts/hop_graphite'}, count: 1}
    ])
    gunsmith({type: 'ammo', id: 'tacz:40mm', count: 6, group: 'explosives'}, [
        {item: {tag: 'c:plates/steel'}, count: 3},
        {item: {tag: 'c:ingots/copper'}, count: 9},
        {item: {tag: 'c:gunpowders'}, count: 9}
    ])
    gunsmith({type: 'ammo', id: 'tacz:rpg_rocket', count: 3, group: 'explosives'}, [
        {item: {tag: 'c:plates/steel'}, count: 3},
        {item: {tag: 'c:ingots/copper'}, count: 30},
        {item: {tag: 'c:gunpowders'}, count: 12}
    ])
    gunsmith({type: 'ammo', id: 'tacz:12g', count: 18, group: 'shotgun_shells'}, [
        {item: {tag: 'c:plates/copper'}, count: 15},
        {item: {tag: 'c:gunpowders'}, count: 6},
        {item: {tag: 'c:nuggets/iron'}, count: 18}
    ])

    // Attachment
    gunsmith({type: 'attachment', id: 'tacz:scope_1873_6x'}, [
        {item: {tag: 'c:ingots/brass'}, count: 16},
        {item: {tag: 'c:plates/iron'}, count: 4},
        {item: {tag: 'c:glass_blocks'}, count: 4}
    ])

    // Early game
    gunsmith({type: 'gun', 'id': 'tacz:m1911'}, [
        {item: {tag: 'minecraft:logs'}, count: 8},
        {item: {item: 'immersiveengineering:component_iron'}, count: 12}
    ])
    gunsmith({type: 'gun', id: 'tacz:taurus943'}, [
        {item: {item: 'immersiveengineering:component_iron'}, count: 6},
        {item: {item: 'create:andesite_alloy'}, count: 8}
    ])
    gunsmith({type: 'gun', id: 'tacz:springfield1873'}, [
        {item: {tag: 'minecraft:logs'}, count: 15},
        {item: {item: 'immersiveengineering:component_iron'}, count: 4}
    ])
    gunsmith({type: 'gun', id: 'tacz:sks_tactical'}, [
        {item: {tag: 'minecraft:logs'}, count: 12},
        {item: {item: 'immersiveengineering:component_iron'}, count: 16},
        {item: {tag: 'c:plates/copper'}, count: 5}
    ], {"stock": "tacz:stock_m4ss"})
    gunsmith({type: 'gun', id: 'tacz:db_short'}, [
        {item: {tag: 'minecraft:logs'}, count: 6},
        {item: {item: 'immersiveengineering:component_iron'}, count: 8},
        {item: {item: 'create:andesite_alloy'}, count: 4}
    ])
    gunsmith({type: 'gun', id: 'tacz:db_long'}, [
        {item: {tag: 'minecraft:logs'}, count: 10},
        {item: {item: 'immersiveengineering:component_iron'}, count: 14},
        {item: {item: 'create:andesite_alloy'}, count: 6}
    ])
    gunsmith({type: 'gun', id: 'tacz:uzi'}, [
        {item: {item: 'immersiveengineering:component_iron'}, count: 16},
        {item: {item: 'create:andesite_alloy'}, count: 6}
    ])
    // Middle game
    gunsmith({type: 'gun', id: 'tacz:kar98'}, [
        {item: {tag: 'minecraft:logs'}, count: 40},
        {item: {item: 'immersiveengineering:component_iron'}, count: 18},
        {item: {item: 'immersiveengineering:component_steel'}, count: 4},
        {item: {tag: 'c:plates/obsidian'}, count: 16},
        {item: {tag: 'c:plates/brass'}, count: 6},
        {item: {item: 'create:precision_mechanism'}}
    ])
    // Late game
})
