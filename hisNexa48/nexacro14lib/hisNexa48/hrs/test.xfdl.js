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
                this.set_name("test");
                this.set_classname("test");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("gdsEmp", this);
            obj._setContents("<ColumnInfo><Column id=\"payDate\" type=\"STRING\" size=\"256\"/><Column id=\"zipCd\" type=\"STRING\" size=\"256\"/><Column id=\"workStatus\" type=\"STRING\" size=\"256\"/><Column id=\"workPeriod\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"rrn\" type=\"STRING\" size=\"256\"/><Column id=\"retMonthWorkingdays\" type=\"STRING\" size=\"256\"/><Column id=\"retDate\" type=\"STRING\" size=\"256\"/><Column id=\"pms\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"permaddr\" type=\"STRING\" size=\"256\"/><Column id=\"payStep\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"natnt\" type=\"STRING\" size=\"256\"/><Column id=\"mateYn\" type=\"STRING\" size=\"256\"/><Column id=\"localYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobtt\" type=\"STRING\" size=\"256\"/><Column id=\"jobrk\" type=\"STRING\" size=\"256\"/><Column id=\"jobcl\" type=\"STRING\" size=\"256\"/><Column id=\"image\" type=\"STRING\" size=\"256\"/><Column id=\"hireDiv\" type=\"STRING\" size=\"256\"/><Column id=\"hireDate\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"frignSingleTxrate\" type=\"STRING\" size=\"256\"/><Column id=\"forinNum\" type=\"STRING\" size=\"256\"/><Column id=\"fax\" type=\"STRING\" size=\"256\"/><Column id=\"extsn\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"birthday\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"detailAddr\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"bankNm\" type=\"STRING\" size=\"256\"/><Column id=\"accountNm\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/><Column id=\"lunar\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "22.66%", "88", null, "90", "57.71%", null, this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "12.79%", "212", null, "61", "75.49%", null, this);
            obj.set_taborder("1");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "48.14%", "105", null, "124", "34.86%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");

            obj = new Grid("Grid00", "absolute", "28.91%", "249", null, "226", "32.52%", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("gdsEmp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"payDate\"/><Cell col=\"1\" disptype=\"normal\" text=\"zipCd\"/><Cell col=\"2\" disptype=\"normal\" text=\"workStatus\"/><Cell col=\"3\" disptype=\"normal\" text=\"workPeriod\"/><Cell col=\"4\" disptype=\"normal\" text=\"tel\"/><Cell col=\"5\" disptype=\"normal\" text=\"rrn\"/><Cell col=\"6\" disptype=\"normal\" text=\"retMonthWorkingdays\"/><Cell col=\"7\" disptype=\"normal\" text=\"retDate\"/><Cell col=\"8\" disptype=\"normal\" text=\"pms\"/><Cell col=\"9\" disptype=\"normal\" text=\"phone\"/><Cell col=\"10\" disptype=\"normal\" text=\"permaddr\"/><Cell col=\"11\" disptype=\"normal\" text=\"payStep\"/><Cell col=\"12\" disptype=\"normal\" text=\"password\"/><Cell col=\"13\" disptype=\"normal\" text=\"natnt\"/><Cell col=\"14\" disptype=\"normal\" text=\"mateYn\"/><Cell col=\"15\" disptype=\"normal\" text=\"localYn\"/><Cell col=\"16\" disptype=\"normal\" text=\"jobtt\"/><Cell col=\"17\" disptype=\"normal\" text=\"jobrk\"/><Cell col=\"18\" disptype=\"normal\" text=\"jobcl\"/><Cell col=\"19\" disptype=\"normal\" text=\"image\"/><Cell col=\"20\" disptype=\"normal\" text=\"hireDiv\"/><Cell col=\"21\" disptype=\"normal\" text=\"hireDate\"/><Cell col=\"22\" disptype=\"normal\" text=\"gender\"/><Cell col=\"23\" disptype=\"normal\" text=\"frignSingleTxrate\"/><Cell col=\"24\" disptype=\"normal\" text=\"forinNum\"/><Cell col=\"25\" disptype=\"normal\" text=\"fax\"/><Cell col=\"26\" disptype=\"normal\" text=\"extsn\"/><Cell col=\"27\" disptype=\"normal\" text=\"empNo\"/><Cell col=\"28\" disptype=\"normal\" text=\"empNm\"/><Cell col=\"29\" disptype=\"normal\" text=\"deptCd\"/><Cell col=\"30\" disptype=\"normal\" text=\"birthday\"/><Cell col=\"31\" disptype=\"normal\" text=\"addr\"/><Cell col=\"32\" disptype=\"normal\" text=\"detailAddr\"/><Cell col=\"33\" disptype=\"normal\" text=\"email\"/><Cell col=\"34\" disptype=\"normal\" text=\"deptNm\"/><Cell col=\"35\" disptype=\"normal\" text=\"bankNm\"/><Cell col=\"36\" disptype=\"normal\" text=\"accountNm\"/><Cell col=\"37\" disptype=\"normal\" text=\"sts\"/><Cell col=\"38\" disptype=\"normal\" text=\"lunar\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:payDate\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:zipCd\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:workStatus\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:workPeriod\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:tel\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:rrn\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:retMonthWorkingdays\"/><Cell col=\"7\" disptype=\"normal\" text=\"bind:retDate\"/><Cell col=\"8\" disptype=\"normal\" text=\"bind:pms\"/><Cell col=\"9\" disptype=\"normal\" text=\"bind:phone\"/><Cell col=\"10\" disptype=\"normal\" text=\"bind:permaddr\"/><Cell col=\"11\" disptype=\"normal\" text=\"bind:payStep\"/><Cell col=\"12\" disptype=\"normal\" text=\"bind:password\"/><Cell col=\"13\" disptype=\"normal\" text=\"bind:natnt\"/><Cell col=\"14\" disptype=\"normal\" text=\"bind:mateYn\"/><Cell col=\"15\" disptype=\"normal\" text=\"bind:localYn\"/><Cell col=\"16\" disptype=\"normal\" text=\"bind:jobtt\"/><Cell col=\"17\" disptype=\"normal\" text=\"bind:jobrk\"/><Cell col=\"18\" disptype=\"normal\" text=\"bind:jobcl\"/><Cell col=\"19\" disptype=\"normal\" text=\"bind:image\"/><Cell col=\"20\" disptype=\"normal\" text=\"bind:hireDiv\"/><Cell col=\"21\" disptype=\"normal\" text=\"bind:hireDate\"/><Cell col=\"22\" disptype=\"normal\" text=\"bind:gender\"/><Cell col=\"23\" disptype=\"normal\" text=\"bind:frignSingleTxrate\"/><Cell col=\"24\" disptype=\"normal\" text=\"bind:forinNum\"/><Cell col=\"25\" disptype=\"normal\" text=\"bind:fax\"/><Cell col=\"26\" disptype=\"normal\" text=\"bind:extsn\"/><Cell col=\"27\" disptype=\"normal\" text=\"bind:empNo\"/><Cell col=\"28\" disptype=\"normal\" text=\"bind:empNm\"/><Cell col=\"29\" disptype=\"normal\" text=\"bind:deptCd\"/><Cell col=\"30\" disptype=\"normal\" text=\"bind:birthday\"/><Cell col=\"31\" disptype=\"normal\" text=\"bind:addr\"/><Cell col=\"32\" disptype=\"normal\" text=\"bind:detailAddr\"/><Cell col=\"33\" disptype=\"normal\" text=\"bind:email\"/><Cell col=\"34\" disptype=\"normal\" text=\"bind:deptNm\"/><Cell col=\"35\" disptype=\"normal\" text=\"bind:bankNm\"/><Cell col=\"36\" disptype=\"normal\" text=\"bind:accountNm\"/><Cell col=\"37\" disptype=\"normal\" text=\"bind:sts\"/><Cell col=\"38\" disptype=\"normal\" text=\"bind:lunar\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("test");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("test.xfdl", function() {
        this.Button00_onclick = function(obj,e)
        {
            alert(Eco.XComp.typeOf(obj));
        }
        this.Calendar00_oneditclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.gdsEmp.addEventHandler("onrowposchanged", this.dsHmEmp_onrowposchanged, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Calendar00.addEventHandler("oneditclick", this.Calendar00_oneditclick, this);

        };

        this.loadIncludeScript("test.xfdl");

       
    };
}
)();
