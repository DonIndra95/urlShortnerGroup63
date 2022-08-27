const redis = require("redis");

const client = redis.createClient({
  url: "redis://default:L0heTOscTdBVNsqnedJYGXuP83MEXWHx@redis-14674.c264.ap-south-1-1.ec2.cloud.redislabs.com:14674",
});

(async () => {
  await client.connect();
})();

client.on("connect", () => {
  console.log("Connected to Redis...");
});

client.on("error", (err) => console.log("Redis Client Error", err));

const SET_ASYNC = client.SET.bind(client);
const GET_ASYNC = client.GET.bind(client);
const SETEX_ASYNC = client.SETEX.bind(client);

module.exports = { SET_ASYNC, GET_ASYNC, SETEX_ASYNC };
