import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    const birthYear = 1984;
    const currentYear = new Date().getFullYear(); // Get the current year dynamically
    const expectedAge = currentYear - birthYear; // Calculate expected age

    const ageOfPerson = currentAgeForBirthYear(birthYear);
    expect(ageOfPerson).toBe(expectedAge); // Compare with expectedAge
  });
});

