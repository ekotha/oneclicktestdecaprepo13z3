describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("opens the index page", () => {
    cy.get("h1").contains("Great coffee with a conscience");
  });

  it("navigates to the product page", () => {
    cy.get('a[href="/products"]').eq(0).click();
    cy.url().should("include", "/products");
    cy.get("h1").contains(/Our Coffee/i);
  });

  it("navigates to the values page", () => {
    cy.get('a[href="/values"]').eq(0).click();
    cy.url().should("include", "/values");
    cy.get("h1").contains(/Values/i);
  });

  it("navigates to the blog page", () => {
    cy.get('a[href="/post"]').eq(0).click();
    cy.url().should("include", "/post");
    cy.get("h1").contains(/Latest Stories/i);
  });
});

describe("validate blog", () => {
  it("should have at least 1 blog post", () => {
    cy.visit("/post");
    cy.get("ul#blog-list li").should("have.length.gte", 1);
  });
});
