//Written by Nabanita Maji and Cliff Shaffer
/*global ODSA, setPointerL */
"use strict";
$(document).ready(function () {
  var av_name = "circuitSATCON";
  // Load the config object with interpreter and code created by odsaUtils.js

    $(".avcontainer").on("jsav-message" ,  function() {
      // invoke MathJax to do conversion again
      MathJax.Hub.Queue(["Typeset" , MathJax.Hub]);
    });
    $(".avcontainer").on("jsav-updatecounter" ,  function(){
      // invoke MathJax to do conversion again 
     MathJax.Hub.Queue(["Typeset" , MathJax.Hub]); });

  var config = ODSA.UTILS.loadConfig({"av_name": av_name}),
      interpret = config.interpreter,       // get the interpreter
      code = config.code;                   // get the code object
  var av = new JSAV(av_name);

    var x,y,r,label1,label2,label3; 
    var gatelabel = new Array(7);

    
    av.umsg("<br><b>Introduction to Circuit Satisfiability </b> ");
    var nl1= av.label("This slideshow introduces"+
" and explains the \"Circuit Satisfiability\" Problem."
+"</b> <br><br><br> We start with some definitions  and background.",{top:0,left:0});


    av.displayInit(); 

    av.step();
    nl1.hide();
    av.umsg("<br><b> Background </b>");
    nl1=av.label("A boolean value is a value drawn from the set {T, F}, <br>where $F$ represents"
+" FALSE and $T$ represents TRUE",{top:-10,left:0}); 

 
    var nl2=av.label("A boolean combinational element is any circuit "+
"element that has a constant number of boolean inputs <br>and outputs and "+
"that performs a well-defined function.",{top:60,left:0}); 
    av.step(); 
    nl1.hide();
    nl2.hide();


   var nl3=av.label("The boolean combinational elements used in Circuit"+
" Satisfiability Problem are known as <b>Logic Gates<b/>.",{top:-10,left:0});

    var nl4=av.label("The Logic Gates used for Circuit Satisfibiality "+
"problem are <b>AND</b> (represented by symbol '$.$'),<br> <b>OR</b> (represented "+
"by symbol '$+$') and <b>NOT</b> (represented by a bar '$\\overline{\\ \\ \\ }$').",{top:30,left:0});


    nl1=av.label("<b>The Truth Table for Logic Gates</b>",{top:90});

    var board = newCircuit();

    x=150, y=150, r=25;

    var notgate = board.addGate(av,"not",x,y+20,r);

  //  notgate.css({"fill":"SlateBlue","opacity":0.75});

    label1 = av.label("The NOT gate",{left:x-50,top:y+50}); 
    var data1 = [["$x$","$\\overline{x}$ "],
                 [" T "," F "],
                 [" F "," T "]]; 
    var table1 = new av.ds.matrix(data1,{style:"table",left:x-40,top:y+100,});

    for(var i=0;i<3;i++)
        table1.css(0,i,{"background-color":"Silver"});

    x+=225;

    label2 = av.label("The AND gate",{left:x-50,top:y+50}); 
    var data2 = [[" $x$ ","$y$ "," $x.y$ "],
                 [" T "," T "," T "], 
                 [" T "," F "," F "],
                 [" F "," T "," F "],
                 [" F "," F "," F "]];
    var table2 = new av.ds.matrix(data2,{style:"table",left:x-50,top:y+100});

    for(var i=0;i<3;i++)
        table2.css(0,i,{"background-color":"Silver"});


    var andgate = board.addGate(av,"and",x,y+20,r);
//    andgate.css({"fill":"SlateBlue","opacity":0.75});

    x+=225;

    label3 = av.label("The OR gate",{left:x-50,top:y+50}); 
    var data3 = [[" $x$ "," $y$"," $x$+$y$ "],
                 [" T "," T "," T "],
                 [" T "," F "," T "],
                 [" F "," T "," T "],
                 [" F "," F "," F "]]; 
    var table3 = new av.ds.matrix(data3,{style:"table",left:x-50,top:y+100});

    for(var i=0;i<3;i++)
        table3.css(0,i,{"background-color":"Silver"});

    var orgate = board.addGate(av,"or",x,y+20,r);
    //orgate.css({"fill":"SlateBlue","opacity":0.75});

    av.step(); 

    label1.hide(); label2.hide(); label3.hide(); 
    table1.hide();table2.hide(); table3.hide(); 
    board.clearGate(orgate); board.clearGate(notgate);board.clearGate(andgate); 
    nl3.hide();
    nl4.hide();
    nl1.hide();

    av.umsg("<br><b>Boolean Combinatorial Circuits</b>");
    nl1=av.label("A boolean combinational circuit consists of one or more "+
"boolean combinational elements <br> interconnected by <b>wires</b>."
,{top:-10,left:0}); 

    nl2=av.label("A wire can connect the output of one element to the "+
"input of another, thereby providing the output <br>value of the first element as "
+"an input value of the second.",{top:70,left:0}); 
 
    nl3=av.label("If a wire is not connected to as input to any element"+
", it is called the <b>circuit output</b>. <br><br>For defining a circuit "+
"satisfiability problem, the number of circuit outputs is limited to <b>1</b>"
+"<br><br> The next slide shows an example circuit.",
{top:150,left:0}); 

    av.step(); 
    nl1.hide();
    nl2.hide();
    nl3.hide();

    av.umsg("<br><b>Example Circuit</b>"); 
    x = 100; y = 20; r = 25;

    var x1pos = [x-50,y-0.4*r]; 
    var x2pos = [x-50,y+0.4*r]; 
    var x3pos = [x-50,y+150];

    board.addSignals(["x1","x2","x3"]); 
    var xlabel1 = av.label("x1",{left:20,top:-15}); 
    var xlabel2 = av.label("x2",{left:20,top:5});
    var xlabel3 = av.label("x3",{left:20,top:y+125}); 

    var gate1=board.addGate(av,"not",x,y+150,r); 
    gatelabel[0] = av.label("A",{left:x-7,top:y+125});

    x+=100;
    var gate2=board.addGate(av,"or",x,y,r); 
    gatelabel[1] = av.label("B",{left:x-7,top:y-25});

    x+=50; 
    var gate3=board.addGate(av,"not",x,y+75,r); 
    gatelabel[2] = av.label("C",{left:x-7,top:y+50});

    var gate4=board.addGate(av,"and",x,y+150,r); 
    gate4.input[1].show();
    gate4.input[1].removeClass("invisible"); 
    gatelabel[3] = av.label("D",{left:x-7,top:y+125});

    x+=100; 
    var gate5=board.addGate(av,"or",x,y+37,r); 
    gatelabel[4] = av.label("E",{left:x-7,top:y+12});

    var gate6=board.addGate(av,"or",x,y+112,r); 
    gatelabel[5] = av.label("F",{left:x-7,top:y+87});

    x+=100; 
    var gate7=board.addGate(av,"and",x,y+75,r); 
    gatelabel[6] = av.label("G",{left:x-7,top:y+50});


  //connect gates
    board.inputToGate(av,"x1",x1pos,gate2,0,[]);
    board.inputToGate(av,"x1",x1pos,gate4,0,[[x1pos[0]+100,x1pos[1]],
[x1pos[0]+100,y+150-0.4*r]]);
    var bp1 = board.addBranchPoint(av,x1pos[0]+100,x1pos[1]);
    board.inputToGate(av,"x2",x2pos,gate4,2,[[x2pos[0]+110,x2pos[1]],
[x2pos[0]+110,y+150+0.4*r]]);
    var bp2 = board.addBranchPoint(av,x2pos[0]+110,x2pos[1]);
    board.inputToGate(av,"x2",x2pos,gate2,2,[]);
    board.inputToGate(av,"x3",x3pos,gate1,0,[]); 

    board.connectGates(av,gate1,gate4,1,[]);
    board.connectGates(av,gate1,gate3,0,[[x3pos[0]+120,x3pos[1]],
[x1pos[0]+120,y+75]]);
    var bp3 = board.addBranchPoint(av,x3pos[0]+120,x3pos[1]);
  
    var startpt = gate2.endpoints[gate2.endpoints.length - 1].slice(0); 
    var endpt = gate5.endpoints[0].slice(0); 
    board.connectGates(av,gate2,gate5,0,[[(endpt[0] + startpt[0])/2,
startpt[1]],[(endpt[0] + startpt[0])/2,endpt[1]]]); 

    startpt = gate3.endpoints[gate3.endpoints.length - 1].slice(0);

    endpt = gate5.endpoints[2].slice(0);
    board.connectGates(av,gate3,gate5,2,[[(endpt[0] + startpt[0])/2,
startpt[1]],[(endpt[0] + startpt[0])/2,endpt[1]]]); 
    var bp4 = board.addBranchPoint(av,(endpt[0] + startpt[0])/2,startpt[1]);
    endpt = gate6.endpoints[0].slice(0);
    board.connectGates(av,gate3,gate6,0,[[(endpt[0] + startpt[0])/2,
startpt[1]],[(endpt[0] + startpt[0])/2,endpt[1]]]); 

    startpt = gate4.endpoints[gate4.endpoints.length - 1].slice(0); 
    endpt = gate6.endpoints[2].slice(0);

    board.connectGates(av,gate4,gate6,2,[[(endpt[0] + startpt[0])/2,
startpt[1]],[(endpt[0] + startpt[0])/2,endpt[1]]]); 

    startpt = gate6.endpoints[gate6.endpoints.length - 1].slice(0); 
    endpt = gate7.endpoints[2].slice(0);

    board.connectGates(av,gate6,gate7,2,[[endpt[0],startpt[1]]]); 

    startpt = gate5.endpoints[gate5.endpoints.length - 1].slice(0); 
    endpt = gate7.endpoints[0].slice(0);

    board.connectGates(av,gate5,gate7,0,[[endpt[0],startpt[1]]]); 
  

    av.step(); 
    av.umsg("<br><b>Numbering the inputs and outputs<b>"); 
    nl1 = av.label("We number the input and output wires to be able to refer to them"
+" in the later slides.",{top:250});
    var numlabels =new Array(10);

    numlabels[0] = av.label("1",{left:75,top:-25}).css({color:"blue"});
    numlabels[1] = av.label("2",{left:100,top:-5}).css({color:"blue"}); 
    numlabels[2] = av.label("3",{left:50,top:135}).css({color:"blue"}); 
    numlabels[3] = av.label("4",{left:135,top:135}).css({color:"blue"}); 
    numlabels[4] = av.label("5",{left:235,top:-15}).css({color:"blue"}); 
    numlabels[5] = av.label("6",{left:283,top:60}).css({color:"blue"}); 
    numlabels[6] = av.label("7",{left:275,top:135}).css({color:"blue"}); 
    numlabels[7] = av.label("8",{left:385,top:22}).css({color:"blue"}); 
    numlabels[8] = av.label("9",{left:385,top:95}).css({color:"blue"}); 
    numlabels[9] = av.label("10",{left:490,top:70}).css({color:"blue"});

    av.step();
    nl1.hide();
    av.umsg("<br><b>Tabular representation of the circuit</b>"); 
    nl1=av.label("We also present an alternate representation of the circuit"+
" in <br>tabular form which will be used to explain propagation of signals.",{top:200});
    var cdata = [[" ","$A^{\\overline{\\ \\ \\ \\ }}$","$B+$",
"$C^{\\overline{\\ \\ \\ \\ }}$","$D\\ .$","$E+$","$F+$","$G\\ .$"], 
                 ["1"," "," "," "," "," "," "," "],
                 ["2"," "," "," "," "," "," "," "], 
                 ["3"," "," "," "," "," "," "," "], 
                 ["4"," "," "," "," "," "," "," "], 
                 ["5"," "," "," "," "," "," "," "], 
                 ["6"," "," "," "," "," "," "," "], 
                 ["7"," "," "," "," "," "," "," "], 
                 ["8"," "," "," "," "," "," "," "], 
                 ["9"," "," "," "," "," "," "," "]];

    var ctable = new av.ds.matrix(cdata,{style:"table",left:x+80,top:y+80,});    

    for(var i=0;i<8;i++)
        ctable.css(0,i,{"background-color":"Silver"});

    av.step(); 
    nl1.hide();
    label1= av.label("The table has a row for each input wire"
+" and a column for each gate",{left:10,top:230});  
    label2= av.label("Each item in the column header contains the name <br>and the "
+"type of the gate. <br><br>For example '$A^{\\overline{\\ \\ \\ \\ }}$' indicates "+
"that <br>the gate labelled as 'A' "+
"is of type 'NOT'.",{left:10,top:260}); 

    av.step();

    label1.hide(); label2.hide();

    label1= av.label("We now show how to populate the table starting with  Gate A ",{left:10,top:230});  
    label2= av.label("As input signal 3 passes through Gate A, wire 4 carries "
+"the output. <br>Hence the cell under input wire 3 and gate A is "
+"assigned the value 4",{left:10,top:260});  

    gate1.css({fill:"SlateBlue",opacity:"0.5"});
    ctable.css(0,1,{"background-color":"SlateBlue",opacity:"0.5"});
    ctable.css(3,0,{"background-color":"SlateBlue",opacity:"0.5"});
    ctable.css(3,1,{"background-color":"Tan",opacity:"0.5"}); 
    ctable.value(3,1,"4");

    av.step();

    label1.hide(); label2.hide();
    label1= av.label("Populating the table for Gate B",{left:10,top:250});  

    gate1.css({fill:"none",opacity:"1"});
    ctable.css(0,1,{"background-color":"Silver",opacity:"1"});
    ctable.css(3,0,{"background-color":"White",opacity:"1"});
    ctable.css(3,1,{"background-color":"White",opacity:"1"});

    gate2.css({fill:"SlateBlue",opacity:"0.5"});
    ctable.css(0,2,{"background-color":"SlateBlue",opacity:"0.5"});
    ctable.css(1,0,{"background-color":"SlateBlue",opacity:"0.5"});
    ctable.css(2,0,{"background-color":"SlateBlue",opacity:"0.5"});
    ctable.css(1,2,{"background-color":"Tan",opacity:"0.5"});
    ctable.css(2,2,{"background-color":"Tan",opacity:"0.5"}); 
    ctable.value(1,2,"5");
    ctable.value(2,2,"5");

    av.step();

    label1.hide(); 
    label1= av.label("Populating the table for Gate C",{left:10,top:250});  

    gate2.css({fill:"none",opacity:"1"});
    ctable.css(0,2,{"background-color":"Silver",opacity:"1"});
    ctable.css(1,0,{"background-color":"White",opacity:"1"});
    ctable.css(2,0,{"background-color":"White",opacity:"1"});
    ctable.css(1,2,{"background-color":"White",opacity:"1"});
    ctable.css(2,2,{"background-color":"White",opacity:"1"});

    gate3.css({fill:"SlateBlue",opacity:"0.5"});
    ctable.css(0,3,{"background-color":"SlateBlue",opacity:"0.5"});
    ctable.css(4,0,{"background-color":"SlateBlue",opacity:"0.5"});
    ctable.css(4,3,{"background-color":"Tan",opacity:"0.5"});
    ctable.value(4,3,"6");

    av.step();

    label1.hide(); 
    label1= av.label("Populating the table for Gate D",{left:10,top:250});  

    gate3.css({fill:"none",opacity:"1"});
    ctable.css(0,3,{"background-color":"Silver",opacity:"1"});
    ctable.css(4,0,{"background-color":"White",opacity:"1"});
    ctable.css(4,3,{"background-color":"White",opacity:"1"});


    gate4.css({fill:"SlateBlue",opacity:"0.5"});
    ctable.css(0,4,{"background-color":"SlateBlue",opacity:"0.5"});
    ctable.css(1,0,{"background-color":"SlateBlue",opacity:"0.5"});
    ctable.css(2,0,{"background-color":"SlateBlue",opacity:"0.5"});
    ctable.css(4,0,{"background-color":"SlateBlue",opacity:"0.5"});
    ctable.css(1,4,{"background-color":"Tan",opacity:"0.5"});
    ctable.css(2,4,{"background-color":"Tan",opacity:"0.5"});
    ctable.css(4,4,{"background-color":"Tan",opacity:"0.5"}); 
    ctable.value(1,4,"7");
    ctable.value(2,4,"7");
    ctable.value(4,4,"7");

    av.step();

    label1.hide(); 
    label1= av.label("Populating the table for Gate E",{left:10,top:250});  

    gate4.css({fill:"none",opacity:"1"});
    ctable.css(0,4,{"background-color":"Silver",opacity:"1"});
    ctable.css(1,0,{"background-color":"White",opacity:"1"});
    ctable.css(2,0,{"background-color":"White",opacity:"1"});
    ctable.css(4,0,{"background-color":"White",opacity:"1"});
    ctable.css(1,4,{"background-color":"White",opacity:"1"});
    ctable.css(2,4,{"background-color":"White",opacity:"1"});
    ctable.css(4,4,{"background-color":"White",opacity:"1"});

    gate5.css({fill:"SlateBlue",opacity:"0.5"});
    ctable.css(0,5,{"background-color":"SlateBlue",opacity:"0.5"});
    ctable.css(5,0,{"background-color":"SlateBlue",opacity:"0.5"});
    ctable.css(6,0,{"background-color":"SlateBlue",opacity:"0.5"});
    ctable.css(5,5,{"background-color":"Tan",opacity:"0.5"});
    ctable.css(6,5,{"background-color":"Tan",opacity:"0.5"});
    ctable.value(5,5,"8");
    ctable.value(6,5,"8");
 
    av.step();

    label1.hide();
    label1= av.label("Populating the table for Gate F",{left:10,top:250});  
 
    gate5.css({fill:"none",opacity:"1"});
    ctable.css(0,5,{"background-color":"Silver",opacity:"1"});
    ctable.css(5,0,{"background-color":"White",opacity:"1"});
    ctable.css(6,0,{"background-color":"White",opacity:"1"});
    ctable.css(5,5,{"background-color":"White",opacity:"1"});
    ctable.css(6,5,{"background-color":"White",opacity:"1"});

    gate6.css({fill:"SlateBlue",opacity:"0.5"});
    ctable.css(0,6,{"background-color":"SlateBlue",opacity:"0.5"});
    ctable.css(6,0,{"background-color":"SlateBlue",opacity:"0.5"});
    ctable.css(7,0,{"background-color":"SlateBlue",opacity:"0.5"});
    ctable.css(6,6,{"background-color":"Tan",opacity:"0.5"});
    ctable.css(7,6,{"background-color":"Tan",opacity:"0.5"});
    ctable.value(6,6,"9");
    ctable.value(7,6,"9");
 
    av.step();

    label1.hide(); 
    label1= av.label("Populating the table for Gate G",{left:10,top:250});  
 
    gate6.css({fill:"none",opacity:"1"});
    ctable.css(0,6,{"background-color":"Silver",opacity:"1"});
    ctable.css(6,0,{"background-color":"White",opacity:"1"});
    ctable.css(7,0,{"background-color":"White",opacity:"1"});
    ctable.css(6,6,{"background-color":"White",opacity:"1"});
    ctable.css(7,6,{"background-color":"White",opacity:"1"});

    gate7.css({fill:"SlateBlue",opacity:"0.5"});
    ctable.css(0,7,{"background-color":"SlateBlue",opacity:"0.5"});
    ctable.css(8,0,{"background-color":"SlateBlue",opacity:"0.5"});
    ctable.css(9,0,{"background-color":"SlateBlue",opacity:"0.5"});
    ctable.css(8,7,{"background-color":"Tan",opacity:"0.5"});
    ctable.css(9,7,{"background-color":"Tan",opacity:"0.5"});
    ctable.value(8,7,"10");
    ctable.value(9,7,"10");

    av.step();
  
    label1.hide();
    gate7.css({fill:"none",opacity:"1"});
    ctable.css(0,7,{"background-color":"Silver",opacity:"1"});
    ctable.css(8,0,{"background-color":"White",opacity:"1"});
    ctable.css(9,0,{"background-color":"White",opacity:"1"});
    ctable.css(8,7,{"background-color":"White",opacity:"1"});
    ctable.css(9,7,{"background-color":"White",opacity:"1"});
    nl1 = av.label("This is the complete tabular representation of the circuit"
,{top:250}); 
    av.step();
  
    nl1.hide();
    av.umsg("<br><b>Propagation of signals</b>");
    nl1 = av.label("We show the propagation of signals by assuming a paticular"+
" <br>assignment of input signals to the circuit"
,{top:220}); 
    label1= av.label("Let the assignment be { $x1 = T , x2 = F , x3 = F $ } "
,{left:10,top:270});  

    av.step();
    nl1.hide();
    xlabel1.css({color:"green"});
    xlabel2.css({color:"red"});
    xlabel3.css({color:"green"});
 
    board.assignSignal("x1",1); 
    board.assignSignal("x2",0);
    board.assignSignal("x3",1);

    board.assignIP(gate1,0,1); 
    board.assignIP(gate2,0,1);
    board.assignIP(gate2,2,0);
    board.assignIP(gate4,0,1);
    board.assignIP(gate4,2,0);

    board.assignBP(bp1,1);
    board.assignBP(bp2,0);
   
    ctable.css(1,0,{"background-color":"#93C572"});
    ctable.css(2,0,{"background-color":"#CB6D51"});
    ctable.css(3,0,{"background-color":"#93C572"});
 
    av.step();

    label1.hide();
    label1= av.label("As signal x3 passes through Gate A, wire 4 gets value $F$."
,{left:10,top:250});
    gate1.css({fill:"SlateBlue",opacity:"0.5"});
    ctable.css(3,1,{"background-color":"#CB6D51"});
    ctable.css(4,0,{"background-color":"#CB6D51"});
    board.assignOP(gate1,0); 
    board.assignIP(gate3,0,0);
    board.assignIP(gate4,1,0);
    board.assignBP(bp3,0);

    av.step(); 
    label1.hide();
    label1= av.label("As signals x1 and x2 pass through Gate B, wire 5 gets"+
"value $T$.",{left:10,top:250});
    gate1.css({fill:"none",opacity:"1"});
    gate2.css({fill:"SlateBlue",opacity:"0.5"});
    ctable.css(1,2,{"background-color":"#93C572"});
    ctable.css(2,2,{"background-color":"#93C572"});
    ctable.css(5,0,{"background-color":"#93C572"});
    board.assignOP(gate2,1); 
    board.assignIP(gate5,0,1);

    av.step();
    label1.hide();
    label1= av.label("As signal 4 passes through Gate C, wire 6 gets value $T$."
,{left:10,top:250});
    gate2.css({fill:"none",opacity:"1"});
    gate3.css({fill:"SlateBlue",opacity:"0.5"});
    ctable.css(4,3,{"background-color":"#93C572"});
    ctable.css(6,0,{"background-color":"#93C572"});
    board.assignOP(gate3,1);
    board.assignIP(gate5,2,1);
    board.assignIP(gate6,0,1);
    board.assignBP(bp4,1);
    av.step();
    label1.hide();
    label1= av.label("As signals x1, x2 and 4 passes through Gate D, wire 7"+
" gets value $F$.",{left:10,top:250});
    gate3.css({fill:"none",opacity:"1"});
    gate4.css({fill:"SlateBlue",opacity:"0.5"});
    ctable.css(1,4,{"background-color":"#CB6D51"});
    ctable.css(2,4,{"background-color":"#CB6D51"});
    ctable.css(4,4,{"background-color":"#CB6D51"});
    ctable.css(7,0,{"background-color":"#CB6D51"});
    board.assignOP(gate4,0);
    board.assignIP(gate6,2,0);

    av.step();
    label1.hide();
    label1= av.label("As signals 5 and 6 pass through Gate E, wire 8 gets "
+"value $T$.",{left:10,top:250});
    gate4.css({fill:"none",opacity:"1"});
    gate5.css({fill:"SlateBlue",opacity:"0.5"});
    ctable.css(5,5,{"background-color":"#93C572"});
    ctable.css(6,5,{"background-color":"#93C572"});
    ctable.css(8,0,{"background-color":"#93C572"});
    board.assignOP(gate5,1);
    board.assignIP(gate7,0,1);

    av.step();
    label1.hide();
    label1= av.label("As signals 6 and 7 pass through Gate F, wire 9 gets"
+" value $T$.",{left:10,top:250});
    gate5.css({fill:"none",opacity:"1"});
    gate6.css({fill:"SlateBlue",opacity:"0.5"});
    ctable.css(6,6,{"background-color":"#93C572"});
    ctable.css(7,6,{"background-color":"#93C572"});
    ctable.css(9,0,{"background-color":"#93C572"});
    board.assignOP(gate6,1);
    board.assignIP(gate7,2,1);

    av.step();
    label1.hide();
    label1= av.label("As signals 8 and 9 pass through Gate G, wire 10 gets "
+"value $T$.",{left:10,top:250});
    gate6.css({fill:"none",opacity:"1"});
    gate7.css({fill:"SlateBlue",opacity:"0.5"});
    ctable.css(8,7,{"background-color":"#93C572"});
    ctable.css(9,7,{"background-color":"#93C572"});
    board.assignOP(gate7,1);

    av.step();
    label1.hide();
    label1= av.label("The above circuit yields a value $T$ for the assignment<br>"
+"{ $x1 = T, x2 = F, x3 = T $}",{left:10,top:250});
    gate7.css({fill:"none",opacity:"1"});

    av.step();
    board.hide();
    xlabel1.hide();
    xlabel2.hide();
    xlabel3.hide();
    for(var i=0;i<numlabels.length;i++)
         numlabels[i].hide();
    for(var i=0;i<gatelabel.length;i++)
         gatelabel[i].hide();
  
    ctable.hide();
    label1.hide();

    av.umsg("<br><b>Satisfiability of a Circuit</b>");
    nl1=av.label("The set of boolean input values for a boolean "
+"combinatorial circuit is called <b>Truth Assignment</b>",
{left:0,top:0}); 

    av.step();
    nl2=av.label("If a truth assignment causes the output of a circuit"
+" to be True, it is called a <b>satisfying assigment</b>",
{left:0,top:50}); 

    av.step();
    nl3=av.label("A one-output boolean combinational circuit is "+
"<b>satisfiable</b> if it has a satisfying assignment"
,{left:0,top:100}); 

    av.step();
    nl1.hide();
    nl2.hide();
    nl3.hide();
    av.umsg("<br><b>The Circuit Satisfiability Problem</b>");
    nl1=av.label("Given a boolean combinatorial circuit composed of "+
"AND , OR and NOT gates , is the Circuit Satisfiable ? ",{top:-10,left:0});
    av.step();

    nl1.hide();
    av.umsg("<br><b>Example of Circuit Satisfiability</b>");
    board.show();
    xlabel1.show();
    xlabel2.show();
    xlabel3.show();
    for(var i=0;i<gatelabel.length;i++)
        gatelabel[i].show();

    label1= av.label("This circuit is <b>satisfied</b> for the assignment "+
"{ $x1 = T, x2 = F, x3 = T$ }",{left:10,top:250});  
  
    av.step();
  
    av.umsg("<br><b>Example of Circuit Satisfiability</b>");
    xlabel1.css({color:"black"});
    xlabel2.css({color:"black"});
    xlabel3.css({color:"black"});
    label1.hide();
    label1= av.label("As seen form the table above, possible assigment for x1, x2"
+" and x3 satisfies the "+
"above circuit.<br> Hence the circuit is <b> not satisfiable.</b>",{left:10,top:300});
    board.unassignSignal("x1");
    board.unassignSignal("x2");
    board.unassignSignal("x3");
    board.unassignBP(bp1);
    board.unassignBP(bp2);
    board.unassignBP(bp3);
    board.unassignBP(bp4);
    board.changeGate(av,gate5,"and");

    for(var i=0;i<3;i++){ 
        board.unassignIP(gate2,i);
        board.unassignIP(gate4,i);
        board.unassignIP(gate5,i);
        board.unassignIP(gate6,i);
        board.unassignIP(gate7,i);
    }
    board.unassignIP(gate1,0);
    board.unassignIP(gate3,0);
    board.unassignOP(gate1);
    board.unassignOP(gate2);
    board.unassignOP(gate3);
    board.unassignOP(gate4);
    board.unassignOP(gate5);
    board.unassignOP(gate6);
    board.unassignOP(gate7);

    var data = [["x1","x2","x3","x0"],
               ["T","T","T","F"],
               ["T","T","F","F"],
               ["T","F","T","F"],
               ["T","F","F","F"],
               ["F","T","T","F"],
               ["F","T","F","F"],
               ["F","F","T","F"],
               ["F","F","F","F"]];

     var table = av.ds.matrix(data,{top:-20,left:600});
     for(var i=0;i<9;i++)
       for(var j=0;j<4;j++){
         if(i!=0)
          table.css(i,j,{"background-color":"#FFB6C1"});
         else
          table.css(i,j,{"background-color":"Silver"});
      }
/*    board.hide();
    xlabel1.hide();
    xlabel2.hide();
    xlabel3.hide();

    for(var i=0;i<numlabels.length;i++) 
        numlabels[i].hide();
     for(var i=0;i<gatelabel.length;i++)
        gatelabel[i].hide();
     label1.hide();
*/
 av.recorded();

});

