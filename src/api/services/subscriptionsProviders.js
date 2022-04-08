const axios = require('axios');

// eslint-disable-next-line max-len
// Adding more providers here would mean that this one would have to just be extraced to its own file and imported here just so this doesnt get bloated.
class Chargebee {
  constructor() {
    const siteName = process.env.CHARGEBEE_SITE_NAME;
    // Could also store the base url in ENV
    this._baseUrl = `https://${siteName}.chargebee.com/api/v2`;
    this._apiKey = Buffer.from(process.env.CHARGEBEE_API_KEY).toString(
      'base64',
    );
  }

  async getAllCustomers() {
    const response = await axios.get(`${this._baseUrl}/customers`, {
      headers: {
        Authorization: `Basic ${this._apiKey}`,
      },
    });

    return response.data;
  }
}

module.exports = {
  chargebee: new Chargebee(),
};
