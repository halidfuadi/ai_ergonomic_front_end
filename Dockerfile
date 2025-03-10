# Use a Node.js base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY ./fronted/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY ./fronted/ .

# Expose the port that the Next.js application listens on
EXPOSE 3000

# Set the command to start the Next.js application
CMD ["npm", "run", "dev"]
