ServerEvents.recipes(event => {
    /**
     * 
     * @param {import("@special/types").SpecialTypes.RecipeId} id 
     * @returns 
     */
    const removeId = id => event.remove({'id': id})

    // C
    removeId(/create:cutting\/compat\/immersiveengineering\/(.*)/)

    // C: Diesel Generators
    event.remove({type: 'createdieselgenerators:hammering'})
    event.remove({type: 'createdieselgenerators:wire_cutting'})

    // CC&A
    removeId('createaddition:mechanical_crafting/electric_motor')
    removeId('createaddition:mechanical_crafting/alternator')
    removeId(/createaddition:crafting\/(.*)spool/)
    removeId(/createaddition:crafting\/(.*)connector/)
    removeId('createaddition:crafting/redstone_relay')

    // C: New Age
    removeId(/create_new_age:sequenced_assembly\/reactor(.*)/)
    removeId(/create_new_age:shaped\/(.*)wire_block/)
    removeId(/create_new_age:shaped\/(.*)solar_heating_plate/)
    removeId('create_new_age:shaped/stirling_engine')
    removeId(/create_new_age:shaped\/heat(.*)/)
    removeId(/create_new_age:shaped\/electrical_connector(.*)/)
    removeId('create_new_age:sequenced_assembly/nuclear_fuel')
    removeId('create_new_age:shaped/redstone_magnet')
    removeId('create_new_age:shaped/layered_magnet')
    removeId('create_new_age:shaped/fluxuated_magnetite')
    removeId('create_new_age:shaped/netherite_magnet')
    event.remove({'output': /create_new_age:(.*)wire/})
})