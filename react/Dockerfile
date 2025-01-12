# ndertimi i react app
FROM node:alpine

# direktoria ku do punojme
WORKDIR /usr/src/app

# install dependecies
COPY package*.json ./
RUN npm install

# Copy app code
COPY . .

#ekspozimi i portes
EXPOSE 5173

CMD ["npm", "run", "dev"]