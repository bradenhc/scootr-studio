import action from '../../../src/app/shared/action';

test('create action successfully', () => {
    const a = action('test', { foo: 'bar' }, false);
    expect(a).toStrictEqual({ type: 'test', payload: { foo: 'bar' }, error: false });
});
