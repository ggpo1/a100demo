import IDocData from "../models/IDocData";
import Images from "./Photos";

const DocsData: Array<IDocData> = [
    {
        fileName: Images.files.gost55525.fileName,
        fileSize: '1054KB',
        filePath: Images.files.gost55525.path,
    },
    {
        fileName: Images.files.gost57381.fileName,
        fileSize: '1315KB',
        filePath: Images.files.gost57381.path,
    },
    {
        fileName: Images.files.a100inst.fileName,
        fileSize: '5774KB',
        filePath: Images.files.a100inst.path,
    },
    {
        fileName: Images.files.installInstruc.fileName,
        fileSize: '58KB',
        filePath: Images.files.installInstruc.path,
    },
    {
        fileName: Images.files.otchet.fileName,
        fileSize: '12515KB',
        filePath: Images.files.otchet.path,
    },
] 

export default DocsData;
