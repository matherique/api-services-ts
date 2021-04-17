import request from "supertest";

import app from "../../app";
import { createTypeormConnection } from "../../config/database";
import { buildUser } from "../utils";

describe("Session Teste", () => {
  beforeAll(async () => {
    await createTypeormConnection();
  });

  it("should list all users", () => {
    request(app)
      .get("/usuario")
      .expect(200)
      .then(({ body }) => {
        expect(body).toEqual([]);
      });
  });

  it("should create new user", () => {
    const newUser = buildUser();
    request(app)
      .post("/usuario")
      .send(newUser)
      .expect(200)
      .then(({ body }) => {
        expect(body).toEqual(newUser);
      });
  });
});
