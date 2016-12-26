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
                this.set_name("AR_ResolBrCauPopupForm");
                this.set_classname("AR_ResolBrCauPopupForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,631,143);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "-1.9%", "-4", null, "60", "3.65%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "8.11%", "-4", null, "60", "54.06%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("결의서 반려 사유");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "1.9%", "45", null, "83", "1.11%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#edececff");
            this.addChild(obj.name, obj);
            obj = new Edit("resolBrEd", "absolute", "18.95%", "6", null, "37", "3.59%", null, this.Div01);
            obj.set_taborder("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("subCodeStc", "absolute", "3.17%", "51", null, "37", "82.09%", null, this);
            obj.set_taborder("2");
            obj.set_text("반려사유");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Button("resolBrBtn", "absolute", "70.52%", "94", null, "26", "17.59%", null, this);
            obj.set_taborder("3");
            obj.style.set_background("@gradation URL('img::returnBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("closedBtn", "absolute", "85.9%", "94", null, "26", "3.65%", null, this);
            obj.set_taborder("4");
            obj.style.set_background("@gradation URL('img::closeBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 83, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#edececff");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 631, 143, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AR_ResolBrCauPopupForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.subCodeStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolBrBtn.addEventHandler("onclick", this.resolBrBtn_onclick, this);
            this.closedBtn.addEventHandler("onclick", this.closedBtn_onclick, this);

        };

        this.loadIncludeScript("AR_ResolBrCauPopupForm.xfdl");

       
    };
}
)();
