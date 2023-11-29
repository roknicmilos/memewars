########################
###### Base image ######
########################
FROM node:20 as base

WORKDIR /app

COPY . .


##############################
###### Production image ######
##############################

FROM base AS production

RUN npm install
RUN npm install -g serve
RUN npm run build

CMD ["sh", "/app/scripts/entrypoint.sh", "prod"]

################################
####### Development image ######
################################

FROM base AS development

CMD ["sh", "/app/scripts/entrypoint.sh", "dev"]
