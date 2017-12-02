using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NEW_NIU.Controllers
{
    public class StudyController : Controller
    {
        //
        // GET: /Study/

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
         [ValidateInput(false)]
        public ActionResult TestCk(FormCollection fc)
        {
            var content = fc["editor"];
            return View();
        } 
        //注意：  [ValidateInput(false)]这是解决一直报安全问题的办法

        public ActionResult TestCk()
        {
            return View();
        }
        public ActionResult Nav()
        {
            return View();
        }

        public ActionResult Footer()
        {
            return View();
        }

        public ActionResult TestRender()
        {
            return View();
        }

        public ActionResult ShopStore()
        {
            return View();
        }

       

        public ActionResult OrderMy()
        {
            return View();
        }

        public ActionResult BuyU1() 
        {
            return View();
        }

        public ActionResult Cart()
        {
            return View();
        }

        public ActionResult Confirm()
        {
            return View();
        }

      
        public ActionResult UlTech()
        {
            return View();
        }


        public ActionResult USeries1()
        {
            return View();
        }
        public ActionResult USeries2()
        {
            return View();
        }
        public ActionResult Accessories1()
        {
            return View();
        }
        public ActionResult Accessories2()
        {
            return View();
        }
        public ActionResult NSeries1()
        {
            return View();
        }
        public ActionResult NSeries2()
        {
            return View();
        }

        public ActionResult Arrivals3()
        {
            return View();
        }
        public ActionResult Arrivals4()
        {
            return View();
        }
        public ActionResult Arrivals14()
        {
            return View();
        }

        public ActionResult Detail()
        {
            return View();
        }
    }
}
