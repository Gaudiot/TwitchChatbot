import INumberGenerator from "./INumberGenerator";

class DefaultGenerator implements INumberGenerator{
    generateNumber(min: number, max: number, precision: number = 2): number {
        if(max <= min) return 0;
        const amplitude = max-min;

        const result = +(Math.random()*amplitude).toFixed(precision);

        return result + min;
    }
}

export default DefaultGenerator;