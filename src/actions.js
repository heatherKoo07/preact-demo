function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}


export default store => ({
  decrement: state => {return { count: state.count - 1 }},
  increment: state => { 
    return { count: state.count + 1 } 
  },
  delay: async state => { 
    const result = await resolveAfter2Seconds();
    console.log(result);
    return { msg: [1] } 
  },
});
