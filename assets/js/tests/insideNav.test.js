import { basePath } from "../constants/basePath.js";
import { navWatcher } from "./navWatcher.js";

describe('navWatcher', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <a class="INSIDE-NAV" href="/path1">Link 1</a>
      <a class="INSIDE-NAV" href="/path2">Link 2</a>
    `;
  });

  test('click event should navigate to basePath + parsedHref', () => {
    const newPath = '/newPath';
    const clickEvent = new MouseEvent('click', { bubbles: true });
    const link = document.querySelector('.INSIDE-NAV');
    link.dispatchEvent(clickEvent);

    expect(link.href).toBe(basePath + newPath);
  });

  // Add more tests to cover different scenarios
});
