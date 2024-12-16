import { describe, it, expect } from 'vitest';
import { isValidateEmail, isValidatePassword, isValidate } from '../utils/validation';

describe('Validation Functions', () => {
  describe('isValidateEmail', () => {
    it('returns true for valid email', () => {
      expect(isValidateEmail('test@example.com')).toBe(true);
    });

    it('returns false for invalid email', () => {
      expect(isValidateEmail('invalid-email')).toBe(false);
    });
  });

  describe('isValidatePassword', () => {
    it('returns true for valid password', () => {
      expect(isValidatePassword('Password123!')).toBe(true);
    });

    it('returns false for password without uppercase letter', () => {
      expect(isValidatePassword('password123!')).toBe(false);
    });

    it('returns false for password without lowercase letter', () => {
      expect(isValidatePassword('PASSWORD123!')).toBe(false);
    });

    it('returns false for password without number', () => {
      expect(isValidatePassword('Password!')).toBe(false);
    });

    it('returns false for password without special character', () => {
      expect(isValidatePassword('Password123')).toBe(false);
    });

    it('returns false for password with less than 8 characters', () => {
      expect(isValidatePassword('Pass1!')).toBe(false);
    });
  });

  describe('isValidate', () => {
    it('returns no errors for valid email and password', () => {
      const result = isValidate('test@example.com', 'Password123!');
      expect(result).toEqual({
        emailError: '',
        passwordError: '',
        confirmPasswordError: '',
        isValid: true,
      });
    });

    it('returns email error for invalid email', () => {
      const result = isValidate('invalid-email', 'Password123!');
      expect(result).toEqual({
        emailError: 'Email không hợp lệ',
        passwordError: '',
        confirmPasswordError: '',
        isValid: false,
      });
    });

    it('returns password error for invalid password', () => {
      const result = isValidate('test@example.com', 'short');
      expect(result).toEqual({
        emailError: '',
        passwordError: 'Mật khẩu phải chứa ít nhất 8 ký tự, 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt',
        confirmPasswordError: '',
        isValid: false,
      });
    });

    it('returns confirm password error when passwords do not match', () => {
      const result = isValidate('test@example.com', 'Password123!', 'DifferentPassword123!');
      expect(result).toEqual({
        emailError: '',
        passwordError: '',
        confirmPasswordError: 'Mật khẩu không khớp',
        isValid: false,
      });
    });

    it('returns no errors for valid email, password, and matching confirm password', () => {
      const result = isValidate('test@example.com', 'Password123!', 'Password123!');
      expect(result).toEqual({
        emailError: '',
        passwordError: '',
        confirmPasswordError: '',
        isValid: true,
      });
    });
  });
});