function create(){
   decision = confirm("Are you sure, you want to 'create' this container");
   if(decision == true){
        img = document.getElementById("c_i_name").value;
        cname = document.getElementById("c_c_name").value;
        xhr = new XMLHttpRequest();
        xhr.open('GET','http://192.168.1.3/cgi-bin/create.py?i='+img+'&n='+cname,'true');
        xhr.send();
        xhr.onload=function (){
            const output1 = xhr.responseText;
	    var output = JSON.parse(output1);
            document.getElementById("txtBox").innerHTML = output.cmd;
            //document.getElementById("injected").innerHTML = " ";
            out = output.op + "\n\n!!! Container Created !!!";
            document.getElementById("injected").innerHTML = out;
        }
   }
}

function imagepull(){
    document.getElementById("injected").innerHTML = "Just need some time to pull the image, please have patience....";
    k=document.getElementById("p_i_name").value;
    cmd="podman pull " + k;
    document.getElementById("txtBox").innerHTML = cmd;
    img = document.getElementById("p_i_name").value;
    xhr = new XMLHttpRequest();
    xhr.open('GET','http://192.168.1.3/cgi-bin/imagepull.py?i='+img,'true');
    xhr.send();
    xhr.onload=function (){
        const output1 = xhr.responseText;
	var output = JSON.parse(output1);
        document.getElementById("txtBox").innerHTML = output.cmd;
	//document.getElementById("injected").innerHTML = " ";
        document.getElementById("injected").innerHTML = output.op;
    }
 
}

function imagedel(){
    img = document.getElementById("p_i_name").value;
    xhr = new XMLHttpRequest();
    xhr.open('GET','http://192.168.1.3/cgi-bin/imagedel.py?i='+img,'true');
    xhr.send();
    xhr.onload=function (){
        const output1 = xhr.responseText;
	var output = JSON.parse(output1);
        document.getElementById("txtBox").innerHTML = output.cmd;
	//document.getElementById("injected").innerHTML = " ";
        document.getElementById("injected").innerHTML = output.op;
    }
 
}

function imagels(){
    xhr = new XMLHttpRequest();
    xhr.open('GET','http://192.168.1.3/cgi-bin/imagels.py','true');
    xhr.send();
    xhr.onload=function (){
        const output1 = xhr.responseText;
	var output = JSON.parse(output1);
        document.getElementById("txtBox").innerHTML = output.cmd;
	//document.getElementById("injected").innerHTML = " ";
        document.getElementById("injected").innerHTML = output.op;
    }
 
}

function list(){
    xhr = new XMLHttpRequest();
    xhr.open('GET','http://192.168.1.3/cgi-bin/list.py','true');
    xhr.send();
    xhr.onload=function(){
        const output1 = xhr.responseText;
	var output = JSON.parse(output1);
        document.getElementById("txtBox").innerHTML = output.cmd;
	//document.getElementById("injected").innerHTML = " ";
        document.getElementById("injected").innerHTML = output.op;
    }

}

function listall(){
    xhr = new XMLHttpRequest();
    xhr.open('GET','http://192.168.1.3/cgi-bin/listall.py','true');
    xhr.send();
    xhr.onload=function(){
        const output1 = xhr.responseText;
        var output = JSON.parse(output1);
        document.getElementById("txtBox").innerHTML = output.cmd;
        //document.getElementById("injected").innerHTML = " ";
        document.getElementById("injected").innerHTML = output.op;
    }

}

function stop(){
    decision = confirm("Are you sure, you want to 'Stop' this container");
    if(decision == true){
            cname = document.getElementById("d_c_name").value;
            xhr = new XMLHttpRequest();
            xhr.open('GET','http://192.168.1.3/cgi-bin/stop.py?n='+cname,'true');
            xhr.send();
            xhr.onload=function (){
                output1 = xhr.responseText;
		var output = JSON.parse(output1);
                document.getElementById("txtBox").innerHTML = output.cmd;
		//document.getElementById("injected").innerHTML = " ";
		out = "Container " + output.op + " Stopped"
                document.getElementById("injected").innerHTML = out;
            }
    }
}

function start(){
    decision = confirm("Are you sure, you want to 'Start' this container");
    if(decision == true){
            cname = document.getElementById("d_c_name").value;
            xhr = new XMLHttpRequest();
            xhr.open('GET','http://192.168.1.3/cgi-bin/start.py?n='+cname,'true');
            xhr.send();
            xhr.onload=function (){
                output1 = xhr.responseText;
		var output = JSON.parse(output1);
                document.getElementById("txtBox").innerHTML = output.cmd;
		//document.getElementById("injected").innerHTML = " ";
		out = "Container " + output.op + " Started"
                document.getElementById("injected").innerHTML = out;
            }
    }
}

function del(){
    decision = confirm("Are you sure, you want to 'Delete' this container");
    if(decision == true){
            cname = document.getElementById("d_c_name").value;
            xhr = new XMLHttpRequest();
            xhr.open('GET','http://192.168.1.3/cgi-bin/del.py?n='+cname,'true');
            xhr.send();
            xhr.onload=function (){
                output1 = xhr.responseText;
		var output = JSON.parse(output1);
                document.getElementById("txtBox").innerHTML = output.cmd;
		//document.getElementById("injected").innerHTML = " ";
		out = "Container " + output.op + " Deleted"
                document.getElementById("injected").innerHTML = out;
            }
    }
}

function live(){
    k=document.getElementById("live_cmd").value;
    live_cmd="sudo " + k;
    document.getElementById("txtBox").innerHTML = live_cmd;
}

function command(){
    given_cmd=document.getElementById("live_cmd").value;
    xhr = new XMLHttpRequest();
    xhr.open('GET','http://192.168.1.3/cgi-bin/command.py?n='+given_cmd,'true');
    xhr.send();
    xhr.onload=function (){
        const output1 = xhr.responseText;
	var output = JSON.parse(output1);
        document.getElementById("txtBox").innerHTML = output.cmd;
	//document.getElementById("injected").innerHTML = " ";
        document.getElementById("injected").innerHTML = output.op;
    }
 
}

function dstart(){
    document.getElementById("injected").innerHTML = "Hold for a few seconds .. .. .. .. ..";
    document.getElementById("txtBox").innerHTML = "sudo systemctl start podman";
    xhr = new XMLHttpRequest();
    state="start"
    xhr.open('GET','http://192.168.1.3/cgi-bin/podman.py?dstate='+state,'true');
    xhr.send();
    xhr.onload=function (){
        const output1 = xhr.responseText;
	var output = JSON.parse(output1);
        document.getElementById("txtBox").innerHTML = output.cmd;
	//document.getElementById("injected").innerHTML = " ";
        document.getElementById("injected").innerHTML = output.op;
    }
 
}

function dstop(){
    xhr = new XMLHttpRequest();
    state="stop"
    xhr.open('GET','http://192.168.1.3/cgi-bin/podman.py?dstate='+state,'true');
    xhr.send();
    xhr.onload=function (){
        const output1 = xhr.responseText;
	var output = JSON.parse(output1);
        document.getElementById("txtBox").innerHTML = output.cmd;
	//document.getElementById("injected").innerHTML = " ";
        document.getElementById("injected").innerHTML = output.op;
    }
 
}
