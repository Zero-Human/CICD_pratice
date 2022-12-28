import { serverStart, serverStop } from "../src/server";
import axios from "axios";
describe("통합 테스트", () => {
  let server;
  beforeAll(async () => {
    server = serverStart();
    request = axios.create({
      baseURL: `http://localhost:8000`,
      validateStatus: null,
    });
  });
  afterAll(async () => {
    await serverStop(server);
  });
  it("returns 200 성공했을 때", async () => {
    const response = await request.get("/");
    expect(response.data).toBe("Hello from the server!");
  });
});
