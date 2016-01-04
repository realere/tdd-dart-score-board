describe('dartboard functionality', function() {

beforeEach(function() {
  browser.ignoreSynchronization = true; // tells protractor that we're not using Angular.js
 browser.get('http://0.0.0.0:8000');

  });

it('should subtract 50 from 501 to get 451 on player1', function() {
  element(by.id('darts')).sendKeys('50');
  element(by.id('submit')).click();

  expect(element(by.css('#player1 li:last-child')).getText()).toBe('451');
});

it('should subtract 30 from 501 to get 471 on player2', function() {
  element(by.id('darts2')).sendKeys('30');
  element(by.id('submit2')).click();

  expect(element(by.css('#player2 li:last-child')).getText()).toBe('471');
});

});