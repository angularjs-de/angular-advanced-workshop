import { AngularWorkshopPage } from './app.po';

describe('angular-workshop App', () => {
  let page: AngularWorkshopPage;

  beforeEach(() => {
    page = new AngularWorkshopPage();
  });

  it('should be a11y conform', (done) => {
    page.a11y((results)  => {
      expect(results.violations.length).toBe(0);
      done();
    });
  });
});
