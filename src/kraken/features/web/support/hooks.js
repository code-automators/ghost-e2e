const { After, Before } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');
const dns = require('node:dns');

Before(async function() {
  dns.setDefaultResultOrder('ipv4first');
  this.deviceClient = new WebClient('chrome', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
})

After(async function() {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});
