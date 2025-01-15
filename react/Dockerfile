# ndertimi i react app
FROM node:alpine AS build

# direktoria ku do punojme
WORKDIR /app/react

# install dependecies
COPY package.json ./
COPY package-lock.json ./

RUN npm install

# Copy app code
COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/react/dist/ /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf