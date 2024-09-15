FROM node:16 AS build

RUN mkdir /react

WORKDIR /react

COPY package.json .

RUN npm install --legacy-peer-deps

COPY . .

# EXPOSE 5173

# CMD [ "npm" , "run", "dev" ]
# CMD [ "npm", "start" ]
# CMD [ "npm", "run", "build" ]
RUN npm run build

RUN ls

# FROM node:18-alpine

# WORKDIR /react_build

# # 내부의 모든내용 삭제
# # RUN rm -rf /react_build/*

# COPY --from=build /react/dist /react_build 

# RUN ls
# RUN pwd


FROM nginx:latest

WORKDIR /

COPY --from=build /react/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]