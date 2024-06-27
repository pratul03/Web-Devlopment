function pyramid(row){
    for(i=1;i<=row;i++){
        for(j=1;j<=i;j++){
            process.stdout.write("*");
        }
        console.log()
    }
}
pyramid(5)

function pyramidReverse(row){
    for(i=row;i>0;i--){
        for(j=i;j>0;j--){
            process.stdout.write("*");
        }
        console.log()
    }
}
pyramidReverse(5)