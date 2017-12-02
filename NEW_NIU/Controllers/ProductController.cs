using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using N_Admin.Models;

namespace NEW_NIU.Controllers
{
    public class ProductController : Controller
    {
        //
        // GET: /Product/

        public ActionResult Detail(int? id=91)
        {
           // N_Product p = new N_Product();
            ViewBag.id = id.Value;
            return View();
        }

    }
}
