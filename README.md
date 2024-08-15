AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list


GET /api/users

Functionality: Create a new user.
Example Request: POST /api/users
Example Body:
json
Copy code
{
  "username": "new_user",
  "email": "new_user@example.com"
}
Expected Response: The newly created user object in JSON format.
PUT /api/users/:id

Functionality: Update an existing user by their ID.
Example Request: PUT /api/users/60c72b2f4f1a2b001c8d5f1b
Example Body:
json
Copy code
{
  "username": "updated_user",
  "email": "updated_user@example.com"
}
Expected Response: The updated user object in JSON format.
DELETE /api/users/:id

Functionality: Delete a user by their ID.
Example Request: DELETE /api/users/60c72b2f4f1a2b001c8d5f1b
Expected Response: A success message or status code indicating deletion.
POST /api/users/:userId/friends/:friendId

Functionality: Add a friend to a user's friend list.
Example Request: POST /api/users/60c72b2f4f1a2b001c8d5f1b/friends/60c72b2f4f1a2b001c8d5f1c
Expected Response: The updated user object with the new friend added.
DELETE /api/users/:userId/friends/:friendId

Functionality: Remove a friend from a user's friend list.
Example Request: DELETE /api/users/60c72b2f4f1a2b001c8d5f1b/friends/60c72b2f4f1a2b001c8d5f1c
Expected Response: The updated user object with the friend removed.
Thought Routes
GET /api/thoughts

Functionality: Retrieve all thoughts.
Example Request: GET /api/thoughts
Expected Response: An array of thought objects in JSON format.
GET /api/thoughts/:id

Functionality: Retrieve a single thought by its ID.
Example Request: GET /api/thoughts/60c72b2f4f1a2b001c8d5f1d
Expected Response: A single thought object in JSON format.
POST /api/thoughts

Functionality: Create a new thought.
Example Request: POST /api/thoughts
Example Body:
json
Copy code
{
  "thoughtText": "This is a new thought",
  "username": "user_id_here",
  "userId": "60c72b2f4f1a2b001c8d5f1b"
}
Expected Response: The newly created thought object in JSON format.
PUT /api/thoughts/:id

Functionality: Update an existing thought by its ID.
Example Request: PUT /api/thoughts/60c72b2f4f1a2b001c8d5f1d
Example Body:
json
Copy code
{
  "thoughtText": "This is an updated thought"
}
Expected Response: The updated thought object in JSON format.
DELETE /api/thoughts/:id

Functionality: Delete a thought by its ID.
Example Request: DELETE /api/thoughts/60c72b2f4f1a2b001c8d5f1d
Expected Response: A success message or status code indicating deletion.
Reaction Routes (if you decide to re-implement them)
POST /api/thoughts/:thoughtId/reactions

Functionality: Add a reaction to a thought.
Example Request: POST /api/thoughts/60c72b2f4f1a2b001c8d5f1d/reactions
Example Body:
json
Copy code
{
  "reactionBody": "This is a reaction",
  "username": "user_id_here"
}
Expected Response: The updated thought object with the new reaction added.
DELETE /api/thoughts/:thoughtId/reactions/:reactionId

Functionality: Remove a reaction from a thought.
Example Request: DELETE /api/thoughts/60c72b2f4f1a2b001c8d5f1d/reactions/60c72b2f4f1a2b001c8d5f1e
Expected Response: The updated thought object with the reaction removed.