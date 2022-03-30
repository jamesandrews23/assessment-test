# Assessment Test

Test your knowledge of Capsim history with this assessment test. Fill in each prompt to the best of your
ability and then click the submit button. Once your score is submitted check out the reports page to see
how you compared to other users.

## Program Structure

The Node.js backend and the Vue.js frontend are separated in the project's structure. All server related 
functionality is found under /api and all user interface in /ui. This keeps development clean
and efficient. Frontend and backend require different dependencies thus the separation helps avoid
dependency conflicts.

## Development Mode

To run in development mode open a terminal and navigate to the installed project

```sh
cd ui && npm install
```

then

```sh
cd ../api && npm install
```
and finally

```sh
npm run dev
```
then in a separate terminal 

```shell
cd ui && npm run dev
```
Open a browser and go to http://localhost:3000.

## Production Mode

To run the production ready version open a terminal, navigate to the installed project, then run

```sh
cd ui && npm install
```
then

```shell
cd ../api && npm install && npm start
```

this command will first package the vue app under ui/dist and the server-prod.js will use it as the static
resource for the application.

Finally open a browser and navigate to http://locahost:8080

## Project Thought Process

The project requirements indicated node and vue were viable solutions. I began by using npm to install
all required dependencies and making sure they worked.

I started with creating the node express server and tested a few get requests through it. Once I was confident
with that step I went back to the frontend to clean up the initial code and start the form.

Questions, answers, and associated points had to come from the server. Establishing a connection to the 
backend from vue was accomplished by installing axios and configuring it to make calls through port 8080 
which is where the server runs.

Once the form was working and making calls I created the controllers to handle those requests on the express
server. Making calls to a separate origin required setting express to accept cross origin requests. 
I installed the cors module and updated express to use it.

I decided to store both the questions, and the user submissions as .json files in the /public resource
directory. The storage requirement suggested it was up to my imagination, so I went with what I felt would
be quick, simple, and easy to understand. 

I had to calculate score based on the points scored / overall points. This was a bit tricky 
to calculate, because of how the questions are structured with single and multiple types. Since I had
stored the data as a .json file it was easy to parse it out and use a condition to check for which was 
being used and only count all the points if it was a 'multiple'. 

By far the most difficult challenge of the project was getting the chart to display the data correctly. I decided to go with
https://apexcharts.com/. The chart was easy to get going through vue, but figuring out to display the data
correctly took me much longer than I thought. I knew that each submission counted as a single user. It 
made sense to store that as an array, but I then realized that I needed to separate out the scores to 
their corresponding percentage ranges. I created an object whose keys were the percentage ranges and 
values were the sum of users with that score.
