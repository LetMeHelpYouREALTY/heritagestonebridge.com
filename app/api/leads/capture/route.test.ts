import { describe, it, expect } from "vitest";
import { POST } from "./route";

describe("POST /api/leads/capture", () => {
  it("returns 410 because HTML lead capture is disabled", async () => {
    const request = new Request("http://localhost:3000/api/leads/capture", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "test@example.com" }),
    });

    const response = await POST(request);
    expect(response.status).toBe(410);

    const body = await response.json();
    expect(body.error).toContain("disabled");
  });
});
