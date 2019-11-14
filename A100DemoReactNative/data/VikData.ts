import IVikData from "../models/IVikData";
import { number } from "prop-types";
import Images from './Photos'; 

const vikData: Array<IVikData> = [
    { 
        row: 1, 
        cell: 1, 
        level: 1,
        elementName: 'Балка',
        producer: 'La Fortezza est',
        type: 1, 
        size: '85x52x2700' ,
        defectType: 'Повреждение',
        repaired: false,
        watchDate: '28.01.2019',
        repairDate: '',
        comment: '',
        repairDetailsAgo: 0,
        photos: [
            Images.first,
            Images.second,
            Images.third,
        ],
        repairPhotos: [
            Images.first,
            Images.second,
            Images.third,
        ],
    },
    { 
        row: 3, 
        cell: 1, 
        level: 2,
        elementName: 'Балка',
        producer: 'La Fortezza est',
        type: 2, 
        size: '85x52x2700' ,
        defectType: 'Повреждение',
        repaired: false,
        watchDate: '28.01.2019',
        repairDate: '',
        comment: '',
        repairDetailsAgo: 0,
        photos: [
            Images.first,
            Images.second,
            Images.third,
        ],
        repairPhotos: [
            Images.first,
            Images.second,
            Images.third,
        ],
    },
    { 
        row: 1, 
        cell: 1, 
        level: 3,
        elementName: 'Стойка',
        producer: 'La Fortezza est',
        type: 6, 
        size: '80x70x5500' ,
        defectType: 'Повреждение',
        repaired: false,
        watchDate: '28.01.2019',
        repairDate: '',
        comment: '',
        repairDetailsAgo: 0,
        photos: [
            Images.first,
            Images.second,
            Images.third,
        ],
        repairPhotos: [
            Images.first,
            Images.second,
            Images.third,
        ],
    },
    { 
        row: 1, 
        cell: 2, 
        level: 2,
        elementName: 'Стойка',
        producer: 'La Fortezza est',
        type: 5, 
        size: '80x70x5500' ,
        defectType: 'Повреждение',
        repaired: false,
        watchDate: '28.01.2019',
        repairDate: '',
        comment: 'Высота повреждения стойки: До 600 мм',
        repairDetailsAgo: 0,
        photos: [
            Images.first,
            Images.second,
            Images.third,
        ],
        repairPhotos: [
            Images.first,
            Images.second,
            Images.third,
        ],
    },
    { 
        row: 5, 
        cell: 1, 
        level: 1,
        elementName: 'Горизонталь',
        producer: 'La Fortezza est',
        type: 2, 
        size: '45x25x630' ,
        defectType: 'Повреждение',
        repaired: false,
        watchDate: '28.01.2019',
        repairDate: '',
        comment: '',
        repairDetailsAgo: 0,
        photos: [
            Images.first,
            Images.second,
            Images.third,
        ],
        repairPhotos: [
            Images.first,
            Images.second,
            Images.third,
        ],
    },
    { 
        row: 6, 
        cell: 2, 
        level: 1,
        elementName: 'Стойка',
        producer: 'La Fortezza est',
        type: 2, 
        size: '80x70x2300' ,
        defectType: 'Повреждение',
        repaired: false,
        watchDate: '28.01.2019',
        repairDate: '',
        comment: 'Высота повреждения стойки: До 600 мм',
        repairDetailsAgo: 0,
        photos: [
            Images.first,
            Images.second,
            Images.third,
        ],
        repairPhotos: [
            Images.first,
            Images.second,
            Images.third,
        ],
    },
    { 
        row: 6, 
        cell: 2, 
        level: 1,
        elementName: 'Стойка',
        producer: 'La Fortezza est',
        type: 2, 
        size: '80x70x2300' ,
        defectType: 'Повреждение',
        repaired: false,
        watchDate: '28.01.2019',
        repairDate: '',
        comment: '',
        repairDetailsAgo: 0,
        photos: [
            Images.first,
            Images.second,
            Images.third,
        ],
        repairPhotos: [
            Images.first,
            Images.second,
            Images.third,
        ],
    },
]

export default vikData;