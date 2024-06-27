async function timeTaker() {
  const promise = new Promise(function (resolve) {
    setTimeout (() => {
      console.log("Waiting long enough");
    }, 1500);
  });

  const getData = await promise;
  console.log(getData);
}

timeTaker();
