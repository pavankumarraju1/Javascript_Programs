// Finding the highest sum in an array 
//eg [5,4,-1,7,8] o/p:6  subarray:[5,4,-1,7,8]
//[-2,1,-3,4,-1,2,1,-5,4] o/p:6 subarray:[4,-1,2,1]


function highSum(num)
{
    let sum=0;
    let maxSum=num[0];
    for(let i=0;i<num.length;i++)
    {
        sum+=num[i];
        if(sum>maxSum)
        {
            maxSum=sum;
        }
        if(sum<0)
        {
            sum=0;
        }
    }
    return maxSum;
}

console.log(highSum([5,4,-1,7,8]))