import IDocData from "../models/IDocData";
import Images from "./Photos";

const DocsData: Array<IDocData> = [
    {
        fileName: Images.videos.video1.name,
        fileSize: '1054KB',
        file: Images.videos.video1.file
    },
    {
        fileName: Images.videos.video2.name,
        fileSize: '1315KB',
        file: Images.videos.video2.file
    },
    {
        fileName: Images.videos.video3.name,
        fileSize: '5774KB',
        file: Images.videos.video3.file
    },
    {
        fileName: Images.videos.video4.name,
        fileSize: '5774KB',
        file: Images.videos.video4.file
    },    
] 

export default DocsData;
