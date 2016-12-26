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
                this.set_name("newTypeInsertedPopupForm");
                this.set_classname("newTypeInsertedPopupForm");
                this.set_titletext("새 Type 입력창");
                this._setFormPosition(0,0,677,163);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("ButtonDiv", "absolute", "1.18%", "104", null, "46", "1.33%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("#eceff1ff");
            this.addChild(obj.name, obj);
            obj = new Button("saveBtn", "absolute", "67.88%", "8", null, "27", "18.33%", null, this.ButtonDiv);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.style.set_background("#607d8bff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Gulim");
            this.ButtonDiv.addChild(obj.name, obj);
            obj = new Button("cancleBtn", "absolute", "82.88%", "8", null, "27", "3.33%", null, this.ButtonDiv);
            obj.set_taborder("10");
            obj.set_text("취소");
            obj.style.set_background("#607d8bff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Gulim");
            this.ButtonDiv.addChild(obj.name, obj);

            obj = new Div("BorderDiv", "absolute", "1.62%", "10", null, "84", "1.48%", null, this);
            obj.set_taborder("1");
            obj.style.set_border("2 solid #90a4aeff");
            this.addChild(obj.name, obj);
            obj = new Div("MainDiv", "absolute", "1.23%", "7", null, "67", "1.23%", null, this.BorderDiv);
            obj.set_taborder("0");
            obj.style.set_background("#eceff1ff");
            this.BorderDiv.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "8", "4", "99", "25", null, null, this.BorderDiv.MainDiv);
            obj.set_taborder("0");
            obj.set_text("Type명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#90a4aeff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            this.BorderDiv.MainDiv.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "8", "36", "99", "25", null, null, this.BorderDiv.MainDiv);
            obj.set_taborder("2");
            obj.set_text("Comments");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#90a4aeff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            this.BorderDiv.MainDiv.addChild(obj.name, obj);
            obj = new Edit("CommentsEd", "absolute", "117", "36", "508", "25", null, null, this.BorderDiv.MainDiv);
            obj.set_taborder("3");
            this.BorderDiv.MainDiv.addChild(obj.name, obj);
            obj = new Edit("TypeNameEd", "absolute", "117", "4", "508", "25", null, null, this.BorderDiv.MainDiv);
            obj.set_taborder("4");
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
            obj = new Layout("default", "", 0, 67, this.BorderDiv.MainDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.BorderDiv.MainDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 84, this.BorderDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_border("2 solid #90a4aeff");

            	}
            );
            this.BorderDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 677, 163, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("newTypeInsertedPopupForm");
            		p.set_titletext("새 Type 입력창");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("newTypeInsertedPopupForm.xfdl", function() {

        //저장버튼 클릭시
        this.ButtonDiv_saveBtn_onclick = function(obj,e)
        {	
        	var typeName=this.BorderDiv.MainDiv.TypeNameEd.value;
        	var comments=this.BorderDiv.MainDiv.CommentsEd.value;
        	var rRtn=new Array(2);
        	rRtn[0]=typeName;
        	rRtn[1]=comments;
        	this.close(rRtn.join("blank"));  
        }
        //취소버튼 클릭시
        this.ButtonDiv_cancleBtn_onclick = function(obj,e)
        {
        	this.close("cancle");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ButtonDiv.saveBtn.addEventHandler("onclick", this.ButtonDiv_saveBtn_onclick, this);
            this.ButtonDiv.cancleBtn.addEventHandler("onclick", this.ButtonDiv_cancleBtn_onclick, this);

        };

        this.loadIncludeScript("newTypeInsertedPopupForm.xfdl");

       
    };
}
)();
