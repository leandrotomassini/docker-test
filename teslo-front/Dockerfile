# Etapa 1: Construir la aplicación Next.js
FROM node:14-alpine as build-stage

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo de definición de dependencias de tu proyecto
COPY package.json yarn.lock ./

# Instalar las dependencias del proyecto
RUN yarn install

# Copiar el código fuente de la aplicación
COPY . .

# Compilar la aplicación
RUN yarn build

# Etapa 2: Crear la imagen de producción
FROM node:14-alpine as production-stage

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos necesarios de la etapa de construcción
COPY --from=build-stage /app/package.json /app/yarn.lock ./
COPY --from=build-stage /app/.next ./.next
COPY --from=build-stage /app/public ./public

# Instalar solo las dependencias de producción
RUN yarn install --production

# Exponer el puerto en el que se ejecuta la aplicación (ajusta el puerto según tus necesidades)
EXPOSE 3000

# Definir las variables de entorno
ENV MONGO_URL=mongodb+srv://leandro:Universidad11201911@cluster0.w3jhy.mongodb.net/
ENV JWT_SECRET_SEED=idfsji2@!!39--.-9320jrfew$jj32r032j302j0fjew0fj0wdp
ENV NEXTAUTH_SECRET=idfsji2@!!39--.-9320jrfew$jj32r032j302j0fjew0fj0wdp
ENV NEXT_PUBLIC_TAX_RATE=0.15
ENV GITHUB_ID=e7e89565a41d4dcea026
ENV GITHUB_SECRET=4aabf0f01ccbb44ef86d03e045c49c774839bd2a

# Comando para ejecutar la aplicación en modo de producción
CMD ["yarn", "start"]
