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
                this.set_name("RegiSceduleDateInsertedPopupForm");
                this.set_classname("SceduleDateInsertedPopupForm");
                this.set_titletext("일정등록창");
                this._setFormPosition(0,0,611,160);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("ButtonDiv", "absolute", "1.47%", "95", null, "46", "2.29%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("#eceff1ff");
            this.addChild(obj.name, obj);
            obj = new Button("registerScheduleBtn", "absolute", "67.86%", "8", null, "27", "18.37%", null, this.ButtonDiv);
            obj.set_taborder("11");
            obj.set_text("등록");
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

            obj = new Div("BorderDiv", "absolute", "1.64%", "16", null, "67", "2.29%", null, this);
            obj.set_taborder("1");
            obj.style.set_border("2 solid #90a4aeff");
            this.addChild(obj.name, obj);
            obj = new Div("MainDiv", "absolute", "1.2%", "7", null, "43", "3.43%", null, this.BorderDiv);
            obj.set_taborder("0");
            obj.style.set_background("#eceff1ff");
            this.BorderDiv.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "16", "6", "131", "28", null, null, this.BorderDiv.MainDiv);
            obj.set_taborder("5");
            obj.set_text("적용할 기간");
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
            obj = new Calendar("FromDateCalendar", "absolute", "30.76%", "7", null, "27", "38.85%", null, this.BorderDiv.MainDiv);
            this.BorderDiv.MainDiv.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_editformat("yyyyMMdd");
            obj.style.set_popuptype("center");
            obj = new Calendar("ToDateCalendar", "absolute", "66.19%", "8", null, "27", "3.42%", null, this.BorderDiv.MainDiv);
            this.BorderDiv.MainDiv.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_editformat("yyyyMMdd");
            obj.style.set_popuptype("center");


            
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
            obj = new Layout("default", "", 0, 43, this.BorderDiv.MainDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.BorderDiv.MainDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 67, this.BorderDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_border("2 solid #90a4aeff");

            	}
            );
            this.BorderDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 611, 160, this,
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
        this.registerScript("RegiSceduleDateInsertedPopupForm.xfdl", function() {
        this.ButtonDiv_registerScheduleBtn_onclick = function(obj,e)
        {
        	var sFromDate=this.BorderDiv.MainDiv.FromDateCalendar.value;
        	var sToDate=this.BorderDiv.MainDiv.ToDateCalendar.value;
        	var buffer=new Array();
        	buffer.push(sFromDate);
        	buffer.push(sToDate);
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
            this.ButtonDiv.registerScheduleBtn.addEventHandler("onclick", this.ButtonDiv_registerScheduleBtn_onclick, this);
            this.ButtonDiv.cancleBtn.addEventHandler("onclick", this.ButtonDiv_cancleBtn_onclick, this);

        };

        this.loadIncludeScript("RegiSceduleDateInsertedPopupForm.xfdl");

       
    };
}
)();
