FROM node:alpine

#vendosim direktorine e punes
WORKDIR /usr/src/app

# ne fillim kopjojme paketat e instaluara per ti cache
COPY package*.json ./

#instalojme dependencies
RUN npm install

# copy app code
COPY . .

#ekspozimi i portes
EXPOSE 3000

# nisja e app
CMD ["npm", "start"]

