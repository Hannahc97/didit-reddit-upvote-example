## Upvote

Upvote is a Reddit-esque web application that allows users to create posts, upvote and downvote posts, and comment on posts in a multi-threaded, nested list.

The project is built using Next.js with the /app router and [Tailwind CSS](https://tailwindcss.com/), and uses [Auth.js (formerly Next Auth)](https://authjs.dev/) for user authentication. The data is stored in a Postgres database, which is created and accessed with raw SQL queries using the `pg` package.

The project is a work in progress and is not yet complete.

## Features

- [x] View a list of posts
- [x] View a single post
- [x] Create a post
- [x] Upvote and downvote posts
- [x] Pagination of posts
- [x] Comment on posts
- [x] Nested comments (recursive lists)
- [x] User authentication

## Setup instructions

1. Fork the repository (check "copy the main branch only") and clone your fork to your local machine
2. Run `npm install`
3. Create a `.env.local` file in the root directory and add the following environment variables:
   - `DATABASE_URL` - the URL of your Postgres database (eg. the Supabase connection string)
   - `AUTH_SECRET` - the Next Auth secret string (this can be anything at all like a password, but keep it secret!)
   - `AUTH_GITHUB_ID` - the GitHub OAuth client ID (create yours in [Github developer settings](https://github.com/settings/developers)
   - `AUTH_GITHUB_SECRET` - the GitHub OAuth client secret (create this in [Github developer settings](https://github.com/settings/developers))
4. Create the database schema by running the SQL commands in `schema.sql` in your database (eg. by running the commands in Supabase Query Editor)
5. Run `npm run dev` to start the development server
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the site

## Potential future features

- [ ] User profiles
- [ ] Sorting posts by recent (date posted), top (most upvotes), and most controversial (most upvotes _and_ downvotes)
- [ ] User karma scores
- [ ] User badges / trophies (awards for achievements like number of posts, years on the site, etc.)
- [ ] User settings (eg. number of posts per page, theme, etc.)
- [ ] Moderation tools / reporting or flagging objectionable comments for removable by admins
- [ ] Searching posts (possibly using simple SQL LIKE '%some search%', or [Postgres text search](https://www.crunchydata.com/blog/postgres-full-text-search-a-search-engine-in-a-database))
- [ ] Subreddits (separate communities, that isn't just one big list of posts, that can be created by users)
- [ ] User notifications
- [ ] User private messaging
- [ ] User blocking
- [ ] User following
- [ ] User feed (posts from users you follow)
- [ ] User flair


# Updated ReadMe

- After cloning the repo and running npm install and I created a new project in Supabase but made sure not to put anything in there.
- Then I added the connection string to the `DATABASE_URL` and made sure to put `NEXT_PUBLIC_` before it.
   - Also need to remember to change this on `db.js`
- To get the `AUTH_SECRET` I saw that on the docs you can run `npx auth secret` and it will generate a random value which you can use. 
https://next-auth.js.org/configuration/options 
- To get the `AUTH_GITHUB_ID` and `AUTH_GITHUB_SECRET` I followed the youtube tutorial. I also needed to remember that once I deploy to vercel I need to change the localhost url to the vercel url. 
- I then copied all the data from `schema.sql` and put it into supabase so that it would generate all the tables and data. 
- I ran`npm run dev` to check I could sign in with github and add posts and comments.

## Some issues 
- I got this error saying `parsing error: cannot find module 'next/babel` so I googled it and saw that I needed to put `"extends": ["next/babel", "next/core-web-vitals"]` to the eslint. However when I deployed it on Vercel, this was causing an error, so I removed it. 
- At first I put `NEXT_PUBLIC_` infront of all of the environment variables but I realised it wasn't letting log in using github properly. So I played around with it, removing and adding the prefix and then I realised it worked when it was only in front of `DATABASE_URL` and not the other variables. 
- I also forgot to change this on the environment variables for the Vercel deployment so it was causing an issue and then realised later that this needed to be updated too. 

## Stretch goals
- Fix page titles on post pages to match the post title
- I think I did this goal where I used the `generateMetadata` function to display the post title as the title on the page.
- I also added an error page so if the user tries to vote on a post without logging in, they are told to log in. 

## Advice
- Can you please advise how I can get rid of the message that appears on my vs code "Parsing error: Cannot find module "next/babel" 
   - I did remove this message originally but it was affecting the deployment on vercel so I had to leave it in.
- Also in the `not-found.js` I just imported the login button so the user can click that. However, how I can use the Link component so that if the user clicks the link they're redirected to sign in. I tried to do it but wasn't sure what route to put in the `href` part, because the route is like `api/auth/[...nextauth]`.