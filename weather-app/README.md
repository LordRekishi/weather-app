# Weather App demo

A very simple weather app using Vue and Axios for the frontend and Node, Express, Axios and QS for a very simple backend.
The app will take input from the user (a city) and send this as a request to the backend "/" endpoint.
The backend will then stringify the request and add the API key, this will then be sent with Axios to openweathermap.org.

### How to use

1. Clone this repository to your local computer and open the project in your preferred IDE
2. Go to [openweathermap.org](https://home.openweathermap.org) and create an account
3. Make sure you're logged in, then click your name in the top right and choose `My API keys`
4. Copy the API key and go to `/weather-app/backend/index.js` file
   1. Find the element called `apiKey` and paste the key between the quotation marks
5. Open a terminal in the `/weather-app` root directory
   1. First run this command: `npm install`
   2. Then run this command: `npm run dev`
   3. CTRL click on the provided localhost address to open it in a browser
6. Open a terminal in the `/weather-app/backend` directory
   1. First run this command: `npm install`
   2. Then run this command: `node index.js`
7. Enter a city name in the input field and press Enter, this should return the current temperature, weather condition and description.

### FAQ

- **The API key doesn't seem to work!**
  - You will get a verification email sent to you, make sure you verify to activate your account.
  - The API key will take up to two hours before it is valid.
