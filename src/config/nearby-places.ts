/**
 * Named places and miles supplied for Heritage at Stonebridge on 2026-10-11.
 * Miles are distances, not drive times. Schools have names only: no mileage
 * was supplied, and this file does not rate schools.
 * Two Olive Garden rows are kept because both distances were supplied.
 */
export const NEARBY_PLACES_AS_OF = "2026-10-11";

export type NamedPlace = {
  name: string;
  miles?: number;
};

export const nearbySchools: ReadonlyArray<NamedPlace> = [
  { name: "Vassiliadis, Billy & Rosemary" },
  { name: "Rogich Sig" },
  { name: "Palo Verde" },
];

export const nearbyRestaurants: ReadonlyArray<NamedPlace> = [
  { name: "Hash House A Go Go West Sahara", miles: 7.7 },
  { name: "The Cheesecake Factory", miles: 4.9 },
  { name: "Las Vegas Mini Grand Prix Family Fun Center", miles: 7.7 },
  { name: "Buca di Beppo Italian Restaurant", miles: 6.8 },
  { name: "Olive Garden Italian Restaurant", miles: 8.4 },
  { name: "Pinkbox Doughnuts", miles: 7.1 },
  { name: "The Original Pancake House", miles: 5.5 },
  { name: "Olive Garden Italian Restaurant", miles: 2.5 },
  { name: "Jamms Restaurant Breakfast and Lunch", miles: 7.3 },
];

export const nearbyServices: ReadonlyArray<NamedPlace> = [
  { name: "Supermarket", miles: 1.5 },
  { name: "Post Office", miles: 1.5 },
  { name: "Police Station", miles: 2.5 },
  { name: "ATM", miles: 1.4 },
  { name: "Coffee", miles: 1.4 },
  { name: "Pharmacy", miles: 1.5 },
  { name: "Fire Station", miles: 2.0 },
  { name: "Gas", miles: 1.4 },
  { name: "Gym", miles: 2.5 },
  { name: "Hospital", miles: 1.5 },
  { name: "Cleaners", miles: 1.5 },
  { name: "Movie Theater", miles: 2.4 },
];

export const nearbyOutdoor: ReadonlyArray<NamedPlace> = [
  { name: "Red Rock Canyon National Conservation Area", miles: 4.2 },
  { name: "Majestic Park", miles: 6.1 },
  { name: "Spring Mountain Ranch State Park", miles: 7.0 },
  { name: "Ed Fountain Park", miles: 9.9 },
  { name: "Doc Romeo Park", miles: 7.7 },
  { name: "W. Wayne Bunker Family Park", miles: 8.5 },
];

export function formatMiles(miles: number): string {
  return `${miles.toFixed(1)} miles away`;
}
