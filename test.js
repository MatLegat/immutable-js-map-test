const MAX_ITERATIONS = 5000000

function testMatrix() {
  let start = new Date().getTime()

  let matrix = new Array(15)
  for (i = 0; i < 15; i++) {
    matrix[i] = new Array(15).fill(0)
  }

  for (let i = 0; i < MAX_ITERATIONS; i++) {
    let x = Math.floor((Math.random() * 15))
    let y = Math.floor((Math.random() * 15))
    let newValue = Math.random() * 1e10
    let oldValue = matrix[x][y]
    let newMatrix = replicateAndSet(matrix, x, y, newValue)
    if (matrix[x][y] !== oldValue) { alert('ERROR: Old matrix modified') }
    if (newMatrix[x][y] !== newValue) { alert('ERROR: New matrix not modified') }
    matrix = newMatrix
  }

  let end = new Date().getTime()
  alert('Matrix test took ' + (end - start) + 'ms');
  console.log(matrix)
}

function replicateAndSet(matrix, x, y, value) {
  let newMatrix = []
  for (let i = 0; i < matrix.length; i++) {
    newMatrix[i] = matrix[i].slice()
  }
  newMatrix[x][y] = value
  return newMatrix
}

function testMap() {
  let start = new Date().getTime()

  let emptyMapObj = {}
  for (i=0; i<15; i++)
  for (j=0; j<15; j++) {
    let key = formatKey(i,j)
    emptyMapObj[key] = 0
  }
  let map = new Immutable.Map(emptyMapObj)

  for (let i = 0; i < MAX_ITERATIONS; i++) {
    let x = Math.floor((Math.random() * 15))
    let y = Math.floor((Math.random() * 15))
    let key = formatKey(x, y)
    let newValue = Math.random() * 1e10
    let oldValue = map.get(key)
    let newMap = map.set(key, newValue)
    if (map.get(key) !== oldValue) { alert('ERROR: Old matrix modified') }
    if (newMap.get(key) !== newValue) { alert('ERROR: New matrix not modified') }
    map = newMap
  }

  let end = new Date().getTime()
  alert('Immutable map test took ' + (end - start) + 'ms');
  console.log(map)
}

function formatKey(x, y) {
  let len = 2
  return this.fixLength(x, len) + this.fixLength(y, len)
}

function fixLength(num, length) {
  num = num.toString()
  while (num.length < length) {
    num = '0' + num
  }
  return '.' + num
}
