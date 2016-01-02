
function* range(start, end, step) {

  if (start === undefined) {
    throw new RangeError("Parameter cannot be undefined")
  }
  if (end === undefined) {
    end = start;
    start = 0
  }
  if (step === 0) {
    throw new RangeError("Parameter cannot be 0")
  } else if (step === undefined) {
    step = 1
  }

  let callback;
  if (step > 0) {
    callback = (i) => {
      return (i >= start) && (i < end)
    }
  } else {
    callback = (i) => {
      return (i > end) && (i <= start)
    }
  }

  let i = start

  while (callback(i)) {
    let tempValue = yield i

    if (tempValue !== undefined) {
      i = tempValue
    } else {
      i = i + step
    }
  }
}
for (var v of range(1,10,3)) {
  console.log(v)
}
