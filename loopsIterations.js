//iteration level 1
let i,j,k,m;
let string ="";

for (let i=0;i<=4;i++)
{
   for (let j=1;j<=(4-i);j++)
    {
        string+="*";
    }
    
    for(let k=1;k<=i;k++)
    {
        string+=k;
    }
    
    for(let m=(i-1);m>=1;m--)
    {
        string+=m;
    }
    
    string+= "\n";
}
    console.log(string);

// iteration level 2
var n=6,sum=1;
var c;


var a = 0
var b = 1
for(let i=1;i<n;i++)
{
    
    c=a+b;    // 0+1 = 1;    
    sum+=c;
    a=b;
    b=c;
    

}

console.log(sum)


