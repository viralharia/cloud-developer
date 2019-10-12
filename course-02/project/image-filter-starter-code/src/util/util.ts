import fs from 'fs';
import Jimp = require('jimp');

const jimpFunctions:string[] = ['greyscale','sepia'];

// filterImageFromURL
// helper function to download, filter, and save the filtered image locally
// returns the absolute path to the local image
// INPUTS
//    inputURL: string - a publicly accessible url to an image file
// RETURNS
//    an absolute path to a filtered image locally saved file
export async function filterImageFromURL(inputURL: string): Promise<string>{
    return new Promise( async(resolve, reject) => {
        Jimp.read(inputURL).then(
            async (photo) => {
                const outpath = '/tmp/filtered.'+getRandomInt(2000)+'.jpg';
                const jimp: Jimp = photo.resize(photo.getWidth() * 0.60, photo.getHeight() * 0.60) // resize
                                        .quality(85); // set JPEG quality

                // Deciding randowmly which function to apply on the img - greyscale, sepia , ...                        
                const functionName:string = jimpFunctions[getRandomInt(jimpFunctions.length)];

                const grey:Jimp =  jimp[functionName].apply(jimp); // set greyscale
                await grey.write(__dirname+outpath, (img)=>{
                    resolve(__dirname+outpath);
                });
            }
        ).catch((error) => {
            reject(error);
        });        
    });
}

// deleteLocalFiles
// helper function to delete files on the local disk
// useful to cleanup after tasks
// INPUTS
//    files: Array<string> an array of absolute paths to files
export async function deleteLocalFiles(files:Array<string>){
    for( let file of files) {
        console.log(`deleting file - ${file}`);
        fs.unlinkSync(file);
    }
}

export const imageExtensions:string[] = ['.jpg', '.jpeg', '.png', '.bmp', '.tiff']

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }