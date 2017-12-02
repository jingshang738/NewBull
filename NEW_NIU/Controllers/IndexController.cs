using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
//using NEW_NIU.Models;
using System.Web.Security;

namespace NEW_NIU.Controllers
{
    public class IndexController : Controller
    {
        //
        // GET: /Index/

        public ActionResult Index()
        {

            return View();
        }

        public ActionResult Login()
        {

            return View();
        }
        public ActionResult SignUp()
        {
            return View();
        }

        //public ActionResult CheckUser(string email, string name, string phone, string ReturnUrl, bool? RememberLogin = false)
        //{
        //    string userid = Common.userid();

        //    string uid;

        //    if (new U_User().CheckUser(email, phone, out userid))
        //    {
        //        FormsAuthentication.SetAuthCookie(userid, RememberLogin.Value);

        //        if (ReturnUrl == null)
        //        {
        //            return RedirectToAction("Login", "Index");
        //        }
        //        else
        //        {
        //            return Redirect(ReturnUrl);
        //        }
        //    }
        //    else
        //    {
        //        return RedirectToAction("Login", new { msg = "登录失败" });
        //    }
        //}
        public ActionResult SignOut()
        {
            FormsAuthentication.SignOut();
            return RedirectToAction("Login", "Index");
        }
    }
}
