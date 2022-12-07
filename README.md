# HTTP / AJAX II React: Movie CRUD

This project explored HTTP methods, REST interfaces, CRUD apps and using put and delete to allow editing and deleting functionality. I passed props to Route connected components while using URL params to get values from an api. I implemented various pieces of functionality in a movie database CRUD app.I also used the post, put and delete HTTP methods to interact with server data by passing values into the Route component to allow for the updating of state.

## Introduction
CRUD applications are the foundation of most web applications. Being able to manage creating, edit and deleting data from an external source is as key a skill 
 
* [ ] Download server dependencies by running `npm install`
* [ ] Run the local web server by running `node server.js`
* [ ] Open a new terminal window and cd into the client code `cd client`
* [ ] Download project dependencies by running `npm install`
* [ ] Start up the app using `npm start`




### Resource: API documentation 

#### GET `http://localhost:5000/api/movies`
- Retrieves all the Movies with the following formatting:
```
[{
  id: 5,
  title: 'Tombstone',
  director: 'George P. Cosmatos',
  metascore: 89,
  genre: "Drama",
  description: : "A successful lawman's plans to retire anonymously in Tombstone, Arizona are disrupted by the kind of outlaws he was famous for eliminating."
}]
```
#### GET `http://localhost:5000/api/movies`
- Retrieves all movies on the server.

#### GET `http://localhost:5000/api/movies/:id`
- Retrieves a movie with the passed value as id.

#### POST `http://localhost:5000/api/movies`
- Adds the movie passed in through body to the server movies list. Returns updated movies list.

#### PUT `http://localhost:5000/api/movies/:id`
- Replaced the movie with the passed in id with data passed in through body. Returns update movies list.

#### DELETE `http://localhost:5000/api/movies/:id`
- Removed movie with the passed in id. Returns the deleted movie's id.
