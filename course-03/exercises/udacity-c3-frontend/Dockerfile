## Build
FROM beevelop/ionic AS ionic

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

RUN npm install

RUN ionic build


## Run 
FROM nginx:alpine
#COPY www /usr/share/nginx/html
COPY --from=ionic  /usr/src/app/www /usr/share/nginx/html