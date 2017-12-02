using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace N_Admin.Models
{
    public class User
    {
        UDataContext db = new UDataContext();
        public IEnumerable<U_User> GetAll()
        {
            return db.U_User;
        }

        public void Delete(int id)
        {
            db.U_User.DeleteOnSubmit(db.U_User.Where(x => x.userid == id).FirstOrDefault());
            db.SubmitChanges();
        }

        public void Add(U_User c)
        {
            db.U_User.InsertOnSubmit(c);
            db.SubmitChanges();
        }
        public void Update(U_User c)
        {
            var result = db.U_User.Where(x => x.userid == c.userid);

            foreach (var item in result)
            {
                item.name = c.name;
                item.phone = c.phone;
            }

            db.SubmitChanges();
        }

    }
}