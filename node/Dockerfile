FROM node:alpine

#vendosim direktorine e punes
WORKDIR /app/node

# ne fillim kopjojme paketat e instaluara per ti cache
COPY package.json ./
COPY package-lock.json ./

#instalojme dependencies
RUN npm install

# copy app code
COPY . .

#ekspozimi i portes
EXPOSE 3000

# nisja e app
CMD ["npm", "start"]

