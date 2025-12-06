 const oracledb = require('oracledb');

// Optional: enable auto commit for DML statements
oracledb.autoCommit = true;

async function getConnection() {
  return await oracledb.getConnection({
    user: "COMP214_F25_ers_65",       // your Oracle username
    password: "password",             // your Oracle password
    connectString: "199.212.26.208/SQLD" // host + SID
  });
}

module.exports = {
  getConnection,
  BIND_OUT: oracledb.BIND_OUT,
  STRING: oracledb.STRING
};
