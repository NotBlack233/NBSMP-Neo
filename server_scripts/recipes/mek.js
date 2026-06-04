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
    mek.combining(
        'create_new_age:netherite_magnet',
        'create_new_age:fluxuated_magnetite',
        '2x minecraft:netherite_scrap'
    )
})