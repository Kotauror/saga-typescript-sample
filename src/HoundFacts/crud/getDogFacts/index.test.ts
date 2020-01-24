import getDogFacts from '.';
import * as request from '../../../Request';

describe('getDogFacts', () => {
  afterAll(() => jest.restoreAllMocks());

  it('makes the get dog facts request', () => {
    const doRequest = jest
      .spyOn(request, 'doRequest')
      .mockImplementation(jest.fn());
      getDogFacts();

    expect(doRequest).toHaveBeenCalledWith({
      path: 'api/breeds/list/all',
    });
  });
});
