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
                this.set_name("AddDetailSchedulePopupForm");
                this.set_classname("SceduleDateInsertedPopupForm");
                this.set_titletext("일정등록창");
                this._setFormPosition(0,0,399,256);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("ButtonDiv", "absolute", "1.47%", "191", null, "46", "2.29%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("#eceff1ff");
            this.addChild(obj.name, obj);
            obj = new Button("ConfirmScheduleBtn", "absolute", "55.73%", "8", null, "27", "25.78%", null, this.ButtonDiv);
            obj.set_taborder("11");
            obj.set_text("확인");
            obj.style.set_background("#607d8bff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Gulim");
            this.ButtonDiv.addChild(obj.name, obj);
            obj = new Button("cancleBtn", "absolute", "76.04%", "8", null, "27", "5.47%", null, this.ButtonDiv);
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
            obj = new Static("Static01", "absolute", "16", "58", "86", "28", null, null, this.BorderDiv.MainDiv);
            obj.set_taborder("5");
            obj.set_text("진료시간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#90a4aeff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            this.BorderDiv.MainDiv.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "16", "105", "86", "28", null, null, this.BorderDiv.MainDiv);
            obj.set_taborder("12");
            obj.set_text("타과예약");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#90a4aeff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            this.BorderDiv.MainDiv.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "16", "13", "86", "28", null, null, this.BorderDiv.MainDiv);
            obj.set_taborder("13");
            obj.set_text("오전/오후");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#90a4aeff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            this.BorderDiv.MainDiv.addChild(obj.name, obj);
            obj = new Radio("AmPmFlagRadio", "absolute", "30.47%", "14", null, "27", "31.58%", null, this.BorderDiv.MainDiv);
            this.BorderDiv.MainDiv.addChild(obj.name, obj);
            var AmPmFlagRadio_innerdataset = new Dataset("AmPmFlagRadio_innerdataset", this.BorderDiv.MainDiv.AmPmFlagRadio);
            AmPmFlagRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">오전</Col></Row><Row><Col id=\"codecolumn\">P</Col><Col id=\"datacolumn\">오후</Col></Row></Rows>");
            obj.set_innerdataset(AmPmFlagRadio_innerdataset);
            obj.set_taborder("14");
            obj.style.set_itempadding("0 0 0 10");
            obj.style.set_border("1 solid #90a4aeff");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_value("All");
            obj = new CheckBox("RsvYnCheck", "absolute", "30.47%", "106", null, "26", "32.96%", null, this.BorderDiv.MainDiv);
            obj.set_taborder("15");
            obj.set_text("타과예약가능");
            obj.style.set_border("1 none #90a4aeff");
            obj.style.set_padding("0 0 0 5");
            this.BorderDiv.MainDiv.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "192", "58", "86", "28", null, null, this.BorderDiv.MainDiv);
            obj.set_taborder("16");
            obj.set_text("예약총원");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#90a4aeff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            this.BorderDiv.MainDiv.addChild(obj.name, obj);
            obj = new MaskEdit("ExamTmMaskEd", "absolute", "29.64%", "59", null, "27", "50.14%", null, this.BorderDiv.MainDiv);
            obj.set_taborder("17");
            obj.set_type("string");
            obj.set_mask("##:##");
            obj.style.set_align("center middle");
            this.BorderDiv.MainDiv.addChild(obj.name, obj);
            obj = new Edit("TotCntEd", "absolute", "78.39%", "58", null, "28", "5.26%", null, this.BorderDiv.MainDiv);
            obj.set_taborder("18");
            this.BorderDiv.MainDiv.addChild(obj.name, obj);


            
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
            obj = new Layout("default", "", 399, 256, this,
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
        this.registerScript("AddDetailSchedulePopupForm.xfdl", function() {
        //sParam = {P_MPARA1:this.dsDtlPm.getColumn(this.dsDtlPm.rowposition,"examTm"),
        //	           P_MPARA2:dsDtlPM.GetColumn(this.dsDtlPm.rowposition,"totCnt"),
        //	           P_MPARA3:sAMPMFLAG, 
        //	           P_MPARA4:sRsvyn};
        this.AddDetailSchedulePopupForm_onload = function(obj,e)
        {
        	//sParam값 세팅하기
        	this.BorderDiv.MainDiv.AmPmFlagRadio.set_value(this.parent.P_MPARA3);
        	this.BorderDiv.MainDiv.ExamTmMaskEd.set_value(this.parent.P_MPARA1)
        	this.BorderDiv.MainDiv.TotCntEd.set_value(this.parent.P_MPARA2);
        	this.BorderDiv.MainDiv.RsvYnCheck.set_value(this.parent.P_MPARA4);
        }

        this.ButtonDiv_ConfirmScheduleBtn_onclick = function(obj,e)
        {
        	var buffer=new Array();
        	//varRet []: examTm, totCnt, amPmFlag, rsvYn
        	buffer.push(this.BorderDiv.MainDiv.ExamTmMaskEd.value);//진료시간
        	buffer.push(this.BorderDiv.MainDiv.TotCntEd.value);//총원
        	buffer.push(this.BorderDiv.MainDiv.AmPmFlagRadio.value);//오전오후구분
        	buffer.push(this.BorderDiv.MainDiv.RsvYnCheck.value);//타과예약가능여부
        	this.close(buffer.join("blank"));
        }

        this.ButtonDiv_cancleBtn_onclick = function(obj,e)
        {
        	this.close("cancle");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.AddDetailSchedulePopupForm_onload, this);
            this.ButtonDiv.ConfirmScheduleBtn.addEventHandler("onclick", this.ButtonDiv_ConfirmScheduleBtn_onclick, this);
            this.ButtonDiv.cancleBtn.addEventHandler("onclick", this.ButtonDiv_cancleBtn_onclick, this);

        };

        this.loadIncludeScript("AddDetailSchedulePopupForm.xfdl");

       
    };
}
)();
