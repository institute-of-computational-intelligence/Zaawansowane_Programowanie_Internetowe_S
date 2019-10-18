let count;
let tab:number[];
tab = [1,2,3,4,5];

function sum():void{
    count = 0;
    for(let i in tab)
    {
        count += tab[i];
    }
    console.log("suma:");
    console.log(count);

}

function sum2():void{
    count = 0;
    for(let i in tab)
    {
        if(tab[i]%2 == 0){
            count += tab[i];
        }
    }
    console.log("suma parzyste:");
    console.log(count);

}
function wiekszOd(a:number):void{
    count = 0;
    for(let i in tab)
    {
        if(tab[i]>a){
            count += tab[i];
        }
    }
    console.log("suma liczb większych od: " + a );
    console.log(count);
}

function sum3(){
    let tab2:string[] = ["2","a","b","6","c"];
    count = 0;
    
    for(let i in tab2)
    {
        let num = Number(tab2[i]);
        
        if(!isNaN(num))
        {
            count+= num;
        }
    }
    console.log("suma liczb:");
    console.log(count);
}


sum();
sum2();
wiekszOd(2);
sum3();
