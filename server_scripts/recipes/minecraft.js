ServerEvents.recipes(event => {
    event.smelting('minecraft:leather', 'minecraft:rotten_flesh')
    
    event.replaceInput({'id': 'mekanism_empowered:upgrade_empowered_energy'}, '#c:dusts/gold', Item.of('mekanism:upgrade_energy'))
    event.replaceInput({'id': 'mekanism_empowered:upgrade_empowered_speed'}, '#c:dusts/osmium', Item.of('mekanism:upgrade_speed'))
    
    event.shaped('createrailwaysnavigator:navigator', [
        'AIA',
        'IPI',
        'ACA'
    ], {
        A: 'create:andesite_alloy',
        I: '#c:plates/iron',
        P: '#c:glass_panes',
        C: 'mekanism:basic_control_circuit'
    })
})