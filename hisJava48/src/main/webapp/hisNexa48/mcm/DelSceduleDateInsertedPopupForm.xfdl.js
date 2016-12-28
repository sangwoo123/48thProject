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
                this.set_name("DelSceduleDateInsertedPopupForm");
                this.set_classname("SceduleDateInsertedPopupForm");
                this.set_titletext("일정등록창");
                this._setFormPosition(0,0,611,256);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("ButtonDiv", "absolute", "1.47%", "191", null, "46", "2.29%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("#eceff1ff");
            this.addChild(obj.name, obj);
            obj = new Button("RemoveScheduleBtn", "absolute", "67.86%", "8", null, "27", "18.37%", null, this.ButtonDiv);
            obj.set_taborder("11");
            obj.set_text("삭제");
            obj.style.set_background("#607d8bff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Gulim");
            this.ButtonDiv.addChild(obj.name, obj);
            obj = new Button("cancleBtn", "absolute", "82.82%", "8", null, "27", "3.4%", null, this.ButtonDiv);
            obj.set_taborder("12");
            obj.set_text("취소");
            obj.style.set_background("#607d8bff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Gulim");
            this.ButtonDiv.addChild(obj.name, obj);

            obj = new Div("BorderDiv", "absolute", "1.64%", "16", null, "163", "2.29%", null, this);
            obj.set_taborder("1");
            obj.style.set_border("2 solid #90a4aeff");
            this.addChild(obj.name, obj);
            obj = new Div("MainDiv", "absolute", "1.2%", "7", null, "139", "3.43%", null, this.BorderDiv);
            obj.set_taborder("0");
            obj.style.set_background("#eceff1ff");
            this.BorderDiv.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "16", "6", "131", "28", null, null, this.BorderDiv.MainDiv);
            obj.set_taborder("5");
            obj.set_text("삭제할 기간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#90a4aeff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            this.BorderDiv.MainDiv.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "60.79%", "4", null, "24", "34.35%", null, this.BorderDiv.MainDiv);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.BorderDiv.MainDiv.addChild(obj.name, obj);
            obj = new Calendar("FromDateCalendar", "absolute", "30.4%", "7", null, "27", "39.21%", null, this.BorderDiv.MainDiv);
            this.BorderDiv.MainDiv.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_editformat("yyyyMMdd");
            obj.style.set_popuptype("center");
            obj = new Calendar("ToDateCalendar", "absolute", "66.19%", "8", null, "27", "3.42%", null, this.BorderDiv.MainDiv);
            this.BorderDiv.MainDiv.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_editformat("yyyyMMdd");
            obj.style.set_popuptype("center");
            obj = new Static("Static02", "absolute", "16", "49", "131", "28", null, null, this.BorderDiv.MainDiv);
            obj.set_taborder("12");
            obj.set_text("삭제할 요일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#90a4aeff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            this.BorderDiv.MainDiv.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "16", "91", "131", "28", null, null, this.BorderDiv.MainDiv);
            obj.set_taborder("13");
            obj.set_text("오전 오후 구분");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#90a4aeff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            this.BorderDiv.MainDiv.addChild(obj.name, obj);
            obj = new Radio("AmPmFlagRadio", "absolute", "30.4%", "95", null, "27", "31.47%", null, this.BorderDiv.MainDiv);
            this.BorderDiv.MainDiv.addChild(obj.name, obj);
            var AmPmFlagRadio_innerdataset = new Dataset("AmPmFlagRadio_innerdataset", this.BorderDiv.MainDiv.AmPmFlagRadio);
            AmPmFlagRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Am</Col><Col id=\"datacolumn\">오전</Col></Row><Row><Col id=\"codecolumn\">Pm</Col><Col id=\"datacolumn\">오후</Col></Row><Row><Col id=\"codecolumn\">All</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(AmPmFlagRadio_innerdataset);
            obj.set_taborder("14");
            obj.style.set_itempadding("0 0 0 10");
            obj.style.set_border("1 solid #90a4aeff");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_value("All");
            obj = new CheckBox("AllCheck", "absolute", "30.4%", "53", null, "26", "59.35%", null, this.BorderDiv.MainDiv);
            obj.set_taborder("15");
            obj.set_text("전체");
            obj.style.set_border("1 solid #90a4aeff");
            obj.style.set_padding("0 0 0 5");
            this.BorderDiv.MainDiv.addChild(obj.name, obj);
            obj = new Div("DowDiv", "absolute", "40.65%", "53", null, "26", "3.24%", null, this.BorderDiv.MainDiv);
            obj.set_taborder("16");
            obj.style.set_border("1 solid #90a4aeff");
            this.BorderDiv.MainDiv.addChild(obj.name, obj);
            obj = new CheckBox("D1Check", "absolute", "1.29%", "4", null, "19", "88.06%", null, this.BorderDiv.MainDiv.DowDiv);
            obj.set_taborder("0");
            obj.set_text("일");
            obj.style.set_color("red");
            this.BorderDiv.MainDiv.DowDiv.addChild(obj.name, obj);
            obj = new CheckBox("D2Check", "absolute", "15.81%", "4", null, "19", "73.55%", null, this.BorderDiv.MainDiv.DowDiv);
            obj.set_taborder("1");
            obj.set_text("월");
            this.BorderDiv.MainDiv.DowDiv.addChild(obj.name, obj);
            obj = new CheckBox("D3Check", "absolute", "30.32%", "4", null, "19", "59.03%", null, this.BorderDiv.MainDiv.DowDiv);
            obj.set_taborder("2");
            obj.set_text("화");
            this.BorderDiv.MainDiv.DowDiv.addChild(obj.name, obj);
            obj = new CheckBox("D4Check", "absolute", "44.84%", "4", null, "19", "44.52%", null, this.BorderDiv.MainDiv.DowDiv);
            obj.set_taborder("3");
            obj.set_text("수");
            this.BorderDiv.MainDiv.DowDiv.addChild(obj.name, obj);
            obj = new CheckBox("D5Check", "absolute", "59.35%", "4", null, "19", "30%", null, this.BorderDiv.MainDiv.DowDiv);
            obj.set_taborder("4");
            obj.set_text("목");
            this.BorderDiv.MainDiv.DowDiv.addChild(obj.name, obj);
            obj = new CheckBox("D6Check", "absolute", "73.87%", "4", null, "19", "15.48%", null, this.BorderDiv.MainDiv.DowDiv);
            obj.set_taborder("5");
            obj.set_text("금");
            this.BorderDiv.MainDiv.DowDiv.addChild(obj.name, obj);
            obj = new CheckBox("D7Check", "absolute", "88.39%", "4", null, "19", "0.97%", null, this.BorderDiv.MainDiv.DowDiv);
            obj.set_taborder("6");
            obj.set_text("토");
            obj.style.set_color("#333333ff");
            this.BorderDiv.MainDiv.DowDiv.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 46, this.ButtonDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.ButtonDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 26, this.BorderDiv.MainDiv.DowDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("16");
            		p.style.set_border("1 solid #90a4aeff");

            	}
            );
            this.BorderDiv.MainDiv.DowDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 139, this.BorderDiv.MainDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.BorderDiv.MainDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 163, this.BorderDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_border("2 solid #90a4aeff");

            	}
            );
            this.BorderDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 611, 256, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SceduleDateInsertedPopupForm");
            		p.set_titletext("일정등록창");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("DelSceduleDateInsertedPopupForm.xfdl", function() {
        //시작일자 Calendar Ojbect
        var fromDateCalendar=this.BorderDiv.MainDiv.FromDateCalendar;
        //종료일자 Calendar Ojbect
        var toDateCalendar=this.BorderDiv.MainDiv.ToDateCalendar;
        //오전오후 구분 Radio Object
        var amPmFlagRadio=this.BorderDiv.MainDiv.AmPmFlagRadio;
        this.DelSceduleDateInsertedPopupForm_onload = function(obj,e)
        {
        	fromDateCalendar.set_value(this.fn_getToday());
        	toDateCalendar.set_value(this.fn_getToday());
        }
        this.ButtonDiv_cancleBtn_onclick = function(obj,e)
        {
        	this.close("cancle");
        }
        //일요일 CheckBox Object
        var chkD1=this.BorderDiv.MainDiv.DowDiv.D1Check;
        //월요일 CheckBox Object
        var chkD2=this.BorderDiv.MainDiv.DowDiv.D2Check;
        //화요일 CheckBox Object
        var chkD3=this.BorderDiv.MainDiv.DowDiv.D3Check;
        //수요일 CheckBox Object
        var chkD4=this.BorderDiv.MainDiv.DowDiv.D4Check;
        //목요일 CheckBox Object
        var chkD5=this.BorderDiv.MainDiv.DowDiv.D5Check;
        //금요일 CheckBox Object
        var chkD6=this.BorderDiv.MainDiv.DowDiv.D6Check;
        //토요일 CheckBox Object
        var chkD7=this.BorderDiv.MainDiv.DowDiv.D7Check;
        this.ButtonDiv_RemoveScheduleBtn_onclick = function(obj,e)
        {
        		if (fromDateCalendar.value > toDateCalendar.value ) {
               alert("종료일자가 시작일자보다 이전입니다."); 
                return;
        	}
        	
        	if (fromDateCalendar.value < this.fn_getToday() ) {
               alert("과거일자의 진료일정은 삭제할 수 없습니다.");
                return;
        	}

        	var sDow="";    //1234567 = 일월화수목금토
        	if (chkD1.isChecked()) sDow = sDow+"1";
        	if (chkD2.isChecked()) sDow = sDow+"2";
        	if (chkD3.isChecked()) sDow = sDow+"3";
        	if (chkD4.isChecked()) sDow = sDow+"4";
        	if (chkD5.isChecked()) sDow = sDow+"5";
        	if (chkD6.isChecked()) sDow = sDow+"6";
        	if (chkD7.isChecked()) sDow = sDow+"7";
        	if (sDow == "") {	    
        	    alert("적용할 요일을 선택하십시요."); 
                return;
        	}
        	
        	var buffer = new Array();
        	buffer.push(fromDateCalendar.value);//시작일자
        	buffer.push(toDateCalendar.value);//종료일자
        	buffer.push(sDow);//적용할 요일
        	buffer.push(amPmFlagRadio.value);//오전오후구분
        	this.close(buffer.join("blank"));
        }

        this.fn_getToday=function(){
         var dateObj=new Date();
         var sYear=dateObj.getFullYear().toString();
         var sMonth=(dateObj.getMonth()+1).toString().padLeft(2,"0");
         var sDate=(dateObj.getDate()).toString().padLeft(2,"0");
        return sYear+sMonth+sDate;
        }

        //전체 CheckBox Object
        var dAllCheck=this.BorderDiv.MainDiv.AllCheck;
        this.BorderDiv_MainDiv_AllCheck_onclick = function(obj,e)
        {
        	var checkVal=dAllCheck.value;
        	for(var i=0;i<7;i++)
        	{
        		var chx=this.BorderDiv.MainDiv.DowDiv.lookup("D"+(i+1)+"Check"); //checkBox Object   
        		chx.set_value(checkVal);
        	}
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.DelSceduleDateInsertedPopupForm_onload, this);
            this.ButtonDiv.RemoveScheduleBtn.addEventHandler("onclick", this.ButtonDiv_RemoveScheduleBtn_onclick, this);
            this.ButtonDiv.cancleBtn.addEventHandler("onclick", this.ButtonDiv_cancleBtn_onclick, this);
            this.BorderDiv.MainDiv.AllCheck.addEventHandler("onclick", this.BorderDiv_MainDiv_AllCheck_onclick, this);

        };

        this.loadIncludeScript("DelSceduleDateInsertedPopupForm.xfdl");

       
    };
}
)();
