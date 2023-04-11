import { dbConnection, closeConnection } from "../config/mongoConnection.js";
import * as activity from "../data/activity.js";

const db = await dbConnection();
await db.dropDatabase();

try {
  let newLog = await activity.createLog(
    550,
    "parthpanchal",
    "This is a review",
    5,
    "06/06/2021"
  );
  if (newLog) console.log("log added");
} catch (e) {
  console.log(e);
}
try {
  let newLog = await activity.createLog(
    550,
    "parthpanchal",
    "This is a review",
    5,
    "06/09/2021"
  );
  if (newLog) console.log("log added");
} catch (e) {
  console.log(e);
}
try {
  let newLog = await activity.createLog(
    550,
    "parthpanchal",
    "This is a review",
    5,
    "06/06/2021"
  );
  if (newLog) console.log("log added");
} catch (e) {
  console.log(e);
}
try {
  let newLog = await activity.createLog(
    550,
    "parthpanchal",
    "This is a review",
    5,
    "06/06/2021"
  );
  if (newLog) console.log("log added");
} catch (e) {
  console.log(e);
}
try {
  let parth = await activity.getAllLogs();
} catch (e) {
  console.log(e);
}
try {
  let parth = await activity.getLogsByUsername("parthpanchal");
  let activity_to_delete = parth[0]._id.toString();
  let change = await activity.deleteLog(activity_to_delete);
  console.log(change);
} catch (e) {
  console.log(e);
}
try {
} catch (e) {
  console.log(e);
}
try {
} catch (e) {
  console.log(e);
}

await closeConnection();
