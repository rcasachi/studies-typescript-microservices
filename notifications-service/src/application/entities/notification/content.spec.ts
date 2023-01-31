import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('You have received a friendship request!');
    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 chars', () => {
    expect(() => new Content('You!')).toThrow();
  });

  it('should not be able to create a notification content with more than 240 chars', () => {
    expect(() => new Content('A'.repeat(241))).toThrow();
  });
});
