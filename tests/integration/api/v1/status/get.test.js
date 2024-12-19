test("GET to /api/v1/status should return 200", async () => {
  //Service Up
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  //UpdateAt definition
  const responseBody = await response.json();

  //UpdateAt format
  const parsedUpdateAt = new Date(responseBody.update_at).toISOString();
  expect(responseBody.update_at).toEqual(parsedUpdateAt);

  //PostgresVersion
  expect(responseBody.dependencies.database.version).toEqual("16.0");

  //Max Connections
  expect(responseBody.dependencies.database.max_connections).toEqual(100);

  //Opened Connections
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});
