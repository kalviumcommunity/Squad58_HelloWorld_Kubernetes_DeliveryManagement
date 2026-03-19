# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy only package files first (for caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Build the app
RUN npm run build

# Expose port
EXPOSE 5173

# Start app
CMD ["npm", "run", "preview"]