# Not to do full stack app

this app is built with MERN stack.
...write about the app what it does ...

# How to use

1. Run `git clone <put git Path>`
2. Run `cd <repo name >`
3. RUn `npm install`
4. Run `npm run dev`. Note you must `nodemon`, if not run `npm i nodemon -g'

now your server will run at `http://localhost:8000`

## API

this api server handles all the task request and allow client to run `CRUD` opereation.

## Task router

task router follow the following url `{rootUrl/api/v1/task}`. more details as follow
|#| |PATH||METHOD||IS PRIVATE||DESCRIPTION|
|-| |----||------||----------||----------------------------------------------------------|
|1.| |'/'||POST| |false ||this api allows client to send task object and store in db.|

the object should be in the following structure `{task:'',type:""}`|

|2.| |'/'||GET | |false ||this api allows client to fetch all the task from database|

|3.| |'/'||PATCH| |false ||this api allows client to switch all the task from database|

|4.| |`/:\_id`||Detete| |false ||this api allows client to delete a task based on the given id form databse|

|5.| |'/'||Delete| |false ||this api allows client to send multiple`_id` of task to delete multiple items from database|
