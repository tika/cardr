![Game Preview](https://i.imgur.com/3tecb3p.png)

# Cardr

## A small, simple and boring card game

This was made for the GCSE J276 June 2019 & June 2020 series, Project Task #3.
(Not as official coursework)

## Usage

1. Create an account at /register (auto login)
   1b. Sign in to an account at /login
2. Create a new game at /
   2b. Join a game using a code at /
3. Play a game at /[game code]
4. View leaderboard at /leaderboard

## Technologies used

-   heroicons
-   axios
-   bcrypt
-   cookie
-   csstype
-   dayjs
-   ioredis
-   jsonwebtoken
-   nanoid
-   next
-   prisma
-   pusher (& pusherjs)
-   react (& react-dom)
-   react-host-toast
-   swr
-   zod

## Deployment

I've chosen to use [Vercel](https://vercel.com/) to deploy the frontend & backend API of this application. I'm using [Heroku](https://heroku.com/) to host the Postgres database & Redis data storage. Furthermore, I'm using [Pusher](https://pusher.com/) for live interactions (websockets).

[View design file on Framer](https://framer.com/projects/cardr--7cndy6a3yBF6jQx9uHbv-EzM3B)<br />
That's all, folks.
