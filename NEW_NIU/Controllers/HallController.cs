using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NEW_NIU.Models;
//using N_Admin.Models;

namespace NEW_NIU.Controllers
{
    public class HallController : Controller
    {
        //
        // GET: /Part/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ShopStore()
        {
            N_Category c = new N_Category();
            //N_Product p = new N_Product();
            ViewBag.clist = c.GetAll();
            //ViewBag.plist = p.GetAll();
            return View();
        }

    }
}
