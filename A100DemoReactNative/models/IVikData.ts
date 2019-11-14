import Colors from "../data/Colors";

interface IVikData {
    row: number,
    cell: number,
    level: number,
    elementName: string,
    producer: string,
    color?: Colors,
    type: number,
    size: string,
    defectType: string,
    repaired: boolean,
    watchDate: string,
    repairDate: string,
    comment: string,
    repairDetailsAgo: number,
    photos: string[],
    repairPhotos: string[]
}

export default IVikData;