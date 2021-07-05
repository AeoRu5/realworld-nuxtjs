# Authentication:
POST /api/users/login
Example request body:
{
  "user":{
    "email": "jake@jake.jake",
    "password": "jakejake"
  }
}

# Registration:
POST /api/users
Example request body:
{
  "user":{
    "username": "Jacob",
    "email": "jake@jake.jake",
    "password": "jakejake"
  }
}

# Get Current User
GET /api/user

# Update User
PUT /api/user
Example request body:
{
  "user":{
    "email": "jake@jake.jake",
    "bio": "I like to skateboard",
    "image": "https://i.stack.imgur.com/xHWG8.jpg"
  }
}

# Get Profile
GET /api/profiles/:username

# Follow user
POST /api/profiles/:username/follow

# Unfollow user
DELETE /api/profiles/:username/follow

# List Articles
GET /api/articles
> Filter by tag:
?tag=AngularJS
> Filter by author:
?author=jake
> Favorited by user:
?favorited=jake
> Limit number of articles (default is 20):
?limit=20
> Offset/skip number of articles (default is 0):
?offset=0

# Feed Articles
GET /api/articles/feed

# Get Article
GET /api/articles/:slug

# Create Article
POST /api/articles
Example request body:
{
  "article": {
    "title": "How to train your dragon",
    "description": "Ever wonder how?",
    "body": "You have to believe",
    "tagList": ["reactjs", "angularjs", "dragons"]
  }
}

# Update Article
PUT /api/articles/:slug
Example request body:
{
  "article": {
    "title": "Did you train your dragon?"
  }
}

# Delete Article
DELETE /api/articles/:slug

# Add Comments to an Article
POST /api/articles/:slug/comments
Example request body:
{
  "comment": {
    "body": "His name was my name too."
  }
}

# Get Comments from an Article
GET /api/articles/:slug/comments

# Delete Comment
DELETE /api/articles/:slug/comments/:id

# Favorite Article
POST /api/articles/:slug/favorite

# Unfavorite Article
DELETE /api/articles/:slug/favorite

# Get Tags
GET /api/tags