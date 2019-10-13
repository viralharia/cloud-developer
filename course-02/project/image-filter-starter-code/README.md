# Udagram Image Filtering Microservice
It is a Node-Express application which runs a simple script to process image passed through query parameter.

The production version is deployed on AWS using elastic beanstalk and use the below url to see the demo
[Live demo](http://image-filter-service-dev.ap-south-1.elasticbeanstalk.com/filteredimage?image_url=https://timedotcom.files.wordpress.com/2019/03/kitten-report.jpg)

Pass on any valid image url as a query parameter. Name of the query parameter to use - 'image_url'.

### To Setup locally

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`
