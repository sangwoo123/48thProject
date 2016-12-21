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
                this.set_name("SN_FoodPopForm");
                this.set_classname("SN_FoodPopForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,410,467);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findFoodList</Col><Col id=\"URL\">his::msv/sup/hosptaldiet/findFoodList.do</Col><Col id=\"outData\">dsFood=dsFood</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"foodGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"foodCd\" type=\"STRING\" size=\"256\"/><Column id=\"foodType\" type=\"STRING\" size=\"256\"/><Column id=\"foodNm\" type=\"STRING\" size=\"256\"/><Column id=\"notes\" type=\"STRING\" size=\"256\"/><Column id=\"amount\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit1\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit2\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit3\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit4\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit5\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit7\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit8\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit9\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit11\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit16\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit17\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit18\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit22\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit23\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit25\" type=\"STRING\" size=\"256\"/><Column id=\"checkDiv\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFoodCopy", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"foodGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"foodCd\" type=\"STRING\" size=\"256\"/><Column id=\"foodType\" type=\"STRING\" size=\"256\"/><Column id=\"foodNm\" type=\"STRING\" size=\"256\"/><Column id=\"notes\" type=\"STRING\" size=\"256\"/><Column id=\"amount\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit1\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit2\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit3\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit4\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit5\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit7\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit8\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit9\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit11\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit16\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit17\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit18\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit22\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit23\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit25\" type=\"STRING\" size=\"256\"/><Column id=\"checkDiv\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("foodGrid", "absolute", "3.41%", "96", null, "313", "5.37%", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("dsFood");
            obj.set_autofittype("col");
            obj.style.set_font("9 돋움");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"81\"/><Column size=\"222\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;\" text=\"v\"/><Cell col=\"1\" style=\"background:#cfd8dcff;\" text=\"음식\"/><Cell col=\"2\" style=\"background:#cfd8dcff;\" text=\"음식명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:checkDiv\" tooltiptext=\"bind:checkDiv\"/><Cell col=\"1\" text=\"bind:foodCd\"/><Cell col=\"2\" style=\"font:8 arial;\" text=\"bind:foodNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("foodCdEd", "absolute", "29.51%", "60", null, "28", "49.27%", null, this);
            obj.set_taborder("1");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "3.41%", "58", null, "34", "76.83%", null, this);
            obj.set_taborder("2");
            obj.set_text("음식코드/명");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("foodNmEd", "absolute", "55.61%", "60", null, "28", "17.32%", null, this);
            obj.set_taborder("3");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "87.32%", "57", null, "36", "6.1%", null, this);
            obj.set_taborder("4");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("okBtn", "absolute", "48.29%", "424", null, "32", "30%", null, this);
            obj.set_taborder("5");
            obj.style.set_background("@gradation URL('img::okBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("closeBtn", "absolute", "71.22%", "424", null, "32", "7.07%", null, this);
            obj.set_taborder("6");
            obj.style.set_background("@gradation URL('img::closeBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "-1.71%", "0", null, "49", "2.2%", null, this);
            obj.set_taborder("7");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "13.97%", "8", null, "37", "41.42%", null, this.Div03);
            obj.set_taborder("0");
            obj.set_text("음식 조회");
            obj.style.set_color("#263238ff");
            obj.style.set_font("bold 20 돋움");
            this.Div03.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 49, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.style.set_background("transparent URL('img::titleBar5.jpg')");
            		p.style.set_font("9 돋움");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 410, 467, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SN_FoodPopForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SN_FoodPopForm.xfdl", "scripts::commonTransaction.xjs");
        this.registerScript("SN_FoodPopForm.xfdl", function() {
        //include "scripts::commonTransaction.xjs";

        //조회버튼
        this.searchBtn_onclick = function(obj,e)
        {
        	alert("음식을 조회해쥬리");
        	var foodCd=this.foodCdEd.value;
        	var foodNm=this.foodNmEd.value;
            var argument='foodCd='+foodCd+' foodNm='+foodNm;
            var row = this.dsService.findRow("serviceID","findFoodList");
            this.dsService.setColumn(row,"argument",argument);
            this.gfnService("findFoodList",false);
        }

        //닫기버튼
        	this.closeBtn_onclick = function(obj,e)
        {
        	this.close();
        }

        //확인버튼
        this.okBtn_onclick = function(obj,e)
        {
        	var btnDiv = this.parent.btnDiv;
        	this.dsFoodCopy.copyData(this.dsFood);
        	this.dsFoodCopy.filter("checkDiv == 1");
        	
        	for( var i = 0 ; i < this.dsFoodCopy.rowcount ; i++){
        		
        		switch(btnDiv){
        			case "Breakfast" : 
        				this.opener.dsBreakfast.addRow();
        				var row = this.opener.dsBreakfast.rowposition;
        				this.opener.dsBreakfast.setColumn(row, "foodCd", this.dsFoodCopy.getColumn(i, "foodCd"));
        				this.opener.dsBreakfast.setColumn(row, "foodNm", this.dsFoodCopy.getColumn(i, "foodNm"));
        				this.opener.dsBreakfast.setColumn(row, "carteDate", this.parent.carteDate);
        				this.opener.dsBreakfast.setColumn(row, "carteTime", this.parent.carteTime);	
        				this.opener.dsBreakfast.setColumn(row, "menuGrpCd", this.parent.menuGrpCd);

        				break;	

        			case "Lunch" :
        				this.opener.dsLunch.addRow();
        				var row = this.opener.dsLunch.rowposition;
        				this.opener.dsLunch.setColumn(row, "foodCd", this.dsFoodCopy.getColumn(i, "foodCd"));
        				this.opener.dsLunch.setColumn(row, "foodNm", this.dsFoodCopy.getColumn(i, "foodNm"));
        				this.opener.dsLunch.setColumn(row, "carteDate", this.parent.carteDate);
        				this.opener.dsLunch.setColumn(row, "carteTime", this.parent.carteTime);	
        				this.opener.dsLunch.setColumn(row, "menuGrpCd", this.parent.menuGrpCd);
        				
        				break;
        						
        			case "Dinner" : 
        				this.opener.dsDinner.addRow();
        				var row = this.opener.dsDinner.rowposition;
        				this.opener.dsDinner.setColumn(row, "foodCd", this.dsFoodCopy.getColumn(i, "foodCd"));
        				this.opener.dsDinner.setColumn(row, "foodNm", this.dsFoodCopy.getColumn(i, "foodNm"));
        				this.opener.dsDinner.setColumn(row, "carteDate", this.parent.carteDate);
        				this.opener.dsDinner.setColumn(row, "carteTime", this.parent.carteTime);	
        				this.opener.dsDinner.setColumn(row, "menuGrpCd", this.parent.menuGrpCd);
        				
        				break;

        		}

        	}
        			
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsFood.addEventHandler("onrowposchanged", this.dsFood_onrowposchanged, this);
            this.dsFoodCopy.addEventHandler("onrowposchanged", this.dsFood_onrowposchanged, this);
            this.foodGrid.addEventHandler("oncelldblclick", this.codeGrid_oncelldblclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.okBtn.addEventHandler("onclick", this.okBtn_onclick, this);
            this.closeBtn.addEventHandler("onclick", this.closeBtn_onclick, this);
            this.Div03.Static00.addEventHandler("onclick", this.Div03_Static00_onclick, this);

        };

        this.loadIncludeScript("SN_FoodPopForm.xfdl");

       
    };
}
)();
