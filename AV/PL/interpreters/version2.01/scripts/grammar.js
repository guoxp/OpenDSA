/* parser generated by jison 0.4.15 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,15],$V1=[1,16],$V2=[1,22],$V3=[1,23],$V4=[1,21],$V5=[1,17],$V6=[1,18],$V7=[1,25],$V8=[1,26],$V9=[1,27],$Va=[1,20],$Vb=[1,24],$Vc=[5,18,19,20,24,25,27,28,30,31,32,33,35,42,43,44,45,46,47,48,49,50,51,54,55,56,57,58,59],$Vd=[1,34],$Ve=[2,45],$Vf=[2,29],$Vg=[1,61],$Vh=[18,19,20,24,28,32,33,42,43,44,54,57],$Vi=[31,59];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"exp":4,"EOF":5,"var_exp":6,"intlit_exp":7,"fn_exp":8,"app_exp":9,"prim1_app_exp":10,"prim2_app_exp":11,"if_exp":12,"let_exp":13,"print_exp":14,"print2_exp":15,"assign_exp":16,"while_exp":17,"VAR":18,"INT":19,"PRINT":20,"DQUOTE":21,"optional":22,"COLON":23,"SET":24,"EQ":25,"block":26,"SEMICOLON":27,"LET":28,"bindings":29,"IN":30,"END":31,"FN":32,"LPAREN":33,"formals":34,"RPAREN":35,"THATRETURNS":36,"moreformals":37,"COMMA":38,"args":39,"prim1_op":40,"prim2_op":41,"ADD1":42,"NEG":43,"NOT":44,"PLUS":45,"MINUS":46,"TIMES":47,"DIV":48,"REM":49,"LT":50,"GT":51,"prim_args":52,"more_prim_args":53,"IF":54,"THEN":55,"ELSE":56,"WHILE":57,"LBRACE":58,"RBRACE":59,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",18:"VAR",19:"INT",20:"PRINT",21:"DQUOTE",23:"COLON",24:"SET",25:"EQ",27:"SEMICOLON",28:"LET",30:"IN",31:"END",32:"FN",33:"LPAREN",35:"RPAREN",36:"THATRETURNS",38:"COMMA",42:"ADD1",43:"NEG",44:"NOT",45:"PLUS",46:"MINUS",47:"TIMES",48:"DIV",49:"REM",50:"LT",51:"GT",54:"IF",55:"THEN",56:"ELSE",57:"WHILE",58:"LBRACE",59:"RBRACE"},
productions_: [0,[3,2],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[6,1],[7,1],[14,2],[15,5],[22,1],[22,1],[16,4],[26,1],[26,3],[13,5],[29,3],[29,4],[8,6],[34,0],[34,2],[37,0],[37,3],[9,4],[10,4],[11,5],[40,1],[40,1],[40,1],[41,1],[41,1],[41,1],[41,1],[41,1],[41,1],[41,1],[41,1],[39,0],[39,2],[52,0],[52,2],[53,0],[53,3],[12,6],[17,5]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 return SLang.absyn.createProgram($$[$0-1]); 
break;
case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 19: case 34: case 35: case 36: case 37: case 38: case 39: case 40: case 41: case 42: case 43: case 44:
 this.$ = $$[$0]; 
break;
case 14:
 this.$ = SLang.absyn.createVarExp( $$[$0] ); 
break;
case 15:
 this.$ = SLang.absyn.createIntExp( $$[$0] ); 
break;
case 16:
 this.$ = SLang.absyn.createPrintExp( $$[$0] ); 
break;
case 17:
 this.$ = SLang.absyn.createPrint2Exp( $$[$0-2], $$[$0] ); 
break;
case 18:
 this.$ = null; 
break;
case 20:
 this.$ = SLang.absyn.createAssignExp( $$[$0-2], $$[$0] ); 
break;
case 21:
 this.$ = [ $$[$0] ]; 
break;
case 22:
 $$[$0].unshift( $$[$0-2] ); this.$ = $$[$0]; 
break;
case 23:
 var args = $$[$0-3][1]; args.unshift( "args" );
             var fnexp = SLang.absyn.createFnExp($$[$0-3][0],$$[$0-1]);
	     var appExp = SLang.absyn.createAppExp(fnexp,args);
	     appExp.comesFromLetBlock = true;
             this.$ = appExp;
           
break;
case 24:
 this.$ = [ [ $$[$0-2] ], [ $$[$0] ] ]; 
break;
case 25:
 var vars = $$[$0][0];  vars.unshift($$[$0-3]);
             var vals = $$[$0][1];  vals.unshift($$[$0-1]);
	     this.$ = [ vars, vals ];
           
break;
case 26:
 this.$ = SLang.absyn.createFnExp($$[$0-3],[$$[$0]]); 
break;
case 27: case 45: case 47:
 this.$ = [ ]; 
break;
case 28: case 46:
 var result;
          if ($$[$0] === [ ])
	     result = [ $$[$0-1] ];
          else {
             $$[$0].unshift($$[$0-1]);
             result = $$[$0];
          }
          this.$ = result;
        
break;
case 29: case 49:
 this.$ = [ ] 
break;
case 30:
 $$[$0].unshift($$[$0-1]); 
         this.$ = $$[$0]; 
break;
case 31:
  $$[$0-1].unshift("args");
          this.$ = SLang.absyn.createAppExp($$[$0-2],$$[$0-1]); 
break;
case 32:
 this.$ = SLang.absyn.createPrim1AppExp($$[$0-3],$$[$0-1]); 
break;
case 33:
 this.$ = SLang.absyn.createPrim2AppExp($$[$0-2],$$[$0-3],$$[$0-1]); 
break;
case 48: case 50:
 $$[$0].unshift($$[$0-1]); this.$ = $$[$0]; 
break;
case 51:
 this.$ = SLang.absyn.createIfExp($$[$0-4],$$[$0-2],$$[$0]); 
break;
case 52:
 this.$ = SLang.absyn.createWhileExp($$[$0-3],$$[$0-1]); 
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:$V0,19:$V1,20:$V2,24:$V3,28:$V4,32:$V5,33:$V6,40:19,42:$V7,43:$V8,44:$V9,54:$Va,57:$Vb},{1:[3]},{5:[1,28]},o($Vc,[2,2]),o($Vc,[2,3]),o($Vc,[2,4]),o($Vc,[2,5]),o($Vc,[2,6]),o($Vc,[2,7]),o($Vc,[2,8]),o($Vc,[2,9]),o($Vc,[2,10]),o($Vc,[2,11]),o($Vc,[2,12]),o($Vc,[2,13]),o($Vc,[2,14]),o($Vc,[2,15]),{33:[1,29]},{4:30,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:$V0,19:$V1,20:$V2,24:$V3,28:$V4,32:$V5,33:$V6,40:19,42:$V7,43:$V8,44:$V9,54:$Va,57:$Vb},{33:[1,31]},{4:32,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:$V0,19:$V1,20:$V2,24:$V3,28:$V4,32:$V5,33:$V6,40:19,42:$V7,43:$V8,44:$V9,54:$Va,57:$Vb},{18:$Vd,29:33},{4:35,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:$V0,19:$V1,20:$V2,21:[1,36],24:$V3,28:$V4,32:$V5,33:$V6,40:19,42:$V7,43:$V8,44:$V9,54:$Va,57:$Vb},{18:[1,37]},{4:38,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:$V0,19:$V1,20:$V2,24:$V3,28:$V4,32:$V5,33:$V6,40:19,42:$V7,43:$V8,44:$V9,54:$Va,57:$Vb},{33:[2,34]},{33:[2,35]},{33:[2,36]},{1:[2,1]},{18:[1,40],34:39,35:[2,27]},{4:43,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:$V0,19:$V1,20:$V2,24:$V3,25:[1,51],28:$V4,32:$V5,33:$V6,35:$Ve,39:41,40:19,41:42,42:$V7,43:$V8,44:$V9,45:[1,44],46:[1,45],47:[1,46],48:[1,47],49:[1,48],50:[1,49],51:[1,50],54:$Va,57:$Vb},{4:52,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:$V0,19:$V1,20:$V2,24:$V3,28:$V4,32:$V5,33:$V6,40:19,42:$V7,43:$V8,44:$V9,54:$Va,57:$Vb},{55:[1,53]},{30:[1,54]},{25:[1,55]},o($Vc,[2,16]),{18:[1,56]},{25:[1,57]},{58:[1,58]},{35:[1,59]},{35:$Vf,37:60,38:$Vg},{35:[1,62]},{4:63,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:$V0,19:$V1,20:$V2,24:$V3,28:$V4,32:$V5,33:$V6,40:19,42:$V7,43:$V8,44:$V9,54:$Va,57:$Vb},{4:43,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:$V0,19:$V1,20:$V2,24:$V3,28:$V4,32:$V5,33:$V6,35:$Ve,39:64,40:19,42:$V7,43:$V8,44:$V9,54:$Va,57:$Vb},o($Vh,[2,37]),o($Vh,[2,38]),o($Vh,[2,39]),o($Vh,[2,40]),o($Vh,[2,41]),o($Vh,[2,42]),o($Vh,[2,43]),o($Vh,[2,44]),{35:[1,65]},{4:66,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:$V0,19:$V1,20:$V2,24:$V3,28:$V4,32:$V5,33:$V6,40:19,42:$V7,43:$V8,44:$V9,54:$Va,57:$Vb},{4:68,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:$V0,19:$V1,20:$V2,24:$V3,26:67,28:$V4,32:$V5,33:$V6,40:19,42:$V7,43:$V8,44:$V9,54:$Va,57:$Vb},{4:69,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:$V0,19:$V1,20:$V2,24:$V3,28:$V4,32:$V5,33:$V6,40:19,42:$V7,43:$V8,44:$V9,54:$Va,57:$Vb},{21:[1,70]},{4:71,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:$V0,19:$V1,20:$V2,24:$V3,28:$V4,32:$V5,33:$V6,40:19,42:$V7,43:$V8,44:$V9,54:$Va,57:$Vb},{4:68,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:$V0,19:$V1,20:$V2,24:$V3,26:72,28:$V4,32:$V5,33:$V6,40:19,42:$V7,43:$V8,44:$V9,54:$Va,57:$Vb},{36:[1,73]},{35:[2,28]},{18:[1,74]},o($Vc,[2,31]),{35:[1,75]},{35:[2,46]},o($Vc,[2,32]),{56:[1,76]},{31:[1,77]},o($Vi,[2,21],{27:[1,78]}),{18:$Vd,29:79,30:[2,24]},{4:82,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:$V0,19:$V1,20:$V2,22:80,23:[1,81],24:$V3,28:$V4,32:$V5,33:$V6,40:19,42:$V7,43:$V8,44:$V9,54:$Va,57:$Vb},o($Vc,[2,20]),{59:[1,83]},{4:84,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:$V0,19:$V1,20:$V2,24:$V3,28:$V4,32:$V5,33:$V6,40:19,42:$V7,43:$V8,44:$V9,54:$Va,57:$Vb},{35:$Vf,37:85,38:$Vg},o($Vc,[2,33]),{4:86,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:$V0,19:$V1,20:$V2,24:$V3,28:$V4,32:$V5,33:$V6,40:19,42:$V7,43:$V8,44:$V9,54:$Va,57:$Vb},o($Vc,[2,23]),{4:68,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:$V0,19:$V1,20:$V2,24:$V3,26:87,28:$V4,32:$V5,33:$V6,40:19,42:$V7,43:$V8,44:$V9,54:$Va,57:$Vb},{30:[2,25]},o($Vc,[2,17]),o($Vc,[2,18]),o($Vc,[2,19]),o($Vc,[2,52]),o($Vc,[2,26]),{35:[2,30]},o($Vc,[2,51]),o($Vi,[2,22])],
defaultActions: {25:[2,34],26:[2,35],27:[2,36],28:[2,1],60:[2,28],64:[2,46],79:[2,25],85:[2,30]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        function lex() {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};


/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0: /* skip whitespace */ 
break;
case 1: return 32; 
break;
case 2: return 33; 
break;
case 3: return 35; 
break;
case 4: return 45; 
break;
case 5: return 47; 
break;
case 6: return 48; 
break;
case 7: return 49; 
break;
case 8: return 46; 
break;
case 9: return 50; 
break;
case 10: return 51; 
break;
case 11: return 25; 
break;
case 12: return 43; 
break;
case 13: return 44; 
break;
case 14: return 42; 
break;
case 15: return 28; 
break;
case 16: return 30; 
break;
case 17: return 31; 
break;
case 18: return 20; 
break;
case 19: return 24; 
break;
case 20: return 57; 
break;
case 21: return 58; 
break;
case 22: return 59; 
break;
case 23: return 27; 
break;
case 24: return 23; 
break;
case 25: return 38; 
break;
case 26: return 36; 
break;
case 27: return 54; 
break;
case 28: return 55; 
break;
case 29: return 56; 
break;
case 30: return 25; 
break;
case 31: return 21; 
break;
case 32: return 5; 
break;
case 33: return 18; 
break;
case 34: return 19; 
break;
case 35: return 'INVALID'; 
break;
}
},
rules: [/^(?:\s+)/,/^(?:fn\b)/,/^(?:\()/,/^(?:\))/,/^(?:\+)/,/^(?:\*)/,/^(?:\/)/,/^(?:%)/,/^(?:-)/,/^(?:<)/,/^(?:>)/,/^(?:===)/,/^(?:~)/,/^(?:not\b)/,/^(?:add1\b)/,/^(?:let\b)/,/^(?:in\b)/,/^(?:end\b)/,/^(?:print\b)/,/^(?:set\b)/,/^(?:while\b)/,/^(?:\{)/,/^(?:\})/,/^(?:;)/,/^(?::)/,/^(?:,)/,/^(?:=>)/,/^(?:if\b)/,/^(?:then\b)/,/^(?:else\b)/,/^(?:=)/,/^(?:")/,/^(?:$)/,/^(?:([a-zA-Z_])(([a-zA-Z_])|([0-9])|_)*)/,/^(?:([0-9])+)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}