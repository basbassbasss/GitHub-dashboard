# GitHub Dashboard

## Running the dashboard

1. Create a GitHub personal access token with the `user:email` scope. See: https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token
2. Create an `.env.local` (e.g. `cp .env.local.example .env.local`)
3. Run `yarn start`, a browser will be automatically linking to http://localhost:3000/ 

## Stack 
- [Create-react-app](https://github.com/facebook/create-react-app)
- [Apollo](https://www.apollographql.com/) for communicating with GitHub's GraphQL api
- [Emotion](https://emotion.sh/) Emotion for styled components
