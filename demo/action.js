function add(index, num) {
  return {
    type: index === 1 ? 'add1' : 'add2',
    number: num,
  }
}

export function click(index) {
  return add(index, 1);
}

export function change(index, text) {
  return {
    type: index === 1 ? 'change1' : 'change2',
    text: text + '',
  }
}

export function enter(index, num) {
  return add(index, num);
}