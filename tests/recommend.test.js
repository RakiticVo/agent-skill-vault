import test from 'node:test';
import assert from 'node:assert/strict';
import { recommendStack } from '../src/recommend.js';

test('defaults to Cubit when context is uncertain', () => {
  assert.equal(recommendStack({}).stateManagement, 'Cubit');
});

test('small simple apps can use Provider', () => {
  assert.equal(recommendStack({ size: 'small', flow: 'simple' }).stateManagement, 'Provider');
});

test('event-heavy flows use Bloc', () => {
  assert.equal(recommendStack({ flow: 'event-heavy' }).stateManagement, 'Bloc');
});

test('complex async graph uses Riverpod', () => {
  assert.equal(recommendStack({ asyncComplexity: 'complex' }).stateManagement, 'Riverpod');
});
