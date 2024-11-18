function of(){
    let ov = "I am out var"

    function innervariable(){
        console.log(ov)

    }
    return innervariable;

}
 const myClosere = of();
 myClosere();
 console.log(myClosere)