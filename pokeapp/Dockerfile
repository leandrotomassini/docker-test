# Etapa 1: Construir la aplicación
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

# Comando para ejecutar la aplicación en modo de producción
CMD ["yarn", "start"]
