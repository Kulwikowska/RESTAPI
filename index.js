'use strict';

const express = require('express');
const app = express();

app.listen(8080, '127.0.0.1', function() {
    console.log('The Server Has Started!');
});