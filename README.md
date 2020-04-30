# tripadvisor-itenerary-server


## Setup

### PostgreSQL 

This app uses PostgreSQL. You will need an existing database and an existing user for this app to connect to. 

To install:
- brew install postgresql

To run:
- brew services start postgresql

To make a postgresql database from the terminal: 
createdb *databasename*
e.g. *createdb snaketours*

To create a user: 
createuser *username* --interactive 
e.g. *createuser snaketours --interactive*

Follow the prompts.  If it does not ask you for a password, then your server is not configured to need one.  This repo currently assumes you don't need passwords. 
