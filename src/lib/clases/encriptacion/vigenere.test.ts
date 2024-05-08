import { test, expect } from 'vitest'
import { generateVigenereKey, vigenereCipher } from './utils'

test('generateVigenereKey generates a key of the correct length', () => {
  const mensaje = 'COMOESTAS'
  const llave = 'BIEN'
  const expectedKey = 'BIENBIENB'
  expect(generateVigenereKey(mensaje, llave)).toBe(expectedKey);
})

test('vigenereCipher encrypts a message correctly', () => {
  const mensaje = 'COMOESTAS'
  const vigenereKey = 'BIENBIENB'
  const expectedCiphertext = 'DWQBFAXNT'
  const actualCiphertext = vigenereCipher(mensaje, vigenereKey)
  expect(actualCiphertext).toBe(expectedCiphertext)
})