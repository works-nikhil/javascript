// level {1/2/3}
// level 1

arr = [1, 2, 3] 
    console.log(arr.map(it=> it+1)) // will map or iterate through the whole array


    //level 2

    // DS level 2
arr =[1, 3, 4, 6, 7, 8]

// now I have to iterate thru each and just store push all the odd numbers in a new one

var odd = []

for(let i=0;i< arr.length;i++){
    if(arr[i] % 2 !== 0)
    {
        odd.push(arr[i])
    }
}

console.log(odd)



// iteration DSA level 2
var vowelstr =""
var upr=""



    for (let char of "Elie") {
        if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u')
            {
                upr=char.toUpperCase();
                vowelstr += ""+upr;
            }
        
        else
    {
        vowelstr += ""+char
    }
    
    }
    
        
        console.log(vowelstr)
    
    // 3rd DSA
    
    var arr = [1, 3, 4, 6, 7, 8, 2, 5]
    max = 1;


for(let i=0;i< arr.length;i++){
    if(arr[i] >= max)
    {
        max= arr[i]
    }
}


console.log(max)