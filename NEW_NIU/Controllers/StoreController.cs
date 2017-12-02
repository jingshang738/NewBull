using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NEW_NIU.Controllers
{
    public class StoreController : Controller
    {
        //
        // GET: /Store/

        public ActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// 维修中心页面
        /// </summary>
        /// <returns></returns>
        public ActionResult Maintenance()
        {
            return View();
        }

        /// <summary>
        /// 授权店面页面
        /// </summary>
        /// <returns></returns>
        public ActionResult Authorized()
        {
            return View();
        }

    }
}
