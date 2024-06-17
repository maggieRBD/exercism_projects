// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width, height){
    this.width = width;
    this.height = height
}

Size.prototype.resize = function (newWidth, newHeight){
    this.width = newWidth;
    this.height = newHeight
}
