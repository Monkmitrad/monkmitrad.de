FROM node As builder
WORKDIR /home/monk/monkmitrad

COPY package.json package-lock.json ./

RUN npm install
COPY . .
RUN npm run build --prod


FROM nginx
COPY --from=builder /home/monk/monkmitrad/dist/monkmitrad /usr/share/nginx/html
