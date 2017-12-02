using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NEW_NIU.Controllers
{
    public class ServiceController : Controller
    {
        //
        // GET: /NewCare/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Niucover()
        {
            return View();
        }
        public ActionResult Niucare()
        {
            return View();
        }

    }
}
