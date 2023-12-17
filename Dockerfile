FROM node:18.5.0 as builder

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts@2.1.3 -g --silent
RUN npm install react-icons --save
RUN npm install @mui/material @emotion/react @emotion/styled --legacy-peer-deps
RUN npm install @mui/icons-material --legacy-peer-deps
RUN npm install react-compare-slider
RUN npm install react-responsive-carousel
RUN npm install better-react-mathjax

COPY . /usr/src/app
# CMD ["npm", "start"]