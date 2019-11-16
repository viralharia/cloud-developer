This is an attempt to create microservices of the Udagram application(an instagram clone) and run the services on Kubernetes cluster on AWS.

For simplicity, we are using this single repo here for all the services.

There are total 4 microservices in the system - 
1. Backend user : /course-03/exercises/udacity-c3-restapi-user/
2. Backend feed : /course-03/exercises/udacity-c3-restapi-feed/
3. Nginx : /course-03/exercises/deployment/docker/DockerFile
4. Frontend : /course-03/exercises/udacity-c3-frontend/

## Running the services locally on Docker containers
### Prerequisites
- Docker compose
- Environment variables
  - To create and run the application locally using Docker containers, following **_environment variables_** needs to be configured first:
    - POSTGRESS_USERNAME
    - POSTGRESS_PASSWORD
    - POSTGRESS_DB
    - POSTGRESS_HOST
    - AWS_REGION
    - AWS_PROFILE
    - AWS_BUCKET
    - JWT_SECRET
    
### Docker Images
 - All the services have their respective Docker files.
 - Docker compose file located at - __course-03/exercises/deployment/docker__
	
 - Use the below docker-compose command to build all the Docker Images
```
sudo docker-compose -f {path to the docker-compose-build.yaml}/docker-compose-build.yaml build
```
- Once all the images are built successfully, run the below docker command to verify the images
```
sudo docker images
```

You should see something similar like below picture
![docker-images](readme-screenshots/docker-images.png)

### Starting the app as containers on a local system
- After all the images are built locally using the `docker-compose build` command, use the below `docker-compose` command to run the application containers locally.
```
docker compose up		
```	
- `docker-compose up` command will create container for each of the 4 services, and you should see similar to the below picture in your terminal.
![docker-images](readme-screenshots/docker-compose-up.png)

- After that, navigate to - `localhost:8100`
![docker-images](readme-screenshots/localhost.png)
	
## Setup and Running application on AWS 
There are 2 parts of this:  
### 1. Setting up the Kubernetes cluster:
- One of the simplest way to setup the cluster on AWS is using Kubeone and Terraform.
- steps are here - https://github.com/kubermatic/kubeone/blob/master/docs/quickstart-aws.md
		
### 2. Deploying and running the application on the cluster:
- Once the Kubernetes cluster is running on AWS, follow below steps to deploy the application services on the cluster.
- The kubernetes config files are located at - /course-03/exercises/deployment/k8s/
- Create configmaps and secrets for your application
- kubectl apply -f backend-user-deployment.yaml
- kubectl apply -f backend-user-service.yaml
		...
		
	Running the application
		- port forwarding
		



