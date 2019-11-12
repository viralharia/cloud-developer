# Install kubernetes and set config
curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl

## getting the cluster config file from github
curl -o config https://$GITHUB_ACCESS_TOKEN@raw.githubusercontent.com/viralharia/MySecretInfraRepo/master/aws_kubernetes_config
 
mkdir ${HOME}/.kube
cp config ${HOME}/.kube/config
 
# Fill out missing params in kubectl config file
kubectl config set clusters.k8-udacity-cluster.certificate-authority-data "$KUBE_CLUSTER_CERTIFICATE"
kubectl config set users.kubernetes-admin.client-certificate-data "$KUBE_CLIENT_CERTIFICATE"
kubectl config set users.kubernetes-admin.client-key-data "$KUBE_CLIENT_KEY"

#update
kubectl set image deployment/backend-user backend-user=vharia/udacity-restapi-user:latest --record
kubectl set image deployment/backend-feed backend-feed=vharia/udacity-restapi-feed:latest --record
kubectl set image deployment/frontend frontend=vharia/udacity-frontend:latest --record
kubectl set image deployment/reverseproxy-deployment reverseproxy=vharia/reverseproxy:latest --record
