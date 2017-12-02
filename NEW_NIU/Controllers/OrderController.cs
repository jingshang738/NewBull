using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NEW_NIU.Controllers
{
    public class OrderController : Controller
    {
        //
        // GET: /Order/

        public ActionResult Confirm()
        {
            return View();
        }

        public ActionResult OrderMy()
        {
            return View();
        }

        public ActionResult Pay(long? id=2019003815537236)
        {
            return View();
        }

        public ActionResult Protocal()
        {

            return View();
        }

    }
}
