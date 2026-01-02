/**
 * Default values for arrays of primitive types are automatically generated.
 * For non-primitive types, set the shadow block ID to "lists_create_with"
 * and the default value to the block ID for the type of elements you want the array to be populated with.
 */

//% color="#AA278D"
namespace oofy {

    //% block="circle area radius %radius"
    export function circleArea(radius: number): number {
        return Math.PI * radius * radius;
    }

    //% block="circle circumference radius %radius"
    export function circleCircumference(radius: number): number {
        return 2 * Math.PI * radius;
    }

    //% block="square area side %side"
    export function squareArea(side: number): number {
        return side * side;
    }

    //% block="rectangle area length %length width %width"
    export function rectangleArea(length: number, width: number): number {
        return length * width;
    }

    //% block="rectangle perimeter length %length width %width"
    export function rectanglePerimeter(length: number, width: number): number {
        return 2 * (length + width);
    }

    //% block="triangle area base %base height %height"
    export function triangleArea(base: number, height: number): number {
        return 0.5 * base * height;
    }

    //% block="circle diameter %diameter"
    export function circleDiameter(diameter: number): number {
        return diameter;
    }
}