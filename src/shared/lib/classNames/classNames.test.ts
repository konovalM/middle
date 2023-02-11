import { classNames } from './classNames';

describe('classNames', () => {
    test('basic', () => {
        expect(classNames('className')).toBe('className');
    });
    test('additional', () => {
        const res = 'className';
        expect(classNames('className')).toBe(res);
    });

    test('mods', () => {
        const res = 'className class1 class2 hover disabled';
        expect(
            classNames(
                'className',
                { hover: true, disabled: true },
                ['class1', 'class2'],
            ),
        )
            .toBe(res);
    });

    test('mods false', () => {
        const res = 'className class1 class2 hover';
        expect(
            classNames(
                'className',
                { hover: true, disabled: false },
                ['class1', 'class2'],
            ),
        )
            .toBe(res);
    });

    test('mods undefined', () => {
        const res = 'className class1 class2 hover';
        expect(
            classNames(
                'className',
                { hover: true, disabled: undefined },
                ['class1', 'class2'],
            ),
        )
            .toBe(res);
    });

    test('mods 0', () => {
        const res = 'className class1 class2 hover';
        expect(
            classNames(
                'className',
                { hover: true, disabled: 0 },
                ['class1', 'class2'],
            ),
        )
            .toBe(res);
    });
});
