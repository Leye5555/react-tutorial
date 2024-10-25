```javascript
const numbers = document.querySelectorAll("#root > div > span");
console.log(numbers);
document.getElementById("root").addEventListener("mousemove", (event) => {
  numbers.forEach((item) => {
    item.style.top = event.clientY + "px";
    item.style.left = event.clientX + "px";
    console.log(item);
  });
});
```
