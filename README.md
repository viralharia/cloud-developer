This is an attempt to create microservices of the Udagram application(an instagram clone) and run the services on Kubernetes cluster on AWS.

For simplicity, we are using this single repo here for all the services.

There are total 4 microservices in the system - 
1. Backend user : /course-03/exercises/udacity-c3-restapi-user/
2. Backend feed : /course-03/exercises/udacity-c3-restapi-feed/
3. Nginx : /course-03/exercises/deployment/docker/DockerFile
4. Frontend : /course-03/exercises/udacity-c3-frontend/

## Running the services locally on Docker containers
### Docker Images
 - All the services have their respective Docker files
 - Docker compose file located at - 
	
 - Use the below docker compose command to build the Docker Images
```
Docker compose build
```

### Starting the app as containers on a local system
 - docker compose up		
	
### Updating and deploying new docker images
- use the docker compose push


	
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
		



