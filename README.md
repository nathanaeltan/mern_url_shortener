# MERN URL Shortener

A URL Shortener application built on MERN (MongoDB, Express.JS, React.JS, Node.JS) with typescript

#### Features
* Shorten Long URLs to easily shareable short links
* Store the shortened URLs in a MongoDB Database
* Retrieve and redirect to original URLs using short links
* User friendly interface for creating and viewing the shortened URLs
#### How to run
## Prerequisites

Before you begin, ensure that you have the following installed on your system:

- Docker
- Docker Compose

## Steps

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/nathanaeltan/mern_url_shortener.git
    ```

2. **Navigate to the Project Directory**:

    ```bash
    cd mern_url_shortener
    ```

3. **Build and Start the Docker Containers**:

    Run the following command to build and start the Docker containers:

    ```bash
    docker-compose up --build
    ```


4. **Access the Application**:

    Once the containers are up and running, you can access the application:

    - Frontend: Open your web browser and navigate to `http://localhost:3000`.
    - Backend: The backend API endpoints will be accessible at `http://localhost:5001`.
    - API Docs: The API documentation will be accessible at `http://localhost:5001/docs`


## Project Requirements

1. Develop a back-end (REST / HTTP API) server which:
a. returns a short URL when given a specified URL
b. looks up or redirects to the specified URL when given a short URL
2. Develop a simple front-end (website / application) which allows users to easily create
new shortened URLs.


### Approach
##### Design
- For the API, there were three API endpoints that were needed
    - POST url/shorten: To accept a long url in the req body and return the shortened URL with a unique identifier
    - GET /url/:urlId: to retrieve the long url attached to this id and redirect the user to the original URL
    - GET /url to retrieve all the URLs currently saved in the DB
##### Backend Technology
1. For Backend development, Express framework was chosen because it is lightweight and allows for simple development of RESTful APIs as well as providing middleware support and routing.
2. MongoDB was chosen for its flexibility and scalability as well as the project not needing to do many joins, which is fine for a noSQL DB.
3. The urlId was indexed for scalability in future if the collection size grew too much.
4. Typescript was also used for static typing and early error detection

##### Front End Technology
1. React was chosen for its ability to create dynamic user interfaces and component based architecture. 
2. Additionally Redux was chosen as the global state management tool to access the state from the various components that were created easily without passing props down
3. Tailwind CSS was also used for ease of styling through class names.





