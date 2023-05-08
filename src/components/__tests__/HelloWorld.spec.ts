import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Demo from '../demo';

describe('ComponentWrapper', () => {
  it('should render correctly', () => {
    const demo = mount(Demo);
    expect(demo.element).toBe(1);
  });
});