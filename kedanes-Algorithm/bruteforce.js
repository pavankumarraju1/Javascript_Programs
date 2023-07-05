// Finding the highest sum in an array 
//eg [5,4,-1,7,8] o/p:6  subarray:[5,4,-1,7,8]
//[-2,1,-3,4,-1,2,1,-5,4] subarray:[4,-1,2,1]


function highSum(num)
{
    let maxSum=num[0];
    for(let i=0;i<num.length;i++)
    {
        currentSum=0;
        for(let j=i;j<num.length;j++)
        {
            currentSum+=num[j];
            if(currentSum>maxSum)
            {
                maxSum=currentSum;
                startidx=i;
                endidx=j;
            }
        }
    }

    return{
        sum:maxSum,
        subarray:num.slice(startidx,endidx+1)
    }
}

console.log(highSum([5,4,-1,7,8]))