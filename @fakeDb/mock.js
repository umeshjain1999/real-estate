const MockAdapter = require("axios-mock-adapter");
const axios = require("axios");
const mock = new MockAdapter(axios);

// const { REACT_APP_MOCK_API = true } = process.env; // not working in next js

// if (!REACT_APP_MOCK_API) {
//   mock.restore();
// }

export default mock;
