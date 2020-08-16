var a = "4 1 2 3 5 6"
console.log(a.split(' ').reduce((pre,n) => pre + parseInt(n) ,0));
