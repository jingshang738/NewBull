using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace N_Admin.Models
{
    public class ProductModel
    {
        public int id { get; set; }
        public string name { get; set; }
        public int?  count { get; set; }
        public string categoryname { get; set; }
        public int storeCoverPrice { get; set; }
        public string storeCoverPic { get; set; }

        public int? Quantity { get; set; }
        public DateTime createDate { get; set; }
        public bool? state { get; set; }
       


    }
}