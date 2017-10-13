function justInvoke(fn){
  return this
}

function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue)
}

function setThisWithApply(fn, thisValue, args){
  return fn.apply(thisValue, [`${args}`])
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  return functionToBeCopied.bind(thisValue)
}
