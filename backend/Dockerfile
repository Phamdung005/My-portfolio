FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
COPY . . 
# Copy toàn bộ thư mục hiện tại vào trong container /app (đã thiết lập từ WORKDIR)
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]