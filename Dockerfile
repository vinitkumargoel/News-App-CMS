FROM mhart/alpine-node
WORKDIR /usr/app
COPY . .
EXPOSE 8080
RUN npm run build
RUN npm run bundle
CMD ["npm", "start"] 

