// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code
/*
// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));

*/

// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
    getInstruction('mashedPotatoes', 1, (step0) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
        getInstruction('mashedPotatoes', 2, (step0) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
            getInstruction('mashedPotatoes', 3, (step0) => {
                document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
                getInstruction('mashedPotatoes', 4, (step0) => {
                    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`

                    document.getElementById('mashedPotatoesImg').removeAttribute('hidden')
                });
            });
        });
    });
});

// Iteration 2 - using promises
obtainInstruction('steak', 0)
    .then((step0) => {
        document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
        obtainInstruction('steak', 1)
            .then((step0) => {
                document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
                obtainInstruction('steak', 2)
                    .then((step0) => {
                        document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
                        obtainInstruction('steak', 3)
                            .then((step0) => {
                                document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
                                obtainInstruction('steak', 4)
                                    .then((step0) => {
                                        document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
                                        obtainInstruction('steak', 5)
                                            .then((step0) => {
                                                document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
                                                obtainInstruction('steak', 6)
                                                    .then((step0) => {
                                                        document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
                                                        obtainInstruction('steak', 7)
                                                            .then((step0) => {
                                                                document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
                                                                document.querySelector('#steak > li:nth-child(9)').innerText = 'Steak is ready!';
                                                                document.getElementById('steakImg').removeAttribute('hidden')
                                                            })
                                                    })
                                            })
                                    })
                            })
                    })
            })
    })


// Iteration 3 using async/await
async function makeBroccoli() {
    let broccoli = await obtainInstruction('broccoli', 0)
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli}</li>`
    broccoli = await obtainInstruction('broccoli', 1)
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli}</li>`
    broccoli = await obtainInstruction('broccoli', 2)
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli}</li>`
    broccoli = await obtainInstruction('broccoli', 3)
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli}</li>`
    broccoli = await obtainInstruction('broccoli', 4)
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli}</li>`
    broccoli = await obtainInstruction('broccoli', 5)
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli}</li>`
    broccoli = await obtainInstruction('broccoli', 6)
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli}</li>`
    document.getElementById('broccoliImg').removeAttribute('hidden')
}

makeBroccoli();
// Bonus 2 - Promise all

