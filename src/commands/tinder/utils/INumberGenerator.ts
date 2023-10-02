interface INumberGenerator {
    generateNumber(min: number, max: number, precision?: number): number;
}

export default INumberGenerator;