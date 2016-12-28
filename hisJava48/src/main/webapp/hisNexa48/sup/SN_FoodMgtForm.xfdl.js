(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("SN_FoodMgtForm");
                this.set_classname("SN_FoodMgtForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCode", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"smallCode1\" type=\"STRING\" size=\"256\"/><Column id=\"fullName1\" type=\"STRING\" size=\"256\"/><Column id=\"smallCode2\" type=\"STRING\" size=\"256\"/><Column id=\"fullName2\" type=\"STRING\" size=\"256\"/><Column id=\"smallCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFood", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"foodGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"foodCd\" type=\"STRING\" size=\"256\"/><Column id=\"foodType\" type=\"STRING\" size=\"256\"/><Column id=\"foodNm\" type=\"STRING\" size=\"256\"/><Column id=\"notes\" type=\"STRING\" size=\"256\"/><Column id=\"amount\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit1\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit2\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit3\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit4\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit5\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit7\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit8\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit9\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit11\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit16\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit17\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit18\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit22\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit23\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit25\" type=\"STRING\" size=\"256\"/><Column id=\"hospcls\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFoodDtl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"foodCd\" type=\"STRING\" size=\"256\"/><Column id=\"ingredCd\" type=\"STRING\" size=\"256\"/><Column id=\"ingredNm\" type=\"STRING\" size=\"256\"/><Column id=\"qty\" type=\"STRING\" size=\"256\"/><Column id=\"amount\" type=\"STRING\" size=\"256\"/><Column id=\"mainmenuYn\" type=\"STRING\" size=\"256\"/><Column id=\"hospcls\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findFoodList</Col><Col id=\"URL\">his::msv/sup/hosptaldiet/findFoodList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsFood=dsFood</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">findFoodDtlList</Col><Col id=\"URL\">his::msv/sup/hosptaldiet/findFoodDtlList.do</Col><Col id=\"outData\">dsFoodDtl=dsFoodDtl</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">findFoodCodeList</Col><Col id=\"URL\">his::msv/sup/hosptaldiet/findFoodCodeList.do</Col><Col id=\"outData\">dsCode=dsCode</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">batchFoodListProcess</Col><Col id=\"URL\">his::msv/sup/hosptaldiet/batchFoodListProcess.do</Col><Col id=\"inData\">dsFood=dsFood:U dsFoodDtl=dsFoodDtl:U</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0.1%", "0", null, "60", "-62.01%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);

            obj = new Div("compBox", "absolute", "2.05%", "64", null, "653", "67.19%", null, this);
            obj.set_taborder("18");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid gainsboro");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Grid("codeGrid", "absolute", "2.54%", "104", null, "316", "67.68%", null, this);
            obj.set_taborder("20");
            obj.set_binddataset("dsCode");
            obj.set_autofittype("col");
            obj.style.set_font("9 돋움");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"232\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;\" text=\"분류코드\"/><Cell col=\"1\" style=\"background:#cfd8dcff;\" text=\"분류명\"/></Band><Band id=\"body\"><Cell text=\"bind:smallCode1\"/><Cell col=\"1\" text=\"bind:fullName1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("foodDtlGrid", "absolute", "2.54%", "469", null, "233", "67.68%", null, this);
            obj.set_taborder("21");
            obj.set_binddataset("dsFoodDtl");
            obj.set_autofittype("col");
            obj.style.set_font("9 돋움");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"87\"/><Column size=\"154\"/><Column size=\"46\"/><Column size=\"42\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"4\" style=\"background:#37474fff;color:azure;\" text=\"음식별 식재료 정보\"/><Cell row=\"1\" style=\"background:#cfd8dcff;\" text=\"식재료코드\"/><Cell row=\"1\" col=\"1\" style=\"background:#cfd8dcff;\" text=\"식재료명\"/><Cell row=\"1\" col=\"2\" style=\"background:#cfd8dcff;\" text=\"수량\"/><Cell row=\"1\" col=\"3\" style=\"background:#cfd8dcff;\" text=\"단위\"/></Band><Band id=\"body\"><Cell text=\"bind:ingredCd\"/><Cell col=\"1\" text=\"bind:ingredNm\"/><Cell col=\"2\" text=\"bind:qty\"/><Cell col=\"3\" text=\"bind:unit\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "2.54%", "69", null, "30", "67.68%", null, this);
            obj.set_taborder("22");
            obj.set_text(" 음식분류");
            obj.style.set_background("#78909cff");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc02", "absolute", "2.54%", "429", null, "30", "67.68%", null, this);
            obj.set_taborder("23");
            obj.set_text(" 음식 상세 정보");
            obj.style.set_background("#78909cff");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("compBox00", "absolute", "33.3%", "64", null, "653", "0.78%", null, this);
            obj.set_taborder("24");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid gainsboro");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "46.06%", "8", null, "27", "42.64%", null, this.compBox00);
            obj.set_taborder("0");
            obj.set_text("음식명");
            obj.style.set_font("bold 10 돋움");
            this.compBox00.addChild(obj.name, obj);

            obj = new Grid("foodGrid", "absolute", "33.89%", "115", null, "598", "1.27%", null, this);
            obj.set_taborder("25");
            obj.set_binddataset("dsFood");
            obj.set_autofittype("col");
            obj.style.set_font("9 돋움");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"217\"/><Column size=\"409\"/><Column size=\"185\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;\" text=\"음식코드\"/><Cell col=\"1\" style=\"background:#cfd8dcff;\" text=\"음식명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;\" text=\"비고\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:foodCd\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:foodNm\"/><Cell col=\"2\" edittype=\"none\" text=\"bind:notes\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("foodCdEd", "absolute", "52.44%", "72", null, "30", "37.5%", null, this);
            obj.set_taborder("26");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("foodNmEd", "absolute", "71.88%", "72", null, "30", "15.14%", null, this);
            obj.set_taborder("27");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "91.5%", "70", null, "32", "1.27%", null, this);
            obj.set_taborder("28");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addBtn", "absolute", "59.77%", "728", null, "32", "33.11%", null, this);
            obj.set_taborder("29");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Button("modBtn", "absolute", "75.59%", "728", null, "32", "17.19%", null, this);
            obj.set_taborder("30");
            obj.style.set_background("@gradation URL('img::reviseBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Button("printBtn", "absolute", "91.41%", "728", null, "32", "1.37%", null, this);
            obj.set_taborder("31");
            obj.style.set_background("@gradation URL('img::printBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Button("delBtn", "absolute", "67.68%", "728", null, "32", "25.1%", null, this);
            obj.set_taborder("32");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Button("saveBtn", "absolute", "83.5%", "728", null, "32", "9.28%", null, this);
            obj.set_taborder("33");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "33.69%", "72", null, "30", "57.81%", null, this);
            obj.set_taborder("34");
            obj.set_text("음식코드");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "7.32%", "-4", null, "60", "77.64%", null, this);
            obj.set_taborder("35");
            obj.set_text("음식 관리");
            obj.style.set_color("#263238ff");
            obj.style.set_font("bold 20 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "44.82%", "72", null, "27", "48.34%", null, this);
            obj.set_taborder("36");
            obj.set_text("음식코드");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar5.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 653, this.compBox,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid gainsboro");
            		p.style.set_font("9 돋움");

            	}
            );
            this.compBox.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 653, this.compBox00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("24");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid gainsboro");
            		p.style.set_font("9 돋움");

            	}
            );
            this.compBox00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SN_FoodMgtForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SN_FoodMgtForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("SN_FoodMgtForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";

        var foodGrpCd;
        var foodCd;
        var arg=[];
        //화면 로드시
        this.SN_FoodMgtForm_onload = function(obj,e)
        {
        	var argument = "formDiv="+"food";
        	var row = this.dsService.findRow("serviceID", "findFoodCodeList");
        	this.dsService.setColumn(row, "argument", argument);
        	this.gfnService("findFoodCodeList", false);
        }

        //코드분류표로 조회
        this.dsCode_onrowposchanged = function(obj,e)
        {
        	foodGrpCd=this.dsCode.getColumn(e.newrow,"smallCode1");
        	var argument="foodGrpCd="+foodGrpCd;
        	var row = this.dsService.findRow("serviceID", "findFoodList");
        	this.dsService.setColumn(row, "argument", argument);
        	this.gfnService("findFoodList", false);
        }

        //검색조건으로 음식조회
        this.searchBtn_onclick = function(obj,e)
        {
        	var foodNm = this.foodNmEd.value;
        	var foodCd = this.foodCdEd.value;
        	
        	var argument = "foodNm="+foodNm+" foodCd="+foodCd;
        	var row = this.dsService.findRow("serviceID", "findFoodList");
        	this.dsService.setColumn(row, "argument", argument);
        	this.gfnService("findFoodList", false);
        	
        }

        

        
        //음식디테일조회
        this.dsFood_onrowposchanged = function(obj,e)
        {
        	foodCd=this.dsFood.getColumn(e.newrow,"foodCd");
        	var argument="foodCd="+foodCd;
        	var row = this.dsService.findRow("serviceID", "findFoodDtlList");
        	this.dsService.setColumn(row, "argument", argument);
        	this.gfnService("findFoodDtlList", false);
        }

        
        //삭제버튼
        this.delBtn_onclick = function(obj,e)
        {
        	this.dsFood.deleteRow(this.dsFood.rowposition);
        }

        
        //추가버튼
        this.addBtn_onclick = function(obj,e)
        {
        	this.dsFood.addRow();
        	var preFoodCd=this.dsFood.getColumn(this.dsFood.rowposition-1,"foodCd");
        	alert(preFoodCd);
        	var addFoodNm=nexacro.toNumber(preFoodCd.substring(1,4))+1;
        	var addFoodNm=addFoodNm.toString().padLeft(3, "0");
        	
        	var param = {state:"insert", foodGrpCd:foodGrpCd, foodCd:foodGrpCd+addFoodNm};
        	this.gfnPopup("SN_FoodAddPopForm","sup",param);

        
        }

        //수정버튼
        this.modBtn_onclick = function(obj,e)
        {
        	alert(arg[0]);
        	var foodNm = this.dsFood.getColumn(this.dsFood.rowposition, "foodNm");
        	alert(foodNm);
        	var memo = this.dsFood.getColumn(this.dsFood.rowposition, "notes");
        	var param = {state:"update", foodGrpCd:foodGrpCd, foodCd:foodCd, foodNm:foodNm, foodMemo:memo, dataSet:this.dsFoodDtl};

        	this.gfnPopup("SN_FoodAddPopForm","sup",param);
        }

        //배치버튼
        this.saveBtn_onclick = function(obj,e)
        {
        	this.gfnService("batchFoodListProcess");
            alert("저장되었습니다.");
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsCode.addEventHandler("onrowposchanged", this.dsCode_onrowposchanged, this);
            this.dsFood.addEventHandler("onrowposchanged", this.dsFood_onrowposchanged, this);
            this.addEventHandler("onload", this.SN_FoodMgtForm_onload, this);
            this.codeGrid.addEventHandler("oncellclick", this.codeGrid_oncellclick, this);
            this.foodDtlGrid.addEventHandler("onsetfocus", this.foodDtlGrid_onsetfocus, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.compBox00.Static01.addEventHandler("onclick", this.compBox00_Static01_onclick, this);
            this.foodGrid.addEventHandler("onsetfocus", this.foodGrid_onsetfocus, this);
            this.foodGrid.addEventHandler("oncellclick", this.foodGrid_oncellclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.addBtn.addEventHandler("onclick", this.addBtn_onclick, this);
            this.modBtn.addEventHandler("onclick", this.modBtn_onclick, this);
            this.delBtn.addEventHandler("onclick", this.delBtn_onclick, this);
            this.saveBtn.addEventHandler("onclick", this.saveBtn_onclick, this);
            this.Static01.addEventHandler("onclick", this.Static01_onclick, this);

        };

        this.loadIncludeScript("SN_FoodMgtForm.xfdl");

       
    };
}
)();
