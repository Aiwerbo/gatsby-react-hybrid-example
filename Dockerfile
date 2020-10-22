## Build Environment
FROM node:12-slim AS build-env
WORKDIR /app/react-app
COPY ./react-app/package.json .
COPY ./react-app .
RUN npm install
RUN ["npm", "run-script", "build"]
WORKDIR /app/gatsby-app
COPY ./gatsby-app/package.json .
COPY ./gatsby-app .
RUN npm install
RUN ["npm", "run", "build"]
RUN rm -rf public/react-app
WORKDIR /app/react-app
RUN mv build ../gatsby-app/public/react-app
FROM nginx 
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
COPY --from=build-env /app/gatsby-app/public /usr/share/nginx/html
#ENTRYPOINT ["nginx","-g","daemon off;"]