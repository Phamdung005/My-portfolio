FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 5173
#--host để Docker có thể ánh xạ cổng ra ngoài máy thật
CMD ["npm", "run", "dev", "--", "--host"]