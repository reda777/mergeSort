function mergeSort(arr){
    if(arr.length<2){
        return;
    }else{
        let leftArr=[];
        let rightArr=[];
        let half=(arr.length/2)>>0;
        let leftI=0;
        let rightI=0;
        let mainI=0;
        while(leftI<arr.length && rightI<arr.length-half){
            if(leftI<half){
                leftArr[leftI++]=arr[mainI++];
            }else{
                rightArr[rightI++]=arr[mainI++];
            }
        }
        mergeSort(leftArr);
        mergeSort(rightArr);
        leftI=0;
        rightI=0;
        mainI=0;
        while(leftI<leftArr.length && rightI<rightArr.length){
            arr[mainI++]=(leftArr[leftI]<rightArr[rightI])?leftArr[leftI++]:rightArr[rightI++];
        }
        if(leftI<leftArr.length){
            while(leftI<leftArr.length){
                arr[mainI++]=leftArr[leftI++];
            } 
        }else{
            while(rightI<rightArr.length){
                arr[mainI++]=rightArr[rightI++];
            }
        }
            
    }
}
let arr=[15, 18, 17, 20, 12, 9, 6, 14, 2, 3];
mergeSort(arr);
console.log(arr);

