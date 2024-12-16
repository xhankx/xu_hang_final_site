# Use Node.js base image
FROM node:18

# Set the working directory
WORKDIR /xu_hang_final_site

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose port 5575
EXPOSE 5575

# Start the Web App
CMD ["npm", "start"]
