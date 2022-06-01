FROM node:slim

WORKDIR /usr/src/ModularTgsnake
RUN chmod 777 /usr/src/ModularTgsnake

COPY . .

RUN npm install

CMD ["bash", "start.sh"]