function max(iterable, key) {
    var maximum = 0;
    for (var item in iterable) {
      var temp = key(item);
      if (temp >= maximum) {
        maximum = temp;
      }
    }
    return maximum;
  }

  const reverser = (item) => -item

  function changer(object, key, value) {
    var prev = JSON.parse(object)[key];
    if (Array.isArray(prev)) {
      prev.push(value);
    } else if (typeof prev == 'object' && prev != null) {
      prev = changer(prev, key, value);
    } else {
      prev = value;
    }
    return null;
  }

  async function promise_me(truthy) {
    const a = new Promise((resolve, reject) => {
        console.log(1)
    })
    console.log(2)
    console.log(3)
    console.log(4)
    const five = a.then(() => console.log(5))
    console.log(five)
    return five
}