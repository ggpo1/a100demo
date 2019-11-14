import Images from './Photos';
import ISpecificationData from '../models/ISpecificationData';
import Decimal from 'decimal.js';
import Photos from './Photos';

const specData: Array<ISpecificationData> = [
    {
        elementName: 'Стойка (HxBxL), мм',
        elementSize: '100x80x9000',
        H: new Decimal(100),
        B: new Decimal(80),
        L: new Decimal(9000),
        photo: Photos.specifications.st1,
    },
    {
        elementName: 'Балка (HxBxL), мм',
        elementSize: '100x80x2700',
        H: new Decimal(100),
        B: new Decimal(80),
        L: new Decimal(2700),
        photo: Photos.specifications.st2,
    },
    {
        elementName: 'Диагональ (HxBxL), мм',
        elementSize: '886x88x88',
        H: new Decimal(886),
        B: new Decimal(88),
        L: new Decimal(88),
        b: new Decimal(8),
        C: new Decimal(7),
        photo: Photos.specifications.st3,
    },
]

export default specData;