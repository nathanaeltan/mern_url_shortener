# Use a Node.js LTS (Long Term Support) as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Install nodemon globally
RUN npm install -g nodemon typescript

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which the Express server will run
EXPOSE 5001

# Define the command to run your Express server with nodemon
CMD ["nodemon", "--watch", "src", "--exec", "ts-node", "src/server.ts"]
