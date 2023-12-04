########################
###### Base image ######
########################
FROM node:20 as base

WORKDIR /app

COPY . .
RUN chmod +x /app/scripts/

##############################
###### Production image ######
##############################

FROM base AS production

RUN npm install
RUN npm run build

CMD ["sh", "/app/scripts/entrypoint.sh", "prod"]

################################
####### Development image ######
################################

FROM base AS development

CMD ["sh", "/app/scripts/entrypoint.sh", "dev"]
