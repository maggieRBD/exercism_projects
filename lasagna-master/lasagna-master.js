/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
    if(remainingTime === 0)
        return 'Lasagna is done.'
    else if(remainingTime === null || remainingTime === undefined)
        return 'You forgot to set the timer.'
    else
        return 'Not done, please wait.'
}

export function preparationTime(layers, averagePreparationTimePerLayer) {
    let totalPreparetionTime = 0;
    for (let i = 0; i < layers.length; i++) {
        if(averagePreparationTimePerLayer === null ||
        averagePreparationTimePerLayer === undefined){
            totalPreparetionTime += 2
        }else{
            totalPreparetionTime += averagePreparationTimePerLayer
        }
    }
    return totalPreparetionTime;
}

export function quantities(layers) {
    return {
        noodles: layers.filter((layer) => layer === 'noodles').length * 50,
        sauce: layers.filter((layer) => layer === 'sauce').length * 0.2,
    }
}

export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length-1])
    console.log(myList)
}

export function scaleRecipe(recipe,numberOfPortions) {
    let obj = {};
    for (const key in recipe) {
        obj[key] = recipe[key] * numberOfPortions/2;
    }
    return obj

}
