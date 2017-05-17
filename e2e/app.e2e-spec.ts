import { Nganimation3Page } from './app.po';

describe('nganimation3 App', () => {
  let page: Nganimation3Page;

  beforeEach(() => {
    page = new Nganimation3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
