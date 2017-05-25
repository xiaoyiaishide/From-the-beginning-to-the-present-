import { LearnCliPage } from './app.po';

describe('learn-cli App', function() {
  let page: LearnCliPage;

  beforeEach(() => {
    page = new LearnCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
