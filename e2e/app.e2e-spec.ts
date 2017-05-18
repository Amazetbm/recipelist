import { RecipelistPage } from './app.po';

describe('recipelist App', () => {
  let page: RecipelistPage;

  beforeEach(() => {
    page = new RecipelistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
