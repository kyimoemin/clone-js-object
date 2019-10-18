
const cloneObj = obj => {
  let tmp = {};
  for(let key in obj)
    if(typeof obj[key] === "object")
      tmp[key]=cloneObj(obj[key]);
    else
      tmp[key] = obj[key];
  return {...tmp};
}


test = ()=> {
  a={b:1,c:2,d:{e:3,f:{g:"a"}}}
  b=cloneObj(a);
  b.d.e=6;
  b.d.f.g=1;
  if(a.d.e===3)
    console.log("success");
  else
    console.log("fail")
  
  if(a.d.f.g==="a") console.log("success")
}

test();
