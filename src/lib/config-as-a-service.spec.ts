import { configAsAService } from './config-as-a-service';

describe('configAsAService', () => {
  it('should work', () => {
    expect(configAsAService()).toEqual('config-as-a-service');
  });
});
