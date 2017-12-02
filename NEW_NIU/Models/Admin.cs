using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using N_HOUTAI.Models;


namespace N_HOUTAI.Models
{
    public class Admin
    {
        HDataContext nc = new HDataContext();
        public bool CheckUser(string email,string password, out int id)
        {
           
            var result = from admin in nc.H_Admin
                         where admin.email == email && admin.Password == password
                         select admin;

            if (result.Count() > 0)
            {
                id = result.First().Id;
                return true;
            }
            else
            {
                id = 0;
                return false;
            }
        }

        public IEnumerable<H_Admin>GetAll()
        {
            var result = from admin in nc.H_Admin
                         orderby admin.Id descending
                         select admin;

            return result;
        }

        public void Delete(int id)
        {
            nc.H_Admin.DeleteOnSubmit(nc.H_Admin.Where(x => x.Id == id).FirstOrDefault());

            nc.SubmitChanges();
        }

        public void Add(H_Admin admin)
        {
            nc.H_Admin.InsertOnSubmit(admin);
            nc.SubmitChanges();
        }

        public void Update(H_Admin admin)
        {
            var result = from a in nc.H_Admin
                         where a.Id == admin.Id
                         select a;

            foreach (var item in result)
            {
                item.Username = admin.Username;
                item.Password = admin.Password;
                item.CreateDate = admin.CreateDate;
                item.email = admin.email;
                item.privelege = admin.privelege;
            }

            nc.SubmitChanges();
        }
    }
}