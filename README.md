# Coding Assignment 14: Building a Portfolio Website

This guide will show you how to build and run the web application on 
 'localhost:5575'.

---

## Prerequisites
- [Docker](https://www.docker.com/) must be installed on your system.
- Clone this repository to your local machine.
    
    https://github.com/xhankx/xu_hang_final_site.git

---

## Build and Run Instructions

### 1. Build the Docker Image:
Navigate to the project directory containing the Dockerfile and run:

docker build -t xu_hang_coding_assignment14 .

### 2. Run the Docker Container:
After building the Docker image, run this command to start the container:

docker run -d -p 5575:3000 --name xu_hang_coding_assignment14 xu_hang_coding_assignment14

### 3. Open your web browser and go to:

http://localhost:5575
