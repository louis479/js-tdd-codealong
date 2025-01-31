// Your code here
export function currentAgeForBirthYear(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  }
  