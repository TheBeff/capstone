var mocha = require('mocha');
var expect = require('chai').expect;

function foo(){
  return 'bar';
}

function bar(){
  return 'foo';
}

describe('foo', function(){
  it ('should return bar', function(done){
    expect(foo()).to.equal('bar');
    done();
  });
});

describe('bar', function(){
  it ('should return foo', function(done){
    expect(bar()).to.equal('foo');
    done();
  });
});