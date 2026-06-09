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
    gunsmith({type: 'attachment', id: 'tacz:extended_mag_1'}, [
        {item: {item: 'immersiveengineering:component_iron'}, count: 12},
        {item: {tag: 'c:plates/gold'}, count: 4}
    ])
    gunsmith({type: 'attachment', id: 'tacz:light_extended_mag_1'}, [
        {item: {item: 'immersiveengineering:component_iron'}, count: 8},
        {item: {tag: 'c:plates/gold'}, count: 1}
    ])
    gunsmith({type: 'attachment', id: 'tacz:shotgun_extended_mag_1'}, [
        {item: {item: 'immersiveengineering:component_iron'}, count: 10},
        {item: {tag: 'c:plates/gold'}, count: 4}
    ])
    gunsmith({type: 'attachment', id: 'tacz:sniper_extended_mag_1'}, [
        {item: {item: 'immersiveengineering:component_iron'}, count: 16},
        {item: {tag: 'c:plates/gold'}, count: 6}
    ])
    gunsmith({type: 'attachment', id: 'tacz:ammo_mod_i'}, [
        {item: {
            "type": "neoforge:components",
            "components": {
                "minecraft:custom_data": { AttachmentId: "tacz:extended_mag_3" }
            },
            "items": "tacz:attachment"
        }},
        {item: {item: 'minecraft:fire_charge'}, count: 16},
        {item: {item: 'minecraft:blaze_powder'}, count: 16},
        {item: {item: 'minecraft:crying_obsidian'}, count: 2}
    ])
    gunsmith({type: 'attachment', id: 'tacz:ammo_mod_hp'}, [
        {item: {
            "type": "neoforge:components",
            "components": {
                "minecraft:custom_data": { AttachmentId: "tacz:extended_mag_3" }
            },
            "items": "tacz:attachment"
        }},
        {item: {item: 'minecraft:crying_obsidian'}, count: 3},
        {item: {tag: 'c:ingots/steel'}, count: 8}
    ])
    gunsmith({type: 'attachment', id: 'tacz:ammo_mod_he'}, [
        {item: {
            "type": "neoforge:components",
            "components": {
                "minecraft:custom_data": { AttachmentId: "tacz:ammo_mod_slug" }
            },
            "items": "tacz:attachment"
        }},
        {item: {item: 'minecraft:end_crystal'}, count: 4},
        {item: {item: 'minecraft:blaze_powder'}, count: 8},
        {item: {item: 'minecraft:crying_obsidian'}, count: 2},
        {item: {item: 'mekanismadditions:obsidian_tnt'}, count: 16}
    ])
    gunsmith({type: 'attachment', id: 'tacz:ammo_mod_slug'}, [
        {item: {
            "type": "neoforge:components",
            "components": {
                "minecraft:custom_data": { AttachmentId: "tacz:extended_mag_3" }
            },
            "items": "tacz:attachment"
        }},
        {item: {item: 'minecraft:crying_obsidian'}, count: 3},
        {item: {item: 'minecraft:netherite_scrap'}},
        {item: {tag: 'c:storage_blocks/osmium'}}
    ])
    gunsmith({type: 'attachment', id: 'tacz:ammo_mod_fmj'}, [
        {item: {
            "type": "neoforge:components",
            "components": {
                "minecraft:custom_data": { AttachmentId: "tacz:extended_mag_3" }
            },
            "items": "tacz:attachment"
        }},
        {item: {item: 'minecraft:crying_obsidian'}, count: 2},
        {item: {item: 'minecraft:diamond'}, count: 5},
        {item: {tag: 'c:ingots/steel'}, count: 16}
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
    gunsmith({type: 'gun', id: 'tacz:glock_17'}, [
        {item: {item: 'create:precision_mechanism'}},
        {item: {item: 'immersiveengineering:component_iron'}, count: 8},
        {item: {item: 'immersiveengineering:component_steel'}, count: 2}
    ])
    gunsmith({type: 'gun', id: 'tacz:cz75'}, [
        {item: {item: 'create:precision_mechanism'}},
        {item: {item: 'immersiveengineering:component_iron'}, count: 6},
        {item: {item: 'immersiveengineering:component_steel'}, count: 4}
    ])
    gunsmith({type: 'gun', id: 'tacz:m9a4'}, [
        {item: {item: 'create:precision_mechanism'}},
        {item: {item: 'immersiveengineering:component_iron'}, count: 8},
        {item: {item: 'immersiveengineering:component_steel'}, count: 2}
    ])
    gunsmith({type: 'gun', id: 'tacz:p320'}, [
        {item: {item: 'create:precision_mechanism'}},
        {item: {item: 'immersiveengineering:component_iron'}, count: 10},
        {item: {item: 'immersiveengineering:component_steel'}, count: 6},
        {item: {tag: 'c:plates/obsidian'}, count: 4}
    ])
    gunsmith({type: 'gun', id: 'tacz:b93r'}, [
        {item: {item: 'create:precision_mechanism'}},
        {item: {tag: 'immersiveengineering:treated_wood'}, count: 8},
        {item: {item: 'immersiveengineering:component_iron'}, count: 10},
        {item: {item: 'immersiveengineering:component_steel'}, count: 4},
    ])
    gunsmith({type: 'gun', id: 'tacz:rhino357'}, [
        {item: {item: 'create:precision_mechanism'}},
        {item: {tag: 'immersiveengineering:treated_wood'}, count: 8},
        {item: {item: 'immersiveengineering:component_iron'}, count: 12},
        {item: {item: 'immersiveengineering:component_steel'}, count: 6},
        {item: {tag: 'c:plates/obsidian'}, count: 6}
    ])
    gunsmith({type: 'gun', id: 'tacz:hk_mk23'}, [
        {item: {item: 'create:precision_mechanism'}},
        {item: {item: 'immersiveengineering:component_iron'}, count: 12},
        {item: {item: 'immersiveengineering:component_steel'}, count: 6},
        {item: {tag: 'c:plates/obsidian'}, count: 6}
    ])
    gunsmith({type: 'gun', id: 'tacz:kar98'}, [
        {item: {tag: 'minecraft:logs'}, count: 40},
        {item: {item: 'immersiveengineering:component_iron'}, count: 18},
        {item: {item: 'immersiveengineering:component_steel'}, count: 4},
        {item: {tag: 'c:plates/obsidian'}, count: 16},
        {item: {tag: 'c:plates/brass'}, count: 6},
        {item: {item: 'create:precision_mechanism'}}
    ])
    gunsmith({type: 'gun', id: 'tacz:m700', attachments: {"scope": "tacz:scope_contender"}}, [
        {item: {item: 'create:precision_mechanism'}},
        {item: {item: 'immersiveengineering:component_iron'}, count: 16},
        {item: {item: 'immersiveengineering:component_steel'}, count: 16},
        {item: {item: 'mekanism:alloy_reinforced'}, count: 4}
    ])
    gunsmith({type: 'gun', id: 'tacz:ak47'}, [
        {item: {item: 'create:precision_mechanism'}},
        {item: {tag: 'immersiveengineering:treated_wood'}, count: 16},
        {item: {item: 'immersiveengineering:component_iron'}, count: 16},
        {item: {item: 'immersiveengineering:component_steel'}, count: 6}
    ])
    gunsmith({type: 'gun', id: 'tacz:m4a1', attachments: {"stock": "tacz:stock_m4ss"}}, [
        {item: {item: 'create:precision_mechanism'}},
        {item: {tag: 'immersiveengineering:treated_wood'}, count: 8},
        {item: {item: 'immersiveengineering:component_iron'}, count: 14},
        {item: {item: 'immersiveengineering:component_steel'}, count: 4}
    ])
    gunsmith({type: 'gun', id: 'tacz:scar_l'}, [
        {item: {item: 'create:precision_mechanism'}},
        {item: {item: 'immersiveengineering:component_iron'}, count: 18},
        {item: {item: 'immersiveengineering:component_steel'}, count: 4}
    ])
    gunsmith({type: 'gun', id: 'tacz:m16a1'}, [
        {item: {item: 'create:precision_mechanism'}},
        {item: {tag: 'immersiveengineering:treated_wood'}, count: 8},
        {item: {item: 'immersiveengineering:component_iron'}, count: 18},
        {item: {item: 'immersiveengineering:component_steel'}, count: 6}
    ])
    gunsmith({type: 'gun', id: 'tacz:m16a4'}, [
        {item: {item: 'create:precision_mechanism'}},
        {item: {tag: 'immersiveengineering:treated_wood'}, count: 8},
        {item: {item: 'immersiveengineering:component_iron'}, count: 18},
        {item: {item: 'immersiveengineering:component_steel'}, count: 6}
    ])
    gunsmith({type: 'gun', id: 'tacz:hk416d', attachments: {"stock": "tacz:stock_hk_slim_line"}}, [
        {item: {item: 'create:precision_mechanism'}},
        {item: {item: 'immersiveengineering:component_iron'}, count: 30},
        {item: {item: 'immersiveengineering:component_steel'}, count: 10},
        {item: {item: 'mekanism:alloy_reinforced'}, count: 8}
    ])
    gunsmith({type: 'gun', id: 'tacz:aug'}, [
        {item: {item: 'create:precision_mechanism'}},
        {item: {tag: 'immersiveengineering:treated_wood'}, count: 16},
        {item: {item: 'immersiveengineering:component_iron'}, count: 26},
        {item: {item: 'immersiveengineering:component_steel'}, count: 10},
        {item: {item: 'mekanism:alloy_reinforced'}, count: 4},
        {item: {tag: 'c:gems/amethyst'}}
    ])
    gunsmith({type: 'gun', id: 'tacz:type_81'}, [
        {item: {item: 'create:precision_mechanism'}},
        {item: {tag: 'immersiveengineering:treated_wood'}, count: 16},
        {item: {item: 'immersiveengineering:component_iron'}, count: 16},
        {item: {item: 'immersiveengineering:component_steel'}, count: 6}
    ])
    gunsmith({type: 'gun', id: 'tacz:qbz_95'}, [
        {item: {item: 'create:precision_mechanism'}},
        {item: {tag: 'immersiveengineering:treated_wood'}, count: 16},
        {item: {item: 'immersiveengineering:component_iron'}, count: 14},
        {item: {item: 'immersiveengineering:component_steel'}, count: 8},
        {item: {item: 'mekanism:alloy_reinforced'}, count: 4}
    ])
    gunsmith({type: 'gun', id: 'tacz:spr15hb'}, [
        {item: {item: 'create:precision_mechanism'}},
        {item: {item: 'immersiveengineering:component_iron'}, count: 32},
        {item: {item: 'immersiveengineering:component_steel'}, count: 10},
        {item: {item: 'mekanism:alloy_reinforced'}, count: 8},
        {item: {tag: 'c:plates/obsidian'}, count: 8},
        {item: {tag: 'c:dusts/hop_graphite'}}
    ])
    gunsmith({type: 'gun', id: 'tacz:qbz_191'}, [
        {item: {item: 'create:precision_mechanism'}},
        {item: {tag: 'immersiveengineering:treated_wood'}, count: 16},
        {item: {item: 'immersiveengineering:component_iron'}, count: 14},
        {item: {item: 'immersiveengineering:component_steel'}, count: 8},
        {item: {item: 'mekanism:alloy_reinforced'}, count: 4}
    ])
    gunsmith({type: 'gun', id: 'tacz:m870'}, [
        {item: {item: 'create:precision_mechanism'}},
        {item: {tag: 'immersiveengineering:treated_wood'}, count: 16},
        {item: {item: 'immersiveengineering:component_iron'}, count: 12},
        {item: {item: 'immersiveengineering:component_steel'}, count: 4}
    ])
    gunsmith({type: 'gun', id: 'tacz:m1014'}, [
        {item: {item: 'create:precision_mechanism'}},
        {item: {item: 'immersiveengineering:component_iron'}, count: 32},
        {item: {item: 'immersiveengineering:component_steel'}, count: 12},
        {item: {item: 'mekanism:alloy_reinforced'}, count: 6}
    ])
    gunsmith({type: 'gun', id: 'tacz:hk_mp5a5'}, [
        {item: {item: 'create:precision_mechanism'}},
        {item: {item: 'immersiveengineering:component_iron'}, count: 10},
        {item: {item: 'immersiveengineering:component_steel'}, count: 4}
    ])
    gunsmith({type: 'gun', id: 'tacz:vector45'}, [
        {item: {item: 'create:precision_mechanism'}},
        {item: {item: 'immersiveengineering:component_iron'}, count: 24},
        {item: {item: 'immersiveengineering:component_steel'}, count: 8},
        {item: {item: 'mekanism:alloy_reinforced'}, count: 10}
    ])
    gunsmith({type: 'gun', id: 'tacz:ump45'}, [
        {item: {item: 'create:precision_mechanism'}},
        {item: {item: 'immersiveengineering:component_iron'}, count: 28},
        {item: {item: 'immersiveengineering:component_steel'}, count: 10},
        {item: {item: 'mekanism:alloy_reinforced'}, count: 12}
    ])
    gunsmith({type: 'gun', id: 'tacz:rpk', attachments: {"stock": "tacz:oem_stock_heavy"}}, [
        {item: {item: 'create:precision_mechanism'}},
        {item: {tag: 'immersiveengineering:treated_wood'}, count: 32},
        {item: {item: 'immersiveengineering:component_iron'}, count: 24},
        {item: {item: 'immersiveengineering:component_steel'}, count: 10},
        {item: {item: 'mekanism:alloy_reinforced'}, count: 8}
    ])
    gunsmith({type: 'gun', id: 'tacz:rpg7'}, [
        {item: {item: 'create:precision_mechanism'}},
        {item: {tag: 'immersiveengineering:treated_wood'}, count: 32},
        {item: {item: 'immersiveengineering:component_iron'}, count: 8},
        {item: {item: 'immersiveengineering:component_steel'}, count: 16}
    ])
    gunsmith({type: 'gun', id: 'tacz:m320'}, [
        {item: {item: 'create:precision_mechanism'}},
        {item: {item: 'immersiveengineering:component_iron'}, count: 14},
        {item: {item: 'immersiveengineering:component_steel'}, count: 24},
        {item: {item: 'mekanism:alloy_reinforced'}, count: 4}
    ])
    // Late game
})
