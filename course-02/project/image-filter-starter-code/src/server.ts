import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles, imageExtensions} from './util/util';
import url, {UrlWithStringQuery} from 'url';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */
  app.get("/filteredimage/",async (req: Request, res: Response) => {
    const {image_url} = req.query;
    if(validateImageUrl(image_url)){
      filterImageFromURL(image_url).then(
        (result) => {
          return res.status(200).sendFile(result,(err) => {
            console.log("inside sendfile callback - "+err);
            deleteLocalFiles([result]);
          });
        },
        (error) => {
          return res.status(200).send(`Invalid image url - ${image_url}. Please send the valid image url.\n Example of valid url is - `);
        }
      );      
    }else{
      return res.status(200).send(`Invalid image url - ${image_url}. Please send the valid image url.\n Example of valid url is - `);
    }  
  });

  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );

  function validateImageUrl(imageURL:string):boolean{
    
    try{
      let temp1 = new url.URL(imageURL);
    }catch(e){
      console.log(`error in creating url object - ${e}`);
      if(e instanceof TypeError){
        return false;
      }
    }

    let imgExt = imageURL.substring(imageURL.lastIndexOf("."));
    console.log(`img extension - ${imgExt}`);

    if(!imageExtensions.includes(imgExt)){
      return false;
    }        
    return true;
  }
})();