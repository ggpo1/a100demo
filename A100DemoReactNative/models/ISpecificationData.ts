import Decimal from 'decimal.js';

interface ISpecificationData {
    elementName: string,
    elementSize: string,
    H: Decimal,
    B: Decimal,
    L: Decimal,
    b?: Decimal,
    C?: Decimal,
    photo: any
}

export default ISpecificationData;