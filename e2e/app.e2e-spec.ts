import { PoliticsSpeechPage } from './app.po';

describe('politics-speech App', () => {
  let page: PoliticsSpeechPage;

  beforeEach(() => {
    page = new PoliticsSpeechPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
