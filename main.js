var sqaure_d = null;
var sq_side = null;
var sq_ans_1 = null;
var sq_ans_2 = null;
var sq_ans = [];

function Square2D(){
    console.log("2D");
    document.getElementById("2d_sqaure").style.backgroundColor="purple";
    document.getElementById("3d_sqaure").style.backgroundColor="white";
    document.getElementById("lbl_1_disclaimer").innerHTML="Sqaure =>";
    sqaure_d = true;
    sq_ans_1 = "Perimeter";
    sq_ans_2 = "Area";
}

function Sqaure3D(){
    console.log("3D");
    document.getElementById("2d_sqaure").style.backgroundColor="white";
    document.getElementById("3d_sqaure").style.backgroundColor="purple";
    console.log("changed");
    document.getElementById("lbl_1_disclaimer").innerHTML="Cube =>";
    sqaure_d = false;
    sq_ans_2 = "Surface_area";
    sq_ans_1 = "Volume";
}

function sqaureCalc(){
    console.log("Calc");
    sq_side = document.getElementById("sqaure_holder").value;
    if(sqaure_d == true){
        sq_ans.push(sq_side*4);
        sq_ans.push(sq_side*sq_side);
    }else if(sqaure_d == false){
        sq_ans.push(sq_side*sq_side*sq_side);
        sq_ans.push((sq_side*sq_side)*6);
    }
    document.getElementById("sq_0").innerHTML=sq_ans_1+" => "+sq_ans[0];
    document.getElementById("sq_1").innerHTML=sq_ans_2+" => "+sq_ans[1];
}