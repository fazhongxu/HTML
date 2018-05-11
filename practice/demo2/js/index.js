
//onload页面加载完成之后调用
window.onload = function() {
    var btn = document.getElementById("btn");
    /*
    *解锁
    */
    function unLock() {
        console.log(this);
        if (this.className == "lock") {
            this.className = "unlock";
            this.innerHTML = "已解锁";
            changeColor("#000000");
        } else if (this.className == "unlock") {
            this.className = "lock";
            this.innerHTML = "解锁";
            changeColor("#FFB6C1");
        }
    }

    function mouseOver() {
        this.className = "unlock";
        console.log(this.className);
    }

    function mouseOut() {
        this.className = "lock";
    }

    //执行点击
    btn.onclick = unLock;
    //光标经过
    //btn.onmouseover = mouseOver;
    //光标移开
    // btn.onmouseout = mouseOut;

   	var course = document.getElementById("course");
   	/*
   	 * 改变课程文字颜色
   	*/
   	function changeColor(color) {
	   	var tagNames = course.getElementsByTagName("li");
	   	console.log(tagNames);

	   	var tagNameLength = tagNames.length;
	   	for (var i = 0; i < tagNameLength; i++) {
	   		console.log(tagNames[i]);
	   		tagNames[i].style.color = color;
	   	}	
   	}

}