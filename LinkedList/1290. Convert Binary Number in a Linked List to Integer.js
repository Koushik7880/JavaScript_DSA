var getDecimalValue = function(head) {
    let current = head.next
let result = head.val
while (current) {
  result = result * 2 + current.val
  current = current.next
}
return result
};

console.log(getDecimalValue([0,0]));