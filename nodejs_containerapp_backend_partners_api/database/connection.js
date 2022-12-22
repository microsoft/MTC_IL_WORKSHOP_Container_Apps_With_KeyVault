const sql = require('mssql');
const { SecretClient } = require('@azure/keyvault-secrets')
const { DefaultAzureCredential, ClientSecretCredential } = require('@azure/identity')



exports.getConnection = async () => {
  // const credential = new DefaultAzureCredential();

  const credential = new ClientSecretCredential(
    process.env.azuretenantid,
    process.env.azureclientid,
    process.env.azureclientsecret
  )

  const keyVaultName = process.env["KEY_VAULT_NAME"] || 'containerappdemo'
  const url = "https://" + keyVaultName + ".vault.azure.net";

  const client = new SecretClient(url, credential);

  

  // Get Secrets 
  const dbuser = await client.getSecret('dbuser')
  const dbpassword = await client.getSecret('dbpassword');
  const dbserver = await client.getSecret('dbserver')
  const dbdatabase = await client.getSecret('dbdatabase')



  const dbSettings = {
    user: process.env.dbuser || dbuser.value,
    password: process.env.dbpassword || dbpassword.value,
    server: process.env.dbserver || dbserver.value,
    database: process.env.dbdatabase || dbdatabase.value,
    options: {
      encrypt: true, // for azure
      trustServerCertificate: true, // change to true for local dev / self-signed certs
    },
  };

  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error);
  }
};

