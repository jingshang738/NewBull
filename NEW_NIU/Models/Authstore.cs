using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Aliyun.OSS;
namespace N_Admin.Models
{
    public class Authstore
    {

        SDataContext nc = new SDataContext();
        public IEnumerable<S_Authstore> LookAuthstore()
        {
            //return from o in nc.S_Authstore

                   
            //       select new S_Authstore
            //       {
            //           id = o.id,
            //           asAddr = o.asAddr,
            //           businesserName = o.businesserName,

            //           businessHours = o.businessHours,
            //           email = o.email,
            //           tel1 = o.tel1,
            //           tel2 = o.tel2,
            //           introImg = o.introImg,
            //           ownerName = o.ownerName,
            //           storeName = o.storeName

            //       };
            return nc.S_Authstore;
        }

        public IEnumerable<S_Authstore> GetAll()
            {
                var result = from admin in nc.S_Authstore
                             orderby admin.id descending
                             select admin;

                return result;
            }

            public void Delete(int id)
            {
                nc.S_Authstore.DeleteOnSubmit(nc.S_Authstore.Where(x => x.id == id).FirstOrDefault());

                nc.SubmitChanges();
            }

            public void Add(S_Authstore admin)
            {
                nc.S_Authstore.InsertOnSubmit(admin);
                nc.SubmitChanges();
            }

            public void Update(S_Authstore admin)
            {
                var result = from a in nc.S_Authstore
                             where a.id == admin.id
                             select a;

                foreach (var item in result)
                {
                    
                     item.id = admin.id;
                       item.asAddr = admin.asAddr;
                       item.businesserName = admin.businesserName;

                       item.businessHours = admin.businessHours;
                       item.email = admin.email;
                       item.tel1 = admin.tel1;
                       item.tel2 = admin.tel2;
                       item.introImg = admin.introImg;
                       item.ownerName = admin.ownerName;
                       item.storeName = admin.storeName;
                }

                nc.SubmitChanges();
            }
        }


    
}