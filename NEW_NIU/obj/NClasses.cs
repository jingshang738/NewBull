using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NEW_NIU.Models;

namespace NEW_NIU.Models
{
    public partial class N_Category
    {
        NDataContext N = new NDataContext();
        public IEnumerable<N_Category> GetAll()
        {
            return N.N_Category;
        }
    }

    public partial class N_Product
    {
        NDataContext N = new NDataContext();
        public IEnumerable<N_Product> GetAllByCate(int cid)
        {
            return N.N_Product.Where(xxx=>xxx.cid==cid);
        }

        public N_Product GetProduct(int pid)
        {
            return N.N_Product.Where(xxx => xxx.id == pid).FirstOrDefault();
        }
    }
}