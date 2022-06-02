FROM node:slim

WORKDIR /usr/src/ModularTgsnake
RUN chmod 777 /usr/src/ModularTgsnake

RUN apt-get update && apt-get install wget curl iputils-ping -y

COPY . .

RUN npm install

CMD ["bash", "start.sh"]
