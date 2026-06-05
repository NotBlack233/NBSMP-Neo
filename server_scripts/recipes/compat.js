ServerEvents.recipes(event => {
    event.replaceInput('*', 'createaddition:copper_spool', Item.of('immersiveengineering:wirecoil_copper'))
    event.replaceInput('*', 'createaddition:gold_spool', Item.of('immersiveengineering:wirecoil_electrum'))
    event.replaceInput('*', 'createaddition:electrum_spool', Item.of('immersiveengineering:wirecoil_electrum'))
    event.replaceInput('*', 'create_new_age:copper_wire', Ingredient.of('#c:wires/copper'))
    event.replaceInput('*', 'create_new_age:copper_circuit', Item.of('mekanism:basic_control_circuit'))
    event.replaceInput({'id': 'create_new_age:shaped/generator_coil'}, '#c:ingots/copper', Item.of('immersiveengineering:wirecoil_copper'))

    for (let recipe of event.originalRecipes.values()) {
        if (recipe.getType() == 'ae2:charger') {
            event.custom({
                "type": "create_new_age:energising",
                "energy_needed": 3200,
                "ingredients": recipe.originalRecipeIngredients,
                "results": [recipe.originalRecipeResult]
            })
        }
    }
})