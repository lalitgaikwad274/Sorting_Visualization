function swap(el1, el2) {
    console.log('In swap()');
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}
async function heapify(n, i) {
    var block = document.querySelectorAll(".bar");
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;
    /*const l = parseInt(ele[left].style.height);
    const r = parseInt(ele[right].style.height);
    const m = parseInt(ele[max].style.height);*/

    if (left < n && parseInt(block[left].style.height) > parseInt(block[max].style.height)) {
        max = left;
    }

    if (right < n && parseInt(block[right].style.height) > parseInt(block[max].style.height))     {
        max = right;
    }

    if (max != i) {
        block[i].style.background = 'red';
        block[max].style.background = 'blue';
        await waitforme(delay);

        swap(block[i],block[max]);
        block[i].style.background = 'cyan';
        block[max].style.background = 'cyan';

        await heapify(n, max);
    }
}


async function heapSort() {
    console.log('In heapsort()');
    
    var ele = document.querySelectorAll(".bar");
    var n = ele.length;

    for (var i = n / 2 -1; i >= 0; i--)      {
       await heapify(n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        ele[0].style.background = 'red';
        ele[i].style.background = 'green';
        await waitforme(delay);

        swap(ele[0],ele[i]);
        //ele[0].style.background = 'cyan';      

        await heapify(i, 0);
    }
}

const heapSortbtn = document.querySelector(".heapSort");
heapSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await heapSort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});