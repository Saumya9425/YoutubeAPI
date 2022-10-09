
# Youtube Api

This project is used to fetch latest videos from the youtube data api v3 and return the data related to the videos to the user in reverse order of their creation in paginated form.The user is free to run many queries via the apollo framework.



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`YOUTUBE_URL` = https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&order=date&publishedAfter=2022-01-10T21%3A14%3A33Z&q=nba&relevanceLanguage=en&key=AIzaSyBwkiHIvjmPDU5iokBsRCcqiwy0hKIN_3c
or your predefined search query using your apikey if the specified api key is exhausted.

`MONGO_URL` = Your Mongo Atlas Connection String



## Run Locally

Clone the project

```bash
  git clone https://github.com/Saumya9425/YoutubeAPI.git
```

Go to the YoutubeAPI directory

```bash
  cd YoutubeAPI
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Deployment

The deployed link of this project is https://youtubegraphqlapi.herokuapp.com/

The postman collections are https://www.getpostman.com/collections/a1976af0159ab0636924

Copy the link https://youtubegraphqlapi.herokuapp.com/graphql and run the queries in postman collection to get the response.

