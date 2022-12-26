require("dotenv").config();
const axios = require("axios");
const schedule = require("node-schedule");
const rule = new schedule.RecurrenceRule();
rule.second = 0;
rule.tz = "Asia/Seoul";

async function test() {
  try {
    let ans = await axios.get("http://main:4000");
  } catch {
    console.log("main server is dead");
  }
  try {
    let ans = await axios.get("http://sub:4001");
  } catch {
    console.log("sub server is dead");
  }
}

const job = schedule.scheduleJob(rule, test);
