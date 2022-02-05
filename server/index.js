const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors());

const PORT = process.env.PORT || 5001;

const nodePath = require('path');
// Priority serve any static files.
app.use(express.static(nodePath.resolve(__dirname, '../react-ui/build')));

// All remaining requests return the React app, so it can handle routing.
app.get('*', function (request, response) {
    response.sendFile(nodePath.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.use('/images', express.static('images'));

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});