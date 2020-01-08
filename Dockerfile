FROM node:12.1.0
ARG PORT
ENV PORT=${PORT}
RUN mkdir /home/presenter
WORKDIR /home/presenter
COPY . ./
RUN npm install
CMD npm start -- --p ${PORT}
EXPOSE ${PORT}
