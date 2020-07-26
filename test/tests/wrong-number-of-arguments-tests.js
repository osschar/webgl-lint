import {gl} from '../shared.js';
import {assertThrowsWith} from '../assert.js';
import {describe, it} from '../mocha-support.js';

describe('wrong number of arguments test', () => {

  it('test wrong number of args', () => {
    assertThrowsWith(() => {
      gl.enable(gl.DEPTH_TEST, 0);  // wrong number of args
    }, [/'enable'.*?2 arguments/]);
  });

});