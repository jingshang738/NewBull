using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace N_Admin.Models
{
    public partial class Categor
    {

        NDataContext db = new NDataContext();


        public N_Category LookCategory(int id)
        {
            return db.N_Category.Where(x => x.id==id).FirstOrDefault();                
        }





        public IEnumerable<N_Category> GetAll()
        {
            return db.N_Category;
        }

        public void Delete(int id)
        {
            db.N_Category.DeleteOnSubmit(db.N_Category.Where(x => x.id == id).FirstOrDefault());
            db.SubmitChanges();
        }

        public void Add(N_Category c)
        {
            db.N_Category.InsertOnSubmit(c);
            db.SubmitChanges();
        }
        public void Update(N_Category c)
        {
            var result = db.N_Category.Where(x => x.id == c.id);

            foreach (var item in result)
            {
                item.id = c.id;
                item.enName = c.enName;
                item.chName = c.chName;
                item.rank = c.rank;
            }

            db.SubmitChanges();
        }
    }
}