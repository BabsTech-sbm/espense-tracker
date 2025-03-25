export function setItem(title, value) {
  return localStorage.setItem(title, JSON.stringify(value));
}

export function getItem(title) {
  return JSON.parse(localStorage.getItem(title));
} 

