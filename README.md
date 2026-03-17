# Docker Node.js + MySQL Project

## Description
A simple Node.js application containerized using Docker and orchestrated with Docker Compose. This project demonstrates how to package an application with all its dependencies and run it consistently across different environments.

---

## Architecture
![Architecture](architecture.png)

*Explanation:*
- *Browser* → Sends HTTP requests to the Node.js container on port 3000
- *Node.js container (web)* → Handles application logic, connects to MySQL
- *MySQL container (db)* → Stores database tables
- *Docker volume (db-data)* → Persists database data
- *Docker network (blog-network)* → Allows containers to communicate

---

## Prerequisites
- Docker
- Docker Compose

---

## Project Structure
```
docker-blog-project
├── app
│   ├── Dockerfile
│   ├── app.js
│   └── package.json
├── screenshots
│   ├── app-running.png
│   └── logs.png
├── .gitignore
├── README.md
├── architecture.png
└── docker-compose.yml
```
## How it works

---

- The Node.js application is defined inside the **app** folder.
- The Dockerfile builds an image of the application.
- Docker Compose is used to:
     - Build the Docker image
     - Run the container
     - Expose the application on a specific port
- The app runs inside a container and is accessible via your browser.

---

## Setup Instructions

---

1. **Clone the repository**
   - git clone https://github.com/RohiniJ1204/docker-blog-project.git

2. **Go to project folder**
   - cd docker-blog-project

3. **Start the containers**
   - docker compose up --build

4. **Open the app in your browser**
   - http://localhost:3000

---

## Screenshots

---

**App Running**

![App running](screenshots/app-running.png)
 
**Logs Output**

![Logs](screenshots/logs.png)

---

## Key concepts demonstrated

---

- Containerization using Docker.
- Writing a Dockerfile for a Node.js app
- Using Docker compose for multi-container management.
- Environment consistency and portability.

---

## Future Improvements

---

- Add environment variables support.
- Use Nginx as a reverse proxy.
- Use Docker healthchecks and logs monitoring for production.
- Deploy using cloud platforms.

---

## Author
- *Name:* Rohini Javvaji
- *GitHub:* [Rohini Javvaji](https://github.com/RohiniJ1204)
- *Email:* rohini.javvaji.dev@gmail.com

---

## Acknowledgement

---

This project is created for learning and demonstrating Docker fundamentals.






