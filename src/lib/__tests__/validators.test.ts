
import { describe, it, expect } from 'vitest';
import { isEmail, isPhone } from '../validators';

describe('Validators', () => {
    describe('isEmail', () => {
        it('returns true for valid emails', () => {
            expect(isEmail('test@example.com')).toBe(true);
            expect(isEmail('user.name@domain.co.uk')).toBe(true);
        });

        it('returns false for invalid emails', () => {
            expect(isEmail('invalid-email')).toBe(false);
            expect(isEmail('test@')).toBe(false);
            expect(isEmail('@domain.com')).toBe(false);
            expect(isEmail(' ')).toBe(false);
        });
    });

    describe('isPhone', () => {
        it('returns true for valid phone numbers (9-16 digits)', () => {
            expect(isPhone('+421911275755')).toBe(true);
            expect(isPhone('0911275755')).toBe(true);
            expect(isPhone('123456789')).toBe(true);
        });

        it('returns false for too short or too long numbers', () => {
            expect(isPhone('123')).toBe(false);
            expect(isPhone('12345678')).toBe(false);
            expect(isPhone('12345678901234567')).toBe(false);
        });
    });
});
